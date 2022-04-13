import Image from 'next/image';
import Slider from 'react-slick';
import Button from '@components/button';

// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.scss';
import { useState, useRef, Fragment } from 'react';
const StorageSlider = ({ items }) => {
	const [slider1, setSlider1] = useState(items);
	const [slider2, setSlider2] = useState(items);
	const [slider3, setSlider3] = useState(items);

	// configuration slider banner
	const settings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		touchMove: false,
		fade: true,
	};
	// configuration slider banner
	const settingsTwo = {
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
		],
	};
	if (items === undefined) return ''; // sino tiene nada no retorna nada
	return (
		<div className={`${styles.container} almacenamientoSlider`}>
			<div className={styles.sliderOne}>
				<Slider
					{...settings}
					asNavFor={slider3}
					ref={(slider) => setSlider1(slider)}
				>
					{items.map((item, index) => (
						<div className={styles.card} key={index}>
							<Image src={item.image} alt={item.alt} width={512} height={378} />
						</div>
					))}
				</Slider>
			</div>

			<div className={styles.items}>
				<Slider
					{...settingsTwo}
					asNavFor={slider1}
					focusOnSelect={true}
					ref={(slider) => setSlider2(slider)}
				>
					{items.map((item, index) => (
						<div className={styles.item} key={index}>
							<Image src={item.image} alt={item.alt} width={155} height={109} />
						</div>
					))}
				</Slider>
			</div>

			<div className={styles.content}>
				<Slider
					{...settings}
					asNavFor={slider2}
					ref={(slider) => setSlider3(slider)}
				>
					{items.map((item, index) => (
						<Fragment key={index}>
							<h3 className={styles.title}>
								{item.title} <strong>{item.titleStrong}</strong>
							</h3>
							<div
								className={styles.description}
								dangerouslySetInnerHTML={{ __html: item.description }}
							></div>
							<div className={styles.button}>
								<Button data={item.button} />
							</div>
						</Fragment>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default StorageSlider;
