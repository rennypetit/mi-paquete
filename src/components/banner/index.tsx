import Image from 'next/image';
import Button from '@components/button';

import styles from './Banner.module.scss';
export default function Banner({ data }) {
	if (!data?.title) return ''; // sino tiene nada no retorna nada
	return (
		<div className={`${styles.container} ${styles[data.orientation]}`}>
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

			<div className={styles.image}>
				<div
					className={`${styles.background} ${styles[data.background]}`}
				></div>
				<Image src={data.image} alt={data.alt} width={320} height={400} />
			</div>
		</div>
	);
}
