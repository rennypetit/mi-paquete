import React from 'react';
import Image from 'next/image';
import styles from './Contact.module.scss';
const Contact = () => {
	return (
		<div className={styles.container}>
			<div className={styles.containerTwo}>
				<div className={styles.image}>
					<Image
						src='/images/contact.png'
						alt='contact'
						quality={100}
						width={285}
						height={285}
					/>
				</div>
				<div className={styles.content}>
					<h3 className={styles.title}>
						Canales <span>de contacto</span>
					</h3>
					<div className={styles.items}>
						<div className={styles.item}>
							<p className={styles.itemOne}>
								<strong>Whatsapp</strong>{' '}
							</p>
							<p className={styles.itemTwo}>
								<span>
									<strong>+57</strong> 321 633 04 47
								</span>
							</p>
						</div>
						<div className={styles.item}>
							<p className={styles.itemOne}>
								<strong>E-mail</strong>{' '}
							</p>
							<p className={styles.itemTwo}>
								{' '}
								<a
									href='mailto:info@mipaquete.com'
									target='_blank'
									rel='noopener noreferrer'
								>
									info@mipaquete.com
								</a>
							</p>
						</div>
						<div className={styles.item}>
							<p className={styles.itemOne}>
								<strong>Redes Sociales</strong>{' '}
							</p>
							<p className={styles.itemTwo}>
								<div className={styles.redes}>
									<li>
										<a
											href='https://www.instagram.com/mipaquete.colombia/'
											target='_blank'
											rel='noopener noreferrer'
										>
											<Image
												src='/images/icons/instagram-blue.svg'
												alt='icon instagram'
												width={26}
												height={26}
											/>
										</a>
									</li>
									<li>
										<a
											href='https://co.linkedin.com/company/mipaquete'
											target='_blank'
											rel='noopener noreferrer'
										>
											<Image
												src='/images/icons/linkedin-blue.svg'
												alt='icon linkedin'
												width={26}
												height={26}
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
												src='/images/icons/facebook-blue.svg'
												alt='icon facebook'
												width={26}
												height={26}
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
												src='/images/icons/youtube-blue.svg'
												alt='icon youtube'
												width={26}
												height={26}
											/>
										</a>
									</li>
								</div>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
