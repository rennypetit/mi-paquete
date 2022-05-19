import Image from 'next/image';
import styles from './Feature.module.scss';
import Button from '@components/button';
import { TypeDescription } from '../../types/global';
export default function Feature({
	items,
	icon = false,
	optionalText = 'optionalFalse',
}) {
	return (
		<div
			className={`${styles.container} ${styles[optionalText]} ${
				styles[items.orientation]
			}`}
		>
			{optionalText && (
				<div className={styles.optionalText}>
					<p className={styles.title}>
						{items?.title}{' '}
						<span className={styles[items.colorTitleTwo]}>
							{items?.titleTwo}
						</span>
					</p>
					<div className={styles.items}>
						<div
							className={styles.description}
							dangerouslySetInnerHTML={{ __html: items.description }}
						></div>
					</div>
				</div>
			)}
			{Symbol(items.type).toString() === `Symbol(${TypeDescription.video})` ? (
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
						<div className={`${styles.image} Feature-image`}>
							<Image
								src={items.image}
								alt={items.alt}
								height={items.height}
								width={items.width}
							/>
						</div>
					)}
				</>
			)}
			<div className={styles.content}>
				<p className={styles.title}>
					{items?.title}{' '}
					<span className={styles[items.colorTitleTwo]}>{items?.titleTwo}</span>
				</p>
				<div className={styles.items}>
					<div
						className={styles.description}
						dangerouslySetInnerHTML={{ __html: items.description }}
					></div>
					<div className={icon && styles.icon}>
						<div
							className={styles.description}
							dangerouslySetInnerHTML={{ __html: items.items }}
						></div>
					</div>
					<div className={styles.buttons}>
						{/* si el botón no viene no se mostrará */}
						{items.buttonOne && <Button data={items.buttonOne} />}
						{items.buttonTwo && <Button data={items.buttonTwo} />}
					</div>
				</div>
			</div>
		</div>
	);
}
