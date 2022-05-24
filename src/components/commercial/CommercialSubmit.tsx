import { useContext } from 'react';
import Image from 'next/image';
import WidthContext from '@contexts/width';
import styles from './Commercial.module.scss';
const CommercialSubmit = ({ data }) => {
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
				<p className={styles.title}>{data.title}</p>
				<div
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: data.description }}
				></div>
				<form action='#' className={styles.form}>
					<input
						type='email'
						className={`form-input ${styles.input}`}
						placeholder='Correo electrónico'
					/>
					<div className={styles.containerButton}>
						<button className={`${styles.button} button`}>
							SUSCRIBIRSE
							<div className={styles.icon}>
								<Image
									src='/images/icons/search-dark.svg'
									alt='icon search'
									height={16}
									width={16}
								/>
							</div>
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default CommercialSubmit;
