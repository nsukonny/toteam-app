'use client';

// next
import Link from 'next/link';
import Image from 'next/image';
// hooks
import useIsMobile from "@/app/hooks/useIsMobile";
// components
import SectionContainer from "@/app/components/common/SectionContainer/SectionContainer";
import Button from "@/app/components/buttons/Button/Button";
// styles
import styles from './LoginClient.module.scss'

const LoginClient = () => {
	const isMobile = useIsMobile(992)
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
							<form>
								<fieldset>
									<legend>
										Вход
									</legend>
									<p>Нет аккаунта? <Link href="/register">Зарегистрироваться</Link></p>
									<label htmlFor="text">
										<span>Email или имя пользователя</span>
										<input type="text" id="text"/>
									</label>
									<label htmlFor="pass">
										<span>Пароль</span>
										<input type="password" id="pass"/>
									</label>
								</fieldset>
								<Button type="button" text="Войти" color="black" size="medium" fullWidth/>
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