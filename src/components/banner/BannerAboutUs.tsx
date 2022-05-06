import Button from '@components/button';

// types
import { Props } from './types';
import styles from './BannerAboutUs.module.scss';

export default function BannerAboutUs({ data }: Props) {
	if (!data?.title) return null; // sino tiene nada no retorna nada
	if (!data?.description) return null;
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
			</div>
		</div>
	);
}
