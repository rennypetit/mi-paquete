import Image from 'next/image';
import Button from '@components/button';

import styles from './BannerItems.module.scss';
export default function BannerItems({ data }) {
	if (!data?.title) return ''; // sino tiene nada no retorna nada
	return (
		<section>
			<div className={`${styles.container} ${styles[data.orientation]}`}>
				<div className={styles.top}>
					<div
						className={styles.title}
						dangerouslySetInnerHTML={{ __html: data.title }}
					></div>
					<div
						className={styles.description}
						dangerouslySetInnerHTML={{ __html: data.description }}
					></div>
				</div>

				<div className={styles.content}>
					<div className={styles.items}>
						<ul>
							{data.items.map((item, index) => (
								<li key={index}>{item.title}</li>
							))}
						</ul>
					</div>
				</div>

				<div className={styles.image}>
					<div
						className={`${styles.background} ${styles[data.background]}`}
					></div>
					<Image src={data.image} alt={data.alt} width={320} height={400} />
				</div>
			</div>
			<div className={styles.foot}>
				<div
					className={`${styles.description} ${styles.subDescription}`}
					dangerouslySetInnerHTML={{ __html: data.subDescription }}
				></div>
				<div className={styles.buttons}>
					{/* si el botón no viene no se mostrará */}
					{data.buttonOne && <Button data={data.buttonOne} />}
					{data.buttonTwo && <Button data={data.buttonTwo} />}
				</div>
			</div>
		</section>
	);
}