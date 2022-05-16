import { useState } from 'react';
import type { NextPage } from 'next';
import Layout from 'layout';
import Fixed from '@components/fixed';
import BannerBlog from '@components/banner/BannerBlog';
import FeaturedPost from '@components/blog/FeaturedPost';
import GridCards from '@components/blog/GridCards';
import styles from './Blog.module.scss';
import NavCategories from '@components/blog/NavCategories';
import posts from '@data/componentPostsBlog';

const Blog: NextPage = () => {
	const [dataBlog, setDataBlog] = useState(posts);
	const handleChangeFilter = () => {
		console.log('aa');
		// const data = posts.filter((item) => (item.category = 'ENVÍOS'));
		// console.log(data);
	};
	return (
		<Layout>
			<BannerBlog />
			<h2 className={styles.title}>
				¿Qué quieres <strong>descubrir hoy?</strong>
			</h2>
			<NavCategories handleChangeFilter={handleChangeFilter} />
			<GridCards dataBlog={dataBlog} />
			<hr className={styles.hr} />
			<h2 className={styles.title}>
				Últimas <strong>entradas</strong>
			</h2>
			<FeaturedPost />
			<GridCards dataBlog={dataBlog} />
			<FeaturedPost />
			<Fixed />
		</Layout>
	);
};

export default Blog;
