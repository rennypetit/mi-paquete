import BlogCard from './BlogCard';
import styles from './GridCards.module.scss';

const GridCards = () => {
	const blog = [
		{
			url: '#',
			image: '/images/blog/entrada.png',
			title: 'NOMBRE DE LA ENTRADA',
			date: 'Autor y Fecha',
			description:
				'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
		},
		{
			url: '#',
			image: '/images/blog/entrada.png',
			title: 'NOMBRE DE LA ENTRADA',
			date: 'Autor y Fecha',
			description:
				'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
		},
		{
			url: '#',
			image: '/images/blog/entrada.png',
			title: 'NOMBRE DE LA ENTRADA',
			date: 'Autor y Fecha',
			description:
				'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
		},
		{
			url: '#',
			image: '/images/blog/entrada.png',
			title: 'NOMBRE DE LA ENTRADA',
			date: 'Autor y Fecha',
			description:
				'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
		},
		{
			url: '#',
			image: '/images/blog/entrada.png',
			title: 'NOMBRE DE LA ENTRADA',
			date: 'Autor y Fecha',
			description:
				'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
		},
		{
			url: '#',
			image: '/images/blog/entrada.png',
			title: 'NOMBRE DE LA ENTRADA',
			date: 'Autor y Fecha',
			description:
				'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
		},
		{
			url: '#',
			image: '/images/blog/entrada.png',
			title: 'NOMBRE DE LA ENTRADA',
			date: 'Autor y Fecha',
			description:
				'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
		},
		{
			url: '#',
			image: '/images/blog/entrada.png',
			title: 'NOMBRE DE LA ENTRADA',
			date: 'Autor y Fecha',
			description:
				'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
		},
		{
			url: '#',
			image: '/images/blog/entrada.png',
			title: 'NOMBRE DE LA ENTRADA',
			date: 'Autor y Fecha',
			description:
				'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
		},
		{
			url: '#',
			image: '/images/blog/entrada.png',
			title: 'NOMBRE DE LA ENTRADA',
			date: 'Autor y Fecha',
			description:
				'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
		},
		{
			url: '#',
			image: '/images/blog/entrada.png',
			title: 'NOMBRE DE LA ENTRADA',
			date: 'Autor y Fecha',
			description:
				'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
		},
		{
			url: '#',
			image: '/images/blog/entrada.png',
			title: 'NOMBRE DE LA ENTRADA',
			date: 'Autor y Fecha',
			description:
				'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
		},
	];
	return (
		<div className={styles.grid_template}>
			{blog.map((item, index) => (
				<BlogCard data={item} key={index} />
			))}
		</div>
	);
};

export default GridCards;
