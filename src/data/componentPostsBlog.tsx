const posts = [
	{
		category: 'consejos-para-emprendedores',
		url: '/5-consejos-rapidos-para-activar-tu-comercio/',
		title: '5 CONSEJOS RÁPIDOS PARA ACTIVAR TU COMERCIO',
		description:
			'Aquí hay cinco consejos que puedes implementar de inmediato para evitar...',
		image: '/images/blog/5-consejos-rapidos-para-activar-tu-comercio.jpg',
		imageAlt: '5 CONSEJOS RÁPIDOS PARA ACTIVAR TU COMERCIO',
		last: true,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/8-razones-de-porque-es-importante-el-servicio-al-cliente',
		title: '¿POR QUÉ ES IMPORTANTE EL SERVICIO AL CLIENTE?',
		description:
			'Si estás buscando formas de aumentar la rentabilidad de tu empresa...',
		image: '/images/blog/8-razones-banner.jpg',
		imageAlt: '¿POR QUÉ ES IMPORTANTE EL SERVICIO AL CLIENTE?',
		last: true,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/entregas-de-ultima-milla-para-tu-negocio',
		title: 'ENTREGAS DE ÚLTIMA MILLA PARA TU NEGOCIO',
		description:
			'Es la última etapa de entrega de un pedido al consumidor final',
		image: '/images/blog/entregas-de-ultima-milla-para-tu-negocio.png',
		imageAlt: 'ENTREGAS DE ÚLTIMA MILLA PARA TU NEGOCIO',
		last: false,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/servicio-de-almacenamiento-para-tu-ecommerce',
		title: 'TODO LO QUE DEBES SABER SOBRE NUESTRO SERVICIO DE ALMACENAMIENTO',
		description:
			'Si alguna vez realizaste una compra en línea, entonces sabes lo agradable....',
		image: '/images/blog/servicio-de-almacenamiento-para-tu-ecommerce.png',
		imageAlt: 'SERVICIO DE ALMACENAMIENTO',
		last: false,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/plataformas-ecommerce',
		title: 'PLATAFORMAS ECOMMERCE',
		description:
			'Si tu negocio empieza a crecer y ves la oportunidad de vender en línea...',
		image: '/images/blog/plataformas-ecommerce.png',
		imageAlt: 'PLATAFORMAS ECOMMERCE',
		last: false,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/abc-para-vender-en-dias-sin-iva',
		title: 'ABC PARA VENDER EN DIAS SIN IVA',
		description:
			'Complementos de vestuario, Electrodomésticos, computadores...',
		image: '/images/blog/abc-para-vender-en-dias-sin-iva.png',
		imageAlt: 'ABC PARA VENDER EN DIAS SIN IVA',
		last: false,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/como-hacer-inventarios',
		title: 'COMO HACER INVENTARIOS',
		description:
			'Realizar el inventario es una de las tareas indispensables para cualquier negocio',
		image: '/images/blog/como-hacer-inventarios.png',
		imageAlt: 'COMO HACER INVENTARIOS',
		last: false,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/pautas-para-abrir-mi-tienda-online',
		title: 'PAUTAS PARA IDENTIFICAR CUÁNDO DEBES ABRIR TU TIENDA VIRTUAL',
		description:
			'La información que obtienes en tus gestiones diarias es un insumo...',
		image: '/images/blog/pautas-para-abrir-mi-tienda-online.jpg',
		imageAlt: 'PAUTAS PARA IDENTIFICAR CUÁNDO DEBES ABRIR TU TIENDA VIRTUAL',
		last: false,
	},
	{
		category: 'consejos-para-emprendedores',
		url: '/buenas-practicas-para-emprender',
		title: 'PAUTAS PARA IDENTIFICAR CUÁNDO DEBES ABRIR TU TIENDA VIRTUAL',
		description:
			'En mipaquete.com entendemos que puedes tener muchas dudas si estás...',
		image: '/images/blog/buenas-practicas-para-emprender.png',
		imageAlt: 'PAUTAS PARA IDENTIFICAR CUÁNDO DEBES ABRIR TU TIENDA VIRTUAL',
		last: false,
	},

	{
		category: 'envios',
		url: '/marketing-para-tus-envios',
		title: 'ACABAS DE REALIZAR TU PRIMER ENVÍO, NOS ENCANTA ESTAR DE TU LADO',
		description: 'Te recomendamos que guardes está página en tus favoritos...',
		image:
			'/images/blog/guia-con-todo-lo-que-debes-saber-para-hacer-tu-primer-envio.jpg',
		imageAlt:
			'ACABAS DE REALIZAR TU PRIMER ENVÍO, NOS ENCANTA ESTAR DE TU LADO',
		last: true,
	},

	{
		category: 'envios',
		url: '/marketing-para-tus-envios',
		title: 'MARKETING PARA TUS ENVÍOS',
		description:
			'Si ya cuentas con un emprendimiento digital o estás empezando...',
		image: '/images/blog/marketing-para-tus-envios.jpg',
		imageAlt: 'MARKETING PARA TUS ENVÍOS',
		last: false,
	},
	{
		category: 'envios',
		url: '/ventajas-envios-casilleros-inteligentes',
		title: 'VENTAJAS DE ENVÍOS CASILLEROS INTELIGENTES',
		description:
			'Un Casillero Inteligente es un espacio de almacenamiento seguro...',
		image: '/images/blog/ventajas-envios-casilleros-inteligentes.jpg',
		imageAlt: 'VENTAJAS DE ENVÍOS CASILLEROS INTELIGENTES',
		last: false,
	},
	{
		category: 'envios',
		url: '/pautas-para-envios-en-diciembre',
		title: '4 PAUTAS PARA QUE TUS ENVÍOS EN DICIEMBRE LLEGUEN A SU DESTINO',
		description: 'Diciembre es un mes en el que las compras aumentan...',
		image: '/images/blog/pautas-para-envios-de-diciembre.png',
		imageAlt: '4 PAUTAS PARA QUE TUS ENVÍOS EN DICIEMBRE LLEGUEN A SU DESTINO',
		last: false,
	},
	{
		category: 'envios',
		url: '/detras-de-un-envio',
		title: 'LO QUE OCURRE DETRÁS DE UN ENVÍO',
		description: '¿Te has preguntado cuál es el proceso que debe pasar...?',
		image: '/images/blog/detras-de-un-envio.jpg',
		imageAlt: 'LO QUE OCURRE DETRÁS DE UN ENVÍO',
		last: false,
	},
	{
		category: 'envios',
		url: '/5-recomendaciones-para-enviar-un-paquete-de-tu-tienda-online',
		title: '5 RECOMENDACIONES PARA ENVIAR UN PAQUETE DE TU TIENDA ONLINE',
		description: 'Si quieres ganar la confianza de tus clientes, lograr...',
		image:
			'/images/blog/5-recomendaciones-para-enviar-un-paquete-de-tu-tienda-online.png',
		imageAlt: '5 RECOMENDACIONES PARA ENVIAR UN PAQUETE DE TU TIENDA ONLINE',
		last: false,
	},

	{
		category: 'noticias',
		url: '/gana-la-batalla-con-una-logistica-eficiente',
		title:
			'¿PÉRDIDAS O GANANCIAS EN TUS ENTREGAS? GANA LA BATALLA CON UNA LOGÍSTICA EFICIENTE',
		description:
			'Los clientes quieren saber cuándo pueden esperar su entrega en...',
		image: '/images/blog/gana-la-batalla-con-una-logistica-eficiente.jpg',
		imageAlt:
			'¿PÉRDIDAS O GANANCIAS EN TUS ENTREGAS? GANA LA BATALLA CON UNA LOGÍSTICA EFICIENTE',
		last: true,
	},

	{
		category: 'noticias',
		url: '/guia-programa-de-fidelizacion',
		title: 'GUÍA PARA CREAR TU PROGRAMA DE FIDELIZACIÓN EN 5 PASOS',
		description:
			'Si quieres terminar de enamorar a tus clientes, este artículo...',
		image: '/images/blog/guia-programa-de-fidelizacion.png',
		imageAlt: 'GUÍA PARA CREAR TU PROGRAMA DE FIDELIZACIÓN EN 5 PASOS',
		last: false,
	},

	{
		category: 'noticias',
		url: '/tienda-komercia',
		title: 'KOMERCIA VENDE MÁS CON LA VERSIÓN 2.0',
		description:
			'Actualmente los emprendedores cuentan con un sin fin de opciones...',
		image: '/images/blog/tienda-komercia.png',
		imageAlt: 'KOMERCIA VENDE MÁS CON LA VERSIÓN 2.0',
		last: false,
	},

	{
		category: 'noticias',
		url: '/tienda-komercia',
		title: 'KOMERCIA VENDE MÁS CON LA VERSIÓN 2.0',
		description:
			'Actualmente los emprendedores cuentan con un sin fin de opciones...',
		image: '/images/blog/tienda-komercia.png',
		imageAlt: 'KOMERCIA VENDE MÁS CON LA VERSIÓN 2.0',
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
		imageAlt:
			'¿POR QUÉ MONTAR UNA TIENDA ONLINE EN WOOCOMMERCE ES UNA BUENA IDEA?',
		last: false,
	},

	{
		category: 'noticias',
		url: '/mi-tienda-en-shopify',
		title: '¿QUÉ VENTAJAS OFRECE SHOPIFY PARA CREAR UNA TIENDA ONLINE?',
		description:
			'Esta es una de las plataformas más recomendadas para hacer...',
		image: '/images/blog/mi-tienda-en-shopify.png',
		imageAlt: '¿QUÉ VENTAJAS OFRECE SHOPIFY PARA CREAR UNA TIENDA ONLINE?',
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
		imageAlt:
			'EL ANÁLISIS DE DATOS, UNA ESTRATEGIA PARA TOMAR MEJORES DECISIONES EN TU TIENDA ONLINE',
		last: false,
	},
];
export default posts;