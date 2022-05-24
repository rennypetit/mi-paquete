import { TypeButton } from '@types/global';
import { TypesBanner } from '@components/banner/types';

export const metaTags = {
	title: 'Trabaja con nosotros | Mi Paquete',
	description:
		'Conoce las vacantes de empleo disponibles para diferentes cargos en nuestras áreas de trabajo. Aplica a la vacante que más se adapte a tu perfil',
};

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
		'<p>Somos un equipo de soñadores que trabajamos con <span>pasión y diversión</span> para facilitar la entrega de productos de los emprendedores.</p>',
	items: [
		{
			description:
				'<p><mark>Mi Paquete</mark> es una empresa que te habilita la posibilidad de dejar volar tu imaginación, donde tus propuestas son escuchadas e implementadas en el corto o mediano plazo, además el ambiente de trabajo es dinámico y cálido, donde prima la persona.</p> ',
			person: {
				image: '/images/testimonials/brandon.png',
				alt: 'brandon',
				name: 'Brandon Giraldo',
				nickName: 'Líder de operaciones',
			},
		},
		{
			description:
				'<p>En el poco tiempo que llevo en <mark>Mi Paquete</mark> se maneja un excelente ambiente laboral y un buen compañerismo, también he mejorado mis habilidades en desarrollo y mi conocimiento en base de datos.</p>',
			person: {
				image: '/images/testimonials/julian.png',
				alt: 'julian',
				name: 'Julián Echavarria',
				nickName: 'Área T.I. y soporte',
			},
		},
	],
};
