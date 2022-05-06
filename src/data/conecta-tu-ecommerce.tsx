import { TypeButton } from '@types/global';

export const cards = [
	{
		image: '/images/ecommerce/shopify.png',
		alt: 'image Shopify',
		title: 'Shopify',
		description:
			'Conecta tu tienda virtual en Shopify, configura gratis en nuestra app',
		store: true,
		button: {
			color: 'buttonOrange',
			title: 'CONECTA TU TIENDA',
			url: '/tienda-en-shopify',
			type: TypeButton.link,
		},
	},
	{
		image: '/images/ecommerce/woocommerce.png',
		alt: 'image Woocommerce',
		title: 'Woocommerce',
		description:
			'Configura gratis el plugin de Mi Paquete en tu tienda de WooCommerce',
		store: true,
		button: {
			color: 'buttonOrange',
			title: 'CONECTA TU TIENDA',
			url: '/tienda-en-woocommerce',
			type: TypeButton.link,
		},
	},
	{
		image: '/images/ecommerce/upmseller.png',
		alt: 'image upmseller',
		title: 'upmseller',
		description:
			'Integra gratis nuestra aplicación con las principales tranportadoras',
		store: true,
		button: {
			color: 'buttonOrange',
			title: 'CONECTA TU TIENDA',
			url: '/tienda-en-jumpseller',
			type: TypeButton.link,
		},
	},
	{
		image: '/images/ecommerce/komercia.png',
		alt: 'image komercia',
		title: 'komercia',
		description:
			'En Komercia puedes automatizar en minutos la generación de guías',
		store: true,
		button: {
			color: 'buttonOrange',
			title: 'CONECTA TU TIENDA',
			url: '/tienda-en-komercia',
			type: TypeButton.link,
		},
	},
	{
		image: '/images/ecommerce/api.png',
		alt: 'image API',
		title: 'API',
		description:
			'Integra cualquier tipo de ecommerce sin importar su plataforma',
		store: true,
		button: {
			color: 'buttonOrange',
			title: 'CONECTA TU TIENDA',
			url: '/api-integracion',
			type: TypeButton.link,
		},
	},
	{
		image: '/images/ecommerce/asesoria.png',
		alt: 'image asesoria',
		title: 'Asesoría',
		description: '',
		store: false,
		button: {
			color: 'buttonWhite',
			title: 'CREAR UNA CUENTA',
			url: 'https://app.mipaquete.com/registro',
			type: TypeButton.blank,
		},
	},
];

export const testimonials = {
	icon: '/images/quote.png',
	alt: 'quote',
	title:
		'<p>Únete a los más de cientos de clientes que han integrado su <span>tienda online</span> en las diferentes plataformas con <span>Mi Paquete.</span></p>',
};
