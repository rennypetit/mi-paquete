const posts = [
	{
		category: 'consejos-para-emprendedores',
		url: '/5-consejos-rapidos-para-activar-tu-comercio/',
		title: '5 CONSEJOS RÁPIDOS PARA ACTIVAR TU COMERCIO',
		description:
			'Aquí hay cinco consejos que puedes implementar de inmediato para evitar...',
		image: '/images/blog/5-consejos-rapidos-para-activar-tu-comercio.jpg',
		alt: '5 CONSEJOS RÁPIDOS PARA ACTIVAR TU COMERCIO',
		last: true,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/8-razones-de-porque-es-importante-el-servicio-al-cliente',
		title: '¿POR QUÉ ES IMPORTANTE EL SERVICIO AL CLIENTE?',
		description:
			'Si estás buscando formas de aumentar la rentabilidad de tu empresa...',
		image: '/images/blog/8-razones-banner.jpg',
		alt: '¿POR QUÉ ES IMPORTANTE EL SERVICIO AL CLIENTE?',
		last: true,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/abc-para-vender-en-dias-sin-iva',
		title: 'ABC PARA VENDER EN DIAS SIN IVA',
		description:
			'Complementos de vestuario, Electrodomésticos, computadores...',
		image: '/images/blog/abc-para-vender-en-dias-sin-iva.png',
		alt: 'ABC PARA VENDER EN DIAS SIN IVA',
		last: false,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/buenas-practicas-para-emprender',
		title: 'PAUTAS PARA IDENTIFICAR CUÁNDO DEBES ABRIR TU TIENDA VIRTUAL',
		description:
			'En mipaquete.com entendemos que puedes tener muchas dudas si estás...',
		image: '/images/blog/buenas-practicas-para-emprender.png',
		alt: 'PAUTAS PARA IDENTIFICAR CUÁNDO DEBES ABRIR TU TIENDA VIRTUAL',
		last: false,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/como-hacer-inventarios',
		title: '¿CÓMO HACER UN INVENTARIO DE PRODUCTOS?',
		description:
			'Realizar el inventario es una de las tareas indispensables para cualquier negocio...',
		image: '/images/blog/como-hacer-inventarios.png',
		alt: '¿CÓMO HACER UN INVENTARIO DE PRODUCTOS?',
		last: false,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/entregas-de-ultima-milla-para-tu-negocio',
		title: 'ENTREGAS DE ÚLTIMA MILLA PARA TU NEGOCIO',
		description:
			'Es la última etapa de entrega de un pedido al consumidor final',
		image: '/images/blog/entregas-de-ultima-milla-para-tu-negocio.png',
		alt: 'ENTREGAS DE ÚLTIMA MILLA PARA TU NEGOCIO',
		last: false,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/pautas-para-abrir-mi-tienda-online',
		title: 'PAUTAS PARA IDENTIFICAR CUÁNDO DEBES ABRIR TU TIENDA VIRTUAL',
		description:
			'La información que obtienes en tus gestiones diarias es un insumo...',
		image: '/images/blog/pautas-para-abrir-mi-tienda-online.jpg',
		alt: 'PAUTAS PARA IDENTIFICAR CUÁNDO DEBES ABRIR TU TIENDA VIRTUAL',
		last: false,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/plataformas-ecommerce',
		title: 'PLATAFORMAS ECOMMERCE',
		description:
			'Si tu negocio empieza a crecer y ves la oportunidad de vender en línea...',
		image: '/images/blog/plataformas-ecommerce.png',
		alt: 'PLATAFORMAS ECOMMERCE',
		last: false,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/servicio-de-almacenamiento-para-tu-ecommerce',
		title: 'TODO LO QUE DEBES SABER SOBRE NUESTRO SERVICIO DE ALMACENAMIENTO',
		description:
			'Si alguna vez realizaste una compra en línea, entonces sabes lo agradable....',
		image: '/images/blog/servicio-de-almacenamiento-para-tu-ecommerce.png',
		alt: 'SERVICIO DE ALMACENAMIENTO',
		last: false,
	},

	{
		category: 'envios',
		url: '/5-recomendaciones-para-enviar-un-paquete-de-tu-tienda-online',
		title: '5 RECOMENDACIONES PARA ENVIAR UN PAQUETE DE TU TIENDA ONLINE',
		description: 'Si quieres ganar la confianza de tus clientes, lograr...',
		image:
			'/images/blog/5-recomendaciones-para-enviar-un-paquete-de-tu-tienda-online.png',
		alt: '5 RECOMENDACIONES PARA ENVIAR UN PAQUETE DE TU TIENDA ONLINE',
		last: false,
	},
	{
		category: 'envios',
		url: '/automatiza-tus-envios',
		title: 'CONOCE LAS VENTAJAS DE INTEGRAR TU TIENDA ONLINE',
		description:
			'Al automatizar la logística de envíos de tu tienda online, ahorrarás tiempo y dinero...',
		image: '/images/blog/marketing-para-tus-envios.jpg',
		alt: 'MARKETING PARA TUS ENVÍOS',
		last: false,
	},

	{
		category: 'envios',
		url: '/comparar-envios-transportadora',
		title: 'CONOCE LAS VENTAJAS DE INTEGRAR TU TIENDA ONLINE',
		description: 'Compara y elige la transportadora ideal para tus envíos...',
		image: '/images/blog/comparar-envios-transportadora.jpg',
		alt: 'comparar-envios-transportadora',
		last: false,
	},

	{
		category: 'envios',
		url: '/detras-de-un-envio',
		title: 'LO QUE OCURRE DETRÁS DE UN ENVÍO',
		description: '¿Te has preguntado cuál es el proceso que debe pasar?...',
		image: '/images/blog/detras-de-un-envio.jpg',
		alt: 'LO QUE OCURRE DETRÁS DE UN ENVÍO',
		last: false,
	},

	{
		category: 'envios',
		url: '/envios-que-generan-confianza',
		title:
			'REFUERZA LA CONFIANZA DE TUS CLIENTES CON UNA LOGÍSTICA EFICIENTE DE ENVÍOS',
		description:
			'Aprovecha las funcionalidades que te ofrecen plataformas de envíos online...',
		image: '/images/blog/envios-que-generan-confianza.png',
		alt: 'REFUERZA LA CONFIANZA DE TUS CLIENTES CON UNA LOGÍSTICA EFICIENTE DE ENVÍOS',
		last: false,
	},

	{
		category: 'envios',
		url: '/guia-con-todo-lo-que-debes-saber-para-hacer-tu-primer-envio',
		title: 'ACABAS DE REALIZAR TU PRIMER ENVÍO, NOS ENCANTA ESTAR DE TU LADO',
		description: 'Te recomendamos que guardes está página en tus favoritos...',
		image:
			'/images/blog/guia-con-todo-lo-que-debes-saber-para-hacer-tu-primer-envio.jpg',
		alt: 'ACABAS DE REALIZAR TU PRIMER ENVÍO, NOS ENCANTA ESTAR DE TU LADO',
		last: true,
	},

	{
		category: 'envios',
		url: '/marketing-para-tus-envios',
		title: 'MARKETING PARA TUS ENVÍOS',
		description:
			'Si ya cuentas con un emprendimiento digital o estás empezando...',
		image: '/images/blog/marketing-para-tus-envios.jpg',
		alt: 'MARKETING PARA TUS ENVÍOS',
		last: false,
	},
	{
		category: 'envios',
		url: '/mejorar-tiempo-entregas',
		title:
			'CLAVES PARA OPTIMIZAR LOS TIEMPOS AL HACER LOS ENVÍOS DE TU TIENDA ONLINE',
		description:
			'Claves para optimizar los tiempos al hacer los envíos de tu tienda online...',
		image: '/images/blog/mejorar-tiempo-entregas.jpg',
		alt: 'mejorar-tiempo-entregas',
		last: false,
	},

	{
		category: 'envios',
		url: '/pautas-para-envios-en-diciembre',
		title: '4 PAUTAS PARA QUE TUS ENVÍOS EN DICIEMBRE LLEGUEN A SU DESTINO',
		description: 'Diciembre es un mes en el que las compras aumentan...',
		image: '/images/blog/pautas-para-envios-de-diciembre.png',
		alt: '4 PAUTAS PARA QUE TUS ENVÍOS EN DICIEMBRE LLEGUEN A SU DESTINO',
		last: false,
	},

	{
		category: 'envios',
		url: '/plataformas-envio-online',
		title: '¿CUÁLES SON LAS VENTAJAS DE USAR LAS PLATAFORMAS DE ENVÍOS ONLINE?',
		description:
			'El uso de estas plataformas para gestionar la logística de envíos online...',
		image: '/images/blog/plataformas-envio-online.jpg',
		alt: '¿CUÁLES SON LAS VENTAJAS DE USAR LAS PLATAFORMAS DE ENVÍOS ONLINE?',
		last: false,
	},

	{
		category: 'envios',
		url: '/protege-tus-envios',
		title: 'PROTEGE TUS ENVÍOS CON UN EMPAQUE ADECUADO DE LA MERCANCÍA',
		description:
			'Para ofrecerles a los clientes una experiencia de compra memorable ...',
		image: '/images/blog/protege-tus-envios.png',
		alt: 'PROTEGE TUS ENVÍOS CON UN EMPAQUE ADECUADO DE LA MERCANCÍA',
		last: false,
	},

	{
		category: 'envios',
		url: '/ventajas-envios-casilleros-inteligentes',
		title: 'VENTAJAS DE ENVÍOS CASILLEROS INTELIGENTES',
		description:
			'Un Casillero Inteligente es un espacio de almacenamiento seguro...',
		image: '/images/blog/ventajas-envios-casilleros-inteligentes.jpg',
		alt: 'VENTAJAS DE ENVÍOS CASILLEROS INTELIGENTES',
		last: false,
	},

	{
		category: 'noticias',
		url: '/gana-la-batalla-con-una-logistica-eficiente',
		title: '¿PÉRDIDAS O GANANCIAS EN TUS ENTREGAS?',
		description:
			'Los clientes quieren saber cuándo pueden esperar su entrega en...',
		image: '/images/blog/gana-la-batalla-con-una-logistica-eficiente.jpg',
		alt: '¿PÉRDIDAS O GANANCIAS EN TUS ENTREGAS?s',
		last: true,
	},

	{
		category: 'noticias',
		url: '/guia-programa-de-fidelizacion',
		title: 'GUÍA PARA CREAR TU PROGRAMA DE FIDELIZACIÓN EN 5 PASOS',
		description:
			'Si quieres terminar de enamorar a tus clientes, este artículo...',
		image: '/images/blog/guia-programa-de-fidelizacion.png',
		alt: 'GUÍA PARA CREAR TU PROGRAMA DE FIDELIZACIÓN EN 5 PASOS',
		last: false,
	},

	{
		category: 'noticias',
		url: '/mi-paquete-reloaded',
		title: 'MÁS FUNCIONALIDADES Y MEJOR EXPERIENCIA PARA EL USUARIO',
		description:
			'Nuestra plataforma tecnológica ha cambiado para facilitar tu proceso de envíos...',
		image: '/images/blog/guia-programa-de-fidelizacion.png',
		alt: 'MÁS FUNCIONALIDADES Y MEJOR EXPERIENCIA PARA EL USUARIO',
		last: false,
	},

	{
		category: 'noticias',
		url: '/tienda-komercia',
		title: 'KOMERCIA VENDE MÁS CON LA VERSIÓN 2.0',
		description:
			'Actualmente los emprendedores cuentan con un sin fin de opciones...',
		image: '/images/blog/tienda-komercia.png',
		alt: 'KOMERCIA VENDE MÁS CON LA VERSIÓN 2.0',
		last: false,
	},

	{
		category: 'noticias',
		url: '/tienda-komercia',
		title: 'KOMERCIA VENDE MÁS CON LA VERSIÓN 2.0',
		description:
			'Actualmente los emprendedores cuentan con un sin fin de opciones...',
		image: '/images/blog/tienda-komercia.png',
		alt: 'KOMERCIA VENDE MÁS CON LA VERSIÓN 2.0',
		last: false,
	},

	{
		category: 'noticias',
		url: '/mi-tienda-en-woocommerce',
		title:
			'¿POR QUÉ MONTAR UNA TIENDA ONLINE EN WOOCOMMERCE ES UNA BUENA IDEA?',
		description:
			'En la actualidad los emprendedores cuentan con muchas opciones para...',
		image: '/images/blog/mi-tienda-en-woocommerce.png',
		alt: '¿POR QUÉ MONTAR UNA TIENDA ONLINE EN WOOCOMMERCE ES UNA BUENA IDEA?',
		last: false,
	},

	{
		category: 'noticias',
		url: '/mi-tienda-en-shopify',
		title: '¿QUÉ VENTAJAS OFRECE SHOPIFY PARA CREAR UNA TIENDA ONLINE?',
		description:
			'Esta es una de las plataformas más recomendadas para hacer...',
		image: '/images/blog/mi-tienda-en-shopify.png',
		alt: '¿QUÉ VENTAJAS OFRECE SHOPIFY PARA CREAR UNA TIENDA ONLINE?',
		last: false,
	},
	{
		category: 'noticias',
		url: '/ventajas-envios-pago-contra-entrega',
		title:
			'LOS BENEFICIOS DE REALIZAR ENVÍOS CON PAGO CONTRA ENTREGA EN UNA TIENDA ONLINE',
		description:
			'Los envíos Con Pago Contra Entrega son un método de envío + recaudo...',
		image: '/images/blog/ventajas-envios-pago-contra-entrega.png',
		alt: 'LOS BENEFICIOS DE REALIZAR ENVÍOS CON PAGO CONTRA ENTREGA EN UNA TIENDA ONLINE',
		last: false,
	},

	{
		category: 'noticias',
		url: '/ventas-y-envios-basados-en-datos',
		title:
			'EL ANÁLISIS DE DATOS, UNA ESTRATEGIA PARA TOMAR MEJORES DECISIONES EN TU TIENDA ONLINE',
		description:
			'La información que obtienes en tus gestiones diarias es un...',
		image: '/images/blog/ventas-y-envios-basados-en-datos.png',
		alt: 'EL ANÁLISIS DE DATOS, UNA ESTRATEGIA PARA TOMAR MEJORES DECISIONES EN TU TIENDA ONLINE',
		last: false,
	},
];
export default posts;
