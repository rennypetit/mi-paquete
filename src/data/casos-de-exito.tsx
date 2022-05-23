import { TypeButton } from '@types/global';

export const metaTags = {
	title: 'Casos de éxito | Mi Paquete',
	description:
		'Conoce las empresas que han logrado sus metas y han adquirido mejores resultados mejorando su logística de envíos gracias a Mi Paquete',
};
export const banner = {
	title: 'Casos de éxito',
	items: [
		{
			title: 'Marca:',
			description: 'E-connect BPO SAS',
			color: 'orange',
		},
		{
			title: 'Producto:',
			description: 'Productos naturistas',
			color: 'blue',
		},
	],
	stars: {
		title: 'Calificación:',
		number: 4,
		numberEmpty: 1,
	},
};

export const items = [
	{
		title: '<h2>¿Por qué llegaron a <span>Mi Paquete?</span></h2>',
		description:
			'<p>En el año 2019 escaseaban las soluciones logísticas con pago contra entrega y perdíamos mucho tiempo comparando precios de transportadoras, ya que debíamos consultar la información de forma independiente una por una.</p>',
		image: '/images/casos-de-exito/mi-paquete.png',
		alt: 'mi-paquete',
		color: 'orange',
	},
	{
		title: '<h2>¿Cómo mejoraron sus <span>procesos logísticos?</span></h2>',
		description:
			'<p>Pudimos ofrecer pago contra entrega a nuestros clientes y disponer de una sola plataforma para comparar precios y velocidades de entrega de las diferentes transportadoras, facilitando nuestros <strong>procesos logísticos.</strong></p>',
		image: '/images/casos-de-exito/procesos-logisticos.png',
		alt: 'procesos-logisticos',
		color: 'blue',
	},
];

export const sectionThree = {
	title: '¿Qué lograron?',
	image: '/images/casos-de-exito/person.svg',
	alt: 'person',
	name: '<p><strong>José Robayo</strong> <span>- E-connect BPO SAS</span></p>',
	description:
		'<p>Logramos expandir nuestro negocio, ya que ahora contamos con cobertura a nivel nacional, cumplimos nuestras proyecciones no solo en unidades vendidas, sino también en porcentajes de entregas.</p>',
};

export const commercial = {
	colorText: 'textBlack',
	title: '<p><strong>Plataforma de automatización multitransporte</strong></p>',
	description:
		'<h3>Mejora tus procesos <strong>de logística de envío de productos</strong></h3><p>Descubre cómo mejorar tu <strong>proceso de envío de mercancía</strong> a nivel nacional y urbano con <strong><mark>Mi Paquete</mark></strong> e incrementa tus ventas a través de nuestras soluciones de <strong>automatización de envíos para ecommerce y tiendas online.</strong></p>',
	image: '/images/commercials/home-background.png',
	imageDesktop: '/images/commercials/home-background-desktop.png',
	alt: 'background commercials',
	button: {
		title: 'MÁS INFORMACIÓN',
		url: 'https://app.mipaquete.com/registro',
		color: 'buttonBlue',
		type: TypeButton.blank,
	},
};
