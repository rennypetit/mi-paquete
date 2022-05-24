import { useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import Button from '@components/button';

// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.scss';
const StorageSlider = ({ data }) => {
	const [slider1, setSlider1] = useState(data);
	const [slider2, setSlider2] = useState(data);

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
	if (data.items === undefined) return ''; // sino tiene nada no retorna nada
	return (
		<div className={`${styles.container} almacenamientoSlider`}>
			<div className={styles.sliderOne}>
				<Slider
					{...settings}
					asNavFor={slider2}
					ref={(slider) => setSlider1(slider)}
				>
					{data.items.map((item, index) => (
						<div className={styles.card} key={index}>
							<Image
								src={item.image}
								alt={item.alt}
								quality={100}
								width={512}
								height={378}
							/>
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
					{data.items.map((item, index) => (
						<div className={styles.item} key={index}>
							<Image
								src={item.image}
								alt={item.alt}
								quality={100}
								width={155}
								height={109}
							/>
						</div>
					))}
				</Slider>
			</div>

			<div className={styles.content}>
				<h3 className={styles.title}>
					{data.title} <strong>{data.titleStrong}</strong>
				</h3>
				<div
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: data.description }}
				></div>
				<div className={styles.button}>
					<Button data={data.button} />
				</div>
			</div>
		</div>
	);
};

export default StorageSlider;
