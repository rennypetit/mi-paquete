import Image from 'next/image';
import Slider from 'react-slick';

// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './CardBenefit.module.scss';
const Card = ({ items }) => {
	// configuration slider banner
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		rows: 2,
		slidesPerRow: 3,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesPerRow: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesPerRow: 1,
				},
			},
		],
	};
	return (
		<div className={`${styles.container} card-benefit`}>
			<div className={styles.items}>
				<Slider {...settings}>
					{items.map((item, index) => (
						<div className={styles.item} key={index}>
							<div className={styles.image}>
								<Image
									src={item.image}
									alt={item.alt}
									quality={100}
									width={25}
									height={25}
									layout='fixed'
								/>
							</div>
							<p className={styles.title}>
								{item.title}{' '}
								<span className={styles[item.color]}>{item.titleSpan}</span>
							</p>
							<p className={styles.description}>{item.description}</p>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Card;
