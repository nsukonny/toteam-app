// next
import Link from "next/link";
// styles
import styles from './Footer.module.scss';

const footerNav = [
	{"text": "Feedback", "href": "/feedback"},
	{"text": "Помощь", "href": "/faq"},
]

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerWrapper}>
				<div className={styles.footerBottom}>
					<nav aria-label="Футер навигация">
						<ul>
							{footerNav.map((item) => (
								<li key={item.href}>
									<Link href={item.href}>
										{item.text}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<div className={styles.copyright}>
						©{new Date().getFullYear()} Toteam
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;