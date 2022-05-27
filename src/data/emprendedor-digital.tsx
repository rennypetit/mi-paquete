import { TypesBanner } from '@components/banner/types';
import { TypeButton, TypeDescription } from '@types/global';

export const metaTags = {
	title: 'Automatización de envíos para tiendas virtuales | Mi Paquete',
	description:
		'Automatiza envíos de tu tienda en Shopify, WooCommerce, Jumpseller, Komercia o integra tu tienda vía API sin importar en qué plataforma esté alojada.',
};

export const banner: TypesBanner = {
	orientation: 'orientationRight',
	title: `<h1>Beneficios para emprendedores digitales<span> Para tiendas y vendedores en redes sociales con menos de 500 envíos mensuales</span></h1>`,
	description:
		'<p>Acumula puntos por hacer envíos con nosotros y redímelos por premios o canjéalos como saldo a favor para hacer más envíos utilizando nuestra plataforma de forma gratuita para vender los productos de tu ecommerce.</p>',
	image: '/images/banners/beneficios.png',
	alt: 'Banner beneficios',
	buttonOne: {
		color: 'buttonBlue',
		title: 'CONOCE MÁS',
		url: 'https://app.mipaquete.com/acumula-puntos',
		type: TypeButton.blank,
	},
};
export const features = {
	type: TypeDescription.image,
	orientation: 'right',
	image: '/images/features/emprendedor.png',
	alt: 'features',
	width: 507,
	height: 455,
	title: 'Un beneficio ideal para',
	titleTwo: 'emprendedores',
	description:
		'<p>Si realizas <strong>500 envíos mensuales o menos,</strong> seguro necesitarás <strong>soluciones tecnológicas para la logística de envíos,</strong> por eso a través de <strong><mark>Mi Paquete</mark></strong> podrás obtener no solo beneficios increíbles sino opciones que se adaptan a tus necesidades.</p>',
};

export const featuresTwo = {
	type: TypeDescription.video,
	video: 'https://www.youtube.com/embed/lror0oIgG_o',
	title: '¿Por qué estos beneficios son',
	titleTwo: 'perfectos para emprendedores?',
	colorTitleTwo: 'blue',
	description:
		'<p>Estos son algunos de los beneficios que podrás obtener con nuestro <strong>plan emprendedor digital:</strong></p>',
	items: `
	<ul>
		<li><strong>Uso gratuito de nuestra plataforma</strong></li>
		<li><strong>Pagos solo por envíos realizados</strong></li>
		<li><strong>Organización de la logística de envíos</strong></li>
		<li><strong>Centro de ayuda para gestionar novedades</strong></li>
		<li><strong>Adquisición de puntos Mipaquete</strong></li>
		<li><strong>Diversidad de transportadoras</strong></li>
	</ul>`,
	buttonOne: {
		color: 'buttonBlue',
		title: 'MÁS INFORMACIÓN',
		url: 'https://app.mipaquete.com/acumula-puntos',
		type: TypeButton.blank,
	},
};

export const row = {
	title:
		'<h3><strong>Suma puntos realizando tus envíos </strong>y gana premios increíbles</h3>',
	colorText: 'white',
	description:
		'<p>Al generar tus envíos a través de <strong><mark>Mi Paquete</mark></strong> no solo beneficiarás a tus clientes, también obtendrás puntos que <strong>podrás canjear por saldo a favor para realizar nuevos envíos,</strong> ahorrándote no solo en tiempo sino también en costos.</p>',
	items: [
		{
			title: 'ENVÍOS PAGO CONTRA ENTREGA',
			image: '/images/icons/save-two.png',
			alt: 'icon save',
		},
		{
			title: 'ENTREGAS NACIONALES',
			image: '/images/icons/ubication-two.png',
			alt: 'icon ubication-two',
		},
		{
			title: 'SEGUIMIENTO DE NOVEDADES',
			image: '/images/icons/quote-two.png',
			alt: 'icon quote-two',
		},
		{
			title: 'ENVÍOS URBANOS',
			image: '/images/icons/quote-two.png',
			alt: 'icon guide',
		},
	],
};

export const commercial = {
	colorText: 'textWhite',
	description:
		'<h4>Recompensamos tu fidelidad <strong> puntos <mark>Mi Paquete</mark></strong></h4><p>Por cada envío efectivo que realices a través de <strong><mark>Mi Paquete</mark></strong> podrás adquirir productos y servicios exclusivos, o usarlo para pagar nuevos envíos.</p>',
	image: '/images/commercials/woocommerce-background-two.png',
	imageDesktop: '/images/commercials/woocommerce-background-desktop-two.png',
	alt: 'background emprendimiento',
	button: {
		color: 'buttonOrange',
		title: 'VER MÁS',
		url: 'https://app.mipaquete.com/acumula-puntos',
		type: TypeButton.blank,
	},
};
