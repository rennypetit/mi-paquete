import { TypesBanner } from '@components/banner/types';
import { TypeButton } from '@types/global';

export const banner: TypesBanner = {
	title: `<h1>Primeros pasos<span>¡Estás en el lugar indicado para impulsar tu emprendimiento!</span></h1>`,
	description:
		'<p>Aquí encontrarás respuesta a todo lo que necesitas saber para hacer envíos con <strong>Mi Paquete.</strong></p>',
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

export const commercial = {
	colorText: 'textWhite',
	description:
		'<h3><strong>¡Cotiza tus envíos en minutos!</strong></h3><p>Con <strong>Mi Paquete</strong> puedes <strong>cotizar envíos</strong> antes de mandarlos y conocer el precio aproximado del mismo a través de las medidas y algunos datos de tu paquete.</p>',
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
		url: '#',
	},
};

export const blog = [
	{
		url: '#',
		image: '/images/blog/entrada.png',
		title: 'NOMBRE DE LA ENTRADA',
		date: 'Autor y Fecha',
		description:
			'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
	},
	{
		url: '#',
		image: '/images/blog/entrada.png',
		title: 'NOMBRE DE LA ENTRADA',
		date: 'Autor y Fecha',
		description:
			'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
	},
	{
		url: '#',
		image: '/images/blog/entrada.png',
		title: 'NOMBRE DE LA ENTRADA',
		date: 'Autor y Fecha',
		description:
			'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
	},
	{
		url: '#',
		image: '/images/blog/entrada.png',
		title: 'NOMBRE DE LA ENTRADA',
		date: 'Autor y Fecha',
		description:
			'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
	},
];
