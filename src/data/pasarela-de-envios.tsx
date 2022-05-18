import { TypeButton, TypeDescription } from '@types/global';
import { TypesBannerBackground } from '@components/banner/types';

export const metaTags = {
	title: 'Soluciones logística de envíos para ecommerce | Mi Paquete',
	description:
		'Adquiere envíos con pago contra entrega, envíos tradicionales, almacenamiento de mercancía y diferentes transportadoras de envíos para tu ecommerce..',
};

export const banner: TypesBannerBackground = {
	title: `<h1>Pasarela<span> de envíos</span></h1>`,
	subtitle: '',
	description:
		'<p></strong>¿Tienes negociación con varias transportadoras y aun así no logras la eficiencia logística esperada?</strong>Te proporcionamos nuestra <strong>Pasarela de Envíos</strong> para que administres tu <strong>logística de entregas</strong> con diferentes transportadoras en un solo lugar, manteniendo tu negociación directa con ellas.</p>',
	background: 'orange',
	image: '/images/banners/pasarela-de-envios.png',
	imageDesktop: '/images/banners/pasarela-de-envios-desktop.png',
	alt: 'Banner pasarela de envios',
	orientation: 'orientationRight',
	buttonOne: {
		color: 'buttonBlue',
		title: 'SOLICITA UNA ASESORÍA',
		url: '#asesoria',
		type: TypeButton.href,
	},
	buttonTwo: {
		color: 'buttonGreen',
		title: 'INFO POR WHATSAPP',
		// icon: '/images/icons/whatsapp-two.png',
		// alt: 'icon whatsapp',
		url: 'https://walink.co/b8da4c',
		type: TypeButton.blank,
	},
};

export const features = {
	type: TypeDescription.video,
	video: 'https://www.youtube.com/embed/ac1-Wzf_AOI',
	title: 'Lleva tu logística de',
	titleTwo: 'ecommerce a otro nivel',
	colorTitleTwo: 'blue',
	items: `
	<ul>
		<li>Optimiza tus recursos humanos dedicados a labores de seguimiento con las transportadoras.</li>
		<li>Selecciona automáticamente la transportadora más económica o la de menor tiempo de entrega.</li>
		<li>Unifica la información de las transportadoras con las que tienes negociación en una sola plataforma.</li>
		<li>Accede a informes y estadísticas en tiempo real para que tomes mejores decisiones.</li>
		<li>Mezcla las transportadoras con las que tengas negociación y transportadoras sin negociación para ampliar tu cobertura.</li>
	</ul>
	`,
	buttonOne: {
		color: 'buttonBlue',
		title: 'MÁS INFORMACIÓN',
		url: '#asesoria',
		type: TypeButton.href,
	},
};

export const commercial = {
	colorText: 'textWhite',
	title: '<p>Sigue tu envío en cada estado de su entrega</p>',
	description:
		'<h3>Conoce siempre el<strong> estado de tu envío con <mark>Mi Paquete</mark></strong></h3><p>Con <strong><mark>Mi Paquete</mark></strong> tienes la posibilidad de ofrecer a tus clientes notificaciones vía <strong>WhatsApp</strong> para que conozcan el estado de su envío desde que es despachado, indicándoles datos clave para que tus ventas sean más seguras.</p>',
	image: '/images/commercials/envios-tradicionales-background.png',
	imageDesktop:
		'/images/commercials/envios-tradicionales-background-desktop.png',
	alt: 'background pasarela de envios',
	button: {
		title: 'CONOCE MÁS',
		color: 'buttonOrange',
		url: '#asesoria',
		type: TypeButton.href,
	},
};

export const form = {
	title:
		'<h4>Genera envíos automáticos <strong>para tu ecommerce</strong></h4>',
	description:
		'<p>Integrar nuestro software de automatización de envíos te ayudará a ahorrar tiempo y dinero, evitando errores y procesos innecesarios, y aumentará tus ventas en poco tiempo, ya que podrás ofrecerle a tu cliente en tiempo real el valor de su compra + envío.</p>',
	titleForm: '<p>Sincroniza los envíos de <span>tu ecommerce</span></p>',
	formDescription:
		'<p>Uno de nuestros expertos te contactará para explicarte cómo integrar el proceso de automatización de envíos a tu tienda online.</p>',
	listId: '99',
	textSubmit: 'PROGRAMA UNA ASESORÍA',
};

export const commercialTwo = {
	colorText: 'textWhite',
	// title: '<p>Sigue tu envío en cada estado de su entrega</p>',
	description:
		'<h3>¡Conoce las ventajas de nuestro servicio de <strong>almacenamiento!</strong></h3><p>Almacenamos, alistamos y despachamos tus productos. Confía tus inventarios en nosotros e incrementa su rotación.</p>',
	image: '/images/commercials/pasarela-background.png',
	imageDesktop: '/images/commercials/pasarela-background-desktop.png',
	alt: 'background pasarela',
	button: {
		title: 'CONOCE MÁS',
		color: 'buttonOrange',
		url: '/almacenamiento',
		type: TypeButton.link,
	},
};

export const textWhatsapp =
	'<p>¿Te gustaría poder encender y apagar transportadoras, según su desempeño?</p>';
