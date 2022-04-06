import { useContext } from 'react';
import Image from 'next/image';
import WidthContext from '@contexts/width';
import styles from './Commercial.module.scss';
const Commercial = ({ data }) => {
	const { widthViewport } = useContext(WidthContext);
	return (
		<section className={styles.container}>
			{widthViewport < 1024 ? (
				<Image src={data.image} alt={data.alt} layout='fill' quality={100} />
			) : (
				<Image src={data.imageDesktop} alt={data.alt} layout='fill' />
			)}
			<div className={`${styles.content} ${styles[data.colorText]}`}>
				<p className={styles.title}>{data.title}</p>
				<div
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: data.description }}
				></div>
				<div className={styles.containerButton}>
					<a href='#' target='_blank' rel='noopener noreferrer'>
						<button
							className={`button ${styles.button} ${styles[data.button.color]}`}
						>
							{data.button.title}
						</button>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Commercial;
