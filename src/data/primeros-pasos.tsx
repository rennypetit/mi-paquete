import { TypesBanner } from '@components/banner/types';
import { TypeButton } from '@types/global';
export const metaTags = {
	title: 'Centro de ayuda | Primeros pasos | Mi Paquete',
	description:
		'¿Deseas hacer envíos con Mi Paquete? Encuentra cómo mandar tus productos y el paso a paso del proceso en nuestras diferentes modalidades de envíos',
};

export const banner: TypesBanner = {
	title: `<h1>Primeros pasos<span>¡Estás en el lugar indicado para impulsar tu emprendimiento!</span></h1>`,
	description:
		'<p>Aquí encontrarás respuesta a todo lo que necesitas saber para hacer envíos con <strong><mark>Mi Paquete.</mark></strong></p>',
	orientation: '',
};

export const cards = [
	{
		video: 'https://www.youtube.com/embed/G6WRE4tvPFI',
		title: '<h3>Cotiza un <strong>envío tradicional</strong></h3>',
	},
	{
		video: 'https://www.youtube.com/embed/bxSRV7PNZz0',
		title: '<h3>Cotiza un envío con <strong>pago contra entrega</strong></h3>',
	},
	{
		video: 'https://www.youtube.com/embed/OGv8ur0J-HM',
		title:
			'<h3>Cotiza un envío urbano o de <strong>entrega inmediata</strong></h3>',
	},
	{
		video: 'https://www.youtube.com/embed/1iTKTafsKZY',
		title:
			'<h3>Conoce la fecha de  <strong>recaudos de envíos con pago contra entrega</strong></h3>',
	},
	{
		video: 'https://www.youtube.com/embed/pvkBbVPyCeM',
		title: '<h3>Solicita la <strong>recolección de un paquete</strong></h3>',
	},
	{
		video: 'https://www.youtube.com/embed/dHqsLm7Vq3E',
		title: '<h3>Recuerda <strong>¿Qué es el valor declarado?</strong></h3>',
	},
];

export const videosWhatsapp = [
	{
		video: 'https://www.youtube.com/embed/KRjQwJy1bx8',
		title:
			'<h3>Notificación por <strong>Whatsapp</strong> para destinatarios de <strong>envíos ecommerce</strong></h3>',
	},
];

export const videosCarrierService = [
	{
		video: 'https://www.youtube.com/embed/GuMjb1t-kV0',
		title:
			'<h3><strong>Paso 1: </strong>Instalación y configuración de la aplicación</h3>',
	},
	{
		video: 'https://www.youtube.com/embed/zEGVIzLh_tM',
		title:
			'<h3><strong>Paso 2: </strong>Guardado de la generación y la orden de envío</h3>',
	},
	{
		video: 'https://www.youtube.com/embed/kACkP2axZro',
		title:
			'<h3><strong>Paso 3: </strong>Configuración transportadoras. aplicación  <a href="https://mipaquete.com" target="_blank" rel="noopener noreferrer"><mark>mipaquete.com</mark></a> en Shopify</h3>',
	},
	{
		video: 'https://www.youtube.com/embed/_925WLY7Si8',
		title:
			'<h3><strong>Paso 4: </strong> Configuración productos. aplicación <a href="https://mipaquete.com" target="_blank" rel="noopener noreferrer"><mark>mipaquete.com</mark></a> en Shopify</h3>',
	},
];

export const videosWoocommerce = [
	{
		video: 'https://www.youtube.com/embed/UrWzKzwdE9U',
		title: '<h3><strong>Paso 1: </strong>Instalación del plugin</h3>',
	},
	{
		video: 'https://www.youtube.com/embed/qx3GK2C6kb8',
		title: '<h3><strong>Paso 2: </strong>Configuración</h3>',
	},
	{
		video: 'https://www.youtube.com/embed/2eQ3nV1U3r4',
		title: '<h3><strong>Paso 3: </strong>Configura tus productos</h3>',
	},
	{
		video: 'https://www.youtube.com/embed/WxeGxMiy4dw',
		title:
			'<h3><strong>Paso 4: </strong>Procesa tus envíos y descarga tus guías</h3>',
	},
	{
		video: 'https://www.youtube.com/embed/QpfJXCSvZr0',
		title: '<h3><strong>Paso 5: </strong>Experiencia del cliente</h3>',
	},
];

export const commercial = {
	colorText: 'textWhite',
	description:
		'<h3><strong>¡Cotiza tus envíos en minutos!</strong></h3><p>Con <strong><mark>Mi Paquete</mark></strong> puedes <strong>cotizar envíos</strong> antes de mandarlos y conocer el precio aproximado del mismo a través de las medidas y algunos datos de tu paquete.</p>',
	image: '/images/commercials/woocommerce-background-two.png',
	imageDesktop: '/images/commercials/woocommerce-background-desktop-two.png',
	alt: 'background grandes ecommerce',
	button: {
		color: 'buttonWhite',
		title: 'COTIZA AHORA',
		url: '/#cotizar',
		type: TypeButton.link,
	},
};

export const row = {
	image: '/images/background-blue.png',
	alt: 'background',
	imagePerson: '/images/asesoria-virtual.png',
	altPerson: 'Asesoria virtual',
	title: '<h2>Asesoría <br /> <strong>Virtual</strong></h2>',
	description:
		'<p>Si tienes dudas con el envío de tus paquetes, deseas reportar una novedad o necesitas asistencia, nuestro equipo está dispuesto a ayudarte siempre.</p>',
	button: {
		color: 'buttonOrange',
		title: 'SOLICITA UNA ASESORÍA',
		url: 'https://walink.co/b8da4c',
		type: TypeButton.blank,
	},
};

export const commercialTwo = {
	colorText: 'textblack',
	description:
		'<h3>Encuentra la <strong>Respuesta que necesitas</strong></h3><p>Si presentas alguna novedad con tus envíos o tienes preguntas, te ayudamos a solucionarlo.</p>',
	image: '/images/commercials/primeros-pasos-background.png',
	imageDesktop: '/images/commercials/primeros-pasos-background-desktop.png',
	alt: 'backgroundprimeros pasos',
	button: {
		color: 'buttonBlue',
		title: 'SOLICITA ACOMPAÑAMIENTO',
		url: 'https://walink.co/b8da4c',
		type: TypeButton.blank,
	},
};
