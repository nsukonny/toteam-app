// next
import type { Metadata } from 'next';
// components
import LoginClient from "@/app/components/pages/auth/LoginClient/LoginClient";

export const metadata: Metadata = {
	title: "ToTeam | Вход",
	description: "Авторизуйтесь через социальные сети"
};

export default function LoginPage() {
	return  <LoginClient />;
}