import Image from 'next/image';
import ButtonOrange from '@components/buttons/Orange';
import ButtonBlue from '@components/buttons/Blue';

import styles from './Banner.module.scss';
export default function Banner({ data }) {
	if (!data?.title) return ''; // sino tiene nada no retorna nada
	return (
		<div className={`${styles.container} ${styles[data.orientation]}`}>
			<div
				className={styles.title}
				dangerouslySetInnerHTML={{ __html: data.title }}
			></div>
			<div className={styles.description}>
				{data.suBtitle && (
					<h2>
						{data.subtitle} <span>|</span> Mi Paquete
					</h2>
				)}
				<p>{data.description}</p>
				<div className={styles.buttons}>
					<ButtonOrange data={data.buttonOne} />
					{/* si el botón 2 no viene no se mostrará */}
					{data.buttonTwo && <ButtonBlue data={data.buttonTwo} />}
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
