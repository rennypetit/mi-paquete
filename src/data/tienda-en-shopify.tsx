import { TypeButton, TypeDescription } from '@types/global';
import { TypesBanner } from '@components/banner/types';

export const metaTags = {
	title: 'Automatización de envíos para tiendas virtuales | Mi Paquete',
	description:
		'Automatiza envíos de tu tienda en Shopify, WooCommerce, Jumpseller, Komercia o integra tu tienda vía API sin importar en qué plataforma esté alojada.',
};

export const banner: TypesBanner = {
	orientation: '',
	title: `<h1>Automatiza los envíos de tu <span>tienda en Shopify</span></h1>`,
	description:
		'<p><strong>¡Generar guías de forma automática </strong>nunca fue tan fácil!<br />Con <strong><mark>Mi Paquete</mark></strong> puedes hacerlo con las <strong>principales empresas de transporte del país</strong>  y ahorrar mucho tiempo mientras nosotros nos encargamos de la <strong>logística de tu ecommerce.</strong> </p>',
	background: 'orange',
	image: '/images/banners/shopify.png',
	alt: 'Banner Shopify',
	buttonOne: {
		color: 'buttonBlue',
		title: 'SOLICITA UNA ASESORÍA',
		url: '#asesoria',
		type: TypeButton.href,
	},
	buttonTwo: {
		color: 'buttonOrange',
		title: 'CONECTA TU TIENDA',
		url: 'https://apps.shopify.com/logistica-envios-ecommerce?locale=es',
		type: TypeButton.blank,
	},
};

export const features = {
	image: '/images/features/home.png',
	alt: 'features',
	title:
		'<h2>¿Por qué integrar <mark>Mi Paquete </mark><span>a Shopify?</span></h2>',
	orientation: 'left',
	type: TypeDescription.video,
	video: 'https://www.youtube.com/embed/jty8_mR_BB0',
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
		'<h3>Envíos automáticos en Shopify <span>Facilita el proceso de compra y envío de productos de tus clientes</span></h3>',
	description:
		'<p><strong>Incrementa tus ventas en Shopify </strong> generando de manera automática el costo del envío de tus productos a los diferentes lugares del país y haz crecer tu comunidad de compradores.</p>',
	buttonOne: {
		color: 'buttonBlue',
		title: 'CONTACTA UN ASESOR',
		url: '#asesoria',
		type: TypeButton.href,
	},
	buttonTwo: {
		color: 'buttonOrange',
		title: 'CONECTA TU TIENDA',
		url: 'https://apps.shopify.com/logistica-envios-ecommerce?locale=es',
		type: TypeButton.blank,
	},
};

export const cards = [
	{
		image: '/images/icons/check.png',
		alt: 'icon check',
		title: 'Simplifica la logística de envío',
		titleSpan: 'de tus productos',
		description:
			'Ahorra tiempo generando de manera automática el costo de envío de tus productos a través de diferentes transportadoras.',
		color: 'orange',
	},
	{
		image: '/images/icons/check.png',
		alt: 'icon check',
		title: 'Aumenta la confianza',
		titleSpan: 'en tu marca',
		description:
			'Al contar con procesos que responden a las necesidades de tus clientes, podrás generar confianza y posicionar tu marca positivamente.',
		color: 'orange',
	},
	{
		image: '/images/icons/check.png',
		alt: 'icon check',
		title: 'Evita cualquier',
		titleSpan: 'tipo de errores',
		description:
			'Al usar nuestro plugin podrás generar la guía de envíos de manera automática evitando errores comunes al ingresar la información requerida.',
		color: 'orange',
	},
	{
		image: '/images/icons/check.png',
		alt: 'icon check',
		title: 'Incrementa notablemente',
		titleSpan: 'tus ventas',
		description:
			'Los procesos de compra que especifican los costos desde un principio son más efectivos a la hora de cerrar ventas.',
		color: 'blue',
	},
	{
		image: '/images/icons/check.png',
		alt: 'icon check',
		title: 'Elige la transportadora',
		titleSpan: 'de tu elección',
		description:
			'Ya no tienes que averiguar y perder tiempo comparando precios, al automatizar tus envíos podrás elegir la empresa de transporte de envíos.',
		color: 'blue',
	},
	{
		image: '/images/icons/check.png',
		alt: 'icon check',
		title: 'Seguimiento en',
		titleSpan: 'tiempo real',
		description:
			'Ofrece a tus clientes notificaciones vía WhatsApp a la hora de despachar sus productos para que esté al tanto del estado de su envío.',
		color: 'blue',
	},
];

export const commercial = {
	colorText: 'textBlack',
	title: '',
	description:
		'<h4>Conoce paso a paso cómo instalar nuestra<strong> aplicación en Shopify</strong></h4><p>Sigue paso a paso el proceso de instalación e integra tu tienda de <strong>Shopify</strong> fácilmente.</p>',
	image: '/images/commercials/shopify-background.png',
	imageDesktop: '/images/commercials/shopify-background-desktop.png',
	alt: 'background shopify',
	button: {
		color: 'buttonBlue',
		icon: '/images/icons/download.png',
		alt: 'icon donwload',
		title: 'DESCARGA EL MANUAL',
		url: '/downloads/manual-shopify.pdf',
		type: TypeButton.blank,
	},
};

export const featuresTwo = {
	image: '/images/features/shopify-two.png',
	alt: 'features',
	width: 448,
	height: 360,
	title: 'Servicio de transportadora Shopify',
	titleTwo: '| Carrier Service',
	colorTitleTwo: 'blue',
	description:
		'<p>Tu comprador podrá ver el precio del envío calculado de forma automática.</p>',
	items: `
		<ul>
			<li><strong>Costos de envíos en tiempo real</strong></li>
			<li><strong>Precios exactos</strong></li><strong>
			<li><strong>Configura el servicio en pocos pasos</strong></li>
		</ul>
	`,
	buttonOne: {
		color: 'buttonBlue',
		title: 'DESCUBRE MÁS',
		url: '/conecta-tu-tiendavirtual/tienda-en-shopify/carrier-service',
		type: TypeButton.link,
	},
};

export const row = {
	image: '/images/background-blue.png',
	alt: 'background',
	title:
		'<h5>Todo lo que tienes que saber para automatizar tu tienda en <strong>Shopify con Carrier Service</strong></h5>',
	description:
		'<p>Conoce paso por paso cómo configurar nuestra aplicación en tu <strong>tienda de Shopify</strong> y cómo puede ayudarte a la hora de generar ventas en tu ecommerce.</p>',
};

export const videos = [
	{
		video: 'https://www.youtube.com/embed/GuMjb1t-kV0',
		title:
			'<h4><strong>Paso 1: </strong> Instalación y configuración de la aplicación</h4>',
	},
	{
		video: 'https://www.youtube.com/embed/zEGVIzLh_tM',
		title:
			'<h4><strong>Paso 2: </strong>Guardado de la generación y la orden de envío</h4>',
	},
	{
		video: 'https://www.youtube.com/embed/kACkP2axZro',
		title:
			'<h4><strong>Paso 4: </strong>Configuración transportadoras. aplicación <mark>mipaquete.com</mark> en Shopify</h4>',
	},
	{
		video: 'https://www.youtube.com/embed/_925WLY7Si8',
		title:
			'<h4><strong>Paso 4: </strong>Configuración productos. aplicación <a href="https://mipaquete.com" target="_blank" rel="noopener noreferrer"><mark>mipaquete.com</mark></a> en Shopify</h4>',
	},
];

export const testimonials = {
	icon: '/images/quote.png',
	alt: 'quote',
	title:
		'<p>Más de 100 comercios han descargado nuestra aplicación de <span>envíos para Shopify</span> ¡Súmate tú también!</p>',
};

export const question = [
	{
		title: '¿Qué beneficios tiene la aplicación para Shopify?',
		description: `
		<p>
			<ul>
				<li>Permite parametrizar múltiples transportadoras.</li>
				<li>Opción para que en el checkout el comprador pueda comparar las transportadoras y seleccionar la de su preferencia.</li>
				<li>Opción de calcular tarifas y generar guías con pago contra entrega (recaudo de la venta al entregar el producto).</li>
				<li>Generación y descarga de guías con un solo clic.</li>
				<li>Opción de edición de pedido antes de generar la guía.</li>
				<li>Calculador de tarifa de envíos (Carrier Service).</li>
				<li>Recarga de saldo directamente desde la aplicación.</li>
				<li>Selección automática de transportadora por criterios como: Mejor precio, mejor servicio, menor tiempo de entrega.</li>
			</ul>
		</p>
		`,
	},
	{
		title:
			'¿Debo tener el Carrier Service de Shopify activo para utilizar el plugin?',
		description: `<p>No es necesario, puedes usar nuestro plugin configurando la opción de tarifa estándar para que puedas automatizar tus envíos con nuestro servicio.</p>`,
	},
	{
		title:
			'Si no tengo saldo en la billetera de mipaquete.com ¿Mi cliente no puede realizar la compra?',
		description: `<p>Tu cliente puede generar la compra de tus productos tranquilamente, pero si es necesario que tengas saldo en tu billetera en el momento de generar la guía.</p>`,
	},
	{
		title:
			'¿Dónde descargo las guías de mis envíos y hago seguimiento de los mismos?',
		description: `<p>Puedes hacerlo directamente desde Shopify. También puedes ingresar a nuestra plataforma, en la sección tus envíos y desde allí descargar tus envíos y ver sus estados logísticos.</p>`,
	},
];

export const form = {
	title:
		'<h5>¿Tienes una tienda en Shopify? <strong>¡Automatiza tus envíos!</strong></h5>',
	description:
		'<p>Añade la aplicación de <mark>Mi Paquete</mark> en tu ecommerce en Shopify y ofrece a tus clientes conocer en tiempo real el precio de sus envíos al realizar sus compras.</p>',
	image: '/images/form/background-blue.png',
	alt: 'background form',
	colorTextBackground: 'white',
	titleForm: '<p>Automatizamos el éxito de <span>tu ecommerce</span></p>',
	formDescription:
		'<p>Simplifica tu logística y aumenta las ventas de tu tienda <strong>¡Compártenos tus datos para ayudarte!</strong></p>',
	FormColorSpan: 'orange',
	listId: '100',
	textSubmit: 'PROGRAMA UNA ASESORÍA',
};

export const textWhatsapp =
	'<p>¿Necesitas asesoría para automatizar <br />los envíos de tu tienda Shopify? <strong>¡Te ayudamos!</strong></p>';
