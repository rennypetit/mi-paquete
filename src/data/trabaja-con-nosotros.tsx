import { TypeButton } from '@types/global';
import { TypesBanner } from '@components/banner/types';

export const banner: TypesBanner = {
	title: '<h1>Trabaja con <span>nosotros</span></h1>',
	description:
		'<p>En este momento no tenemos convocatorias disponibles, pero te invitamos a explorar nuestra página para que conozcas más sobre nosotros.</p>',
	image: '/images/banners/banner-work-with-us.png',
	imageDesktop: '/images/banners/banner-works-with-us-desktop.jpg',
	alt: 'Trabaja con nosotros',
};

export const cards = {
	title: '<h1>Vacantes <span>disponibles</span></h1>',
	description:
		'En este momento no tenemos convocatorias abiertas pero te invitamos a explorar nuestra página para que conozcas más de nosotros.',
	classContainer: 'cardContainerMargin',
	// items: [
	// 	{
	// 		image: '/images/cards/img-solicitud-trabajo.png',
	// 		title: 'NOMBRE DEL PUESTO',
	// 		date: 'Fecha de publicación vacante',
	// 		description:
	// 			'Maecenas mi lacus, dictum vitae imperdiet at, eleifend sed risus. Proin et libero enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum eros quis tincidunt ullamcorper. Maecenas pharetra enim eu massa venenatis, non consectetur sapien consequat. Maecenas mi lacus, dictum vitae imperdiet at, eleifend sed risus. Proin et libero enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum eros quis tincidunt ullamcorper. Maecenas pharetra enim eu massa venenatis, non consectetur sapien consequat Maecenas mi lacus, dictum vitae imperdiet at, eleifend sed risus. Proin et libero enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum eros quis tincidunt ullamcorper. Maecenas pharetra enim eu massa venenatis, non consectetur sapien consequat.',
	// 		titleDate: 'Vigencia hasta la fecha:',
	// 		dateExpiry: '16/04/2022',
	// 		titleBtn: 'Envía tu hoja de vida a:',
	// 		buttonOne: {
	// 			color: 'buttonBlueFontSmall',
	// 			title: 'recursoshumanos@mipaquete.com',
	// 			url: 'mailto:recursoshumanos@mipaquete.com',
	// 			type: TypeButton.blank,
	// 		},
	// 		sizeCard: 'sizeWorks',
	// 	},
	// 	{
	// 		image: '/images/cards/img-solicitud-trabajo-2.png',
	// 		title: 'NOMBRE DEL PUESTO',
	// 		date: 'Fecha de publicación vacante',
	// 		description:
	// 			'Maecenas mi lacus, dictum vitae imperdiet at, eleifend sed risus. Proin et libero enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum eros quis tincidunt ullamcorper. Maecenas pharetra enim eu massa venenatis, non consectetur sapien consequat. Maecenas mi lacus, dictum vitae imperdiet at, eleifend sed risus. Proin et libero enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum eros quis tincidunt ullamcorper. Maecenas pharetra enim eu massa venenatis, non consectetur sapien consequat Maecenas mi lacus, dictum vitae imperdiet at, eleifend sed risus. Proin et libero enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum eros quis tincidunt ullamcorper. Maecenas pharetra enim eu massa venenatis, non consectetur sapien consequat.',
	// 		titleDate: 'Vigencia hasta la fecha:',
	// 		dateExpiry: '16/04/2022',
	// 		titleBtn: 'Envía tu hoja de vida a:',
	// 		buttonOne: {
	// 			color: 'buttonBlueFontSmall',
	// 			title: 'recursoshumanos@mipaquete.com',
	// 			url: 'mailto:recursoshumanos@mipaquete.com',
	// 			type: TypeButton.blank,
	// 		},
	// 		sizeCard: 'sizeWorks',
	// 	},
	// 	{
	// 		image: '/images/cards/img-solicitud-trabajo-3.png',
	// 		title: 'NOMBRE DEL PUESTO',
	// 		date: 'Fecha de publicación vacante',
	// 		description:
	// 			'Maecenas mi lacus, dictum vitae imperdiet at, eleifend sed risus. Proin et libero enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum eros quis tincidunt ullamcorper. Maecenas pharetra enim eu massa venenatis, non consectetur sapien consequat. Maecenas mi lacus, dictum vitae imperdiet at, eleifend sed risus. Proin et libero enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum eros quis tincidunt ullamcorper. Maecenas pharetra enim eu massa venenatis, non consectetur sapien consequat Maecenas mi lacus, dictum vitae imperdiet at, eleifend sed risus. Proin et libero enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum eros quis tincidunt ullamcorper. Maecenas pharetra enim eu massa venenatis, non consectetur sapien consequat.',
	// 		titleDate: 'Vigencia hasta la fecha:',
	// 		dateExpiry: '16/04/2022',
	// 		titleBtn: 'Envía tu hoja de vida a:',
	// 		buttonOne: {
	// 			color: 'buttonBlueFontSmall',
	// 			title: 'recursoshumanos@mipaquete.com',
	// 			url: 'mailto:recursoshumanos@mipaquete.com',
	// 			type: TypeButton.blank,
	// 		},
	// 		sizeCard: 'sizeWorks',
	// 	},
	// ],
};

export const testimonials = {
	icon: '/images/quote.png',
	alt: 'quote',
	title:
		'<p>En Mi Paquete hemos recaudado más de $60 mil millones en envíos con pago contra entrega a nuestros clientes <span>en toda Colombia.</span></p>',
	items: [
		{
			description:
				'<p>Mis ventas aumentaron en un 50% desde que envío con Pago Contra Entrega a nivel nacional con <mark>Mi Paquete</mark>. Tienen un gran equipo de trabajo y recibo todo el soporte logístico.</p>',
			person: {
				image: '/images/testimonials/jeimer.png',
				alt: 'person',
				name: 'Jeimer López',
				nickName: '1000Marikdas',
			},
		},
		{
			description:
				'<p>mipaquete.com me permite cotizar rápidamente envíos a múltiples destinos en Colombia, la programación de envío es fácil y amigable.</p>',
			person: {
				image: '/images/testimonials/camila.png',
				alt: 'person',
				name: 'Camila Duque',
				nickName: 'Ecowindel',
			},
		},
	],
};
