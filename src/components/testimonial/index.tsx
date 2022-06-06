import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Testimonial.module.scss';
const Testimonial = ({ data, haveLink = true }) => {
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
					src={data.icon}
					alt={data.alt}
					quality={100}
					width={146}
					height={109}
					layout='fixed'
				/>
				<div
					className={styles.title}
					dangerouslySetInnerHTML={{ __html: data.title }}
				></div>
			</div>

			{data.items && (
				<div className={styles.items}>
					<Slider {...settings}>
						{data.items.map((item, index) => (
							<div className={styles.card} key={index}>
								<div
									className={styles.cardDescription}
									dangerouslySetInnerHTML={{ __html: item.description }}
								></div>
								{haveLink && (
									<Link href='/casos-de-exito'>
										<a className={styles.url}>VER CASO DE ÉXITO</a>
									</Link>
								)}

								<div className={styles.cardPerson}>
									<div className={styles.cardImage}>
										<Image
											src={item.person.image}
											alt={item.person.alt}
											blurDataURL={item.person.image}
											placeholder='blur'
											quality={100}
											width={92}
											height={92}
											layout='fixed'
										/>
									</div>
									<div className={styles.cardPersonDescription}>
										<p>{item.person.name}</p>
										<span>{item.person.nickName}</span>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			)}
		</section>
	);
};

export default Testimonial;
