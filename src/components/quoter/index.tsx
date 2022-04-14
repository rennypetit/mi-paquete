import Slider from 'react-slick';
import Place from './Place';
import Dimensions from './Dimensions';
import Amounts from './Amounts';
// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Quoter.module.scss';
export default function Quoter() {
	// configuration slider banner
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
				},
			},
		],
	};

	function PrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<button onClick={onClick} className='quoter-button-left'>
				ANTERIOR
			</button>
		);
	}
	function NextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<button onClick={onClick} className='quoter-button-right'>
				SIGUIENTE
			</button>
		);
	}

	return (
		<section>
			<form action='#' className={`${styles.container} quoter`}>
				<div className={styles.body}>
					<h2 className={styles.title}>
						Cotizar <span>envío de paquetes</span>
					</h2>
					<p className={styles.description}>
						Comprueba lo rápido y fácil que puedes realizar{' '}
						<strong>envíos de productos</strong> a través de{' '}
						<strong>Mi Paquete</strong>, eligiendo la mejor opción para ti.
					</p>
					<Slider {...settings}>
						<Place />
						<Dimensions />
						<Amounts />
					</Slider>
				</div>
				<button className={`${styles.button} button`}>COTIZA TU ENVÍO</button>
			</form>
		</section>
	);
}
