import Image from 'next/image';
import styles from './Benefit.module.scss';
import Button from '@components/button';
export const BenefitAsesoria = ({ data }) => {
	return (
		<section className={`${styles.container} ${styles.containerAsesoria}`}>
			<div
				className={`${styles.containerItems} ${styles.containerItemsInverse}`}
			>
				<div className={styles.backgroundAsesoria}></div>
				<div className={styles.items}>
					{data.items.map((item, index) => (
						<div className={styles.card} key={index}>
							<div className={styles.cardImage}>
								<Image
									src={item.image}
									alt={item.alt}
									quality={100}
									width={84}
									height={84}
									layout='fixed'
								/>
							</div>
							<h3 className={styles.cardTitle}>{item.title}</h3>
							<p className={styles.cardDescription}>{item.description}</p>
						</div>
					))}
				</div>
			</div>
			<div className={`${styles.content} ${styles.contentInverse}`}>
				<div className={styles.img_container}>
					<Image
						src={data.image}
						alt={data.alt}
						quality={100}
						width={183}
						height={183}
						layout='fixed'
					/>
				</div>
				<div
					className={`${styles.title} ${styles.titleDesktop}`}
					dangerouslySetInnerHTML={{ __html: data.title }}
				></div>
				<div
					className={`${styles.title} ${styles.titleMobile}`}
					dangerouslySetInnerHTML={{ __html: data.title }}
				></div>
				<div
					className={`${styles.description} ${styles.descriptionAsesoria}`}
					dangerouslySetInnerHTML={{ __html: data.description }}
				></div>
				<div className={styles.buttonsAsesoria}>
					<Button data={data.buttonOne} className={styles.buttonOne} />
					{/* si el botón 2 no viene no se mostrará */}
					{data.buttonTwo && (
						<Button data={data.buttonTwo} className={styles.buttonTwo} />
					)}
				</div>
			</div>
		</section>
	);
};

export default BenefitAsesoria;
