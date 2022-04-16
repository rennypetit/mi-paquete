import Image from 'next/image';
import styles from './Feature.module.scss';
import Button from '@components/button';
export default function Feature({
	items,
	icon = false,
	optionalText = 'optionalFalse',
}) {
	console.log(optionalText);

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
			<div className={styles.image}>
				<Image
					src={items.image}
					alt={items.alt}
					layout='responsive'
					height={242}
					width={400}
				/>
			</div>
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
					{items.items && (
						<ul className={icon && styles.icon}>
							{items.items.map((item, index) => (
								<li key={index}>{item.title}</li>
							))}
						</ul>
					)}
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
