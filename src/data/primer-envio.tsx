import { TypesBanner } from '@components/banner/types';

export const banner: TypesBanner = {
	orientation: '',
	title: `¿Vas a realizar tu primer envío con Mi Paquete?`,
	description:
		'Aquí encontrarás todo lo que necesitas conocer a la hora de hacer tus envíos.',
	image: '/images/form/background-primary.png',
	alt: 'Banner background',
};

export const features = {
	image: '/images/features/submit.png',
	alt: 'features',
	titleTwo: 'Empieza a realizar tus envíos en minutos:',
	colorTitleTwo: 'blue',
	orientation: 'right',
	items: [
		{
			title: 'Regístrate en: app.mipaquete.com/registro y crea un usuario.',
		},
		{
			title:
				'Cotiza tu envío desde app.mipaquete.com/cotización, tendrás la opción de cotizar 1 envío o múltiples envíos.',
		},
		{
			title: 'Ingresa las especificaciones de tu paquete:',
			subItems: [
				{
					title: 'Origen',
				},
				{
					title: 'Peso',
				},
				{
					title: 'Destino',
				},
				{
					title: 'Valor declarado',
				},
				{
					title: 'Dimensiones',
				},
				{
					title: 'Número de paquetes a despachar',
				},
			],
		},
		{
			title:
				'Luego, confirma los datos y verifica si necesitas servicio de envío con pago contra entrega o envío tradicional.',
		},
	],
};

export const featuresTwo = {
	image: '/images/features/submit-two.png',
	alt: 'features',
	titleTwo: '¿Qué cobertura y métodos de pago maneja Mi Paquete?',
	colorTitleTwo: 'blue',
	orientation: 'left',
	description: '<p>Manejamos dos tipos de pago para tus envíos:</p>',
	items: [
		{
			title:
				'1: Descontamos el valor del envío, del recaudo realizado, es decir, del valor que pague tu cliente se descontará el costo del servicio de envío.',
		},
		{
			title:
				'2: Pago con saldo. Este tipo de envío es una recarga tipo “prepago” a través de PSE; solo debes recargar el costo del envío y al momento de la consignación, recibirás todo el recaudo completo, ya que pagaste el envío de manera anticipada.',
		},
	],
};

export const commercial = {
	colorText: 'textWhite',
	description:
		'<h3><strong>Envía y recibe tus paquetes ¡Sin esperas, sin filas!</strong></h3><p>Recuerda que con <strong>Mi Paquete</strong> obtienes la opción más rápida y segura en <strong>logística de envíos para ecommerce</strong> y tiendas virtuales.</p>',
	image: '/images/commercials/fondo-casos-de-exito.png',
	imageDesktop: '/images/commercials/fondo-casos-de-exito-desktop.png',
	alt: 'background primer envio',
	button: {
		title: 'CONOCE MÁS',
		url: '#',
		color: 'buttonWhite',
	},
};
