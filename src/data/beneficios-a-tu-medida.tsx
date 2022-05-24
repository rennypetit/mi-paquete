import { TypeButton, TypeDescription } from '@types/global';
export const metaTags = {
	title: 'Beneficios para ecommerce y emprendedores | Mi Paquete',
	description:
		'Gana con Mi Paquete beneficios según tu número de envíos y acumula puntos para redimirlos en premios o como saldo a favor para realizar nuevos envíos',
};

export const features = {
	type: TypeDescription.image,
	orientation: 'left',
	image: '/images/beneficios-a-tu-medida/emprendedores-digitales.png',
	alt: 'emprendedores digitales',
	width: 263,
	height: 356,
	title: 'Beneficios para',
	titleTwo: 'emprendedores digitales',
	description:
		'<p class="beneficios-description"><span>Para tiendas y vendedores en redes sociales con menos de 500 envíos mensuales</span> <br />Acumula puntos por hacer envíos con Mi Paquete y redímelos por premios o canjéalos como saldo a favor para hacer más envíos utilizando nuestra plataforma gratuita para vender los productos de tu ecommerce.</p>',
	buttonOne: {
		color: 'buttonBlue',
		title: 'CONOCE MÁS',
		url: '/beneficios-a-tu-medida/emprendedor-digital',
		type: TypeButton.link,
	},
};

export const featuresTwo = {
	type: TypeDescription.image,
	orientation: 'right',
	image: '/images/beneficios-a-tu-medida/ecommerce-medianos.png',
	alt: 'ecommerce medianos',
	width: 361,
	height: 370,
	title: 'Beneficios para',
	titleTwo: 'ecommerce medianos',
	description:
		'<p class="beneficios-description"><span>Para comercios electrónicos que hagan más de 500 envíos mensuales.</span> <br />Con Mi Paquete podrás adquirir descuentos especiales según el volumen de envíos de tu ecommerce, llevando la logística de entregas de tu marca al siguiente nivel.</p>',
	buttonOne: {
		color: 'buttonBlue',
		title: 'CONOCE MÁS',
		url: '/beneficios-a-tu-medida/ecommerce-medianos',
		type: TypeButton.link,
	},
};

export const featuresThree = {
	type: TypeDescription.image,
	orientation: 'left',
	image: '/images/beneficios-a-tu-medida/grandes-ecommerce.png',
	alt: 'grandes ecommerce',
	width: 413,
	height: 331,
	title: 'Beneficios para',
	titleTwo: 'grandes ecommerce',
	description:
		'<p class="beneficios-description"><span>¿Tu ecommerce tiene negociación directa con las empresas transportadoras?</span> <br />Si ya cuentas con negociaciones directas con las transportadoras de envíos, agregando nuestra pasarela de envíos, podrás mejorar la logística de tu empresa. Tendrás control de las empresas de envíos y acceso a reportes y estadísticas en tiempo real.</p>',
	buttonOne: {
		color: 'buttonBlue',
		title: 'CONOCE MÁS',
		url: '/beneficios-a-tu-medida/grandes-ecommerce',
		type: TypeButton.link,
	},
};
