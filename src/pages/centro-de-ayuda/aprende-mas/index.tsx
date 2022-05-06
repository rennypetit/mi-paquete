import type { NextPage } from 'next';
import Layout from 'layout';
import Banner from '@components/banner/';
import Card from '@components/cards/CardVideo';
import Commercial from '@components/commercial/CommercialSubmit';
import BlogCardSlider from '@components/blog/BlogCardSlider';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import { banner, cards, commercial, question, blog } from '@data/aprende-mas';

import styles from './AprendeMas.module.scss';

const aprendeMas: NextPage = () => {
	return (
		<Layout>
			{/* slider of banner */}
			<main>
				<div className={styles.banner}>
					<Banner data={banner} />
				</div>
			</main>
			<div className='container'>
				<h2 className={styles.videosTitle}>Vídeo Tutoriales</h2>
				<Card items={cards} />
				<Commercial data={commercial} />
			</div>
			<div className={styles.containerBlog}>
				<h2 className={`${styles.containerTitle} containerTitle`}>
					Descubre más en <span>nuestro blog</span>
				</h2>
				<BlogCardSlider items={blog} />
			</div>
			<div className={styles.newsletter}>
				<Newsletter background={'secondary'} />
			</div>
			<Fixed />
		</Layout>
	);
};

export default aprendeMas;
