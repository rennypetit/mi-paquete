import Slider from 'react-slick';
import testimonials from '@data/componentTestimonials';
import Image from 'next/image';
// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Testimonial.module.scss';
const Testimonial = () => {
	// configuration slider banner
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
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
				<Slider {...settings}>
					{testimonials.items.map((item, index) => (
						<div className={styles.card} key={index}>
							<p className={styles.cardDescription}>{item.description}</p>
							<a
								className={styles.url}
								href='http://'
								target='_blank'
								rel='noopener noreferrer'
							>
								VER CASO DE ÉXITO
							</a>
							<div className={styles.cardPerson}>
								<div className={styles.cardImage}>
									<Image
										src={item.person.image}
										alt={item.person.alt}
										width={92}
										height={92}
									/>
								</div>
								<div className={styles.cardPersonDescription}>
									<p>Jeimer López</p>
									<span>1000Marikdas</span>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};

export default Testimonial;
