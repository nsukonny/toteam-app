//types
import type {Metadata} from "next";
// libs
import { Toaster } from 'react-hot-toast';
// components
import AutoRefreshClient from './components/common/AutoRefreshClient/AutoRefreshClient';
//styles
import '../scss/main.scss'

export const metadata: Metadata = {
	title: "ToTeam",
	description: "Добро Пожаловать в ToTeam",
	robots: {
		index: false
	}
};

export default function RootLayout({children,}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
		<body>
		<AutoRefreshClient />
		<Toaster
			position="top-right"
			toastOptions={{
				style: {
					background: '#09101D',
					color: '#fff',
					fontFamily: 'Montserrat, Open Sans, sans-serif',
					borderRadius: '10px',
					fontSize: '16px',
					boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
					padding: '14px 20px',
				},
				success: {
					style: {
						background: '#2E5AAC',
						color: '#fff',
					},
					iconTheme: {
						primary: '#fff',
						secondary: '#2E5AAC',
					},
				},
				error: {
					style: {
						background: '#E1604D',
						color: '#fff',
					},
					iconTheme: {
						primary: '#fff',
						secondary: '#E1604D',
					}
				}
			}}
		/>
		{children}
		</body>
		</html>
	);
}