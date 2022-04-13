import Image from 'next/image';
import styles from './Fixed.module.scss';
const Fixed = () => {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<a href='http://a' target='_blank' rel='noopener noreferrer'>
					<Image
						src='/images/icons/help-blue.svg'
						alt='icon help'
						width={50}
						height={50}
					/>
				</a>
			</div>
			<div className={styles.image}>
				<a href='http://b' target='_blank' rel='noopener noreferrer'>
					<Image
						src='/images/icons/whatsapp.svg'
						alt='icon whatsapp'
						width={50}
						height={50}
					/>
				</a>
			</div>
		</div>
	);
};

export default Fixed;
