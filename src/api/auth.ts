const API_URL = import.meta.env.VITE_API_URL;
const TOKEN_KEY = "campusconnect_token";

export type User = { id: number; name: string; email: string };

export type LoginResult =
  | { ok: true; token: string; user: User }
  | { ok: false; message: string };

export async function login(email: string, password: string): Promise<LoginResult> {
  try {
    const response = await fetch(`${API_URL}/sessions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      return { ok: true, token: data.token, user: data.user };
    }
    if (response.status === 400 || response.status === 401) {
      return { ok: false, message: "Wrong email or password." };
    }
    return { ok: false, message: "Something went wrong on our side. Please try again later." };
  } catch {
    return { ok: false, message: "Cannot reach the server. Please try again." };
  }
}

// Returns the user on 200, null on 401. Throws on anything else.
export async function getMe(token: string): Promise<User | null> {
  const response = await fetch(`${API_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (response.status === 401) return null;
  if (!response.ok) throw new Error("Server error");
  return await response.json();
}

export const saveToken = (t: string) => sessionStorage.setItem(TOKEN_KEY, t);
export const readToken = () => sessionStorage.getItem(TOKEN_KEY);
export const clearToken = () => sessionStorage.removeItem(TOKEN_KEY);
