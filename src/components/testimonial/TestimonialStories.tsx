import Image from 'next/image';
import { useContext } from 'react';
import WidthContext from '@contexts/width';
import styles from './Testimonial.module.scss';
const TestimonialStories = ({ data }) => {
	const { widthViewport } = useContext(WidthContext);
	return (
		<section className={styles.container}>
			<div className={styles.description}>
				<Image
					src={data.icon}
					alt={data.alt}
					quality={100}
					width={146}
					height={109}
				/>
				<p className={styles.title}>
					{data.title} <span>{data.titleSpan}</span>
				</p>
			</div>

			<div className={styles.items}>
				{data.items.map((item, index) => (
					<div className={`${styles.card} ${styles.cardSingle}`} key={index}>
						<div className={styles.cardIntro}>
							{widthViewport >= 1024 ? (
								<div
									className={`${styles.cardPersonDescription} ${styles.cardPersonWidth}`}
								>
									<p>{item.person.name}</p>
									<span>{item.person.nickName}</span>
									<p className={styles.cardDescription_p}>{item.description}</p>
									<a
										className={styles.url}
										href='http://'
										target='_blank'
										rel='noopener noreferrer'
									>
										VER CASO DE ÉXITO
									</a>
								</div>
							) : (
								<div
									className={`${styles.cardPersonDescription} ${styles.cardPersonWidth}`}
								>
									<p>{item.person.name}</p>
									<span>{item.person.nickName}</span>
									<a
										className={styles.url}
										href='http://'
										target='_blank'
										rel='noopener noreferrer'
									>
										VER CASO DE ÉXITO
									</a>
								</div>
							)}
							<div className={`${styles.cardPerson} ${styles.cardImageWidth}`}>
								<div className={styles.cardImage}>
									<Image
										src={item.person.image}
										alt={item.person.alt}
										quality={100}
										width={147}
										height={147}
									/>
								</div>
							</div>
						</div>
						{widthViewport < 1024 ? (
							<p className={styles.cardDescription}>{item.description}</p>
						) : (
							''
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default TestimonialStories;
