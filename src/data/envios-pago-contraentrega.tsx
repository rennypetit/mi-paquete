import { TypeButton, TypeDescription } from '@types/global';
import { TypesBanner } from '@components/banner/types';

export const banner: TypesBanner = {
	title: `<h1>¿Pierdes ventas por no ofrecer <span>envíos con Pago Contra Entrega</span>?</h1>`,
	subtitle: '',
	description:
		'<p>Ofrece una opción de pago más confiable para tus clientes, <strong>realiza envíos urbanos, locales y nacionales</strong> con <strong>pago contra entrega</strong> y recibe el dinero de tus ventas sin contratiempos.</p>',
	background: 'orange',
	image: '/images/banners/pago-contraentrega.png',
	alt: 'Banner pagos contra entrega',
	orientation: 'orientationLeft',
	buttonOne: {
		color: 'buttonOrange',
		title: 'REGÍSTRATE',
		url: 'https://app.mipaquete.com/registro',
		type: TypeButton.blank,
	},
	buttonTwo: {
		color: 'buttonBlue',
		title: 'COTIZA TU ENVÍO',
		url: '/#cotizar',
		type: TypeButton.link,
	},
};
export const row = {
	image: '/images/background-blue.png',
	alt: 'background',
	title:
		'<h2>¡Haz parte de los emprendedores que han crecido <strong><mark>Mi Paquete!</mark></strong></h2>',
	description:
		'<p><strong>Hemos incrementado las ventas entre un 32% y 48% de más de 6 mil emprendedores </strong> a través de nuestros <strong>envíos con pago contra entrega</strong> a nivel  nacional.</p>',
};

export const featuresCardSlider = [
	{
		image: '/images/icons/ubication.png',
		alt: 'icon ubication',
		title: 'LLEGA A CUALQUIER LUGAR DEL PAÍS',
		description:
			'Gracias a nuestro servicio de envío de paquetes a través de las principales transportadoras de envío de mercancía en Colombia, podrás llegar a diferentes ciudades y municipios del país sin complicaciones.',
	},
	{
		image: '/images/icons/trust.png',
		alt: 'icon trust',
		title: 'INCREMENTA LA CONFIANZA DE TU MARCA',
		description:
			'Al ofrecer servicio contra entrega tus clientes se sentirán más seguros, ya que podrán pagar en sus casas una vez reciban su paquete.',
	},
	{
		image: '/images/icons/question-orange.png',
		alt: 'icon question',
		title: 'ACCEDE A NUESTRO CENTRO DE NOVEDADES',
		description:
			'Conoce respuestas a preguntas frecuentes, consulta videos informativos y gestiona novedades de tus envíos para obtener soluciones rápidas.',
	},
];

export const commercial = {
	colorText: 'textBlack',
	description:
		'<h3>¿Cuánto tiempo inviertes en subir <strong> guías de envío de forma manual?</strong></h3><p>Mejora tu <strong>proceso de envío de mercancía</strong> a nivel nacional y urbano. Contamos con integraciones para que puedas generar <strong>envíos automáticos</strong> y dedicarte a otras tareas que te permitan crecer y vender más.</p>',
	image: '/images/commercials/home-background.png',
	imageDesktop: '/images/commercials/home-background-desktop.png',
	alt: 'background commercials',
	button: {
		color: 'buttonBlue',
		title: 'MÁS INFORMACIÓN',
		url: '/conecta-tu-ecommerce',
		type: TypeButton.link,
	},
};

export const features = {
	type: TypeDescription.video,
	video: 'https://www.youtube.com/embed/yr4Ejh7mzn8',
	items: `
	<ul>
		<li>Crea una cuenta y añade los datos bancarios a donde haremos la transferencia de los recaudos.</li>
		<li>Al cotizar tu envío podrás indicar el precio de tu venta, y sumar el costo del envío al valor a recaudar.</li>
		<li>Descarga la guía en nuestra plataforma y entrégala a la transportadora cuando recoja tu paquete.</li>
		<li>Rastrea el estado de tu envío.</li>
		<li>Recibe el dinero en tu cuenta bancaria.</li>
	</ul>`,
	buttonOne: {
		color: 'buttonOrange',
		title: 'CREA UNA CUENTA',
		url: 'https://app.mipaquete.com/registro',
		type: TypeButton.blank,
	},
	buttonTwo: {
		color: 'buttonBlue',
		title: 'COTIZA TU ENVÍO',
		url: '/#cotizar',
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
		title: '¿Qué pasa si no entregan el paquete?',
		description: `
		<p>La mayoría de las transportadoras realizan hasta tres intentos de entrega, si el paquete no fue entregado con éxito es porque la persona no desea recibirlo, en este caso pagas o no el envío de regreso, dependiendo de la transportadora, así:</p>
		<p><strong>Servientrega: </strong>Envío de regreso gratis.</p>
		<p><strong>TCC: </strong>Envío de regreso gratis.</p>
		<p><strong>Entrégalo:</strong>Envío de regreso gratis.</p>
		<p><strong>Envía: </strong>Pagas solo el 60% del envío de regreso.</p>
		<p><strong>Tempo Express: </strong>Pagas el 100% del envío de regreso.</p>
		<p><strong>coordinadora: </strong>Pagas el 100% del envío de regreso.</p>
		`,
	},
	{
		title: '¿Dónde puedo consultar el informe de recaudos? ',
		description: `Podrás consultar la información en el siguiente link: <a href="https://mipaquete.com/solucionesusuario/consulta_recaudos" target='_blank' rel='noopener noreferrer'>https://mipaquete.com/solucionesusuario/consulta_recaudos</a>
		<ol>
			<li>Ingresa tu número de identificación y correo electrónico con el que estás registrado en mipaquete.com</li>
			<li>Recibirás un correo y mensaje de texto con un código de verificación que debes ingresar al sistema.</li>
			<li>Al ingresar podrás encontrar el historial de todos los envíos liquidados, recuerda que puedes filtrar por fecha específica, mes o transportadora.</li>
		</ol>
		`,
	},
	{
		title: '¿Cuándo me pagan mis recaudos?',
		description: `<p>El desembolso se realiza cada 10 días y se puede descontar el envío del valor recaudado, con algunas de nuestras transportadoras aliadas. La consignación se transfiere a tu cuenta los días 4, 14 y 24 de cada mes. Este pago es automático y se efectúa al finalizar el día. El pago corresponde a los envíos entregados a tu cliente final, es decir el (Destinatario) así:</p>

		<p>Envíos entregados y recaudados entre el 21 y el 30 o 31 del mes: se pagan el día 04 (del mes siguiente) o siguiente día hábil.</p>

		<p>Envíos entregados y recaudados entre el 01 y el 10 del mes: Se pagan el día 14 o siguiente día hábil.</p>

		<p>Envíos entregados y recaudados entre el 11 y el 20 del mes: Se pagan el día 24 o siguiente día hábil.</p>

		<p>*Para destinos especiales (poblaciones lejanas), el tiempo de pago puede ser superior.</p>
		`,
	},
	{
		title: 'Tengo una novedad con mis recaudos. ¿Qué hago?',
		description: `<p>Reporta y soluciona novedades con tus recaudos aquí: <a href="https://centrodeayuda.mipaquete.com" target='_blank' rel='noopener noreferrer'> https://centrodeayuda.mipaquete.com</a> Recibirás respuesta en máximo un día hábil laboral.</p>
		`,
	},
	{
		title: '¿Cómo me transfieren el dinero de los recaudos?',
		description: `<p>Al momento de registrarte ingresas los datos bancarios de la cuenta donde deseas que te realicemos la transferencia. Puedes cambiar tus datos bancarios en el siguiente enlace: <a href="https://app.mipaquete.com/perfil" target='_blank' rel='noopener noreferrer'> https://app.mipaquete.com/perfil</a></p>
		<p>Ten presente que aplicaremos el cambio de datos bancarios los días 01, 11 y 21 del mes, es decir a partir de dichas fechas los envíos que solicites con recaudo serán pagados a la cuenta bancaria actualizada.</p>
		`,
	},
	{
		title: '¿Cuál es el costo del servicio de recaudo?',
		description: `<p>El porcentaje del recaudo varía según la transportadora, puedes consultarlo en este enlace: <a href="https://mipaquete.com/soluciones-ecommerce/envios-pago-contraentrega" target='_blank' rel='noopener noreferrer'> https://mipaquete.com/soluciones-ecommerce/envios-pago-contraentrega</a>, haciendo clic sobre el logo de cada transportadora.</p>
		`,
	},
	{
		title: '¿Ofrecen descuento por volumen?',
		description: `<p>Sí, si realizas más de 500 envíos mensuales te ofrecemos descuentos especiales para que sigas ahorrando en tu logística. El porcentaje de descuento depende del volumen, contacta a uno de nuestros asesores y recibe una propuesta. Si haces menos de 500 envíos tienes acceso directo a nuestro programa de puntos mipaquete que te da automáticamente puntos por envíar que puedes canjear por productos, servicios o saldo para hacer nuevos envíos.</p>
		`,
	},
	{
		title: '¿De qué se trata el programa de puntos mipaquete?',
		description: `<p>Es un programa que premia tu fidelidad. Por cada envío efectivo que realices acumulas puntos que puedes redimir por productos o servicios, o si prefieres también los puedes usar para pagar nuevos envíos.</p>
		<p>Ten presente que los puntos tienen caducidad de 6 meses (se vencen cada 30 de junio y 31 de diciembre). En nuestro canal de Instagram puedes encontrar un video con el paso a paso para consultar tus puntos y canjearlos por el beneficio que prefieras. <a href="https://www.instagram.com/p/CYwTgxXJ8qH" target='_blank' rel='noopener noreferrer'>https://www.instagram.com/p/CYwTgxXJ8qH</a></p>
		`,
	},
];
