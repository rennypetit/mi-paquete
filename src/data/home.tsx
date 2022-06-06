import { TypeButton, TypeDescription } from '@types/global';
import { TypesBannerSlider } from '@components/banner/types';
export const banners: TypesBannerSlider = [
	{
		title: `<h1>¿Realizas <span>ventas por redes sociales</span> o tienes un <span>ecommerce?</span></h1>`,
		subtitle: 'Servicio de envíos',
		description:
			'<p>Te conectamos tecnológicamente con las principales <strong>empresas de envíos en Colombia</strong> para que compares sus precios, tiempos de entrega y calidad del servicio en una sola plataforma, para que elijas la mejor opción.</p>',
		background: 'orange',
		image: '/images/banners/home-1.png',
		alt: 'Banner',
		orientation: 'orientationRight',
		buttonOne: {
			color: 'buttonOrange',
			title: 'COTIZA TU ENVÍO',
			url: '#cotizar',
			type: TypeButton.href,
		},
		buttonTwo: {
			color: 'buttonBlue',
			title: 'REGÍSTRATE',
			url: 'https://app.mipaquete.com/registro',
			type: TypeButton.blank,
		},
	},
	{
		title: `<h2>¿Las <span> empresas de envíos</span> te exigen documentos para <span>enviar paquetes?</span></h2>`,
		subtitle: 'Envío de paquetes',
		description:
			'<p>Muchos emprendedores suelen tener problemas con el <strong>envío de mercancía.</strong> Con <strong><mark>Mi Paquete</mark></strong> envías tus productos fácil y rápido. Regístrate en minutos y <strong>sin papeleos.</strong></p>',
		background: 'blue',
		image: '/images/banners/home-2.png',
		alt: 'Banner',
		orientation: 'orientationLeft',
		buttonOne: {
			color: 'buttonOrange',
			title: 'COTIZA TU ENVÍO',
			url: '#cotizar',
			type: TypeButton.href,
		},
		buttonTwo: {
			color: 'buttonBlue',
			title: 'REGÍSTRATE',
			url: 'https://app.mipaquete.com/registro',
			type: TypeButton.blank,
		},
	},
	{
		title: `<h2>¡No importa el tamaño de tu<span> ecommerce o dónde lo tengas!</span></h2>`,
		subtitle: 'Mensajería para ecommerce',
		description:
			'<p>Te ayudamos gratis con la integración de tu ecommerce a través de las principales empresas de transporte de envíos, para que generes guías automaticamente y puedas dedicarte a vender más</p>',
		background: 'blue',
		image: '/images/banners/home-3.png',
		alt: 'Banner',
		orientation: 'orientationRight',
		buttonOne: {
			color: 'buttonOrange',
			title: 'CONOCE MÁS',
			url: '/conecta-tu-tiendavirtual',
			type: TypeButton.link,
		},
	},
];

export const metaTags = {
	title: 'Servicio de envío de paquetes | Mi Paquete',
	description:
		'Adquiere servicios de mensajería con pago contra entrega, envíos WooCommerce, mensajería para tiendas de Shopify, almacenamiento de paquetes y más.',
};

export const services = [
	{
		image: '/images/services/pago-contra-entrega.svg',
		alt: 'envios pago contra entrega',
		title: 'ENVÍOS PAGO CONTRA ENTREGA',
		description:
			'Tus clientes podrán pagar el envío cuando reciban su producto en casa.',
		url: '/soluciones-ecommerce/envios-pago-contraentrega',
	},
	{
		image: '/images/services/envios-tradicionales.svg',
		alt: 'envios tradicionales',
		title: 'ENVÍOS TRADICIONALES',
		description:
			'Realiza entregas nacionales y urbanas para el mismo día eligiendo la transportadora de su preferencia.',
		url: '/soluciones-ecommerce/envios-tradicionales',
	},
	{
		image: '/images/services/almacenamiento.svg',
		alt: 'almacenamiento',
		title: 'ALMACENAMIENTO',
		description:
			'Nos encargamos del almacenamiento, alistamiento y despacho de tus productos.',
		url: '/soluciones-ecommerce/almacenamiento',
	},
	{
		image: '/images/services/ecommerce.svg',
		alt: 'ecommerce',
		title: 'CONECTA TU ECOMMERCE',
		description:
			'Vincula tu ecommerce desde cualquier plataforma para realizar envíos con las principales transportadoras.',
		url: '/conecta-tu-tiendavirtual',
	},
];

export const features = {
	type: TypeDescription.video,
	video: 'https://www.youtube.com/embed/yr4Ejh7mzn8',
	image: '/images/features/home.png',
	alt: 'features',
	title: 'Más ahorro, velocidad, confianza y clientes satisfechos con nuestros',
	titleTwo: 'envíos nacionales y urbanos',
	items: `
	<ul>
		<li>Aumenta la confianza en tus compradores ofreciendo servicio de envíos seguros</li>
		<li>Recibe el dinero de tus ventas contra entrega de forma confiable</li>
		<li>Genera confianza en tus compradores con notificaciones vía WhatsApp sobre el estado de sus envíos</li>
		<li>Entrega el mismo día con nuestro servicio de envíos urbanos</li>
		<li>Resuelve dudas y novedades con nuestro Centro de Ayuda para que tus clientes estén satisfechos con el servicio</li>
	</ul>`,
};

export const commercial = {
	colorText: 'textBlack',
	title: '<p><strong>Envíos el mismo día</strong></p>',
	description:
		'<h5>Entrega tus productos a tiempo con nuestros<strong> envíos urbanos</strong></h5><p>Descubre cómo mejorar tu proceso de <strong>envío de mercancía</strong> con nuestras <strong>entregas urbanas</strong> y de <strong>última milla,</strong> las cuales harán que tus productos lleguen el mismo día hasta tus clientes.</p>',
	image: '/images/commercials/home-background.png',
	imageDesktop: '/images/commercials/home-background-desktop.png',
	alt: 'background commercials',
	button: {
		title: 'COTIZA UN ENVÍO',
		url: 'https://app.mipaquete.com/',
		color: 'buttonBlue',
		type: TypeButton.blank,
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

export const recognitions = {
	imageBackgroundDesktop: '/images/recognition/backgroound-desktop.png',
	altBackground: '/images/recognition/background.png',
	image: '/images/recognition/person.png',
	alt: 'person',
	title: 'Conoce algunos de nuestros',
	titleStrong: 'reconocimientos',
	description:
		'Gracias a nuestros procesos de logística de envíos hemos sido seleccionados en varias ocasiones como un emprendimiento destacado.',
	items: [
		{
			title: 'DeltaX',
			image: '/images/recognition/delta-x.png',
			alt: 'logo DeltaX',
		},
		{
			title: 'Crea',
			image: '/images/recognition/crea.png',
			alt: 'logo crea',
		},
		{
			title: 'Ruta',
			image: '/images/recognition/ruta.png',
			alt: 'logo ruta',
		},
		{
			title: 'Apps co',
			image: '/images/recognition/appsco.png',
			alt: 'logo appsco',
		},
		{
			title: 'Scale',
			image: '/images/recognition/scale.png',
			alt: 'logo scale',
		},
	],
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

export const textWhatsapp =
	'<p>¿Necesitas asesoría personalizada? <br /> <strong>¡Te ayudamos!</strong></p>';
