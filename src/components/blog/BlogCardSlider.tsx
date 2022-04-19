import Slider from 'react-slick';
import BlogCard from './BlogCard';
// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function BlogCardSlider({ items }) {
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
		<Slider {...settings} className='dots-grey'>
			{items.map((item, index) => (
				<BlogCard data={item} key={index} />
			))}
		</Slider>
	);
}
