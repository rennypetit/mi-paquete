import type { NextPage } from 'next';
import Layout from 'layout';
import Fixed from '@components/fixed';
import BannerBlog from '@components/banner/BannerBlog';
import FeaturedPost from '@components/blog/FeaturedPost';
import GridCards from '@components/blog/GridCards';
import styles from './Blog.module.scss';
import NavCategories from '@components/blog/NavCategories';

const Blog: NextPage = () => {
	return (
		<Layout>
			<BannerBlog />
			<h2 className={styles.title}>
				¿Qué quieres <strong>descubrir hoy?</strong>
			</h2>
			<NavCategories />
			<GridCards />
			<hr className={styles.hr} />
			<h2 className={styles.title}>
				Últimas <strong>entradas</strong>
			</h2>
			<FeaturedPost />
			<GridCards />
			<FeaturedPost />
			<Fixed />
		</Layout>
	);
};

export default Blog;
