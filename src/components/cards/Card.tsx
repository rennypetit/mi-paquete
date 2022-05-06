import Cards from './Cards';
import Slider from 'react-slick';
import { useContext } from 'react';
import WidthContext from '@contexts/width';
// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Card.module.scss';
export default function Card({ data }) {
	const { widthViewport } = useContext(WidthContext);
	// configuration slider BlogCard
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
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
		<div
			className={
				data.classContainer
					? `${styles.card_container} ${styles[data.classContainer]}`
					: `${styles.card_container} storiesSuccessContainer`
			}
		>
			<div dangerouslySetInnerHTML={{ __html: data.title }}></div>
			<p>{data.description}</p>
			{/* <div className={`${styles.card_container_cards} cards_sliders`}>
				{widthViewport >= 1024
					? data.items.map((item, index) => <Cards data={item} key={index} />)
					: ''}
				{widthViewport < 1024 ? (
					<Slider {...settings}>
						{data.items.map((item, index) => (
							<Cards data={item} key={index} />
						))}
					</Slider>
				) : (
					''
				)}
			</div> */}
		</div>
	);
}
