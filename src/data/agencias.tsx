import { TypeButton } from '@types/global';
import { TypesBanner } from '@components/banner/types';

export const banner: TypesBanner = {
	title: `<h1>Agencias <span>Mi Paquete</span></h1>`,
	subtitle: '',
	description:
		'<p>Te ayudamos si quieres convertir tu negocio en un <strong>Aliado Mi Paquete</strong> o necesitas encontrar uno de nuestros puntos para realizar tus envíos.</p>',
	background: 'orange',
	image: '/images/banners/fondo_mobile_agencia.jpg',
	alt: 'Banner agencias',
	orientation: 'orientationRight',
	buttonTwo: {
		color: 'buttonBlue',
		title: 'Conoce más',
		url: '#asesoria',
		type: TypeButton.href,
	},
};

export const maps = {
	title: 'Encuentra nuestra agencia aliada ',
	titleSpan: 'más cercana a ti',
	description:
		'Contamos con puntos aliados en diferentes sectores de las ciudades de Bogotá, Medellín y Cali para que puedas realizar los envíos de tu tienda sin problema.',
	titleCard: 'Descubre nuestras',
	titleCardSpan: 'agencias aliadas',
	descriptionCard:
		'Conoce los puntos físicos en tu ciudad donde podrás realizar tus envíos y recibir asesoría con el proceso de logística para enviar tus productos. Encuentra en el mapa el lugar más cercano a ti.',
	titleCity: 'Ciudad',
	items: [
		{
			id: 0,
			city: 'Cali',
			center: {
				lat: 3.4219865,
				lng: -76.5285415,
			},
		},
		{
			id: 1,
			city: 'Bogotá',
			center: {
				lat: 4.6182289,
				lng: -74.1885848,
			},
		},
		{
			id: 2,
			city: 'Medellín',
			center: {
				lat: 6.2458234,
				lng: -75.5621576,
			},
		},
	],
	pointsShops: [
		{
			lat: 4.6182289,
			lng: -74.1885848,
		},
		{
			lat: 4.6187622,
			lng: -74.1888262,
		},
		{
			lat: 4.6213301,
			lng: -74.1970391,
		},
	],
};

export const benefits = {
	image: '/images/icons/gps-extra.svg',
	alt: 'icon gps',
	title:
		'<h2>Convierte tu negocio en una agencia aliada y <span>genera ingresos extra</span></h2>',
	description:
		'Si tienes una papelería, peluquería, café internet, droguería u otro tipo de local físico, puedes convertirte en una agencia aliada y ayudar a nuestros clientes con sus procesos de envío recibiendo comisiones por venta.',
	buttonOne: {
		color: 'buttonBlue',
		title: 'Solicita una asesoria',
		url: '#asesoria',
		type: TypeButton.href,
	},
	items: [
		{
			image: '/images/icons/winner.svg',
			alt: 'icon time',
			title: 'ADQUIERE INGRESOS EXTRA',
			description:
				'Al ofrecer nuestro servicio de envíos podrás ganar comisiones por cada venta que realices.',
		},
		{
			image: '/images/icons/importacion.svg',
			alt: 'icon transport',
			title: 'CERO COSTOS DE IMPLEMENTACIÓN',
			description:
				'Ejecuta nuestro plan de agencias sin tener que pagar costos innecesarios.',
		},
		{
			image: '/images/icons/capacitacion.svg',
			alt: 'icon notification',
			title: 'RECIBE CAPACITACIÓN',
			description:
				'Te enseñamos a utilizar nuestra plataforma para que puedas efectuar los envíos de manera ágil y eficaz.',
		},
		{
			image: '/images/icons/acompaniamiento.svg',
			alt: 'icon attention',
			title: 'ACOMPAÑAMIENTO CONSTANTE',
			description:
				'Nuestro equipo te ayudará permanentemente con los procesos de envíos desde tu local para evitar inconvenientes',
		},
	],
};

export const ventajas = {
	image: '/images/banners/img_ventajas.png',
	alt: 'icon gps',
	title: '¿Qué necesitas para ser',
	titleSpan: 'una de nuestras agencias aliadas?',
	description:
		'<p>Ser una <strong>agencia aliada de Mi Paquete</strong> es sencillo, solo necesitas:</p>',
	descriptionTwo:
		'Si cumples con estos simples requisitos podrás convertir tu local en una de nuestras agencias aliadas y recibir ingresos extra mes a mes al ofrecer nuestros servicios de logística de envíos a nivel nacional.',
	buttonOne: {
		color: 'buttonBlue',
		title: 'ADQUIERE INFORMACIÓN',
		url: '#asesoria',
		type: TypeButton.href,
	},
	items: [
		{
			point: 'Tener un local físico en Bogotá, Medellín o Cali.',
		},
		{
			point: 'Tener un computador, impresora e internet.',
		},
		{
			point: 'Estar legalmente constituido.',
		},
		{
			point: 'Disponibilidad para recibir capacitación.',
		},
		{
			point: 'Espacio disponible para ubicar un aviso promocional',
		},
	],
};

export const form = {
	title:
		'<p>Súmate a nuestra red de agencias aliadas <strong>proceso de almacenamiento?</strong></p>',
	description:
		'<p>Si tienes un local físico y quieres generar ingresos adicionales <strong>este modelo de negocio es para ti.</strong></p>',
	image: '/images/form/background-blue.svg',
	alt: 'background form',
	colorTextBackground: 'white',
	titleForm:
		'<p>Completa el formulario y haz parte de nuestras <span>agencias aliadas</span></p>',
	formDescription:
		'<p>Envía tus datos para que nuestro equipo pueda responder tus dudas y ayudarte con el proceso de afiliación.</p>',
	FormColorSpan: 'orange',
	listId: '121',
	textSubmit: 'PROGRAMA UNA ASESORÍA',
};
