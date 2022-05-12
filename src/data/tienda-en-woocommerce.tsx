import { TypeButton, TypeDescription } from '@types/global';
import { TypesBanner } from '@components/banner/types';

export const banner: TypesBanner = {
	title: `<h1>¿Tienes una <strong>tienda en WooCommerce? <br /></strong><span>Realiza tus envíos en segundos</span></h1>`,
	description:
		'<p><strong>¡Generar guías de forma automática </strong>nunca fue tan fácil!<br />Con <strong><mark>Mi Paquete</mark></strong> puedes hacerlo con las <strong>principales empresas de transporte del país</strong>  y ahorrar mucho tiempo mientras nosotros nos encargamos de la <strong>logística de tu ecommerce.</strong> </p>',
	image: '/images/banners/woocommerce.png',
	alt: 'Banner woocommerce',
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
		url: 'https://wordpress.org/plugins/shipping-mipaquete-woocommerce/',
		type: TypeButton.blank,
	},
};

export const features = {
	image: '/images/features/woocommerce.png',
	alt: 'features',
	title: '<p>Ventajas de <span>automatizar tus envíos</span></p>',
	orientation: 'right',
	type: TypeDescription.video,
	video: 'https://www.youtube.com/embed/IOjghZQVtcw',
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
	title:
		'<h3><strong>Envíos en WooCommerce</strong> <span>Automatiza la logística de envíos de tu tienda en WooCommerce</span></h3>',
	description:
		'<p>Genera guías y órdenes de recogida de tus paquetes de forma automática con las principales empresas de transporte de envíos, es gratis, fácil de configurar e incluye la opción de <strong>Envíos con Pago Contra Entrega.</strong></p>',
	buttonOne: {
		color: 'buttonBlue',
		title: 'HABLA CON UN ASESOR',
		url: '#asesoria',
		type: TypeButton.href,
	},
	buttonTwo: {
		color: 'buttonOrange',
		title: 'CONECTA TU TIENDA',
		url: 'https://wordpress.org/plugins/shipping-mipaquete-woocommerce/',
		type: TypeButton.blank,
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
		url: '/downloads/woocommerce-instructivo-plugin.pdf',
		type: TypeButton.blank,
	},
};

export const testimonials = {
	icon: '/images/quote.png',
	alt: 'quote',
	title:
		'<p>Más de 500 comercios han instalado nuestro plugin de <span> envíos para Woocomerce</span></p>',
	items: [
		{
			description:
				'<p>Haber integrado el plugin de Mi Paquete para nuestra empresa ha sido una excelente opción, porque facilitó nuestros procesos internos y nos permitió ofrecer garantías a nuestros clientes, gracias al servicio que siempre ha sido rápido y seguro.</p>',
			url: '#',
			person: {
				image: '/images/testimonials/user.svg',
				alt: 'person',
				name: 'Victoria Tabares',
				nickName: 'iKi Pets',
			},
		},
		{
			description:
				'<p>Con el plugin de Mi Paquete hemos logrado llegar a toda Colombia de manera muy sencilla, eficiente y cómoda. Ha sido un gran aliado y un alivio para nuestra logística de envíos. </p>',
			url: '#',
			person: {
				image: '/images/testimonials/user.svg',
				alt: 'person',
				name: 'CEO',
				nickName: 'PanPillón',
			},
		},
	],
};

export const commercialTwo = {
	colorText: 'textWhite',
	description:
		'<h3>¿Realizas más de 500 envíos mensuales? <strong>Cotiza múltiples envíos</strong></h3><p>Nuestros descuentos por volumen y logística de entregas pueden hacerte la vida más fácil.</p>',
	image: '/images/commercials/woocommerce-background-two.png',
	imageDesktop: '/images/commercials/woocommerce-background-desktop-two.png',
	alt: 'background woocommerce',
	button: {
		color: 'buttonWhite',
		title: 'CONOCE MÁS',
		url: '/ecommerce-medianos',
		type: TypeButton.link,
	},
};

export const question = [
	{
		title: '¿Qué beneficios tiene el plugin para Woocommerce?',
		description: `
		<p>
			<ul>
				<li>Nuestra última actualización de plugin de Mi Paquete es la 3.0</li>
				<li>Permite parametrizar múltiples transportadoras.li>
				<li>Envíos gratis y la opción de estandarizar sus tarifas.</li>
				<li>Agregar medidas y configurar productos variables.</li>
				<li>Opción para que en el checkout el comprador pueda comparar las transportadoras y seleccionar la de su preferencia.</li>
				<li>Opción de calcular tarifas y generar guías con pago contra entrega (recaudo de la venta al entregar el producto).</li>
				<li>Generación y descarga de guías con un solo clic.</li>
				<li>Opción de edición de pedido antes de generar la guía.</li>
				<li>Calculador de tarifa de envíos.</li>
				<li>Selección automática de transportadora por criterios como: Mejor precio, mejor servicio, menor tiempo de entrega.</li>
			</ul>
		</p>
		`,
	},
	{
		title:
			'Si no tengo saldo en la billetera de mipaquete.com ¿Mi cliente no puede realizar la compra?',
		description: `<p>Tu cliente puede generar la compra de tus productos tranquilamente, pero si es necesario que tengas saldo en tu billetera en el momento de generar la guía.</p>`,
	},
	{
		title:
			'¿Dónde descargo las guías de mis envíos y hago seguimiento de los mismos?',
		description: `<p>Puedes hacerlo directamente desde Woocommerce. También puedes ingresar a nuestra plataforma, en la sección tus envíos y desde allí descargar tus envíos y ver sus estados logísticos.</p>`,
	},
];

export const form = {
	title:
		'<h4>Descubre cómo mejorar las ventas en <strong>tu WooCommerce</strong></h4>',
	description:
		'<p>A través de <strong><mark>Mi Paquete</mark></strong> y la <strong>logística de automatización de envíos</strong> con nuestro plugin, podrás incrementar tus ventas y ofrecer un mejor servicio a tus clientes.</p>',
	image: '/images/form/background-blue.png',
	alt: 'background form',
	colorTextBackground: 'white',
	titleForm: '<p>Automatizamos el éxito de <span>tu ecommerce</span></p>',
	formDescription:
		'<p>Simplifica tu logística y aumenta las ventas de tu tienda <strong>¡Compártenos tus datos para ayudarte!</strong></p>',
	FormColorSpan: 'orange',
	listId: '101',
	textSubmit: 'PROGRAMA UNA ASESORÍA',
};
