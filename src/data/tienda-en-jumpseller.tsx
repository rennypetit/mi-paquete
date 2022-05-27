import { TypeButton, TypeDescription } from '@types/global';
import { TypesBanner } from '@components/banner/types';

export const metaTags = {
	title: 'Automatización de envíos para tiendas virtuales | Mi Paquete',
	description:
		'Automatiza envíos de tu tienda en Shopify, WooCommerce, Jumpseller, Komercia o integra tu tienda vía API sin importar en qué plataforma esté alojada.',
};

export const banner: TypesBanner = {
	title: `<h1>Aumenta el volumen de tus envíos con nuestra <span>integración en Jumpseller</span></h1>`,
	description:
		'<p>Genera <strong>guías de envíos automáticamente</strong> integrándote fácil y rápido con la aplicación de <strong><mark>Mi Paquete.</mark></strong> Ahorrarás tiempo que puedes invertir en hacer crecer tu ecommerce y ofrecerás a tus clientes un gran servicio de entregas.</p>',
	image: '/images/banners/jumpseller.png',
	alt: 'Banner jumpseller',
	orientation: 'orientationLeft',
	buttonOne: {
		color: 'buttonBlue',
		title: 'SOLICITA UNA ASESORÍA',
		url: '#asesoria',
		type: TypeButton.href,
	},
	buttonTwo: {
		color: 'buttonOrange',
		title: 'CONECTA TU TIENDA',
		url: 'https://jumpseller.co/support/mi-paquete/',
		type: TypeButton.blank,
	},
};

export const storages = {
	image: '/images/storages/background-orange.png',
	alt: 'background range',
	colorText: 'textblack',
	colorItem: 'itemBlue',
	title: '',
	titleStrong: '¿Cómo integrar Mi Paquete a tu tienda?',
	description:
		'<p><strong>Automatizar los envíos </strong> de tu tienda en <strong>Jumpseller</strong>, es un proceso fácil que puedes realizar en minutos y con pocos pasos.</p>',
	items: [
		{
			image: '/images/icons/add-blue.png',
			alt: 'icon add',
			title: 'Añade la aplicación',
			description:
				'Busca nuestra aplicación en la sección de aplicaciones en el panel de Jumpseller e instálala',
		},
		{
			image: '/images/icons/update-blue.png',
			alt: 'icon update',
			title: 'Autoriza la configuración',
			description:
				'Confirma el mensaje de configutración interna dentro de la tienda',
		},
		{
			image: '/images/icons/create-blue.png',
			alt: 'icon create',
			title: 'Crea tu cuenta en Mi Paquete',
			description:
				'Completa los datos del formulario para registrarte y accede a tu cuenta',
		},
		{
			image: '/images/icons/add-blue.png',
			alt: 'icon add',
			title: 'configura el método de envío',
			description:
				'En el panel de configuración elige la opción de "envío" y selecciona "Mi Paquete"',
		},
		{
			image: '/images/icons/update-blue.png',
			alt: 'icon update',
			title: 'Habilita las transportadoras',
			description:
				'Selecciona las empresas de transporte con las que desees que se envíen tus paquetes y la ciudad de despacho',
		},
	],
	buttonOne: {
		color: 'buttonBlue',
		title: 'SOLICITA INFORMACIÓN',
		url: '#asesoria',
		type: TypeButton.href,
	},
	buttonTwo: {
		color: 'buttonWhite',
		title: 'CONECTA JUMPSELLER',
		url: 'https://jumpseller.co/support/mi-paquete/',
		type: TypeButton.blank,
	},
};

export const features = {
	type: TypeDescription.video,
	video: 'https://www.youtube.com/embed/SiuW2y_EB6o',
	title:
		'<h3>Ventajas de automatizar tu tienda en <span>Jumpseller</span></h3>',
	orientation: 'left',
	items: [
		{
			image: '/images/icons/save.png',
			alt: 'icon save',
			description: 'Configura tus entregas con el precio más bajo',
		},
		{
			image: '/images/icons/quote.png',
			alt: 'icon quote',
			description: 'Genera guías de entrega de manera automática',
		},
		{
			image: '/images/icons/transport-two.png',
			alt: 'icon transport-two',
			description: 'Entrega tus productos con transportadoras confiables',
		},
		{
			image: '/images/icons/monitoring.png',
			alt: 'icon monitoring',
			description: 'Mantén controladas y organizadas tus ordenes de envío',
		},
	],
	buttonOne: {
		color: 'buttonBlue',
		title: 'ADQUIERE LA APLICACIÓN',
		url: 'https://jumpseller.co/support/mi-paquete/',
		type: TypeButton.blank,
	},
	buttonTwo: {
		color: 'buttonOrange',
		title: 'CONOCE MÁS',
		url: '#asesoria',
		type: TypeButton.href,
	},
};

export const testimonials = {
	icon: '/images/quote.png',
	alt: 'quote',
	title:
		'<p>En Mi Paquete hemos recaudado más de $60 mil millones en envíos con pago contra entrega a nuestros clientes <span>en toda Colombia.</span></p>',
	items: [
		{
			description:
				'<p>Mis ventas aumentaron en un 50% desde que envío con Pago Contra Entrega a nivel nacional con <mark>Mi Paquete</mark>. Tienen un gran equipo de trabajo y recibo todo el soporte logístico.</p>',
			person: {
				image: '/images/testimonials/jeimer.png',
				alt: 'person',
				name: 'Jeimer López',
				nickName: '1000Marikdas',
			},
		},
		{
			description:
				'<p>mipaquete.com me permite cotizar rápidamente envíos a múltiples destinos en Colombia, la programación de envío es fácil y amigable.</p>',
			person: {
				image: '/images/testimonials/camila.png',
				alt: 'person',
				name: 'Camila Duque',
				nickName: 'Ecowindel',
			},
		},
	],
};

export const question = [
	{
		title: '¿Dónde puedo descargar el plugin para JumpSeller?',
		description: `<p>Ingresas a tu tienda en JumpSeller. Da clic en la opción de aplicaciones y en la categoría de "shipping and fulfillment" encontrarás nuestra opción identificado con nuestro logo. Recuerda que nuestro plugin es gratuito.</p>`,
	},
	{
		title: '¿Cómo debo configurar mi plugin?',
		description: `<p>Configurar el plugin es rápido y sencillo, en solo 5 pasos lo conseguirás. En los siguientes videos te mostramos cómo hacerlo: </p>
		<p>
			Video 1: <a href="https://www.youtube.com/watch?v=1RKH6BfZrmc"> Instalación y panel Jumpseller - mipaquete.com</a> <br />
			Video 2: <a href="https://www.youtube.com/watch?v=tffPUdQaIlc"> Método de envío y checkout Jumpseller - mipaquete.com</a> <br />
			Video 3: <a href="https://www.youtube.com/watch?v=ZgzR-1mH2-E">Configuración de productos Jumpseller - mipaquete.com</a> <br />
			Video 4: <a href="https://www.youtube.com/watch?v=2n0Jq5yUfT4&t=15s"> Generación de ordenes Jumpseller - mipaquete.com</a> <br />
			</p>`,
	},
	{
		title: '¿Manejan un mínimo de envíos para utilizar su plugin? ',
		description: `<p>No, lo mejor de nuestro servicio es que puedes enviar desde un paquete en adelante.</p>`,
	},
	{
		title:
			'¿Si no tengo saldo en la billetera de mipaquete.com, mi cliente no puede realizar la compra?',
		description: `<p>Tu cliente puede generar la compra de tus productos tranquilamente, pero sí es necesario que tengas saldo en tu billetera en el momento de generar la guia.</p>`,
	},
];

export const form = {
	title:
		'<h5>Mejora tu logística de envíos para tu <strong>tienda en Jumpseller</strong></h5>',
	description:
		'<p>Conecta tu <strong>tienda virtual</strong> con nuestra aplicación para Jumpseller y genera envíos con las <strong>principales</strong> <strong>transportadoras del país.</strong></p>',
	image: '/images/form/background-blue.png',
	alt: 'background form',
	colorTextBackground: 'white',
	titleForm: '<p>Automatizamos el éxito de <span>tu ecommerce</span></p>',
	formDescription:
		'<p>Simplifica tu logística y aumenta las ventas de tu tienda ¡Compártenos tus datos para ayudarte!</p>',
	FormColorSpan: 'orange',
	listId: '102',
	textSubmit: 'PROGRAMA UNA ASESORÍA',
};

export const textWhatsapp =
	'<p>¿Necesitas asesoría para automatizar <br />los envíos de tu tienda jumpseller? <strong>¡Te ayudamos!</strong></p>';
