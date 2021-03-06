import Image from 'next/image';
import styles from './Benefit.module.scss';
import Button from '@components/button';
export const Benefit = ({ data }) => {
	return (
		<section className={styles.container}>
			<div
				className={`${styles.title} ${styles.titleMobile}`}
				dangerouslySetInnerHTML={{ __html: data.title }}
			></div>
			<div className={`${styles.containerItems}`}>
				<div className={styles.background}></div>
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
							<p className={styles.cardTitle}>{item.title}</p>
							<p className={styles.cardDescription}>{item.description}</p>
						</div>
					))}
				</div>
			</div>
			<div className={`${styles.content}`}>
				<div
					className={`${styles.title} ${styles.titleDesktop}`}
					dangerouslySetInnerHTML={{ __html: data.title }}
				></div>
				<div
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: data.description }}
				></div>
				<div className={styles.buttons}>
					<Button data={data.buttonOne} />
					{/* si el botón 2 no viene no se mostrará */}
					{data.buttonTwo && <Button data={data.buttonTwo} />}
				</div>
			</div>
		</section>
	);
};

export default Benefit;
