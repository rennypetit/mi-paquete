import Image from 'next/image';
import Slider from 'react-slick';

// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './FeatureCardSlider.module.scss';
export default function FeatureCardSlider({ items }) {
	// configuration slider banner
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
				},
			},
		],
	};
	return (
		<div className={styles.container}>
			<Slider {...settings}>
				{items.map((item, index) => (
					<div className={styles.card} key={index}>
						<Image
							src={item.image}
							alt={item.alt}
							quality={100}
							width={84}
							height={84}
							layout='fixed'
						/>
						<p className={styles.title}>{item.title}</p>
						<p className={styles.description}>{item.description}</p>
					</div>
				))}
			</Slider>
		</div>
	);
}
