import { TypesBannerBackground } from '@components/banner/types';

export const banner: TypesBannerBackground = {
	orientation: '',
	title: 'Centro de ayuda Mi Paquete',
	description: '¿Tienes alguna duda sobre tus envíos? ¡Te ayudamos!',
	image: '/images/banners/help.png',
	imageDesktop: '/images/banners/help-desktop.png',

	alt: 'Banner background',
};

export const cards = [
	{
		image: '/images/cards/primeros-pasos.png',
		alt: 'card primeros pasos',
		title: 'Primeros pasos',
	},
	{
		image: '/images/cards/aprende-mas.png',
		alt: 'card Aprende más',
		title: 'Aprende más',
	},
	{
		image: '/images/cards/soporte-tecnico.png',
		alt: 'card Soporte técnico',
		title: 'Soporte técnico',
	},
	{
		image: '/images/cards/centro-de-novedades.png',
		alt: 'card Centro de novedades',
		title: 'Centro de novedades',
	},
	{
		image: '/images/cards/consulta-tus-recaudos.png',
		alt: 'card Consulta tus recaudos',
		title: 'Consulta tus recaudos',
	},
];

export const commercial = {
	colorText: 'textBlack',
	description:
		'<h3>¡Descubre cómo hacer <span>tu primer envío!</span></h3><p>Emprender no es fácil pero nosotros lo hacemos más simple con <strong>Mi Paquete.</strong></p>',
	image: '/images/commercials/help.png',
	imageDesktop: '/images/commercials/help.png',
	alt: 'background commercials',
	button: {
		title: 'MÁS INFORMACIÓN',
		url: '#',
		color: 'buttonBlue',
	},
};

export const question = [
	{
		title: 'Problemas para procesar la guía de envío',
		description:
			'Cuando el sistema te arroja un error es porque la guía no logró procesarse en el sistema de la transportadora, para obtener la guía solo debes escribirnos a nuestro WhatsApp: 3216330447, y compartirnos el código mp de tu envío, en solo minutos te estaremos compartiendo el pdf de la misma.',
	},
	{
		title: 'Necesito entregar el paquete en una oficina.',
		description: '<ul><li>a</li></ul>',
	},
	{
		title: 'Necesito entregar el paquete en una oficina.',
		description: '<ol><li>a</li></ol>',
	},
	{
		title: 'Necesito entregar el paquete en una oficina.',
		description: '<a href="example.com"> example</a>',
	},
];
