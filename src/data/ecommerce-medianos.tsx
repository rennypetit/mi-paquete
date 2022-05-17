import { TypesBanner } from '@components/banner/types';
import { TypeButton, TypeDescription } from '@types/global';

export const banner: TypesBanner = {
	orientation: 'orientationLeft',
	title: `<h1>Beneficios para ecommerce medianos<span> Para comercios electrónicos que hagan entre 500 y 5.000 envíos mensuales</span></h1>`,
	description:
		'<p>Déjanos asesorarte para encontrar un descuento especial según tu volumen de envíos y llevar la logística de entregas de tu marca al siguiente nivel.</p>',
	image: '/images/banners/ecommerce-medianos.png',
	alt: 'Banner ecommerce-medianos',
	buttonOne: {
		color: 'buttonBlue',
		title: 'CONOCE MÁS',
		url: '#asesoria',
		type: TypeButton.href,
	},
};
export const features = {
	type: TypeDescription.image,
	orientation: 'right',
	image: '/images/features/ecommer-medianos.png',
	alt: 'features',
	width: 525,
	height: 467,
	title: '¿Cómo saber si eres',
	titleTwo: 'un ecommerce mediano?',
	colorTitleTwo: 'blue',
	description:
		'<p>Si el nivel de envíos de tu ecommerce se encuentra <strong>entre 200 y 5.000 pedidos mensuales</strong> este plan es ideal para ti, además esto ayudará a que tu <strong>equipo de logística</strong> pueda optimizar gastos de envío.</p>',
};

export const featuresTwo = {
	image: '/images/features/ecommer-medianos-two.png',
	alt: 'features two',
	width: 465,
	height: 398,
	title: '¿Por qué es una buena opción',
	titleTwo: 'para ti?',
	colorTitleTwo: 'blue',
	description: '<p>Con nuestro plan para medianos ecommerce obtendrás:</p>',
	items: `
	<ul>
		<li>Servicio de almacenamiento</li>
		<li>Diversidad de transportadoras en una sola plataforma</li>
		<li>Acceso a descuentos por volumen de envíos</li>
		<li>Centro de ayuda para gestión de novedades</li>
		<li>Integración con Shopify, Woocommerce y más</li>
		<li>Entregas para el mismo día</li>
	</ul>`,
	buttonOne: {
		color: 'buttonBlue',
		title: 'MÁS INFORMACIÓN',
		url: '#asesoria',
		type: TypeButton.href,
	},
};

export const form = {
	title: '<h4><strong>Recibe más beneficios </strong>que solo descuentos</h4>',
	description:
		'<p>Con <strong><mark>Mi Paquete</mark></strong> no solo recibirás <strong>descuentos por el volumen de tus envíos,</strong> también podrás integrar tu ecommerce sin importar en qué plataforma se encuentre alojado, facilitando el envío de tus productos y ahorrándote tiempo.</p>',
	image: '/images/form/background-orange.png',
	alt: 'background form',
	colorTextBackground: 'black',
	titleForm: '<p>Sincroniza los envíos de <span>tu ecommerce</span></p>',
	formDescription:
		'<p>Uno de nuestros expertos te contactará para explicarte cómo optimizar tus costos logísticos según tu volumen de envíos.</p>',
	FormColorSpan: 'blue',
	listId: '128',
	textSubmit: 'PROGRAMA UNA ASESORÍA',
};

export const textWhatsapp =
	'<p>¡Hola! ¿Quieres recibir descuentos <br />por tus envíos?</p>';
