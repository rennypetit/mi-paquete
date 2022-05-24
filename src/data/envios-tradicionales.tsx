import { TypeButton, TypeDescription } from '@types/global';
import { TypesBanner } from '@components/banner/types';

export const metaTags = {
	title: 'Soluciones logística de envíos para ecommerce | Mi Paquete',
	description:
		'Adquiere envíos con pago contra entrega, envíos tradicionales, almacenamiento de mercancía y diferentes transportadoras de envíos para tu ecommerce..',
};

export const banner: TypesBanner = {
	title: `<h1>Envíos tradicionales <br /><span>Comparador de costos de envío</span></h1>`,
	subtitle: '',
	description:
		'<p>Compara el precio que te ofrecen las principales <strong>transportadoras de envíos en Colombia,</strong> elige por tiempo de entrega o calificación de servicio y realiza envíos nacionales o urbanos facilmente.</p>',
	background: 'blue',
	image: '/images/banners/envios-tradicionales.png',
	alt: 'Banner envios tradicionales',
	orientation: 'orientationLeft',
	buttonOne: {
		color: 'buttonBlue',
		title: 'COTIZA TU ENVÍO',
		url: '/#cotizar',
		type: TypeButton.link,
	},
	buttonTwo: {
		color: 'buttonOrange',
		title: 'REGÍSTRATE',
		url: 'https://app.mipaquete.com/registro',
		type: TypeButton.blank,
	},
};

export const description = {
	image: '/images/servicio-de-envios.png',
	alt: 'Servicio de envios',
	title: '¿Por qué utilizar este',
	titleSpan: 'servicio de envíos?',
	items: [
		{
			image: '/images/icons/ubication.png',
			alt: 'icon ubication',
			description:
				'Despacho con las principales empresas de transporte de envíos nacionales y urbanos',
		},
		{
			image: '/images/icons/notification.png',
			alt: 'icon notification',
			description:
				'Notificamos de forma automática por WhatsApp el despacho de tus envíos',
		},
		{
			image: '/images/icons/winner.png',
			alt: 'icon winner',
			description:
				'Tarifas iguales o inferiores a las que conseguirías si enviaras directamente con la transportadora',
		},
		{
			image: '/images/icons/transport.png',
			alt: 'icon transport',
			description: 'Mayor cobertura de envíos a nivel nacional',
		},
	],
};

export const benefits = {
	title:
		'<h2>¿Por qué realizar envíos con <span><mark>Mi Paquete</mark></span> en vez de hacerlo directamente con <span>las transportadoras?</span></h2>',
	description:
		'Conoce por qué desde <strong>Mi Paquete</strong> el servicio de envío con las <strong>principales empresas de transporte de envíos</strong> nacionales y urbanos, te ahorra tiempo y dinero, ya que puedes realizar tus envíos sin obstáculos, trámites o papeleos.',
	buttonOne: {
		color: 'buttonBlue',
		title: 'COTIZA UN ENVÍO',
		url: '/#cotizar',
		type: TypeButton.link,
	},
	buttonTwo: {
		color: 'buttonOrange',
		title: 'CREA UNA CUENTA',
		url: 'https://app.mipaquete.com/registro',
		type: TypeButton.blank,
	},
	items: [
		{
			image: '/images/icons/time.png',
			alt: 'icon time',
			title: 'AHORRAS TIEMPO Y DINERO',
			description:
				'En un solo lugar puedes comparar el rango de precios de envío según tus necesidades',
		},
		{
			image: '/images/icons/transport-blue.png',
			alt: 'icon transport',
			title: 'CONTACTO DIRECTO CON TODAS LAS TRANSPORTADORAS',
			description:
				'Tenemos contactos clave para seguir tus envíos y solucionar novedades',
		},
		{
			image: '/images/icons/notification-blue.png',
			alt: 'icon notification',
			title: 'NOTIFICACIONES DEL ESTADO DEL ENVÍO',
			description:
				'Notificamos a través de Whatsapp a tu destinatario cuando su envío sea despachado',
		},
		{
			image: '/images/icons/attention.png',
			alt: 'icon attention',
			title: 'ATENCIÓN INMEDIATA',
			description:
				'En caso de preguntas o contratiempos, contamos con un centro de novedades para ayudarte permanentemente',
		},
	],
};

export const commercial = {
	colorText: 'textWhite',
	title: '<p>Sigue tu envío en cada estado de su entrega</p>',
	description:
		'<h3>Conoce siempre el<strong> estado de tu envío con Mi Paquete</strong></h3><p>Con <strong>Mi Paquete</strong> tienes la posibilidad de ofrecer a tus clientes notificaciones vía <strong> WhatsApp</strong> para que conozcan el estado de su envío desde que es despachado, indicándoles datos clave para que tus ventas sean más seguras.</p>',
	image: '/images/commercials/envios-tradicionales-background.png',
	imageDesktop:
		'/images/commercials/envios-tradicionales-background-desktop.png',
	alt: 'background envios tradicionales',
	button: {
		color: 'buttonOrange',
		title: 'CONOCE MÁS',
		url: '/centro-de-ayuda/primeros-pasos#whatsapp',
		type: TypeButton.link,
	},
};

export const question = [
	{
		title: '¿Quién recoge mis paquetes?',
		description: `<p>La transportadora que selecciones al momento de solicitar tus envíos. Esto no tiene costo adicional.</p>`,
	},
	{
		title: '¿Puedo llevar el paquete a un punto de la transportadora?',
		description: `<p>Si, cuando solicites el envío, en la parte de dirección de recogida seleccionas la opción de llevar a la transportadora.</p>`,
	},
	{
		title: '¿Debo imprimir la guía del envío?',
		description: `<p>Si, es completamente necesario que la imprimas de lo contrario no nos hacemos responsables del envío. Ten en cuenta, dependiendo de la transportadora:</p>
		<p class='question-line'>Con Servientrega:</p>
		<p>Descargas 3 guías iguales en un solo PDF.</p>
		<ol>
			<li>Debes cortar la que dice "Remitente" hacerla firmar por el mensajero y dejarla para ti como comprobante de recolección.</li>
			<li>Las otras dos guías que quedan juntas, te recomendamos pegarlas al paquete en un bolsillo porta guías, acá te decimos cómo hacerlo <a href='https://www.youtube.com/watch?v=XDvBleamv3I' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=XDvBleamv3I</a></li>
			<li>Adicionalmente, en el momento de la recolección debes solicitar al personal de la transportadora la relación de despacho.</li>
		</ol>
		<p class='question-line'>Con Envía:</p>
		<p>Descargas 3 guías iguales en un PDF  y otro PDF que contiene una relación de despacho o manifiesto.</p>
		<ol>
			<li>Debes cortar la que dice "Recolección", hacerla firmar por el mensajero y dejarla para ti como comprobante de recolección.</li>
			<li>Las otras dos guías que quedan juntas, te recomendamos pegarlas al paquete en un bolsillo porta guías, acá te decimos cómo hacerlo <a href='https://www.youtube.com/watch?v=XDvBleamv3I' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=XDvBleamv3I </a>, adicional entrega la relación de despacho al mensajero, ya que también debe ir con el paquete.</li>
			<li>Llévalo a un punto principal de Envía con su respectiva relación de despacho para que en la oficina puedan recibir el paquete o espera la recolección en tu dirección.</li>
		</ol>
		<p class='question-line'>Con Tempo Express:</p>
		<p>Se descargan 3 guías iguales.</p>
		<ol>
			<li>Debes cortar una de las guías, hacerla firmar por el mensajero y dejarla para ti como comprobante de recolección.</li>
			<li>Te recomendamos pegarlas al paquete en un bolsillo porta guías, acá te decimos cómo hacerlo <a href='https://www.youtube.com/watch?v=XDvBleamv3I' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=XDvBleamv3I </a></li>
		</ol>
		<p class='question-line'>Con TCC: </p>
		<p>Se descargan 2 guías iguales y una relación de despacho, es decir dos PDF.</p>
		<ol>
			<li>Pega las 2 guías al paquete en un bolsillo porta guías, acá te decimos cómo hacerlo <a href='https://www.youtube.com/watch?v=XDvBleamv3I' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=XDvBleamv3I </a></li>
			<li>La relación de despacho debe ser firmada por el mensajero. Es tu comprobante de recolección.</li>
		</ol>
		<p class='question-line'>Con Coordinadora: </p>
		<p>Se descarga una única guía. La pegas al paquete sin tapar su código de barras, el auxiliar te pedirá tu número de celular o correo electrónico y te enviará el comprobante de recolección.</p>
		<p class='question-line'>Con Entrégalo:</p>
		<p>Se descarga una única guía. Imprímela dos veces, pega una al paquete y la otra la haces firmar por el mensajero como constancia de recibido. </p>
		`,
	},
	{
		title: '¿Cuándo recogen el paquete?',
		description: `<p>El tiempo de recogida depende de la ruta y horarios que tenga la transportadora, si solicitaste el servicio antes de las 10 am, la transportadora pasará el mismo día en el transcurso del día, es posible que pasen inclusive justo antes de las 7:00 pm en semana o sábados poco antes de las 12:00 m. Si lo solicitaste después de las 10.30 am, se tiene menos probabilidad que recojan el mismo día, ya que depende de la disponibilidad del cubrimiento en la zona de las transportadoras.</p>
		<p>Ten presente: Si deseas no esperar la recolección y llevarlo a un punto de la transportadora.</p>`,
	},
	{
		title: '¿Cómo pago mis envíos?',
		description: `<p>Hay dos formas de pagos:</p>
		<oli>
			<li>Pago con saldo: Recarga tu saldo para hacer envíos aquí: <a href='https://app.mipaquete.com/recargar-saldo' target='_blank' rel='noopener noreferrer'>https://app.mipaquete.com/recargar-saldo </a></li>
			<li>Descontar el valor del envío del recaudo realizado: Esta opción puede estar habilitada para envíos con Recaudo o Pago Contra Entrega.</li>
		</oli>
		`,
	},
	{
		title: '¿La guía no me procesa, que hago?',
		description: `<p>Es muy extraño que la guía no procese, en este caso espera 5 minutos y refresca la página, si aún así no te permite descargarla escribirnos a nuestro whatsapp <a href="tel:+3216330447">3216330447</a> y te ayudaremos inmediatamente.</p>`,
	},
	{
		title: '¿Ofrecen descuento por volumen?',
		description: `<p>Sí, si realizas más de 500 envíos mensuales te ofrecemos descuentos especiales para que sigas ahorrando en tu logística. El porcentaje de descuento depende del volumen, contacta a uno de nuestros asesores y recibe una propuesta. Si haces menos de 500 envíos tienes acceso directo a nuestro programa de puntos mipaquete que te da automáticamente puntos por envíar que puedes canjear por productos, servicios o saldo para hacer nuevos envíos.</p>`,
	},
];

export const testimonials = {
	icon: '/images/quote.png',
	alt: 'quote',
	title:
		'<p>En Mi Paquete hemos realizado más de 500 mil envíos a más de 6 mil clientes en <span>en toda Colombia.</span></p>',
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
	'<p>¿Necesitas asesoría con tu envío? <br /> <strong>¡Te ayudamos!</strong></p>';
