import { GetStaticProps } from 'next';
import Layout from 'layout';
import BlogCard from '@components/blog/BlogCard';
import Shared from '@components/blog/Shared';
import Fixed from '@components/fixed';
import paths from './paths';

import styles from './Post.module.scss';
import Head from 'next/head';
export const pageblog = ({ data }) => {
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
						<p className={styles.author_info}>Autor y Fecha</p>
						<div
							className={`${styles.article} page-posts`}
							dangerouslySetInnerHTML={{ __html: data.content }}
						></div>
						<Shared />
					</article>
					<aside className={styles.sidebar}>
						{blog.map((item, index) => (
							<BlogCard data={item} key={index} />
						))}
					</aside>
				</div>
				<Fixed />
			</Layout>
		</>
	);
};

export const getStaticPaths = async () => {
	return {
		paths: paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (!params?.slug) return { message: 'not found', statusCode: 404 };

	const res = await fetch(`http://localhost:3000/api/blog?post=${params.slug}`);
	const { data } = await res.json();

	try {
		return {
			props: {
				data,
				statuscode: 200,
			},
		};
	} catch (error) {
		return error;
	}
};

export default pageblog;
