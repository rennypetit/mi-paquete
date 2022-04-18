import testimonials from '@data/componentTestimonialStories';
import Image from 'next/image';
import {useContext} from 'react';
import WidthContext from '@contexts/width';
import styles from './Testimonial.module.scss';
const Testimonial = () => {
	const { widthViewport } = useContext(WidthContext);
	return (
		<section className={styles.container}>
			<div className={styles.description}>
				<Image
					src={testimonials.icon}
					alt={testimonials.alt}
					width={146}
					height={109}
				/>
				<p className={styles.title}>
					{testimonials.title} <span>{testimonials.titleSpan}</span>
				</p>
			</div>

			<div className={styles.items}>
			{testimonials.items.map((item, index) => (
						<div className={`${styles.card} ${styles.cardSingle}`} key={index}>
							<div className={styles.cardIntro}>
							{ widthViewport >= 1024 ?  
							<div className={`${styles.cardPersonDescription} ${styles.cardPersonWidth}`}>
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
							</div> : 
								<div className={`${styles.cardPersonDescription} ${styles.cardPersonWidth}`}>
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
							}
							<div className={`${styles.cardPerson} ${styles.cardImageWidth}`}>
								<div className={styles.cardImage}>
									<Image
										src={item.person.image}
										alt={item.person.alt}
										width={147}
										height={147}
									/>
								</div>
							</div>
							</div>
							{ widthViewport < 1024 ? <p className={styles.cardDescription}>{item.description}</p> : ""}
						</div>
					))}
			</div>
		</section>
	);
};

export default Testimonial;
