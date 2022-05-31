import { useContext } from 'react';
import Image from 'next/image';
import WidthContext from '@contexts/width';
import Button from '@components/button';

// types
import { PropsBackground } from './types';

import styles from './BannerBackground.module.scss';
export const Banner = ({ data }: PropsBackground) => {
	const { widthViewport }: any = useContext(WidthContext);
	if (!data?.title) return null; // sino tiene nada no retorna nada
	return (
		<div className={`${styles.container} ${styles[data.orientation]}`}>
			<div
				className={styles.title}
				dangerouslySetInnerHTML={{ __html: data.title }}
			></div>
			<div className={styles.content}>
				{data.subtitle && (
					<h2>
						{data.subtitle} <span>|</span> Mi Paquete
					</h2>
				)}
				<div
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: data.description }}
				></div>
				{data.items && (
					<div className={styles.items}>
						<ul>
							{data.items.map((item, index: number) => (
								<li key={index}>{item.title}</li>
							))}
						</ul>
					</div>
				)}
				<div className={styles.buttons}>
					{/* si el botón no viene no se mostrará */}
					{data.buttonOne && <Button data={data.buttonOne} />}
					{data.buttonTwo && <Button data={data.buttonTwo} />}
				</div>
			</div>

			<div className={`${styles.image} bannerBackgroundImage`}>
				{widthViewport < 823 ? (
					<Image
						src={data.image}
						alt={data.alt}
						quality={100}
						width={1024}
						height={768}
						layout='fixed'
					/>
				) : (
					<Image
						src={data.imageDesktop}
						alt={data.alt}
						quality={100}
						width={1920}
						height={1080}
						layout='fixed'
					/>
				)}
			</div>
		</div>
	);
};

export default Banner;
