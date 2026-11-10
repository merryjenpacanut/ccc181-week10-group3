import type { User } from '../api/auth';

type Props = { user: User; onLogout: () => void };

export default function WelcomeScreen({ user, onLogout }: Props) {
  return (
    <section className="welcome">
      <h2 className="welcome__title">Welcome, {user.name}</h2>
      <p className="welcome__email">{user.email}</p>
      <button type="button" className="welcome__logout" onClick={onLogout}>
        Log out
      </button>
    </section>
  );
}