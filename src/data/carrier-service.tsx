import { TypesBanner } from '@components/banner/types';

export const banner: TypesBanner = {
	orientation: '',
	title: `<h1>Servicio de transportadora Shopify <br /><span>Carrier Service</span></h1>`,
	description:
		'<p>Automatiza tus envíos en Shopify con la ayuda de nuestra aplicación y ofrece a tus clientes una experiencia de compra mejorada.</p>',
	buttonOne: {
		color: 'buttonBlue',
		title: 'CONOCE MÁS',
		url: '#',
	},
};

export const features = {
	orientation: 'right',
	image: '/images/features/carrier.png',
	alt: 'features',
	title: '¿Qué es',
	titleTwo: '"Carrier Service"?',
	colorTitleTwo: 'blue',
	description:
		'<p>Esta opción en Shopify le permite al comprador de la tienda virtual ver el precio del envío calculado de forma automática a través de la instalación la aplicación de <strong>Mi Paquete.</strong></p><p> El servicio Carrier Service está incluido en el "Plan Advanced Shopify".</p>',
	buttonOne: {
		color: 'buttonOrange',
		title: 'CONOCE LA APLICACIÓN',
		url: '#',
	},
};

export const cardsState = {
	title: 'Así puedes acceder a',
	titleSpan: 'Carrier Service en Shopify:',
	image: '/images/card-state/shopify.png',
	alt: 'logo shopify',
	imageActive: '/images/card-state/shopify-active.png',
	items: [
		{
			id: 0,
			title: 'Basic Shopify',
			description:
				'Ideal para negocios en expansión que requieren informes avanzados.',
			image: '/images/card-state/shopify-basic.png',
			alt: 'image shopify basic',
			buttonOne: {
				color: 'buttonWhite',
				title: 'VER PLAN',
				url: '#',
			},
		},
		{
			id: 1,
			title: 'Lite Shopify',
			description:
				'2Ideal para negocios en expansión que requieren informes avanzados.',
			image: '/images/card-state/shopify-basic.png',
			alt: 'image shopify basic',
			buttonOne: {
				color: 'buttonWhite',
				title: 'VER PLAN',
				url: '#',
			},
		},
		{
			id: 2,
			title: 'Avanced Shopify',
			description:
				'3Ideal para negocios en expansión que requieren informes avanzados.',
			image: '/images/card-state/shopify-basic.png',
			alt: 'image shopify basic',
			buttonOne: {
				color: 'buttonWhite',
				title: 'VER PLAN',
				url: '#',
			},
		},
	],
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
