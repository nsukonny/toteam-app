export type RegisterDto = {
  full_name: string;
  email: string;
  username: string;
  password: string;
  password_confirm: string;
  agree: boolean;
};

export type LoginDto = {
  login: string;
  password: string;
};

export type AuthResponse = {
  access_token?: string;
  expires_in?: number;
  user_id: number;
  message?: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4500/api/v1';

export async function register(data: RegisterDto): Promise<AuthResponse> {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || 'Ошибка регистрации');
  return json;
}

export async function login(data: LoginDto): Promise<AuthResponse> {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || 'Ошибка входа');
  return json;
}

export async function refresh(): Promise<{ access_token: string }> {
  const res = await fetch(`${API_URL}/auth/refresh`, {
    method: 'POST',
    credentials: 'include',
  });
  if (!res.ok) throw new Error((await res.json()).error || 'Refresh failed');
  return res.json();
}

export async function logout(): Promise<void> {
  const res = await fetch(`${API_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });
  if (!res.ok) throw new Error((await res.json()).error || 'Logout failed');
} 