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
							layout='fixed'
						/>
						<div className={styles.separator}></div>
						<Image
							src='/images/camara-de-comercio.png'
							alt='logo camara de comercio'
							width={108}
							height={40}
							layout='fixed'
						/>
					</div>
					{/* end column 1 */}
					{/* column 2 */}
					<div className={styles.column}>
						<ul>
							<li className={styles.liTitle}>
								<strong>Sobre Nosotros</strong>
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
							<li>
								<Link href='/tyc-campanas-comerciales'>
									<a>TyC campañas comerciales</a>
								</Link>
							</li>
						</ul>
					</div>
					{/* end column 2 */}
					{/* column 3 */}
					<div className={styles.column}>
						<ul>
							<li className={styles.liTitle}>
								<strong>Blog</strong>
							</li>
							<li>
								<Link href='/blog'>
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
								<strong>Contáctanos</strong>
							</li>
							<li>
								<a
									href='mailto:info@mipaquete.com'
									target='_blank'
									rel='noopener noreferrer'
								>
									info@mipaquete.com
								</a>
							</li>
							<li>
								<Link href='/centro-de-ayuda#preguntas-frecuentes'>
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
											layout='fixed'
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
								<strong>Nuestras Redes Sociales</strong>
							</li>
							<ul className={styles.redes}>
								<li>
									<a
										href='https://www.instagram.com/mipaquete.colombia/'
										target='_blank'
										rel='noopener noreferrer'
									>
										<Image
											src='/images/icons/instagram.svg'
											alt='icon instagram'
											width={19}
											height={19}
											layout='fixed'
										/>
									</a>
								</li>
								<li>
									<a
										href='https://co.linkedin.com/company/mipaquete/'
										target='_blank'
										rel='noopener noreferrer'
									>
										<Image
											src='/images/icons/linkedin.svg'
											alt='icon linkedin'
											width={19}
											height={19}
											layout='fixed'
										/>
									</a>
								</li>
								<li>
									<a
										href='https://www.facebook.com/mipaquete.colombia'
										target='_blank'
										rel='noopener noreferrer'
									>
										<Image
											src='/images/icons/facebook.svg'
											alt='icon facebook'
											width={19}
											height={19}
											layout='fixed'
										/>
									</a>
								</li>
								<li>
									<a
										href='https://www.youtube.com/c/mipaquetecolombia'
										target='_blank'
										rel='noopener noreferrer'
									>
										<Image
											src='/images/icons/youtube.svg'
											alt='icon youtube'
											width={19}
											height={19}
											layout='fixed'
										/>
									</a>
								</li>
							</ul>
						</ul>
					</div>
					{/* end column 5 */}
				</div>
				<div className={styles.secondSection}>
					<p>Mi Paquete SAS 2020. Todos los derechos reservados</p>
					<a
						href='/politicas-privacidad-de-datos-terminos-y-condiciones'
						target='_blank'
						rel='noopener noreferrer'
					>
						POLÍTICAS, PRIVACIDAD DE DATOS, TÉRMINOS Y CONDICIONES
					</a>
				</div>
			</div>
		</footer>
	);
}
