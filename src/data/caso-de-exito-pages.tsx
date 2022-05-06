import { TypeButton } from '@types/global';
import { TypesBanner } from '@components/banner/types';

export const banner: TypesBanner = {
	title: `<h1>Aliquam quis augue mollis <span>scelerisque dui</span></h1>`,
	subtitle: '',
	image: '/images/banners/fondo-gym-caso-exito.png',
	imageDesktop: '/images/banners/fondo-gym-caso-exito-desktop.png',
	alt: 'Banner agencias',
};

export const contentParrafo = {
	description: "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata. sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus</p>"
}

export const sectionStories = {
	items: [
		{
			image: "/images/stories/solution-desktop.png",
			title: "<h2>¿Cual fue la solución que <span>brindo Mi paquete en este caso?</span></h2>",
			description: "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>",
			classSpan: "orange",
		},
		{
			image: "/images/stories/resultados-desktop.png",
			title: "<h2>Estos fueron los <span>resultados obtenidos</span></h2>",
			description: "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>",
			classSpan: "blue",
		},
	],
};

export const cards = {
	title: "<h1>Otros casos de éxito que <span>te pueden interesar</span></h1>",
	description: "",
	items: [
		{
			image: '/images/cards/infitworld-logo.png',
			title: 'NOMBRE DE LA EMPRESA',
			date: 'Fecha de publicación',
			description:
				'Maecenas mi lacus, dictum vitae imperdiet at, eleifend sed risus. Proin et libero enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum eros quis tincidunt ullamcorper. Maecenas pharetra enim eu massa venenatis, non consectetur sapien consequat. Maecenas mi lacus, dictum vitae imperdiet at, eleifend sed risus. Proin et libero enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum eros quis tincidunt ullamcorper. Maecenas pharetra enim eu massa venenatis, non consectetur sapien consequat Maecenas mi lacus, dictum vitae imperdiet at, eleifend sed risus. Proin et libero enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum eros quis tincidunt ullamcorper. Maecenas pharetra enim eu massa venenatis, non consectetur sapien consequat.',
			buttonOne: {
				color: 'buttonOrange',
				title: 'Conoce más',
				url: '/casos-de-exito/gym-shop',
				type: TypeButton.link,
			},
		},
		{
			image: '/images/cards/gym-logo.png',
			title: 'NOMBRE DE LA EMPRESA',
			date: 'Fecha de publicación',
			description:
				'Maecenas mi lacus, dictum vitae imperdiet at, eleifend sed risus. Proin et libero enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum eros quis tincidunt ullamcorper. Maecenas pharetra enim eu massa venenatis, non consectetur sapien consequat. Maecenas mi lacus, dictum vitae imperdiet at, eleifend sed risus. Proin et libero enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum eros quis tincidunt ullamcorper. Maecenas pharetra enim eu massa venenatis, non consectetur sapien consequat Maecenas mi lacus, dictum vitae imperdiet at, eleifend sed risus. Proin et libero enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum eros quis tincidunt ullamcorper. Maecenas pharetra enim eu massa venenatis, non consectetur sapien consequat.',
			buttonOne: {
				color: 'buttonOrange',
				title: 'Conoce más',
				url: '/casos-de-exito/gym-shop',
				type: TypeButton.link,
			},
		},
		{
			image: '/images/cards/orion-logo.png',
			title: 'NOMBRE DE LA EMPRESA',
			date: 'Fecha de publicación',
			description:
				'Maecenas mi lacus, dictum vitae imperdiet at, eleifend sed risus. Proin et libero enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum eros quis tincidunt ullamcorper. Maecenas pharetra enim eu massa venenatis, non consectetur sapien consequat. Maecenas mi lacus, dictum vitae imperdiet at, eleifend sed risus. Proin et libero enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum eros quis tincidunt ullamcorper. Maecenas pharetra enim eu massa venenatis, non consectetur sapien consequat Maecenas mi lacus, dictum vitae imperdiet at, eleifend sed risus. Proin et libero enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum eros quis tincidunt ullamcorper. Maecenas pharetra enim eu massa venenatis, non consectetur sapien consequat.',
			buttonOne: {
				color: 'buttonOrange',
				title: 'Conoce más',
				url: '/casos-de-exito/gym-shop',
				type: TypeButton.link,
			},
		},
	],
}

export const commercial = {
colorText: 'textBlack',
	title: 'Plataforma de automatización multitransporte',
	description:
		'<h3>¡Hagamos crecer tu marca juntos!</h3><p>Conoce <strong>cómo mejorar la logística de envíos de tu marca</strong> junto al equipo de Mi Paquete y descubre todas las ventajas que puedes obtener al trabajar con nosotros.</p>',
	image: '/images/commercials/home-background.png',
	imageDesktop: '/images/commercials/home-background-desktop.png',
	alt: 'background commercials',
	button: {
		title: 'MÁS INFORMACIÓN',
		url: '#',
		type: TypeButton.link,
		color: 'buttonBlue',
	},
};

export const testimonials = {
	icon: '/images/quote.png',
	alt: 'quote',
	title:
		'Lorem ipsum dolor sit',
	titleSpan: 'Etiam luctus.',
	items: [
		{
			description:
				'In ornare vel urna quis venenatis. Maecenas orci mauris, lacinia eu feugiat a, fringilla quis augue. Suspendisse auctor quis velit vitae porta. Pellentesque sit amet neque sed ex vulputate volutpat. Morbi vehicula, quam in mollis dignissim.',
			url: '#',
			person: {
				image: '/images/stories/img-testimonial.png',
				alt: 'person',
				name: 'fringilla sollicitudin',
				nickName: 'fringilla sollicitudin',
			},
		},
	],
};