import Image from 'next/image';
import Button from '@components/button';
import { TypeDescription } from '@types/global';
import styles from './Feature.module.scss';
export default function Feature({ items }) {
	return (
		<section className={styles.section}>
			<div className={`${styles.container} ${styles[items.orientation]}`}>
				{Symbol(items.type).toString() ===
				`Symbol(${TypeDescription.video})` ? (
					<div className={`${styles.video} video`}>
						<iframe
							src={items.video}
							loading='lazy'
							width='560'
							height='315'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</div>
				) : (
					<>
						{items.image && (
							<div className={styles.image}>
								<Image
									src={items.image}
									alt={items.alt}
									layout='responsive'
									quality={100}
									height={items.height}
									width={items.width}
								/>
							</div>
						)}
					</>
				)}
				<div className={styles.description}>
					<div
						className={`${styles.title}`}
						dangerouslySetInnerHTML={{ __html: items.title }}
					></div>
					<div className={styles.items}>
						<ul>
							{items.items.map((item, index) => (
								<li key={index}>
									<Image
										src={item.image}
										alt={item.alt}
										quality={100}
										height={50}
										width={50}
										layout='fixed'
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
