import Image from 'next/image';
import styles from './CardExito.module.scss';
const CardExito = ({ data }) => {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<Image
					src={data.image}
					alt={data.alt}
					width={340}
					height={310}
					layout='responsive'
				/>
			</div>
			<div className={styles.content}>
				<div
					className={`${styles.title} ${styles[data.color]}`}
					dangerouslySetInnerHTML={{ __html: data.title }}
				></div>
				<div
					className={`${styles.description}`}
					dangerouslySetInnerHTML={{ __html: data.description }}
				></div>
			</div>
		</div>
	);
};

export default CardExito;
