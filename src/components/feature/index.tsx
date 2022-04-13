import Image from 'next/image';
import styles from './Feature.module.scss';
export default function Feature({ items, icon = false }) {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<Image
					src={items.image}
					alt={items.alt}
					layout='responsive'
					height={242}
					width={400}
				/>
			</div>
			<div className={styles.description}>
				<p className={styles.title}>
					{items?.title}{' '}
					<span className={styles[items.colorTitleTwo]}>{items?.titleTwo}</span>
				</p>
				<div className={styles.items}>
					<ul className={icon && styles.icon}>
						{items.items.map((item, index) => (
							<li key={index}>{item.title}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
