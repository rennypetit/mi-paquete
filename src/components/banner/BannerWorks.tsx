import { useContext } from 'react';
import Image from 'next/image';
import WidthContext from '@contexts/width';

// types
import { PropsBackground } from './types';

import styles from './BannerCenter.module.scss';
export default function BannerWorks({ data }: PropsBackground) {
	const { widthViewport }: any = useContext(WidthContext);
	if (!data?.title) return null; // sino tiene nada no retorna nada
	return (
		<div className={styles.containerWorks}>
			<div className={`${styles.image} ${styles.imageWorks}`}>
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
			<div
				className={`${styles.title} ${styles.titleWorks}`}
				dangerouslySetInnerHTML={{ __html: data.title }}
			></div>
			<div className={`${styles.content} ${styles.contentWorks}`}>
				<div
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: data.description }}
				></div>
			</div>
		</div>
	);
}
