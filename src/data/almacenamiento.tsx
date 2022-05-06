import { TypeButton } from '@types/global';
import { TypesBannerBackground } from '@components/banner/types';

export const banner: TypesBannerBackground = {
	title: `<h1>¿No cuentas con un espacio ideal para <span>almacenar tu inventario?</span></h1>`,
	subtitle: '',
	description:
		'<p>Nos ocupamos de la <strong>logística de almacenamiento de productos,</strong> alistamiento y despacho de mercancía (fulfillment), para que tú te concentres en <strong>generar más ventas para tu ecommerce.</strong></p>',
	background: 'orange',
	image: '/images/banners/almacenamiento.png',
	imageDesktop: '/images/banners/almacenamiento-desktop.png',
	alt: 'Banner almacenamiento',
	orientation: 'orientationRight',
	buttonTwo: {
		color: 'buttonBlue',
		title: 'SOLICITA UNA ASESORÍA',
		url: '#asesoria',
		type: TypeButton.href,
	},
};

export const row = {
	title:
		'<h2>¿Por qué almacenar tus productos <span>con Mi Paquete?</span></h2>',
	colorText: 'black',
	description:
		'<p>Con nuestros servicios podrás integrar la <strong>logística de almacenamiento de mercancía y envío de paquetes</strong> en un solo lugar y evitando sobre costos innecesarios. Servicio disponible en Bogotá, Medellín, Cali y Barranquilla.</p>',
	items: [
		{
			title: 'EMPAQUE INCLUIDO',
			image: '/images/icons/packing.png',
			alt: 'icon packing',
		},
		{
			title: 'SEGURO DE ALMACENAMIENTO GRATUITO',
			image: '/images/icons/secure.png',
			alt: 'icon secure',
		},
		{
			title: 'ALISTAMIENTO Y DESPACHO DEL ENVÍO',
			image: '/images/icons/dispatch.png',
			alt: 'icon dispatch',
		},
		{
			title: 'GENERACIÓN DE ENVÍO E IMPRESIÓN DE GUÍA',
			image: '/images/icons/guide.png',
			alt: 'icon guide',
		},
	],
};

export const slider = {
	title: '¿Cómo puedes almacenar los productos de',
	titleStrong: 'tu tienda con nosotros?',
	description:
		'<p>Hemos pensado en <strong>todo tipo de empresas,</strong> por eso contamos con diferentes planes para el <strong>almacenamiento de productos desde 100 hasta más de 5.000 unidades,</strong> para que elijas la que más se adapte a las necesidades de tu ecommerce, mientras nos encargamos de almacenar, realizar inventarios y enviar los productos que haz vendido.</p>',
	button: {
		color: 'buttonWhite',
		title: 'CONOCE MÁS',
		url: '#asesoria',
		type: TypeButton.href,
	},
	items: [
		{
			image: '/images/storages/slider-one.png',
			alt: 'slider',
		},
		{
			image: '/images/storages/slider-two.png',
			alt: 'slider',
		},
		{
			image: '/images/storages/slider-three.png',
			alt: 'slider',
		},
		{
			image: '/images/storages/slider-four.png',
			alt: 'slider',
		},
		{
			image: '/images/storages/slider-five.png',
			alt: 'slider',
		},
		{
			image: '/images/storages/slider-six.png',
			alt: 'slider',
		},
	],
};

export const plans = [
	{
		title: 'STARTER',
		image: '/images/icons/medal.png',
		alt: 'icon medal',
		description: '50 a 1.000 unidades despachadas al mes',
		price: '$1.700',
		color: 'orange',
	},
	{
		title: 'UPPER',
		image: '/images/icons/flash.png',
		alt: 'icon upper',
		description: '1.000 a 5.000 unidades despachadas al mes',
		price: '$1.600',
		color: 'blue',
	},
	{
		title: 'STARTER',
		image: '/images/icons/star.png',
		alt: 'icon star',
		description: 'Más de 5.000 unidades despachadas al mes',
		price: '$1.500',
		color: 'orange',
	},
];

export const benefit = {
	title: 'Características del servicio',
	description:
		'<p>Recibo devoluciones: $500 c/unidad (envíos que el destinatario no recibe y deben regresar para almacenamiento)</p><p>En caso de retirar la mercancía (no despachada) pagas $450 por unidad.</p><p>Si requieres algún empaque adicional este se cotiza aparte.</p><p>El valor del almacenamiento se cobra sobre el pico más alto.</p><p>A partir del segundo metro cúbico almacenado, no pagas $500 por unidad, sino $15.000 por cada bloque de <br /> 50cmx50cmx50cm de almacenamiento, indiferente de la cantidad de unidades que allí quepan.</p><p>Los envíos se despachan a través <a href="www.mipaquete.com" target="_blank" rel="noopener noreferrer">www.mipaquete.com</a></p><p>Tarifas antes de IVA.</p>',
	button: {
		color: 'buttonBlue',
		title: 'SOLICITA ASESORÍA',
		url: '#asesoria',
		type: TypeButton.href,
	},
};

export const commercial = {
	colorText: 'textBlack',
	title: '<p>Envíos urbanos</p>',
	description:
		'<h3>Entrega tus productos a tiempo con nuestros<strong> envíos urbanos</strong></h3><p>Mejora tu proceso de <strong>envío de mercancía</strong> con nuestras <strong>entregas urbanas</strong> y de <strong>última milla,</strong> almacenando tu productos en las principales ciudades del país y haciéndolos llegar de inmediato.</p>',
	image: '/images/commercials/almacenamiento-background.png',
	imageDesktop: '/images/commercials/almacenamiento-background-desktop.png',
	alt: 'background almacenamiento',
	button: {
		color: 'buttonBlue',
		title: 'COTIZA UN ENVÍO',
		url: 'https://app.mipaquete.com/',
		type: TypeButton.blank,
	},
};

export const form = {
	title:
		'<h4>¿Quieres conocer más sobre nuestro <strong>proceso de almacenamiento?</strong> </h4>',
	description:
		'<p>El <strong>almacenamiento de mercancía </strong> y su distribución a través de <strong>Mi Paquete </strong>seguro generarán innumerables beneficios para tu ecommerce, por eso nuestro equipo de expertos está dispuesto a asesorarte para <strong>incrementar tus ventas</strong>y hacer crecer tu marca.</p>',
	image: '/images/form/background-blue.png',
	alt: 'background form',
	colorTextBackground: 'white',
	titleForm:
		'<p>Recibe asesoría personalizada para <span>adquirir este servicio</span></p>',
	formDescription:
		'<p>Al dejar tus datos nuestro equipo te contactará para asesorarte con soluciones que se adapten a tu e-commerce.</p>',
	FormColorSpan: 'orange',
	listId: '98',
	textSubmit: 'PROGRAMA UNA ASESORÍA',
};

export const question = [
	{
		title: '¿Cómo hago seguimiento al inventario?',
		description: `<p>Te brindamos la tecnología necesaria para que lleves control de tu inventario y recibe alertas cuando este se esté agotando. Recibirás capacitación y acompañamiento para el uso de la herramienta.</p>`,
	},
	{
		title: '¿Cómo pago el servicio de almacenamiento?',
		description: `<p>Si tus envíos son con pago contra entrega descontaremos de los recaudos el costo del almacenamiento, si no son con pago contra entrega recibirás factura para pago inmediato.</p>`,
	},
	{
		title: '¿Cómo obtengo más información sobre el servicio de almacenamiento?',
		description: `<p>Escríbenos a nuestra línea de whatsapp <a href="tel:+573216330447">+57 321 6330447</a> y te asignaremos un asesor especializado para ayudarte.</p>`,
	},
];
