import Image from 'next/image';
import styles from './Benefit.module.scss';
import ButtonBlue from '@components/buttons/Blue';
import ButtonOrange from '@components/buttons/Orange';
export const Benefit = ({ data }) => {
	return (
		<section className={styles.container}>
			<div
				className={`${styles.title} ${styles.titleMobile}`}
				dangerouslySetInnerHTML={{ __html: data.title }}
			></div>
			<div className={styles.containerItems}>
				<div className={styles.background}></div>
				<div className={styles.items}>
					{data.items.map((item, index) => (
						<div className={styles.card} key={index}>
							<div className={styles.cardImage}>
								<Image src={item.image} alt={item.alt} width={84} height={84} />
							</div>
							<h3 className={styles.cardTitle}>{item.title}</h3>
							<p className={styles.cardDescription}>{item.description}</p>
						</div>
					))}
				</div>
			</div>
			<div className={styles.content}>
				<div
					className={`${styles.title} ${styles.titleDesktop}`}
					dangerouslySetInnerHTML={{ __html: data.title }}
				></div>
				<div
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: data.description }}
				></div>
				<div className={styles.buttons}>
					<ButtonBlue data={data.buttonOne} />
					{/* si el botón 2 no viene no se mostrará */}
					{data.buttonTwo && <ButtonOrange data={data.buttonTwo} />}
				</div>
			</div>
		</section>
	);
};

export default Benefit;
