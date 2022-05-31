import Image from 'next/image';
import styles from './BannerExito.module.scss';
const BannerExito = ({ data }) => {
	return (
		<div className={styles.container}>
			<div className={styles.row}>
				<h1 className={styles.title}>{data.title}</h1>
				<div className={styles.items}>
					{data.items.map((item, index) => (
						<div className={styles.item} key={index}>
							<p className={styles.itemTitle}>
								<strong>{item.title}</strong>
							</p>
							<p className={`${styles.itemContent} ${styles[item.color]}`}>
								{item.description}
							</p>
						</div>
					))}

					<div className={styles.item}>
						<p className={styles.itemTitle}>
							<strong>Calificación:</strong>
						</p>
						<div className={styles.starContainer}>
							<Image
								src='/images/casos-de-exito/star.svg'
								alt='star'
								width={29}
								height={28}
								layout='fixed'
							/>
							<Image
								src='/images/casos-de-exito/star.svg'
								alt='star'
								width={29}
								height={28}
								layout='fixed'
							/>
							<Image
								src='/images/casos-de-exito/star.svg'
								alt='star'
								width={29}
								height={28}
								layout='fixed'
							/>
							<Image
								src='/images/casos-de-exito/star.svg'
								alt='star'
								width={29}
								height={28}
								layout='fixed'
							/>
							<Image
								src='/images/casos-de-exito/star.svg'
								alt='star'
								width={29}
								height={28}
								layout='fixed'
							/>
						</div>
					</div>
				</div>
				<hr />
			</div>
		</div>
	);
};

export default BannerExito;
