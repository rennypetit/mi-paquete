import { useContext } from 'react';
import Image from 'next/image';
import WidthContext from '@contexts/width';
import Button from '@components/button';
import styles from './Commercial.module.scss';
const Commercial = ({ data }) => {
	const { widthViewport } = useContext(WidthContext);
	return (
		<section className={styles.container}>
			{widthViewport < 1024 ? (
				<Image src={data.image} alt={data.alt} layout='fill' quality={100} />
			) : (
				<Image
					src={data.imageDesktop}
					alt={data.alt}
					quality={100}
					layout='fill'
				/>
			)}
			<div className={`${styles.content} ${styles[data.colorText]}`}>
				<p className={styles.title}></p>
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
