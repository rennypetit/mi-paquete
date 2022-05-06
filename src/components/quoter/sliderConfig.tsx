// configuration slider banner
export const settings = {
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
