// next
import type { Metadata } from 'next';
// components
import RegisterClient from "@/app/components/pages/auth/RegisterClient/RegisterClient";

export const metadata: Metadata = {
	title: "ToTeam | Регистрация",
	description: "Регистрация"
};

export default function RegisterPage() {
	return <RegisterClient />;
}