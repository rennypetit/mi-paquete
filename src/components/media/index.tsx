import Image from 'next/image';
import styles from './Media.module.scss';
export default function Media() {
	return (
		<div className={styles.container}>
			<div className={styles.imageMap}>
				<Image
					src='/images/media.png'
					alt='sobre nosotros'
					width={1024}
					height={700}
				/>
			</div>
		</div>
	);
}
