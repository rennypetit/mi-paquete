import Image from 'next/image';
import styles from './Row.module.scss';
function Row({ data }) {
	return (
		<div className={styles.container}>
			<div className={styles.background}>
				<Image src={data.image} alt={data.alt} layout='fill' />
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>
					{data.title} <strong>{data.titleStrong}</strong>
				</h2>
				<div className={styles.separator}></div>
				<div
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: data.description }}
				></div>
			</div>
		</div>
	);
}

export default Row;
