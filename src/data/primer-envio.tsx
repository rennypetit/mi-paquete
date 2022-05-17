import { TypesBanner } from '@components/banner/types';
import { TypeButton } from '../types/global';

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
	width: 352,
	height: 550,
	items: `
	<ul>
		<li>Regístrate en: <a href='app.mipaquete.com/registro' target='_blank' rel='noopener noreferrer'>app.mipaquete.com/registro</a> y crea un usuario.</li>
		<li>Cotiza tu envío desde app.mipaquete.com/cotización, tendrás la opción de cotizar 1 envío o múltiples envíos.</li>
		<li>Ingresa las especificaciones de tu paquete:</li>
			<ul class='sub-icon'>
				<li>Origen</li>
				<li>Peso</li>
				<li>Destino</li>
				<li>Valor declarado</li>
				<li>Dimensiones</li>
				<li>Número de paquetes a despachar</li>
			</ul>
		<li>Luego, confirma los datos y verifica si necesitas <strong>servicio de envío con pago contra entrega</strong> o envío tradicional.</li>
	</ul>`,
};

export const featuresTwo = {
	image: '/images/features/submit-two.png',
	alt: 'features',
	width: 352,
	height: 470,
	titleTwo: '¿Qué cobertura y métodos de pago maneja Mi Paquete?',
	colorTitleTwo: 'blue',
	orientation: 'left',
	description: '<p>Manejamos dos tipos de pago para tus envíos:</p>',
	items: `
	<ul>
		<li><span>1: <br /></span> Descontamos el valor del envío, del recaudo realizado, es decir, del valor que pague tu cliente se descontará el costo del <strong>servicio de envío.</strong></li>
		<li><span>2: <br /></span> Pago con saldo. Este tipo de envío es una recarga tipo "prepago" a través de PSE; solo debes recargar el costo del envío y al momento de la consignación, recibirás todo el recaudo completo, ya que pagaste el envío de manera anticipada.</li>
	</ul>`,
};

export const commercial = {
	colorText: 'textWhite',
	description:
		'<h3><strong>Envía y recibe tus paquetes ¡Sin esperas, sin filas!</strong></h3><p>Recuerda que con <strong><mark>Mi Paquete</mark></strong> obtienes la opción más rápida y segura en <strong>logística de envíos para ecommerce</strong> y tiendas virtuales.</p>',
	image: '/images/commercials/fondo-casos-de-exito.png',
	imageDesktop: '/images/commercials/fondo-casos-de-exito-desktop.png',
	alt: 'background primer envio',
	button: {
		title: 'CONOCE MÁS',
		url: 'https://app.mipaquete.com/',
		color: 'buttonWhite',
		type: TypeButton.blank,
	},
};
