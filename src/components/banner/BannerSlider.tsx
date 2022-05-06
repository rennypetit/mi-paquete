import Slider from 'react-slick';
import Banner from './index';
// types
import { PropsSlider } from './types';
// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function BannerSlider({ items }: PropsSlider) {
	// configuration slider banner
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 1,
	};
	return (
		<Slider {...settings} className='dots-grey'>
			{items.map((item, index) => (
				<Banner data={item} key={index} />
			))}
		</Slider>
	);
}
