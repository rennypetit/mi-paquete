import { TypeButton } from '@types/global';

export const items = [
	{
		title: 'SOLUCIONES ECOMMERCE',
		subItems: [
			{
				title: 'Envíos tradicionales',
				url: '/envios-tradicionales',
			},
			{
				title: 'Envíos Pago Contra Entrega',
				url: '/envios-pago-contraentrega',
			},
			{
				title: 'Almacenamiento',
				url: '/almacenamiento',
			},
			{
				title: 'Pasarela de envíos',
				url: '/pasarela-de-envios',
			},
		],
	},
	{
		title: 'CONECTA TU TIENDA VIRTUAL',
		subItems: [
			{
				title: 'Integraciones',
				url: '/conecta-tu-ecommerce',
			},
			{
				title: 'Shopify',
				url: '/tienda-en-shopify',
			},
			{
				title: 'Woocommerce',
				url: '/tienda-en-woocommerce',
			},
			{
				title: 'Jumpseller',
				url: '/tienda-en-jumpseller',
			},
			{
				title: 'Komercia',
				url: '/tienda-en-komercia',
			},
			{
				title: 'Vía API',
				url: '/api-integracion',
			},
		],
	},
	{
		title: 'BENEFICIOS A TU MEDIDA',
		subItems: [
			{
				title: 'Emprendedor digital',
				url: '/emprendedor-digital',
			},
			{
				title: 'Ecommerce medianos',
				url: '/ecommerce-medianos',
			},
			{
				title: 'Grandes ecommerce',
				url: '/grandes-ecommerce',
			},
		],
	},
];

export const buttonOne = {
	color: 'buttonWhite',
	title: 'INICIAR SESIÓN',
	url: 'https://app.mipaquete.com/ingreso',
	type: TypeButton.blank,
};

export const buttonTwo = {
	color: 'buttonBlue',
	title: 'COTIZAR',
	url: 'https://app.mipaquete.com/',
	type: TypeButton.blank,
};
