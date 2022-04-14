import React from 'react';
import Slider from 'react-slick';
// only data of components
import ServiceItems from './ServiceItems';
// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Service.module.scss';
export default function Services({ items }) {
	// configuration slider banner
	const settings = {
		arrows: true,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					arrows: false,
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className={`${styles.container} services`}>
			<div className={styles.information}>
				<h3 className={styles.category}>SERVICIOS</h3>
				<h4 className={styles.title}>
					Conoce más sobre nuestros <span>servicios logísticos</span>
				</h4>
				<p className={styles.description}>
					Crear una tienda virtual implica tener control sobre todos los
					procesos, por eso te ayudamos con automatización de envíos, pagos
					contra entrega, almacenamiento de mercancía y más.
				</p>
			</div>
			<div className={styles.items}>
				<Slider {...settings}>
					{items.map((item, index) => (
						<ServiceItems item={item} key={index} />
					))}
				</Slider>
			</div>
		</div>
	);
}
