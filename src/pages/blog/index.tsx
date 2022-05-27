import { useState } from 'react';
import type { NextPage } from 'next';
import Head from '@components/Head';
import Layout from 'layout';
import Fixed from '@components/fixed';
import BannerBlog from '@components/banner/BannerBlog';
import FeaturedPost from '@components/blog/FeaturedPost';
import GridCards from '@components/blog/GridCards';
import styles from './Blog.module.scss';
import NavCategories from '@components/blog/NavCategories';
import posts from '@data/componentPostsBlog';
import { metaTags } from '@data/blog';

const Blog: NextPage = () => {
	const [dataBlog, setDataBlog] = useState(posts);
	const handleChangeFilter = (category) => {
		const items = document.getElementsByClassName('filters');
		for (let i = 0; i < items.length; i++) {
			items[i].style.background = '#ffffff';
		}
		let active = document.getElementById(category);
		active.style.background = '#E6EFF5';

		if (category === 'all') setDataBlog(posts);
		else {
			const data = posts.filter((element) => element.category === category);
			setDataBlog(data);
		}
	};
	const lastPosts = posts.filter((element) => element.last === true);
	return (
		<>
			<Head data={metaTags} />
			<Layout>
				<BannerBlog />
				<h2 className={styles.title}>
					¿Qué quieres <strong>descubrir hoy?</strong>
				</h2>
				<NavCategories handleChangeFilter={handleChangeFilter} />
				<GridCards dataBlog={dataBlog} />
				<hr className={styles.hr} />
				<h3 className={styles.title}>
					Últimas <strong>entradas</strong>
				</h3>
				<FeaturedPost data={lastPosts[0]} />
				<GridCards dataBlog={lastPosts} />
				<Fixed />
			</Layout>
		</>
	);
};

export default Blog;
