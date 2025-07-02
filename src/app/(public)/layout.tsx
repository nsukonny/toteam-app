// components
import Footer from "@/app/components/common/Footer/Footer";

export default function PublicLayout({children,}: {
	children: React.ReactNode;
}) {
	return (
		<div className="wrapper">
			<main>{children}</main>
			<Footer />
		</div>
	);
}