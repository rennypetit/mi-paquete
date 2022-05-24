import Image from 'next/image';
import Button from '@components/button';

// types
import { Props } from '@components/banner/types';

import styles from './BannerCenter.module.scss';
const BannerCenter = ({ data }: Props) => {
	if (!data?.title) return null; // sino tiene nada no retorna nada
	return (
		<div className={styles.container}>
			<div
				className={styles.title}
				dangerouslySetInnerHTML={{ __html: data.title }}
			></div>

			{data.image && (
				<div className={styles.image}>
					<Image src={data.image} alt={data.alt} quality={100} layout='fill' />
				</div>
			)}

			<div className={styles.content}>
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
};

export default BannerCenter;
