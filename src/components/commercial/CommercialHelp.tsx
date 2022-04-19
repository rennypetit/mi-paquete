import Image from 'next/image';
import Button from '@components/button';
import styles from './CommercialHelp.module.scss';
const Commercial = ({ data }) => {
	return (
		<section className={styles.container}>
			<div className={styles.image}>
				<Image src={data.imageDesktop} alt={data.alt} layout='fill' />
			</div>
			<div className={`${styles.content} ${styles[data.colorText]}`}>
				<p className={styles.title}>{data.title}</p>
				<div
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: data.description }}
				></div>
				<div className={styles.containerButton}>
					<Button data={data.button} />
				</div>
			</div>
		</section>
	);
};

export default Commercial;
