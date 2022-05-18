import { TypesBannerBackground } from '@components/banner/types';
import { TypeButton } from '@types/global';

export const metaTags = {
	title: 'Centro de ayuda | Mi Paquete',
	description:
		'¿Tienes preguntas sobre nuestros servicios? En nuestro centro de ayuda podrás obtener soporte técnico, consultar tus recaudos, recibir asesoría y más.',
};

export const banner: TypesBannerBackground = {
	orientation: '',
	title: 'Centro de ayuda Mi Paquete',
	description: '¿Tienes alguna duda sobre tus envíos? ¡Te ayudamos!',
	image: '/images/banners/help.png',
	imageDesktop: '/images/banners/help-desktop.png',
	alt: 'Banner background',
};

export const cards = [
	{
		image: '/images/cards/primeros-pasos.png',
		alt: 'card primeros pasos',
		title: 'Primeros pasos',
		url: '/centro-de-ayuda/primeros-pasos',
		type: TypeButton.link,
	},
	{
		image: '/images/cards/aprende-mas.png',
		alt: 'card Aprende más',
		title: 'Aprende más',
		url: '/centro-de-ayuda/aprende-mas',
		type: TypeButton.link,
	},
	{
		image: '/images/cards/centro-de-novedades.png',
		alt: 'card Centro de novedades',
		title: 'Centro de novedades',
		url: 'https://centrodenovedades.mipaquete.com/novedades',
		type: TypeButton.blank,
	},
	{
		image: '/images/cards/consulta-tus-recaudos.png',
		alt: 'card Consulta tus recaudos',
		title: 'Consulta tus recaudos',
		url: 'https://mipaquete.com/solucionesusuario/consulta_recaudos/',
		type: TypeButton.blank,
	},
];

export const commercial = {
	colorText: 'textBlack',
	description:
		'<h3>¡Descubre cómo hacer <span>tu primer envío!</span></h3><p>Emprender no es fácil pero nosotros lo hacemos más simple con <strong><mark>Mi Paquete.</mark></strong></p>',
	image: '/images/commercials/help.png',
	imageDesktop: '/images/commercials/help.png',
	alt: 'background commercials',
	button: {
		title: 'MÁS INFORMACIÓN',
		color: 'buttonBlue',
		url: '/centro-de-ayuda/primer-envio',
		type: TypeButton.link,
	},
};

export const allQuestions = [
	{
		title: 'ENVÍOS TRADICIONALES',
		subItems: [
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
		],
	},
	{
		title: 'ENVÍOS CON PAGO CONTRA ENTREGA',
		subItems: [
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
		],
	},
	{
		title: 'ALMACENAMIENTO',
		subItems: [
			{
				title: '¿Cómo hago seguimiento al inventario?',
				description: `<p>Te brindamos la tecnología necesaria para que lleves control de tu inventario y recibe alertas cuando este se esté agotando. Recibirás capacitación y acompañamiento para el uso de la herramienta.</p>`,
			},
			{
				title: '¿Cómo pago el servicio de almacenamiento?',
				description: `<p>Si tus envíos son con pago contra entrega descontaremos de los recaudos el costo del almacenamiento, si no son con pago contra entrega recibirás factura para pago inmediato.</p>`,
			},
			{
				title:
					'¿Cómo obtengo más información sobre el servicio de almacenamiento?',
				description: `<p>Escríbenos a nuestra línea de whatsapp <a href="tel:+573216330447">+57 321 6330447</a> y te asignaremos un asesor especializado para ayudarte.</p>`,
			},
		],
	},
	{
		title: 'AUTOMATIZACIÓN MULTITRANSPORTE',
		subItems: [
			{
				title: '¿Qué es el Software de Automatización de Envíos? ',
				description:
					'<p>Es una tecnología desarrollada por mipaquete.com que le permite a los grandes ecommerce tener en una sola integración a todas las transportadoras de mipaquete.com y unificar de esta manera la trazabilidad e información logística. Ofrece tableros de control y alertas de la operación logística para tomar decisiones operativas oportunas y eficientes.</p>',
			},
			{
				title:
					'Si ya tengo negociación con las transportadoras ¿Puedo usar el software?',
				description:
					'<p>Sí, el software te permite seguir con las negociaciones directas que tienes con las transportadoras, pero con los beneficios de nuestra tecnología.</p>',
			},
			{
				title: '¿Cuál es el precio de este software?',
				description:
					'<p>El costo depende del número de envíos que realice tu ecommerce.</p>',
			},
			{
				title: '¿Cómo acceder a esta tecnología?',
				description:
					'<p>Contáctanos y te asignaremos un ejecutivo de cuenta quien te acompañará en el proceso.</p>',
			},
		],
	},
	{
		title: 'SHOPIFY',
		subItems: [
			{
				title: '¿Qué beneficios tiene la aplicación para Shopify?',
				description: `
		<p>
			<ul>
				<li>Permite parametrizar múltiples transportadoras.</li>
				<li>Opción para que en el checkout el comprador pueda comparar las transportadoras y seleccionar la de su preferencia.</li>
				<li>Opción de calcular tarifas y generar guías con pago contra entrega (recaudo de la venta al entregar el producto).</li>
				<li>Generación y descarga de guías con un solo clic.</li>
				<li>Opción de edición de pedido antes de generar la guía.</li>
				<li>Calculador de tarifa de envíos (Carrier Service).</li>
				<li>Recarga de saldo directamente desde la aplicación.</li>
				<li>Selección automática de transportadora por criterios como: Mejor precio, mejor servicio, menor tiempo de entrega.</li>
			</ul>
		</p>
		`,
			},
			{
				title:
					'¿Debo tener el Carrier Service de Shopify activo para utilizar el plugin?',
				description: `<p>No es necesario, puedes usar nuestro plugin configurando la opción de tarifa estándar para que puedas automatizar tus envíos con nuestro servicio.</p>`,
			},
			{
				title:
					'Si no tengo saldo en la billetera de mipaquete.com ¿Mi cliente no puede realizar la compra?',
				description: `<p>Tu cliente puede generar la compra de tus productos tranquilamente, pero si es necesario que tengas saldo en tu billetera en el momento de generar la guía.</p>`,
			},
			{
				title:
					'¿Dónde descargo las guías de mis envíos y hago seguimiento de los mismos?',
				description: `<p>Puedes hacerlo directamente desde Shopify. También puedes ingresar a nuestra plataforma, en la sección tus envíos y desde allí descargar tus envíos y ver sus estados logísticos.</p>`,
			},
		],
	},
	{
		title: 'WOOCOMMERCE',
		subItems: [
			{
				title: '¿Qué beneficios tiene el plugin para Woocommerce?',
				description: `
		<p>
			<ul>
				<li>Nuestra última actualización de plugin de Mi Paquete es la 3.0</li>
				<li>Permite parametrizar múltiples transportadoras.li>
				<li>Envíos gratis y la opción de estandarizar sus tarifas.</li>
				<li>Agregar medidas y configurar productos variables.</li>
				<li>Opción para que en el checkout el comprador pueda comparar las transportadoras y seleccionar la de su preferencia.</li>
				<li>Opción de calcular tarifas y generar guías con pago contra entrega (recaudo de la venta al entregar el producto).</li>
				<li>Generación y descarga de guías con un solo clic.</li>
				<li>Opción de edición de pedido antes de generar la guía.</li>
				<li>Calculador de tarifa de envíos.</li>
				<li>Selección automática de transportadora por criterios como: Mejor precio, mejor servicio, menor tiempo de entrega.</li>
			</ul>
		</p>
		`,
			},
			{
				title:
					'Si no tengo saldo en la billetera de mipaquete.com ¿Mi cliente no puede realizar la compra?',
				description: `<p>Tu cliente puede generar la compra de tus productos tranquilamente, pero si es necesario que tengas saldo en tu billetera en el momento de generar la guía.</p>`,
			},
			{
				title:
					'¿Dónde descargo las guías de mis envíos y hago seguimiento de los mismos?',
				description: `<p>Puedes hacerlo directamente desde Woocommerce. También puedes ingresar a nuestra plataforma, en la sección tus envíos y desde allí descargar tus envíos y ver sus estados logísticos.</p>`,
			},
		],
	},
	{
		title: 'JUMPSELLER',
		subItems: [
			{
				title: '¿Dónde puedo descargar el plugin para JumpSeller?',
				description: `<p>Ingresas a tu tienda en JumpSeller. Da clic en la opción de aplicaciones y en la categoría de "shipping and fulfillment" encontrarás nuestra opción identificado con nuestro logo. Recuerda que nuestro plugin es gratuito.</p>`,
			},
			{
				title: '¿Cómo debo configurar mi plugin?',
				description: `<p>Configurar el plugin es rápido y sencillo, en solo 5 pasos lo conseguirás. En el siguiente video te mostramos cómo hacerlo: <a href="https://drive.google.com/drive/u/1/folders/1MIAT91ifAp_sw26PYGOBVFtK4pHqL3Fj">https://drive.google.com/drive/u/1/folders/1MIAT91ifAp_sw26PYGOBVFtK4pHqL3Fj</a></p>`,
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
		],
	},
	{
		title: 'KOMERCIA',
		subItems: [
			{
				title:
					'¿Tiene algún costo la configuración de mipaquete.com en Komercia?',
				description: '<p>No tiene ningún costo. Solo pagas por tus envíos.</p>',
			},
			{
				title: 'Necesito apoyo técnico para la configuración.',
				description:
					'<p>Comunícate al whatsapp de soporte de Komercia <a href="tel:+573107884893">+57 310 7884893</a>, están disponibles para ayudarte.</p>',
			},
		],
	},
	{
		title: 'API',
		subItems: [
			{
				title: '¿Dónde encuentro la documentación de la API y su alcance?',
				description: `<p>En <a href="https://documenter.getpostman.com/view/14212363/Tzm8GFfQ">https://documenter.getpostman.com/view/14212363/Tzm8GFfQ</a> Si no eres desarrollador puedes leer el alcance completo en el link “Introducción” que aparece en el menú.</p>`,
			},
			{
				title: '¿Tienen ambiente de pruebas para la API?',
				description: `<p>si tenemos, puedes acceder al siguiente enlace: <a href="https://app.dev.mpr.mipaquete.com/cotizacion">https://app.dev.mpr.mipaquete.com/cotizacion</a></p>`,
			},
			{
				title: '¿Dónde puedo acceder a las API KEY?',
				description: `<p>La api key se genera en el servicio generateApiKey, Se agrega el usuario y contraseña registrado y de esta manera las generas. No hay necesidad de generarla varias veces.</p>`,
			},
			{
				title: '¿Ustedes realizan la configuración de la API?',
				description: `<p>No, la configuración la debe realizar un desarrollador con un conocimiento técnico para realizar este tipo de integración. </p>`,
			},
		],
	},
];
