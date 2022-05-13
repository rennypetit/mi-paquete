import Slider from 'react-slick';
import styles from './SliderVideos.module.scss';
const SliderVideos = ({ items }) => {
	// configuration slider banner
	const settings = {
		autoplay: false,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className={styles.container}>
			<div className={styles.cards}>
				<Slider {...settings} className='dots-blue'>
					{items.map((item, index) => (
						<a
							className={`${styles.card} video`}
							href={item.video}
							target='_blank'
							rel='noopener noreferrer'
							key={index}
						>
							<iframe
								width='336'
								height='239'
								src={item.video}
								title='YouTube video player'
								frameBorder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowFullScreen
							/>
							<div
								className={styles.title}
								dangerouslySetInnerHTML={{ __html: item.title }}
							></div>
							<p className={styles.url}>Ver video</p>
						</a>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default SliderVideos;
