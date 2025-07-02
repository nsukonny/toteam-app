'use client';

// next
import Link from 'next/link';
import Image from 'next/image';
// libs
import { ZodIssue } from 'zod';
// hooks
import useIsMobile from "@/app/hooks/useIsMobile";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/app/api/auth';
import { useToast } from '@/app/hooks/useToast';
// components
import SectionContainer from "@/app/components/common/SectionContainer/SectionContainer";
import Button from "@/app/components/buttons/Button/Button";
import Message from '@/app/components/common/Message/Message';
// validation
import { loginSchema, LoginFormValues } from '../login.validation';
// styles
import styles from '../Auth.module.scss'

const LoginClient = () => {
	const isMobile = useIsMobile(992)
	const [loginValue, setLoginValue] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();
	const toast = useToast();
	const [loading, setLoading] = useState(false);
	const [formErrors, setFormErrors] = useState<Partial<Record<keyof LoginFormValues, string>>>({});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setFormErrors({});
		const result = loginSchema.safeParse({ login: loginValue, password });
		if (!result.success) {
			const errors: Partial<Record<keyof LoginFormValues, string>> = {};
			result.error.errors.forEach((err: ZodIssue) => {
				const field = err.path[0] as keyof LoginFormValues;
				errors[field] = err.message;
			});
			setFormErrors(errors);
			return;
		}
		setLoading(true);
		try {
			const res = await login({ login: loginValue, password });
			toast.success(res?.message || 'Вы вошли в систему');
			router.push('/');
		} catch (err) {
			let msg = 'Ошибка входа';
			if (typeof err === 'string') msg = err;
			else if (err && typeof err === 'object' && 'message' in err && typeof err.message === 'string') msg = err.message;
			toast.error(msg);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className={styles.login}>
			<SectionContainer>
				<div className={styles.loginWrapper}>
					<div className={styles.logo}>
						<Image src="/images/logo.svg" width={145} height={30} alt="Логотип ТуТим"/>
					</div>
					<div className={styles.loginInner}>
						{!isMobile && (
							<div className={styles.loginInfo}>
								<h1>Найдите команду в ToTeam</h1>
								<p>
									Собирайте команду для создания проекта,
									присоединяйтесь к одной из команд для совместного творчества, находите тиммейтов для командной игры,
									подбирайте партнеров для ведения канала
								</p>
								<Link className={styles.register} href="/register">Зарегистрироваться</Link>
							</div>
						)}
						<div className={styles.loginForm}>
							<form onSubmit={handleSubmit}>
								<fieldset>
									<legend>
										Вход
									</legend>
									<p>Нет аккаунта? <Link href="/register">Зарегистрироваться</Link></p>
									<label className={styles.inputLabel} htmlFor="text">
										<span>Email или имя пользователя</span>
										<input type="text" id="text" value={loginValue} onChange={e => setLoginValue(e.target.value)} />
										{formErrors.login && <Message message={formErrors.login} type="error" />}
									</label>
									<label className={styles.inputLabel} htmlFor="pass">
										<span>Пароль</span>
										<input type="password" id="pass" value={password} onChange={e => setPassword(e.target.value)} />
										{formErrors.password && <Message message={formErrors.password} type="error" />}
									</label>
								</fieldset>
								<Button type="submit" text="Войти" color="black" size="medium" fullWidth disabled={loading}/>
								<div className={styles.separator}><span>или</span></div>
								<div className={styles.authButtons}>
									<button className={styles.authButton} type="button">
										<div className={styles.authButtonIco}>
											<Image src="/images/google.svg" width={15} height={15} alt="Цветной Гугл логотип"/>
										</div>
										<span>Войти с Google</span>
									</button>
									<button className={styles.authButton} type="button">
										<div className={styles.authButtonIco}>
											<Image src="/images/vk.svg" width={15} height={15} alt="Цветной логотип ВКонтакте"/>
										</div>
										<span>Войти с ВКонтакте</span>
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

export default LoginClient;