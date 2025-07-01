// next
import Image from "next/image";
// styles
import styles from './Button.module.scss'

interface ButtonProps {
	size: "small" | "medium" | "large";
	color: "primary" | "secondary" | "black";
	text: string;
	imagePath?: string;
	fullWidth?: boolean;
	fullWidthMob?: boolean;
	type: "button" | "submit" | "reset";
	onClick?: () => void;
}

const Button = ({
									size, color, text, imagePath, fullWidthMob, fullWidth, type="button", onClick
}: ButtonProps) => {
	return (
		<button className={
			`${styles.button} ${styles[size]} ${styles[color]} 
			 ${fullWidthMob && styles.fullWidthMob} 
			 ${fullWidth && styles.fullWidth} ${imagePath}`
		} type={type} onClick={onClick}>
			{imagePath && <Image src={imagePath} alt={text}/>}
			<span>{text}</span>
		</button>
	)
}

export default Button;