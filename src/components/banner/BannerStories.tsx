import { useContext } from 'react';
import Image from 'next/image';
import WidthContext from '@contexts/width';
import styles from './BannerCenter.module.scss';
export default function BannerWorks({ data }) {
	if (!data?.title) return ''; // sino tiene nada no retorna nada
	const { widthViewport } = useContext(WidthContext);
	return (
		<div className={styles.containerStories}>
			<div className={`${styles.imageStories}`}>
			{widthViewport < 1024 ? (
					<Image src={data.image} alt={data.alt} width={1024} height={768} />
				) : (
					<Image
						src={data.imageDesktop}
						alt={data.alt}
						width={896}
						height={496}
					/>
				)}
			</div>
			<div className={styles.containerLine}></div>
			<div
				className={`${styles.titleStories}`}
				dangerouslySetInnerHTML={{ __html: data.title }}
			></div>
		</div>
	);
}
