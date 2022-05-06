import { TypesBannerBackground } from '@components/banner/types';
import { TypeButton } from '@types/global';

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
		url: '/centro-de-ayuda/primeros-pasos',
		type: TypeButton.link,
	},
	{
		image: '/images/cards/aprende-mas.png',
		alt: 'card Aprende más',
		title: 'Aprende más',
		url: '/centro-de-ayuda/aprende-mas',
		type: TypeButton.link,
	},
	{
		image: '/images/cards/centro-de-novedades.png',
		alt: 'card Centro de novedades',
		title: 'Centro de novedades',
		url: 'https://centrodenovedades.mipaquete.com/novedades',
		type: TypeButton.blank,
	},
	{
		image: '/images/cards/consulta-tus-recaudos.png',
		alt: 'card Consulta tus recaudos',
		title: 'Consulta tus recaudos',
		url: 'https://mipaquete.com/solucionesusuario/consulta_recaudos/',
		type: TypeButton.blank,
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
		color: 'buttonBlue',
		url: '/centro-de-ayuda/primer-envio',
		type: TypeButton.link,
	},
};
