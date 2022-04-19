import { TypesBanner } from '@components/banner/types';

export const banner: TypesBanner = {
	title: `<h1>¿Tienes una <strong>tienda en WooCommerce? <br /></strong><span>Realiza tus envíos en segundos</span></h1>`,
	description:
		'<p><strong>¡Generar guías de forma automática </strong>nunca fue tan fácil!<br />Con <strong>Mi Paquete</strong> puedes hacerlo con las <strong>principales empresas de transporte del país</strong>  y ahorrar mucho tiempo mientras nosotros nos encargamos de la <strong>logística de tu ecommerce.</strong> </p>',
	image: '/images/banners/woocommerce.png',
	alt: 'Banner woocommerce',
	orientation: '',
	buttonOne: {
		color: 'buttonBlue',
		title: 'SOLICITA UNA ASESORÍA',
		url: '#',
	},
	buttonTwo: {
		color: 'buttonOrange',
		title: 'CONECTA TU TIENDA',
		url: '#',
	},
};

export const features = {
	image: '/images/features/woocommerce.png',
	alt: 'features',
	title: 'Ventajas de',
	titleSpan: 'automatizar tus envíos',
	orientation: 'right',
	items: [
		{
			image: '/images/icons/quote.png',
			alt: 'icon quote',
			title: 'Cotizaciones automáticas',
			description:
				'Genera guías y solicitudes de recogida de envíos con un solo clic.',
		},
		{
			image: '/images/icons/winner.png',
			alt: 'icon winner',
			title: 'Aumento de tus utilidades',
			description:
				'Podrás seleccionar por defecto la transportadora más económica y configurar la opción de pago contra entrega.',
		},
		{
			image: '/images/icons/monitoring.png',
			alt: 'icon monitoring',
			title: 'Monitoreo de envíos',
			description:
				'Comparte el link de seguimiento a tus clientes y envía notificaciones vía WhatsApp.',
		},
		{
			image: '/images/icons/centralization.png',
			alt: 'icon centralization',
			title: 'Centralización de información',
			description:
				'Consulta el estado de tus envíos, guías, ingresos, egresos y saldos desde nuestra plataforma.',
		},
	],
};

export const description = {
	title: 'Envíos en WooCommerce',
	titleSpan: 'Automatiza la logística de envíos de tu tienda en WooCommerce',
	description:
		'<p>Genera guías y órdenes de recogida de tus paquetes de forma automática con las principales empresas de transporte de envíos, es gratis, fácil de configurar e incluye la opción de <strong>Envíos con Pago Contra Entrega.</strong></p>',
	buttonOne: {
		color: 'buttonBlue',
		title: 'HABLA CON UN ASESOR',
		url: '#',
	},
	buttonTwo: {
		color: 'buttonOrange',
		title: 'CONECTA TU TIENDA',
		url: '#',
	},
};

export const cards = [
	{
		image: '/images/icons/check.png',
		alt: 'icon check',
		title: 'Cálculo del costo del envío',
		titleSpan: 'en tiempo real',
		description:
			'Cuando tu cliente realice checkout al realizar su compra podrá ver el costo real más el envío de su producto.',
		color: 'blue',
	},
	{
		image: '/images/icons/check.png',
		alt: 'icon check',
		title: 'Descarga la guía directamente desde',
		titleSpan: 'tus pedidos',
		description:
			'Ahorra tiempo, con nuestra aplicación las guías son instaladas de manera automática para que alistar y enviar tus productos sea más sencillo.',
		color: 'blue',
	},
	{
		image: '/images/icons/check.png',
		alt: 'icon check',
		title: 'Aumenta la confianza en',
		titleSpan: 'tu marca',
		description:
			'Al contar con procesos que responden a las necesidades de tus clientes, podrás generar confianza y posicionar tu marca positivamente.',
		color: 'blue',
	},
	{
		image: '/images/icons/check.png',
		alt: 'icon check',
		title: 'Seguimiento en',
		titleSpan: 'tiempo real',
		description:
			'Ofrece a tus clientes notificaciones vía WhatsApp a la hora de despachar sus productos para que estén al tanto del estado de su envío.',
		color: 'orange',
	},
	{
		image: '/images/icons/check.png',
		alt: 'icon check',
		title: 'Realiza envíos con pago',
		titleSpan: 'contra entrega',
		description:
			'Ahora podrás ofrecer a tus clientes una nueva opción de pago, haciendo más sencillo el proceso de adquisición de tus productos.',
		color: 'orange',
	},
	{
		image: '/images/icons/check.png',
		alt: 'icon check',
		title: 'Evita cualquier',
		titleSpan: 'tipo de errores',
		description:
			'Al usar nuestra aplicación podrás generar la guía de envíos de manera automática evitando errores comunes al ingresar la información requerida.',
		color: 'orange',
	},
];

export const commercial = {
	colorText: 'textBlack',
	title: '',
	description:
		'<h3>Configura nuestra aplicación fácil y<strong> en pocos minutos</strong></h3><p>Sigue paso a paso el proceso de configuración e integra tu tienda de <strong>Woocommerce</strong> fácilmente.</p>',
	image: '/images/commercials/woocommerce-background.png',
	imageDesktop: '/images/commercials/woocommerce-background-desktop.png',
	alt: 'background woocommerce',
	button: {
		color: 'buttonBlue',
		icon: '/images/icons/download.png',
		alt: 'icon download',
		title: 'DESCARGA EL MANUAL',
		url: '#',
	},
};

export const commercialTwo = {
	colorText: 'textWhite',
	title: '',
	description:
		'<h3>¿Realizas más de 500 envíos mensuales? <strong>Cotiza múltiples envíos</strong></h3><p>Nuestros descuentos por volumen y logística de entregas pueden hacerte la vida más fácil.</p>',
	image: '/images/commercials/woocommerce-background.png',
	imageDesktop: '/images/commercials/woocommerce-background-desktop-two.png',
	alt: 'background woocommerce',
	button: {
		color: 'buttonWhite',
		title: 'CONOCE MÁS',
		url: '#',
	},
};

export const featuresTwo = {
	image: '/images/features/shopify-two.png',
	alt: 'features',
	title: 'Servicio de transportadora Shopify',
	titleTwo: '| Carrier Service',
	colorTitleTwo: 'blue',
	items: [
		{
			title: 'Costos de envíos en tiempo real',
		},
		{
			title: 'Precios exactos',
		},
		{
			title: 'Configura el servicio en pocos pasos',
		},
	],
	button: {
		color: 'buttonBlue',
		icon: '/images/icons/download.png',
		alt: 'icon donwload',
		title: 'DESCARGA EL MANUAL',
		url: '#',
	},
};

export const question = [
	{
		title: '¿Qué beneficios tiene la aplicación para Shopify?',
		description:
			'<ul> <li>Permite parametrizar múltiples transportadoras.</li><li>Opción para que en el checkout el comprador pueda comparar las transportadoras y seleccionar la de su preferencia.</li><li>Opción de calcular tarifas y generar guías con pago contra entrega (recaudo de la venta al entregar el producto).</li><li>Generación y descarga de guías con un solo clic.</li><li>Opción de edición de pedido antes de generar la guía.</li><li>Calculador de tarifa de envíos (Carrier Service)</li><li>Recarga de saldo directamente desde la aplicación.</li><li>Selección automática de transportadora por criterios como: Mejor precio, mejor servicio, menor tiempo de entrega.</li></ul>',
	},
	{
		title:
			'Si no tengo saldo en la billetera de mipaquete.com ¿Mi cliente no puede realizar la compra?',
		description:
			'Tu cliente puede generar la compra de tus productos tranquilamente, pero si es necesario que tengas saldo en tu billetera en el momento de generar la guía.',
	},
	{
		title:
			'¿Dónde descargo las guías de mis envíos y hago seguimiento de los mismos?',
		description:
			'Puedes hacerlo directamente desde Woocommerce. También puedes ingresar a nuestra plataforma, en la sección tus envíos y desde allí descargar tus envíos y ver sus estados logísticos.',
	},
];

export const form = {
	title:
		'<h4>Descubre cómo mejorar las ventas en <strong>tu WooCommerce</strong></h4>',
	description:
		'<p>A través de <strong>Mi Paquete</strong> y la <strong>logística de automatización de envíos</strong> con nuestro plugin, podrás incrementar tus ventas y ofrecer un mejor servicio a tus clientes.</p>',
	image: '/images/form/background-blue.png',
	alt: 'background form',
	colorTextBackground: 'white',
	titleForm: 'Automatizamos el éxito de ',
	titleFormSpan: 'tu ecommerce',
	formDescription:
		'Simplifica tu logística y aumenta las ventas de tu tienda ¡Compártenos tus datos para ayudarte!',
	FormColorSpan: 'orange',
};
