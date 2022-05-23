import type { NextPage } from 'next';
import Head from '@components/Head';
import Layout from 'layout';
import Banner from '@components/banner/';
import Card from '@components/cards/CardVideo';
import Commercial from '@components/commercial/CommercialSubmit';
import BlogCardSlider from '@components/blog/BlogCardSlider';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import { banner, cards, commercial, metaTags } from '@data/aprende-mas';
import posts from '@data/componentPostsBlog';

import styles from './AprendeMas.module.scss';

const aprendeMas: NextPage = () => {
	return (
		<>
			<Head data={metaTags} />
			<Layout>
				<main>
					<div className={styles.banner}>
						<Banner data={banner} />
					</div>
				</main>
				<div className='container'>
					<h2 className={styles.videosTitle}>Vídeo Tutoriales</h2>
					<Card items={cards} />
					<div id='conocer-mas' className={styles.conocerMas}></div>
					<div className={styles.commercial}>
						<Commercial data={commercial} />
					</div>
				</div>
				<div className={styles.containerBlog}>
					<h2 className={`${styles.containerTitle} containerTitle`}>
						Descubre más en <span>nuestro blog</span>
					</h2>
					<BlogCardSlider items={posts} />
				</div>
				<div className={styles.newsletter}>
					<Newsletter background={'secondary'} />
				</div>
				<Fixed />
			</Layout>
		</>
	);
};

export default aprendeMas;
