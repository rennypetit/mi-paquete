import type { NextPage } from 'next';
import Layout from 'layout';
import Footer from '@components/footer';
import Fixed from '@components/fixed';
import BannerBlog from '@components/banner/BannerBlog';

const Blog: NextPage = () => {
	return (
		<Layout>
			<BannerBlog />
			<Footer />
			<Fixed />
		</Layout>
	);
};

export default Blog;
