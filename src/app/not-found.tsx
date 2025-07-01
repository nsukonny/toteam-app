// next
import { Metadata } from 'next';
// components
import NotFoundClient from "@/app/components/pages/NotFoundClient/NotFoundClient";

export const metadata: Metadata = {
	title: 'ToTeam | 404',
	robots: 'noindex, nofollow',
};

export default async function NotFoundPage() {
	return (
		<main>
			<NotFoundClient />
		</main>
	);
}