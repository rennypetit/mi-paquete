import Button from '@components/button';

import styles from './BannerAboutUs.module.scss';

export default function BannerAboutUs({ data }) {
	if (!data?.title) return ''; // sino tiene nada no retorna nada
	return (
		<div className={`${styles.container} ${styles.container_margin_top}`}>
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