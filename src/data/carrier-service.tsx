import { TypesBanner } from '@components/banner/types';
import { TypeButton, TypeDescription } from '@types/global';

export const metaTags = {
	title: 'Shopify Carrier service | Mi Paquete',
	description:
		'Si tienes una tienda en Shopify, adquirir Carrier Service permitirá a tus clientes ver el precio de su envío automáticamente al comprar tus productos',
};

export const banner: TypesBanner = {
	orientation: '',
	title: `<h1>Servicio de transportadora Shopify <br /><span>Carrier Service</span></h1>`,
	description:
		'<p>Automatiza tus envíos en Shopify con la ayuda de nuestra aplicación y ofrece a tus clientes una experiencia de compra mejorada.</p>',
};

export const features = {
	orientation: 'right',
	type: TypeDescription.video,
	video: 'https://www.youtube.com/embed/NIWx0fI_WM4',
	title: '¿Qué es',
	titleTwo: '"Carrier Service"?',
	colorTitleTwo: 'blue',
	description:
		'<p>Esta opción en Shopify le permite al comprador de la tienda virtual ver el precio del envío calculado de forma automática a través de la instalación la aplicación de <strong><mark>Mi Paquete.</mark></strong></p><p> El servicio Carrier Service está incluido en el "Plan Advanced Shopify".</p>',
	buttonOne: {
		color: 'buttonOrange',
		title: 'CONOCE LA INTEGRACIÓN',
		url: 'https://apps.shopify.com/logistica-envios-ecommerce?locale=es',
		type: TypeButton.blank,
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
				'Ideal para negocios que se inician en el ecommerce y que, de vez en cuando, venden en tienda física.',
			image: '/images/card-state/shopify-basic.png',
			alt: 'image shopify basic',
			buttonOne: {
				color: 'buttonWhite',
				title: 'VER PLAN',
				url: 'https://www.shopify.com.co/precios',
				type: TypeButton.blank,
			},
		},
		{
			id: 1,
			title: 'Lite Shopify',
			description:
				'Ideal para negocios en expansión que requieren informes avanzados.',
			image: '/images/card-state/shopify-basic.png',
			alt: 'image shopify basic',
			buttonOne: {
				color: 'buttonWhite',
				title: 'VER PLAN',
				url: 'https://www.shopify.com.co/precios',
				type: TypeButton.blank,
			},
		},
		{
			id: 2,
			title: 'Avanced Shopify',
			description:
				'Ideal para negocios en expansión que requieren informes avanzados.',
			image: '/images/card-state/shopify-basic.png',
			alt: 'image shopify basic',
			buttonOne: {
				color: 'buttonWhite',
				title: 'VER PLAN',
				url: 'https://www.shopify.com.co/precios',
				type: TypeButton.blank,
			},
		},
	],
};
