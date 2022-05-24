import Image from 'next/image';
import Button from '@components/button';

// types
import { Props } from './types';
import styles from './Banner.module.scss';
const Banner = ({ data }: Props) => {
	if (!data?.title) return null; // sino tiene nada no retorna nada
	return (
		<div
			className={`${styles.container} ${
				styles[data.orientation]
			} principal-banner`}
		>
			<div
				className={styles.title}
				dangerouslySetInnerHTML={{ __html: data.title }}
			></div>
			<div className={styles.content}>
				{data?.subtitle && (
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

			<div className={styles.image}>
				{data.background && (
					<div
						className={`${styles.background} ${styles[data.background]}`}
					></div>
				)}
				{data.image && (
					<Image
						src={data.image}
						alt={data.alt}
						quality={100}
						width={320}
						height={400}
					/>
				)}
			</div>
		</div>
	);
};

export default Banner;
