import Image from 'next/image';
// import ContentParrafo from './ContentParrafo';
import styles from './Content.module.scss';
export default function Cards({ data }) {
	return (
		<div className={styles.containerSection_content}>
			<div className={`${styles.containerSection_width40}`}>
				<Image
					src={data.image}
					alt={data.alt}
					width={1024}
					quality={100}
					height={768}
					layout='fixed'
				/>
			</div>
			<div
				className={`${styles.containerSection_width60} ${styles.containerSection_description}`}
			>
				<div
					className={styles[data.classSpan]}
					dangerouslySetInnerHTML={{ __html: data.title }}
				></div>
				<div dangerouslySetInnerHTML={{ __html: data.description }}></div>
			</div>
		</div>
	);
}
