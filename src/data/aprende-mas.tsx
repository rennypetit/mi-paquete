import { TypesBanner } from '@components/banner/types';
import { TypeButton } from '@types/global';

export const metaTags = {
	title: 'Centro de ayuda | Aprende más | Mi Paquete',
	description:
		'Aumenta tus conocimientos en logística, marketing para ecommerce, automatización de envíos y más, con nuestros tutoriales impartidos por expertos',
};

export const banner: TypesBanner = {
	title: `<h1><span>¿Quieres aumentar tus conocimientos en automatización de envíos, logística, marketing digital para ecommerce y ventas?</span></h1>`,
	description:
		'<p>Aquí encontrarás tutoriales, consejos, tips y herramientas que te ayudarán a <strong>hacer crecer tu ecommerce</strong> o tienda en redes sociales.</p>',
	image: '/images/banners/aprende-mas.png',
	alt: 'Banner aprende más',
	orientation: 'orientationRight',
	buttonOne: {
		color: 'buttonBlue',
		title: 'CONOCER MÁS',
		url: '#conocer-mas',
		type: TypeButton.href,
	},
};

export const cards = [
	{
		video: 'https://www.youtube.com/embed/EIuI_OV20HA',
		title:
			'<h3>¿Cómo vender en el cyberlunes y otras fechas promocionales?</h3>',
	},
	{
		video: 'https://www.youtube.com/embed/ACEJtUUg1FY',
		title:
			'<h3>Descubre la importancia de la <strong>automatización de envíos</strong> en ecommerce</h3>',
	},
	{
		video: 'https://www.youtube.com/embed/SiuW2y_EB6o',
		title: '<h3>Automatiza tus <strong>envíos Jumpseller</strong></h3>',
	},
	{
		video: 'https://www.youtube.com/embed/8q6He8bvlq4',
		title:
			'<h3>Automatiza los envíos de <strong>tu tienda en Shopify</strong></h3>',
	},
];

export const commercial = {
	colorText: 'textWhite',
	description:
		'<h3>Adquiere información, <strong> tips y consejos para tu ecommerce</strong></h3><p>Suscríbete y recibe información exclusiva, promociones especiales, consejos para incrementar las ventas de tu ecommerce o tienda en redes sociales, y más.</p>',
	image: '/images/commercials/envios-tradicionales-background.png',
	imageDesktop:
		'/images/commercials/envios-tradicionales-background-desktop.png',
	alt: 'background grandes ecommerce',
};

export const blog = [
	{
		url: '#',
		image: '/images/blog/entrada.png',
		title: 'NOMBRE DE LA ENTRADA',
		date: 'Autor y Fecha',
		description:
			'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
	},
	{
		url: '#',
		image: '/images/blog/entrada.png',
		title: 'NOMBRE DE LA ENTRADA',
		date: 'Autor y Fecha',
		description:
			'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
	},
	{
		url: '#',
		image: '/images/blog/entrada.png',
		title: 'NOMBRE DE LA ENTRADA',
		date: 'Autor y Fecha',
		description:
			'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
	},
	{
		url: '#',
		image: '/images/blog/entrada.png',
		title: 'NOMBRE DE LA ENTRADA',
		date: 'Autor y Fecha',
		description:
			'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
	},
];
