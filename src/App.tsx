import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import BrandPanel from './components/BrandPanel';
import LoginForm from './components/LoginForm';
import WelcomeScreen from './components/WelcomeScreen';
import Footer from './components/Footer';
import { getMe, readToken, clearToken, type User } from './api/auth';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [checking, setChecking] = useState(true);

  // Stay logged in on refresh: if a token exists, ask the API who it is.
  useEffect(() => {
    const token = readToken();
    if (!token) {
      setChecking(false);
      return;
    }
    getMe(token)
      .then((u) => {
        if (u) setUser(u); // 200: show the Welcome screen
        else clearToken(); // 401: delete the token, show the login form
      })
      .catch(() => clearToken())
      .finally(() => setChecking(false));
  }, []);

  function handleLogout() {
    clearToken(); // no API call needed: the API is stateless
    setUser(null);
  }

  return (
    <div className="page">
      <Navbar />
      <main className="container">
        {checking ? (
          <p>Loading...</p>
        ) : user ? (
          <WelcomeScreen user={user} onLogout={handleLogout} />
        ) : (
          <div className="login-layout">
            <BrandPanel />
            <LoginForm onLoginSuccess={setUser} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}