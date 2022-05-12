import { TypeButton, TypeDescription } from '@types/global';
import { TypesBanner } from '@components/banner/types';

export const banner: TypesBanner = {
	title: `<h1>¿Quiénes somos?</h1>`,
	subtitle: '',
	description:
		'<p>Somos una startup Colombiana y nos especializamos en facilitar la vida de los ecommerce y social sellers con tecnología aplicada a la logística.</p>',
	buttonTwo: {
		color: 'buttonWhite',
		icon: '/images/icons/boton-de-play.png',
		title: 'Ver video',
		url: '#',
		type: TypeButton.href,
	},
};

export const sectionVideo = {
	type: TypeDescription.video,
	video:
		'<iframe width="560" height="315" src="https://www.youtube.com/embed/EcAH1XNxkc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
};

export const recognitions = {
	imageBackgroundDesktop: '/images/recognition/backgroound-desktop.png',
	altBackground: '/images/recognition/background.png',
	image: '/images/recognition/person.png',
	alt: 'person',
	title: 'Somos aliados de la',
	titleStrong: 'Cámara Colombiana de Comercio Electrónico',
	description:
		'Nuestros procesos de envíos y logística se encuentran regulados bajo las normativas de la CCCE.',
	items: [
		{
			title: 'DeltaX',
			image: '/images/recognition/delta-x.png',
			alt: 'logo DeltaX',
		},
		{
			title: 'Crea',
			image: '/images/recognition/crea.png',
			alt: 'logo crea',
		},
		{
			title: 'Ruta',
			image: '/images/recognition/ruta.png',
			alt: 'logo ruta',
		},
		{
			title: 'Apps co',
			image: '/images/recognition/appsco.png',
			alt: 'logo appsco',
		},
		{
			title: 'Scale',
			image: '/images/recognition/scale.png',
			alt: 'logo scale',
		},
	],
};
