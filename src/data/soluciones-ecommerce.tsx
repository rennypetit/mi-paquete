import { TypeButton, TypeDescription } from '@types/global';

export const metaTags = {
	title: 'Soluciones logística de envíos para ecommerce | Mi Paquete',
	description:
		'Adquiere envíos con pago contra entrega, envíos tradicionales, almacenamiento de mercancía y diferentes transportadoras de envíos para tu ecommerce.',
};

export const cards = [
	{
		image: '/images/soluciones-ecommerce/envios-tradicionales.png',
		alt: 'envios tradicionales',
		title: 'ENVÍOS TRADICIONALES',
		description:
			'Realiza envíos urbanos o nacionales y elige la transportadora que se adapte a tus necesidades',
		button: {
			color: 'buttonBlue',
			title: 'VER MÁS',
			url: '/soluciones-ecommerce/envios-tradicionales',
			type: TypeButton.link,
		},
	},
	{
		image: '/images/soluciones-ecommerce/envios-pago-contraentrega.png',
		alt: 'envios pago contraentrega',
		title: 'ENVÍOS PAGO CONTRA ENTREGA',
		description:
			'Ofrece a tus clientes la posibilidad de pagar sus envíos una vez lo reciban en casa',
		button: {
			color: 'buttonBlue',
			title: 'VER MÁS',
			url: '/soluciones-ecommerce/envios-tradicionales',
			type: TypeButton.link,
		},
	},
	{
		image: '/images/soluciones-ecommerce/almacenamiento.png',
		alt: 'almacenamiento',
		title: 'ALMACENAMIENTO',
		description:
			'Mejora la logística de almacenamiento de productos y el alistamiento y despacho de mercancía',
		button: {
			color: 'buttonBlue',
			title: 'VER MÁS',
			url: '/soluciones-ecommerce/envios-tradicionales',
			type: TypeButton.link,
		},
	},
	{
		image: '/images/soluciones-ecommerce/pasarela-de-envios.png',
		alt: 'pasarela de envios',
		title: 'PASARELA DE ENVÍOS',
		description:
			'Administra tu logística de entregas con diferentes transportadoras eligiendo la mejor opción',
		button: {
			color: 'buttonBlue',
			title: 'VER MÁS',
			url: '/soluciones-ecommerce/envios-tradicionales',
			type: TypeButton.link,
		},
	},
];

export const features = {
	type: TypeDescription.image,
	orientation: 'right',
	image: '/images/soluciones-ecommerce/cobertura.png',
	alt: 'cobertura',
	colorTitleTwo: 'blue',
	width: 318,
	height: 512,
	title: '¡Amplía la',
	titleTwo: 'cobertura de tus envíos!',
	description:
		'<p>Con Mi Paquete podrás llevar tu ecommerce a más lugares, ya que contamos con envíos urbanos, locales y nacionales, además de diferentes modalidades como pagos contra entrega, para que expandas e incrementes tus ventas.</p>',
};
