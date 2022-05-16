import Image from 'next/image';
import styles from './BannerPolitica.module.scss';
const BannerPolitica = ({ textBanner }) => {
	return (
		<div className={styles.container}>
			<div className={styles.background}>
				<Image
					src='/images/banner-politica.png'
					alt='banner'
					width={1920}
					height={1080}
					layout='fill'
				/>
			</div>
			<div
				className={`${styles.title}`}
				dangerouslySetInnerHTML={{ __html: textBanner }}
			></div>
		</div>
	);
};

export default BannerPolitica;
