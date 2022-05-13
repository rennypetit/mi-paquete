import Link from 'next/link';
import Image from 'next/image';
import styles from './Fixed.module.scss';
const Fixed = () => {
	return (
		<div className={styles.container} id='menu-fixed'>
			<div className={`${styles.image} ${styles.imageHelp}`}>
				<Link href='/centro-de-ayuda'>
					<a>
						<Image
							src='/images/icons/help-blue.svg'
							alt='icon help'
							width={60}
							height={60}
						/>
					</a>
				</Link>

				<div className={styles.helpText}>
					<Link href='/centro-de-ayuda'>
						<a>CENTRO DE AYUDA</a>
					</Link>
				</div>
			</div>
			<div className={`${styles.image} ${styles.whatsappHelp}`}>
				<a
					href='https://walink.co/b8da4c'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
						src='/images/icons/whatsapp.svg'
						alt='icon whatsapp'
						width={60}
						height={60}
					/>
				</a>
				<div className={styles.whatsappContext}>
					<a
						href='https://walink.co/b8da4c'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							src='/images/message-whatsapp.svg'
							alt='icon whatsapp'
							width={254}
							height={58}
						/>
						<p>
							¿Necesitas asesoría personalizada? <br />{' '}
							<strong>¡Te ayudamos!</strong>
						</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Fixed;
