import { TypesBanner } from '@components/banner/types';
import { TypeButton, TypeDescription } from '@types/global';

export const banner: TypesBanner = {
	title: `<h1>¿Tienes una <strong>tienda en Komercia? <br /></strong><span>Realiza tus envíos en segundos</span></h1>`,
	description:
		'<p>Si tu tienda hace parte de <strong>Komercia Colombia,</strong> ahora también podrás automatizar el envío de tus productos con las <strong> principales empresas de transporte de envíos en Colombia</strong> y llegar a más lugares con tu emprendimiento.</p>',
	image: '/images/banners/komercia.png',
	alt: 'Banner komercia',
	orientation: '',
	buttonOne: {
		color: 'buttonBlue',
		title: 'SOLICITA UNA ASESORÍA',
		url: '#asesoria',
		type: TypeButton.href,
	},
	buttonTwo: {
		color: 'buttonOrange',
		title: 'CONECTA TU TIENDA',
		url: 'https://ayuda.komercia.co/kb/guide/es/mi-paquete-0Q7HhVASNb/Steps/1165136',
		type: TypeButton.blank,
	},
};

export const storages = {
	image: '/images/storages/background-blue.png',
	alt: 'background blue',
	colorText: 'textWhite',
	colorItem: 'itemOrange',
	title: 'Ventajas de',
	titleStrong: 'integrar tu tienda',
	description:
		'<p>Integrar <strong><mark>Mi Paquete</mark></strong> a tu tienda en <strong>Komercia</strong> no solo hará más sencilla tu <strong>logística de envíos,</strong> sino que también te ayudará a cerrar más ventas gracias a su diversidad de opciones.</p>',
	items: [
		{
			image: '/images/icons/add-orange.png',
			alt: 'icon add',
			title: 'Fácil creación',
			description:
				'Crear tu tienda online en Komercia es sencillo y puedes configurarla en minutos.',
		},
		{
			image: '/images/icons/personalization-orange.png',
			alt: 'icon personalization',
			title: 'Personaliza tu marca',
			description:
				'Komercia te permite crear catálogos, usar pasarela de pagos, carrito de compras y más.',
		},
		{
			image: '/images/icons/fast-orange.png',
			alt: 'icon fast',
			title: 'Rápida integración',
			description:
				'Añadir Mi Paquete como método de envío es sencillo y toma menos de 1 minuto.',
		},
		{
			image: '/images/icons/options.png',
			alt: 'icon options',
			title: 'Variedad de envíos',
			description:
				'Incluye la opción de pagos contra entrega a nivel urbano y nacional, y envíos normales.',
		},
	],
	buttonOne: {
		color: 'buttonOrange',
		title: 'SOLICITA UNA ASESORÍA',
		url: '#',
	},
};

export const features = {
	type: TypeDescription.image,
	image: '/images/features/komercia.png',
	alt: 'features',
	title:
		'<p>¿Por qué integrar tu tienda en Komercia <span><mark>con Mi Paquete?</mark></span></p>',
	orientation: 'right',
	width: 616,
	height: 440,
	items: [
		{
			image: '/images/icons/time.png',
			alt: 'icon time',
			description: 'Integra tu e commerce en cuestión de minutos',
		},
		{
			image: '/images/icons/include.png',
			alt: 'icon include',
			description:
				'Incluye la opción de envíos normales y con Pago Contra Entrega',
		},
		{
			image: '/images/icons/transport-two.png',
			alt: 'icon transport-two',
			description: 'Realiza entregas a nivel urbano y nacional',
		},
		{
			image: '/images/icons/quote.png',
			alt: 'icon quote',
			description: 'Genera la guía y solicitud de recogida de forma automática',
		},
	],
	buttonOne: {
		color: 'buttonBlue',
		title: 'SOLICITA UNA ASESORÍA',
		url: '#asesoria',
		type: TypeButton.href,
	},
	buttonTwo: {
		color: 'buttonOrange',
		title: 'CONECTA TU TIENDA',
		url: 'https://ayuda.komercia.co/kb/guide/es/mi-paquete-0Q7HhVASNb/Steps/1165136',
		type: TypeButton.blank,
	},
};
export const question = [
	{
		title: '¿Tiene algún costo la configuración de mipaquete.com en Komercia?',
		description: '<p>No tiene ningún costo. Solo pagas por tus envíos.</p>',
	},
	{
		title: 'Necesito apoyo técnico para la configuración.',
		description:
			'<p>Comunícate al whatsapp de soporte de Komercia <a href="tel:+573107884893">+57 310 7884893</a>, están disponibles para ayudarte.</p>',
	},
];

export const form = {
	title:
		'<h4>¿Tienes tu tienda en Komercia Colombia? <strong>Mejora tu logística de envíos</strong></h4>',
	description:
		'<p>Con <strong><mark>Mi Paquete</mark></strong> podrás ofrecer a tus clientes la opción de conocer el costo de sus productos más el envío, y llegar a más lugares con las <strong>principales empresas de transporte de envíos</strong> en el país.</p>',
	image: '/images/form/background-blue.png',
	alt: 'background form',
	colorTextBackground: 'white',
	titleForm: '<p>Automatizamos el éxito de <span>tu ecommerce</span></p>',
	formDescription:
		'<p>Simplifica tu logística y aumenta las ventas de tu tienda <strong>¡Compártenos tus datos para ayudarte!</strong></p>',
	FormColorSpan: 'orange',
	listId: '103',
	textSubmit: 'PROGRAMA UNA ASESORÍA',
};
