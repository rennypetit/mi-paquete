import { TypesBanner } from '@components/banner/types';
import { TypeButton, TypeDescription } from '@types/global';

export const banner: TypesBanner = {
	orientation: 'orientationLeft',
	title: `<h1>Beneficios para grandes ecommerce<span> ¿Tu ecommerce tiene negociación directa con las empresas transportadoras?</span></h1>`,
	description:
		'<p>Si ya tienes negociaciones directas con transportadoras, al agregar nuestra <strong>pasarela de envíos</strong> podrás mejorar la <strong> logística de tu empresa.</strong> Desde allí tendrás control de todas las empresas de envíos, acceder a <strong>reportes y estadísticas en tiempo real</strong> para tomar las mejores decisiones.</p>',
	image: '/images/banners/grandes-ecommerce.png',
	alt: 'Banner grandes-ecommerce',
	buttonOne: {
		color: 'buttonBlue',
		title: 'MÁS INFORMACIÓN',
		url: '/pasarela-de-envios',
		type: TypeButton.link,
	},
};

export const features = {
	type: TypeDescription.image,
	image: '/images/features/grandes-ecommerce.png',
	alt: 'features',
	width: 498,
	height: 431,
	title: '¿Cómo ayuda nuestra pasarela de envíos',
	titleTwo: 'a tu empresa?',
	colorTitleTwo: 'blue',
	orientation: 'right',
	items: `
	<ul>
		<li><strong>Ahorra en costos</strong> Ya que puedes aprovechar nuestra tecnología, conservando las negociaciones que ya tienes con las transportadoras.</li>
		<li><strong>Analiza datos</strong> A través de nuestros tableros que unifican las operaciones de todas las transportadoras, para que puedas tomar buenas decisiones logísticas y financieras.</li>
		<li><strong>Fideliza a tus clientes</strong> brindándoles información oportuna sobre sus entregas.</li>
	</ul>`,
	buttonOne: {
		color: 'buttonBlue',
		title: 'MÁS INFORMACIÓN',
		url: '/pasarela-de-envios',
		type: TypeButton.link,
	},
};

export const commercial = {
	colorText: 'textWhite',
	title: 'Almacenamiento de productos',
	description:
		'<h3>Realiza entregas más rápidas almacenando tus productos con <strong><mark>Mi Paquete</mark></strong></h3><p>Con <strong><mark>Mi Paquete</mark></strong> tienes la posibilidad almacenar tus productos en las <strong>principales ciudades del país,</strong> para generar entregas en un menor período de tiempo.</p>',
	image: '/images/commercials/pasarela-background.png',
	imageDesktop: '/images/commercials/pasarela-background-desktop.png',
	alt: 'background grandes ecommerce',
	button: {
		title: 'CONOCE MÁS',
		color: 'buttonOrange',
		url: '/almacenamiento',
		type: TypeButton.link,
	},
};
