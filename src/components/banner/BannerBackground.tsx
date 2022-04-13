import { useContext } from 'react';
import Image from 'next/image';
import WidthContext from '@contexts/width';
import Button from '@components/button';

import styles from './Banner.module.scss';
export default function Banner({ data }) {
	const { widthViewport } = useContext(WidthContext);
	if (!data?.title) return ''; // sino tiene nada no retorna nada
	return (
		<div
			className={`${styles.container} ${styles[data.orientation]} ${
				styles.bannerBackground
			} bannerBackground`}
		>
			<div
				className={styles.title}
				dangerouslySetInnerHTML={{ __html: data.title }}
			></div>
			<div className={styles.content}>
				{data.suBtitle && (
					<h2>
						{data.subtitle} <span>|</span> Mi Paquete
					</h2>
				)}
				<div
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: data.description }}
				></div>
				<div className={styles.buttons}>
					{/* si el botón no viene no se mostrará */}
					{data.buttonOne && <Button data={data.buttonOne} />}
					{data.buttonTwo && <Button data={data.buttonTwo} />}
				</div>
			</div>

			<div className={`${styles.image} bannerBackgroundImage`}>
				{widthViewport < 1024 ? (
					<Image src={data.image} alt={data.alt} width={1024} height={768} />
				) : (
					<Image
						src={data.imageDesktop}
						alt={data.alt}
						width={1920}
						height={1080}
					/>
				)}
			</div>
		</div>
	);
}
