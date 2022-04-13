import Image from 'next/image';
import Button from '@components/button';
import styles from './Feature.module.scss';
export default function Feature({ items }) {
	return (
		<section className={styles.section}>
			<div className={`${styles.container} ${styles[items.orientation]}`}>
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
						{items?.title} <span>{items?.titleSpan}</span>
					</p>
					<div className={styles.items}>
						<ul>
							{items.items.map((item, index) => (
								<li key={index}>
									<Image
										src={item.image}
										alt={item.alt}
										height={50}
										width={50}
									/>
									<div className={styles.itemContent}>
										<span className={styles.itemContentTitle}>
											{item.title}
										</span>
										<p className={styles.itemContentDescription}>
											{item.description}
										</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className={styles.buttons}>
				{items.buttonOne && <Button data={items.buttonOne} />}
				{items.buttonTwo && <Button data={items.buttonTwo} />}
			</div>
		</section>
	);
}
