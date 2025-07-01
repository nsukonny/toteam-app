//types
import type {Metadata} from "next";
//styles
import '../scss/main.scss'

export const metadata: Metadata = {
	title: "ToTeam",
	description: "Добро Пожаловать в ToTeam",
};

export default function RootLayout({children,}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
		<body>
		<div className="wrapper">
			{children}
		</div>
		</body>
		</html>
	);
}