import { TypesBannerBackground } from '@components/banner/types';

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
		url: '#',
	},
	buttonTwo: {
		color: 'buttonGreen',
		title: 'INFO POR WHATSAPP',
		// icon: '/images/icons/whatsapp-two.png',
		// alt: 'icon whatsapp',
		url: '#',
	},
};

export const features = {
	image: '/images/features/pasarela-de-envios.png',
	alt: 'features',
	title: 'Lleva tu logística de',
	titleTwo: 'ecommerce a otro nivel',
	colorTitleTwo: 'blue',
	items: [
		{
			title:
				'Optimiza tus recursos humanos dedicados a labores de seguimiento con las transportadoras.',
		},
		{
			title:
				'Selecciona automáticamente la transportadora más económica o la de menor tiempo de entrega.',
		},
		{
			title:
				'Unifica la información de las transportadoras con las que tienes negociación en una sola plataforma.',
		},
		{
			title:
				'Accede a informes y estadísticas en tiempo real para que tomes mejores decisiones.',
		},
		{
			title:
				'Mezcla las transportadoras con las que tengas negociación y transportadoras sin negociación para ampliar tu cobertura.',
		},
	],
	buttonOne: {
		color: 'buttonBlue',
		title: 'MÁS INFORMACIÓN',
		url: '#',
	},
};

export const commercial = {
	colorText: 'textWhite',
	title: 'Sigue tu envío en cada estado de su entrega',
	description:
		'<h3>Conoce siempre el<strong> estado de tu envío con Mi Paquete</strong></h3><p>Con <strong>Mi Paquete</strong> tienes la posibilidad de ofrecer a tus clientes notificaciones vía <strong>WhatsApp</strong> para que conozcan el estado de su envío desde que es despachado, indicándoles datos clave para que tus ventas sean más seguras.</p>',
	image: '/images/commercials/envios-tradicionales-background.png',
	imageDesktop:
		'/images/commercials/envios-tradicionales-background-desktop.png',
	alt: 'background pasarela de envios',
	button: {
		title: 'CONOCE MÁS',
		url: '#',
		color: 'buttonOrange',
	},
};

export const form = {
	title:
		'<h4>Genera envíos automáticos <strong>para tu ecommerce</strong></h4>',
	description:
		'<p>Integrar nuestro software de automatización de envíos te ayudará a ahorrar tiempo y dinero, evitando errores y procesos innecesarios, y aumentará tus ventas en poco tiempo, ya que podrás ofrecerle a tu cliente en tiempo real el valor de su compra + envío.</p>',
	titleForm: 'Sincroniza los envíos de',
	titleFormSpan: 'tu e-commerce',
	formDescription:
		'Uno de nuestros expertos te contactará para explicarte cómo integrar el proceso de automatización de envíos a tu tienda online.',
};

export const commercialTwo = {
	colorText: 'textWhite',
	title: 'Sigue tu envío en cada estado de su entrega',
	description:
		'<h3>¡Conoce todas las ventajas de nuestra <strong>pasarela de envíos!</strong></h3><p>Podrás recibir notificaciones logísticas vía Whatsapp a tus destinatarios y adquirir solución de novedades por parte del destinatario con nuestro centro de ayuda.</p>',
	image: '/images/commercials/pasarela-background.png',
	imageDesktop: '/images/commercials/pasarela-background-desktop.png',
	alt: 'background pasarela',
	button: {
		title: 'CONOCE MÁS',
		url: '#',
		color: 'buttonOrange',
	},
};

export const question = [
	{
		title: 'Problemas para procesar la guía de envío',
		description:
			'Cuando el sistema te arroja un error es porque la guía no logró procesarse en el sistema de la transportadora, para obtener la guía solo debes escribirnos a nuestro WhatsApp: 3216330447, y compartirnos el código mp de tu envío, en solo minutos te estaremos compartiendo el pdf de la misma.',
	},
	{
		title: 'Necesito entregar el paquete en una oficina.',
		description: '<ul><li>a</li></ul>',
	},
	{
		title: 'Necesito entregar el paquete en una oficina.',
		description: '<ol><li>a</li></ol>',
	},
	{
		title: 'Necesito entregar el paquete en una oficina.',
		description: '<a href="example.com"> example</a>',
	},
];
