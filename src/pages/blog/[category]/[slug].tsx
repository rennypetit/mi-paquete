import Layout from 'layout';
import BlogCard from '@components/blog/BlogCard';
import Shared from '@components/blog/Shared';
import Fixed from '@components/fixed';

import styles from './Post.module.scss';
import Head from 'next/head';
export default function pageblog({ data }) {
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
	];
	if (!data) return '';
	return (
		<>
			<Head>
				<meta
					content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'
					name='viewport'
				/>
			</Head>
			<Layout>
				<div className={styles.wrapper}>
					<article>
						<h1 className={styles.title_main}>
							{data.title}
							<span>{data.titleSpan}</span>
						</h1>
						<div
							className={`${styles.article} page-posts`}
							dangerouslySetInnerHTML={{ __html: data.content }}
						></div>
						<Shared />
					</article>
					{/* <aside className={styles.sidebar}>
						{blog.map((item, index) => (
							<BlogCard data={item} key={index} />
						))}
					</aside> */}
				</div>
				<Fixed />
			</Layout>
		</>
	);
}

export const getServerSideProps = async ({ params }) => {
	if (!params?.slug) return { message: 'not found', statusCode: 404 };

	try {
		const res = await fetch(
			`http://localhost:3000/api/blog?category=${params.category}&post=${params.slug}`
		);
		const { data } = await res.json();
		return {
			props: {
				data,
			},
		};
	} catch (error) {
		console.error(error);
		return null;
	}
};
