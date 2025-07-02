import styles from './Message.module.scss';
import {PiWarningCircleFill} from "react-icons/pi";

export type MessageType = 'success' | 'error' | 'warn' | 'info';

interface MessageProps {
	message: string;
	type?: MessageType;
	className?: string;
}

const Message = ({message, type = 'info', className}: MessageProps) => {
	return (
		<div className={[
			styles.message,
			styles[type],
			className
		].filter(Boolean).join(' ')}>
			<PiWarningCircleFill/>
			{message}
		</div>
	);
};

export default Message; 