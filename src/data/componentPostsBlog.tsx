const posts = [
	{
		category: 'consejos-para-emprendedores',
		url: '/5-consejos-rapidos-para-activar-tu-comercio/',
		title: '5 CONSEJOS RÁPIDOS PARA ACTIVAR TU COMERCIO',
		description:
			'Aquí hay cinco consejos que puedes implementar de inmediato para evitar la temida caída de las ventas en Semana Santa',
		image: '/images/blog/5-consejos-rapidos-para-activar-tu-comercio.jpg',
		imageAlt: '5 CONSEJOS RÁPIDOS PARA ACTIVAR TU COMERCIO',
		principal: true,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/8-razones-de-porque-es-importante-el-servicio-al-cliente',
		title: '¿POR QUÉ ES IMPORTANTE EL SERVICIO AL CLIENTE?',
		description:
			'Si estás buscando formas de aumentar la rentabilidad de tu empresa, el departamento de servicio al cliente es un buen lugar para comenzar',
		image: '/images/blog/8-razones-banner.jpg',
		imageAlt: '¿POR QUÉ ES IMPORTANTE EL SERVICIO AL CLIENTE?',
		principal: false,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/entregas-de-ultima-milla-para-tu-negocio',
		title: 'ENTREGAS DE ÚLTIMA MILLA PARA TU NEGOCIO',
		description:
			'Es la última etapa de entrega de un pedido al consumidor final',
		image: '/images/blog/entregas-de-ultima-milla-para-tu-negocio.png',
		imageAlt: 'ENTREGAS DE ÚLTIMA MILLA PARA TU NEGOCIO',
		principal: false,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/servicio-de-almacenamiento-para-tu-ecommerce',
		title: 'TODO LO QUE DEBES SABER SOBRE NUESTRO SERVICIO DE ALMACENAMIENTO',
		description:
			'Si alguna vez realizaste una compra en línea, entonces sabes lo agradable que es recibir un paquete en tu puerta poco después de ordenarla',
		image: '/images/blog/servicio-de-almacenamiento-para-tu-ecommerce.png',
		imageAlt: 'SERVICIO DE ALMACENAMIENTO',
		principal: false,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/plataformas-ecommerce',
		title: 'PLATAFORMAS ECOMMERCE',
		description:
			'Si tu negocio empieza a crecer y ves la oportunidad de vender en línea, te enfrentas a  un primer desafío y es decidir dónde montar tu tienda',
		image: '/images/blog/plataformas-ecommerce.png',
		imageAlt: 'PLATAFORMAS ECOMMERCE',
		principal: false,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/abc-para-vender-en-dias-sin-iva',
		title: 'ABC PARA VENDER EN DIAS SIN IVA',
		description: '',
		image: '/images/blog/abc-para-vender-en-dias-sin-iva.png',
		imageAlt: 'ABC PARA VENDER EN DIAS SIN IVA',
		principal: false,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/como-hacer-inventarios',
		title: 'COMO HACER INVENTARIOS',
		description:
			'Realizar el inventario es una de las tareas indispensables para cualquier negocio',
		image: '/images/blog/como-hacer-inventarios.png',
		imageAlt: 'COMO HACER INVENTARIOS',
		principal: false,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/pautas-para-abrir-mi-tienda-online',
		title:
			'PAUTAS PARA IDENTIFICAR CUÁNDO DEBES ABRIR TU TIENDA VIRTUAL SI HOY VENDES POR REDES SOCIALES',
		description:
			'La información que obtienes en tus gestiones diarias es un insumo muy útil para orientar tus planes logísticos y de mercadeo',
		image: '/images/blog/pautas-para-abrir-mi-tienda-online.jpg',
		imageAlt:
			'PAUTAS PARA IDENTIFICAR CUÁNDO DEBES ABRIR TU TIENDA VIRTUAL SI HOY VENDES POR REDES SOCIALES',
		principal: false,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/buenas-practicas-para-emprender',
		title:
			'PAUTAS PARA IDENTIFICAR CUÁNDO DEBES ABRIR TU TIENDA VIRTUAL SI HOY VENDES POR REDES SOCIALES',
		description:
			'En mipaquete.com entendemos que puedes tener muchas dudas si estás iniciando o tienes intención de emprender',
		image: '/images/blog/buenas-practicas-para-emprender.png',
		imageAlt:
			'PAUTAS PARA IDENTIFICAR CUÁNDO DEBES ABRIR TU TIENDA VIRTUAL SI HOY VENDES POR REDES SOCIALES',
		principal: false,
	},

	{
		category: 'envios',
		url: '/marketing-para-tus-envios',
		title: 'ACABAS DE REALIZAR TU PRIMER ENVÍO, NOS ENCANTA ESTAR DE TU LADO',
		description:
			'¡Te recomendamos que guardes está página en tus favoritos o en un lugar que siempre esté a tu alcance, es una guía fundamental para nuestra relación que ahora empieza!',
		image:
			'/images/blog/guia-con-todo-lo-que-debes-saber-para-hacer-tu-primer-envio.jpg',
		imageAlt:
			'ACABAS DE REALIZAR TU PRIMER ENVÍO, NOS ENCANTA ESTAR DE TU LADO',
		principal: true,
	},

	{
		category: 'envios',
		url: '/marketing-para-tus-envios',
		title: 'MARKETING PARA TUS ENVÍOS',
		description:
			'Si ya cuentas con un emprendimiento digital o estás empezando tu proyecto, es importante tener en cuenta una planeación de marketing que contribuya al cumplimiento de tus objetivos y al crecimiento de tu negocio',
		image: '/images/blog/marketing-para-tus-envios.jpg',
		imageAlt: 'MARKETING PARA TUS ENVÍOS',
		principal: false,
	},
	{
		category: 'envios',
		url: '/ventajas-envios-casilleros-inteligentes',
		title: 'VENTAJAS DE ENVÍOS CASILLEROS INTELIGENTES',
		description:
			'Un Casillero Inteligente es un espacio de almacenamiento seguro y de fácil acceso',
		image: '/images/blog/ventajas-envios-casilleros-inteligentes.jpg',
		imageAlt: 'VENTAJAS DE ENVÍOS CASILLEROS INTELIGENTES',
		principal: false,
	},
	{
		category: 'envios',
		url: '/pautas-para-envios-en-diciembre',
		title: '4 PAUTAS PARA QUE TUS ENVÍOS EN DICIEMBRE LLEGUEN A SU DESTINO',
		description:
			'Diciembre es un mes en el que las compras aumentan y las personas consumen más',
		image: '/images/blog/pautas-para-envios-de-diciembre.png',
		imageAlt: '4 PAUTAS PARA QUE TUS ENVÍOS EN DICIEMBRE LLEGUEN A SU DESTINO',
		principal: false,
	},
	{
		category: 'envios',
		url: '/detras-de-un-envio',
		title: 'LO QUE OCURRE DETRÁS DE UN ENVÍO',
		description:
			'¿Te has preguntado cuál es el proceso que debe pasar un envío para llegar hasta la puerta de tu casa?',
		image: '/images/blog/detras-de-un-envio.jpg',
		imageAlt: 'LO QUE OCURRE DETRÁS DE UN ENVÍO',
		principal: false,
	},
	{
		category: 'envios',
		url: '/5-recomendaciones-para-enviar-un-paquete-de-tu-tienda-online',
		title: '5 RECOMENDACIONES PARA ENVIAR UN PAQUETE DE TU TIENDA ONLINE',
		description:
			'Si quieres ganar la confianza de tus clientes, lograr que vuelvan a comprarte y que te recomienden, debes trabajar en una experiencia de entrega memorable',
		image:
			'/images/blog/5-recomendaciones-para-enviar-un-paquete-de-tu-tienda-online.png',
		imageAlt: '5 RECOMENDACIONES PARA ENVIAR UN PAQUETE DE TU TIENDA ONLINE',
		principal: false,
	},

	{
		category: 'noticias',
		url: '/gana-la-batalla-con-una-logistica-eficiente',
		title:
			'¿PÉRDIDAS O GANANCIAS EN TUS ENTREGAS? GANA LA BATALLA CON UNA LOGÍSTICA EFICIENTE',
		description:
			'Los clientes quieren saber cuándo pueden esperar su entrega en relación con el momento en que realizaron el pedido',
		image: '/images/blog/gana-la-batalla-con-una-logistica-eficiente.jpg',
		imageAlt:
			'¿PÉRDIDAS O GANANCIAS EN TUS ENTREGAS? GANA LA BATALLA CON UNA LOGÍSTICA EFICIENTE',
		principal: false,
	},

	{
		category: 'noticias',
		url: '/guia-programa-de-fidelizacion',
		title: 'GUÍA PARA CREAR TU PROGRAMA DE FIDELIZACIÓN EN 5 PASOS',
		description:
			'Si quieres terminar de enamorar a tus clientes, este artículo es perfecto para ti',
		image: '/images/blog/guia-programa-de-fidelizacion.png',
		imageAlt: 'GUÍA PARA CREAR TU PROGRAMA DE FIDELIZACIÓN EN 5 PASOS',
		principal: false,
	},

	{
		category: 'noticias',
		url: '/tienda-komercia',
		title: 'KOMERCIA VENDE MÁS CON LA VERSIÓN 2.0',
		description:
			'Actualmente los emprendedores cuentan con un sin fin de opciones para crear sus tiendas online y aumentar ventas',
		image: '/images/blog/tienda-komercia.png',
		imageAlt: 'KOMERCIA VENDE MÁS CON LA VERSIÓN 2.0',
		principal: false,
	},

	{
		category: 'noticias',
		url: '/tienda-komercia',
		title: 'KOMERCIA VENDE MÁS CON LA VERSIÓN 2.0',
		description:
			'Actualmente los emprendedores cuentan con un sin fin de opciones para crear sus tiendas online y aumentar ventas',
		image: '/images/blog/tienda-komercia.png',
		imageAlt: 'KOMERCIA VENDE MÁS CON LA VERSIÓN 2.0',
		principal: false,
	},

	{
		category: 'noticias',
		url: '/mi-tienda-en-woocommerce',
		title:
			'¿POR QUÉ MONTAR UNA TIENDA ONLINE EN WOOCOMMERCE ES UNA BUENA IDEA?',
		description:
			'En la actualidad los emprendedores cuentan con muchas opciones para crear sus tiendas online y apostarle al crecimiento de sus ventas por internet',
		image: '/images/blog/mi-tienda-en-woocommerce.png',
		imageAlt:
			'¿POR QUÉ MONTAR UNA TIENDA ONLINE EN WOOCOMMERCE ES UNA BUENA IDEA?',
		principal: false,
	},

	{
		category: 'noticias',
		url: '/mi-tienda-en-shopify',
		title: '¿QUÉ VENTAJAS OFRECE SHOPIFY PARA CREAR UNA TIENDA ONLINE?',
		description:
			'Esta es una de las plataformas más recomendadas para hacer el montaje de tu comercio electrónico. Te contamos cómo puedes sacarle provecho para beneficio de tu negocio',
		image: '/images/blog/mi-tienda-en-shopify.png',
		imageAlt: '¿QUÉ VENTAJAS OFRECE SHOPIFY PARA CREAR UNA TIENDA ONLINE?',
		principal: false,
	},
	{
		category: 'noticias',
		url: '/ventas-y-envios-basados-en-datos',
		title:
			'EL ANÁLISIS DE DATOS, UNA ESTRATEGIA PARA TOMAR MEJORES DECISIONES EN TU TIENDA ONLINE',
		description:
			'La información que obtienes en tus gestiones diarias es un insumo muy útil para orientar tus planes logísticos y de mercadeo. Te compartimos algunas recomendaciones para que escales tus ventas a un nivel mayor',
		image: '/images/blog/ventas-y-envios-basados-en-datos.png',
		imageAlt:
			'EL ANÁLISIS DE DATOS, UNA ESTRATEGIA PARA TOMAR MEJORES DECISIONES EN TU TIENDA ONLINE',
		principal: false,
	},
];
export default posts;
