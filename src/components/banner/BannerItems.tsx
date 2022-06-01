import Image from 'next/image';
import Button from '@components/button';

// types
import { PropsItems } from './types';

import styles from './BannerItems.module.scss';
const BannerItems = ({ data }: PropsItems) => {
	if (!data?.title) return null; // sino tiene nada no retorna nada
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
					{data.items && (
						<div className={styles.items}>
							<ul>
								{data.items.map((item, index) => (
									<li key={index}>{item.title}</li>
								))}
							</ul>
						</div>
					)}
				</div>

				<div className={styles.image}>
					<Image
						src={data.image}
						alt={data.alt}
						quality={100}
						width={500}
						height={425}
						layout=''
					/>
				</div>
			</div>
			<div className={styles.foot}>
				{data.subDescription && (
					<div
						className={`${styles.description} ${styles.subDescription}`}
						dangerouslySetInnerHTML={{ __html: data.subDescription }}
					></div>
				)}
				<div className={styles.buttons}>
					{/* si el botón no viene no se mostrará */}
					{data.buttonOne && <Button data={data.buttonOne} />}
					{data.buttonTwo && <Button data={data.buttonTwo} />}
				</div>
			</div>
		</section>
	);
};

export default BannerItems;
