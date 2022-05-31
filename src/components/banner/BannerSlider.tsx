import Slider from 'react-slick';
import Banner from './index';
// types
import { PropsSlider } from './types';
// styles
export default function BannerSlider({ items }: PropsSlider) {
	// configuration slider banner
	const settings = {
		autoplay: true,
		autoplaySpeed: 20000,
		dots: true,
		infinite: true,
		initialSlide: 1,
		slidesToScroll: 1,
		slidesToShow: 1,
	};
	return (
		<Slider {...settings} className='dots-grey'>
			{items.map((item, index) => (
				<Banner data={item} key={index} />
			))}
		</Slider>
	);
}
