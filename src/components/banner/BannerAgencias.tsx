import { useContext } from 'react';
import Image from 'next/image';
import Button from '@components/button';
import WidthContext from '@contexts/width';

// types
import { Props } from './types';
import styles from './BannerAgencias.module.scss';

export default function BannerAgencias({ data }: Props) {
	const { widthViewport }: any = useContext(WidthContext);
	if (!data?.title) return ''; // sino tiene nada no retorna nada
	return (
		<div className={styles.container}>
			<div className={`${styles.image} bannerBackgroundImage`}>
				{widthViewport < 1024 ? (
					<Image src={data.image} alt={data.alt} width={1024} height={768} />
				) : (
					''
				)}
			</div>
			<div className={styles.content}>
				<div
					className={styles.title}
					dangerouslySetInnerHTML={{ __html: data.title }}
				></div>
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
		</div>
	);
}
