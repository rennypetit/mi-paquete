import Image from 'next/image';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Button from '@components/button';
import { TypeDescription } from '../../types/global';
import IframeVideo from '@components/iframeVideo';
import styles from './Feature.module.scss';
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
					<LazyLoadComponent>
						<IframeVideo url={items.video} />
					</LazyLoadComponent>
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
								layout=''
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
					<div className={icon ? styles.icon : ''}>
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
