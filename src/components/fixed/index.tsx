import Link from 'next/link';
import Image from 'next/image';
import styles from './Fixed.module.scss';
const Fixed = ({
	textWhatsapp = `<p> ¿Necesitas asesoría personalizada? <br /> <strong>¡Te ayudamos!</strong> </p>`,
}) => {
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
							layout=''
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
					<img src='/images/icons/whatsapp.svg' alt='icon whatsapp' />
				</a>
				<div className={styles.whatsappContext}>
					<a
						href='https://walink.co/b8da4c'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src='/images/message-whatsapp.svg'
							alt='icon whatsapp'
							width={60}
							height={60}
						/>
						<div
							className={styles.containerTextWhatsapp}
							dangerouslySetInnerHTML={{ __html: textWhatsapp }}
						></div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Fixed;
