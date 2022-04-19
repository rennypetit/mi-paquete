import { TypesBannerItems } from '@components/banner/types';

export const banner: TypesBannerItems = {
	orientation: 'orientationLeft',
	title: `<h1><span>API Mi Paquete</span> <br /> Integra tu tienda online</h1>`,
	description:
		'<p>Ahora puedes <strong>automatizar los envíos de tu tienda online</strong> sin importar en qué plataforma esté alojada.</p>',
	image: '/images/banners/api.png',
	alt: 'Banner api',
	items: [
		{
			title: 'Logística de envíos mejorada',
		},
		{
			title: 'Generación automática de guías',
		},
		{
			title: 'Cotizaciones automáticas',
		},
		{
			title: 'Solicitud de recogida automática',
		},
		{
			title: 'Información detallada de envío',
		},
		{
			title: 'Trazabilidad de envíos',
		},
	],
	subDescription:
		'<p>Conoce cómo automatizar en pocos pasos nuestra <strong>interfaz API</strong> en cualquier <strong>plataforma para ecommerce,</strong> para que hagas más fácil la logística de tus envíos y automatices tus procesos.',
	buttonOne: {
		color: 'buttonOrange',
		title: 'INTEGRA TU TIENDA',
		url: '#',
	},
	buttonTwo: {
		color: 'buttonBlue',
		title: 'SOLICITA UNA ASESORÍA',
		url: '#',
	},
};

export const automations = {
	title:
		'<h2> Ventajas de <strong>automatizar tu ecommerce </strong>con <br /> <span>API Mi Paquete</span></h2>',
	image: '/images/automations/video.png',
	alt: 'video',
	items: [
		{
			color: 'blue',
			image: '/images/icons/check-blue.png',
			alt: 'icon check blue',
			title: 'Cotización automática',
			description: 'Indica criterios de selección automática',
		},
		{
			color: 'orange',
			image: '/images/icons/check-orange.png',
			alt: 'icon check orange',
			title: 'Compara transportadoras',
			description: 'Elige la transportadora según precio, tiempos, etc',
		},
		{
			color: 'blue',
			image: '/images/icons/check-blue.png',
			alt: 'icon check blue',
			title: 'Pagos Contra Entrega',
			description: 'Generación de envíos con pago al recibir el producto',
		},
		{
			color: 'orange',
			image: '/images/icons/check-orange.png',
			alt: 'icon check orange',
			title: 'Generación de guía',
			description:
				'Automáticamente, la API generará la guía de envío del paquete',
		},
		{
			color: 'blue',
			image: '/images/icons/check-blue.png',
			alt: 'icon check blue',
			title: 'Rutas determinadas',
			description:
				'Podrás configurar las rutas según la transportadora de tu elección',
		},
		{
			color: 'orange',
			image: '/images/icons/check-orange.png',
			alt: 'icon check orange',
			title: 'Solicitud de recogida',
			description:
				'Una vez generado el envío se realizará la recolección automática del paquete',
		},
	],
};

export const row = {
	image: '/images/background-blue.png',
	alt: 'background',
	title:
		'<h2><strong>Incrementa tus envíos</strong> <br /> a través de nuestra API</h2>',
	description:
		'<p>Con nuestra API cada vez que realices una venta en tu ecommerce, se generará la guía y orden de despacho automáticamente para que ahorres tiempo en trámites y papeleos.</p>',
	button: {
		color: 'buttonOrange',
		title: 'CONECTA TU TIENDA',
		url: '#',
	},
};

export const question = [
	{
		title: '¿Dónde encuentro la documentación de la API y su alcance?',
		description:
			'En <a href="https://documenter.getpostman.com/view/14212363/Tzm8GFfQ">https://documenter.getpostman.com/view/14212363/Tzm8GFfQ</a> Si no eres desarrollador puedes leer el alcance completo en el link “Introducción” que aparece en el menú.',
	},
	{
		title: '¿Tienen ambiente de pruebas para la API?',
		description:
			'si tenemos, puedes acceder al siguiente enlace: <a href="https://app.dev.mpr.mipaquete.com/cotizacion">https://app.dev.mpr.mipaquete.com/cotizacion</a>',
	},
	{
		title: '¿Dónde puedo acceder a las API KEY?',
		description:
			'La api key se genera en el servicio generateApiKey, Se agrega el usuario y contraseña registrado y de esta manera las generas. No hay necesidad de generarla varias veces.',
	},
	{
		title: '¿Ustedes realizan la configuración de la API?',
		description:
			'No, la configuración la debe realizar un desarrollador con un conocimiento técnico para realizar este tipo de integración. ',
	},
];

export const form = {
	title:
		'<h4>¿Quieres <strong>integrar API <br /></strong> a tu tienda online?</h4>',
	description:
		'<p>Nuestro <strong>equipo de soporte</strong> te ayudará a configurar en minutos el API Mi Paquete en tu tienda online y resolverá tus dudas durante el proceso.</p>',
	image: '/images/form/background-blue.png',
	alt: 'background form',
	colorTextBackground: 'white',
	titleForm: 'Automatizamos el éxito de',
	titleFormSpan: 'tu ecommerce',
	formDescription:
		'Simplifica tu logística y aumenta las ventas de tu tienda ¡Compártenos tus datos para ayudarte!',
	FormColorSpan: 'orange',
};
