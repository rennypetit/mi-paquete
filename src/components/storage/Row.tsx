import Image from 'next/image';
import styles from './Row.module.scss';
const Row = ({ data }) => {
	return (
		<div className={styles.container}>
			<div className={`${styles.content} ${styles[data.colorText]}`}>
				<div
					className={styles.title}
					dangerouslySetInnerHTML={{ __html: data.title }}
				></div>
				<div
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: data.description }}
				></div>
			</div>
			<div className={styles.items}>
				{data.items.map((item, index) => (
					<div className={styles.item} key={index}>
						<div className={styles.itemImage}>
							<Image
								src={item.image}
								alt={item.alt}
								quality={100}
								height={48}
								width={48}
							/>
						</div>
						<p className={styles.itemTitle}>{item.title}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Row;
