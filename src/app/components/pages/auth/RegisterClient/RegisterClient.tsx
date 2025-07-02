'use client';

// react
import { useState } from 'react';
// next
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// hooks
import useIsMobile from "@/app/hooks/useIsMobile";
import { useToast } from '@/app/hooks/useToast';
// api
import { register } from '@/app/api/auth';
// components
import SectionContainer from "@/app/components/common/SectionContainer/SectionContainer";
import Button from "@/app/components/buttons/Button/Button";
// styles
import styles from '../Auth.module.scss'

const RegisterClient = () => {
	const isMobile = useIsMobile(992)
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [agree, setAgree] = useState(false);
	const router = useRouter();
	const toast = useToast();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await register({ full_name: fullName, email, username, password, password_confirm: passwordConfirm, agree });
			router.push('/');
		} catch (err) {
			let msg = 'Ошибка регистрации';
			if (typeof err === 'string') msg = err;
			else if (err && typeof err === 'object' && 'message' in err && typeof err.message === 'string') msg = err.message;
			toast.error(msg);
		}
	};

	return (
		<section className={styles.register}>
			<SectionContainer>
				<div className={styles.registerWrapper}>
					<div className={styles.logo}>
						<Image src="/images/logo.svg" width={145} height={30} alt="Логотип ТуТим"/>
					</div>
					<div className={styles.registerInner}>
						{!isMobile && (
							<div className={styles.registerInfo}>
								<h1>Найдите команду в ToTeam</h1>
								<p>
									Собирайте команду для создания проекта,
									присоединяйтесь к одной из команд для совместного творчества, находите тиммейтов для командной игры,
									подбирайте партнеров для ведения канала
								</p>
								<Link className={styles.register} href="/login">Войти</Link>
							</div>
						)}
						<div className={styles.registerForm}>
							<form onSubmit={handleSubmit}>
								<fieldset>
									<legend>
										Регистрация
									</legend>
									<p>Есть аккаунт? <Link href="/login">Войти</Link></p>
									<label className={styles.inputLabel} htmlFor="text">
										<span>Имя и фамилия</span>
										<input type="text" id="text" value={fullName} onChange={e => setFullName(e.target.value)} required />
									</label>
									<label className={styles.inputLabel} htmlFor="email">
										<span>Email</span>
										<input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
									</label>
									<label className={styles.inputLabel} htmlFor="username">
										<span>Имя пользователя</span>
										<input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} required />
									</label>
									<label className={styles.inputLabel} htmlFor="pass">
										<span>Пароль</span>
										<input type="password" id="pass" value={password} onChange={e => setPassword(e.target.value)} required />
									</label>
									<label className={styles.inputLabel} htmlFor="confirm">
										<span>Подтверждение пароля</span>
										<input type="password" id="confirm" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} required />
									</label>
									<label className={styles.checkboxLabel} htmlFor="check">
										<input type="checkbox" id="check" checked={agree} onChange={e => setAgree(e.target.checked)} required />
										<span className={styles.box}></span>
										<span>Я подтверждаю, что ознакомился с Условиями использования и Политикой конфиденциальности</span>
									</label>
								</fieldset>
								<Button type="submit" text="Зарегистрироваться" color="black" size="medium" fullWidth/>
								<div className={styles.separator}><span>или</span></div>
								<div className={styles.authButtons}>
									<button className={styles.authButton} type="button">
										<div className={styles.authButtonIco}>
											<Image src="/images/google.svg" width={15} height={15} alt="Цветной Гугл логотип"/>
										</div>
										<span>Зарегистрироваться с Google</span>
									</button>
									<button className={styles.authButton} type="button">
										<div className={styles.authButtonIco}>
											<Image src="/images/vk.svg" width={15} height={15} alt="Цветной логотип ВКонтакте"/>
										</div>
										<span>Зарегистрироваться с ВКонтакте</span>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</SectionContainer>
		</section>
	)
}

export default RegisterClient;