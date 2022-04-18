import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.firstSection}>
					{/* column 1 */}
					<div className={styles.column}>
						<Image
							src='/images/logo-footer.svg'
							alt='logo footer'
							width={118}
							height={56}
						/>
						<div className={styles.separator}></div>
						<Image
							src='/images/camara-de-comercio.png'
							alt='logo camara de comercio'
							width={108}
							height={40}
						/>
					</div>
					{/* end column 1 */}
					{/* column 2 */}
					<div className={styles.column}>
						<ul>
							<li className={styles.liTitle}>
								<a href='http://' target='_blank' rel='noopener noreferrer'>
									<strong>Sobre Nosotros</strong>
								</a>
							</li>
							<li>
								<Link href='/quienes-somos'>
									<a>Quiénes Somos</a>
								</Link>
							</li>
							<li>
								<Link href='/casos-de-exito'>
									<a>Casos de Éxito</a>
								</Link>
							</li>
							<li>
								<Link href='/trabaja-con-nosotros'>
									<a>Trabaja con Nosotros</a>
								</Link>
							</li>
						</ul>
					</div>
					{/* end column 2 */}
					{/* column 3 */}
					<div className={styles.column}>
						<ul>
							<li className={styles.liTitle}>
								<a href='http://' target='_blank' rel='noopener noreferrer'>
									<strong>Blog</strong>
								</a>
							</li>
							<li>
								<Link href='/entradas'>
									<a>Entradas</a>
								</Link>
							</li>
						</ul>
					</div>
					{/* end column 3 */}
					{/* column 4 */}
					<div className={styles.column}>
						<ul>
							<li className={styles.liTitle}>
								<a href='http://' target='_blank' rel='noopener noreferrer'>
									<strong>Contáctenos</strong>
								</a>
							</li>
							<li>
								<Link href='/preguntas-frecuentes'>
									<a>Preguntas Frecuentes</a>
								</Link>
							</li>
							<li className={styles.icon}>
								<Link href='/centro-de-ayuda'>
									<a>
										<Image
											src='/images/icons/help-white.svg'
											alt='icon help'
											width={30}
											height={30}
										/>
										centro de ayuda
									</a>
								</Link>
							</li>
						</ul>
					</div>
					{/* end column 4 */}
					{/* column 5 */}
					<div className={styles.column}>
						<ul>
							<li className={`${styles.liTitle} ${styles.padding}`}>
								<a href='http://' target='_blank' rel='noopener noreferrer'>
									<strong>Nuestras Redes Sociales</strong>
								</a>
							</li>
							<div className={styles.redes}>
								<li>
									<a href='http://' target='_blank' rel='noopener noreferrer'>
										<Image
											src='/images/icons/instagram.svg'
											alt='icon instagram'
											width={19}
											height={19}
										/>
									</a>
								</li>
								<li>
									<a href='http://' target='_blank' rel='noopener noreferrer'>
										<Image
											src='/images/icons/linkedin.svg'
											alt='icon linkedin'
											width={19}
											height={19}
										/>
									</a>
								</li>
								<li>
									<a href='http://' target='_blank' rel='noopener noreferrer'>
										<Image
											src='/images/icons/facebook.svg'
											alt='icon facebook'
											width={19}
											height={19}
										/>
									</a>
								</li>
								<li>
									<a href='http://' target='_blank' rel='noopener noreferrer'>
										<Image
											src='/images/icons/youtube.svg'
											alt='icon youtube'
											width={19}
											height={19}
										/>
									</a>
								</li>
							</div>
						</ul>
					</div>
					{/* end column 5 */}
				</div>
				<div className={styles.secondSection}>
					<p>Mi Paquete SAS 2020. Todos los derechos reservados</p>
					<a href='http://' target='_blank' rel='noopener noreferrer'>
						POLÍTICAS, PRIVACIDAD DE DATOS, TÉRMINOS Y CONDICIONES
					</a>
				</div>
			</div>
		</footer>
	);
}
