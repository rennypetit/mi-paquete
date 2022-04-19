import type { NextPage } from 'next';
import Layout from 'layout';
import Banner from '@components/banner/';
import Card from '@components/cards/CardVideo';
import Commercial from '@components/commercial';
import Question from '@components/question';
import Row from '@components/row';
import BlogCardSlider from '@components/blog/BlogCardSlider';
import Newsletter from '@components/newsletter';
import Footer from '@components/footer';
import Fixed from '@components/fixed';

// only data of components
import {
	banner,
	cards,
	commercial,
	question,
	row,
	commercialTwo,
	blog,
} from '@data/primeros-pasos';

import styles from './PrimerosPasos.module.scss';

const primerosPasos: NextPage = () => {
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
			<Question items={question} />
			<div className={styles.row}>
				<Row data={row} />
			</div>
			<div className={`${styles.commercialTwo} container`}>
				<Commercial data={commercialTwo} />
			</div>
			<div className={styles.containerBlog}>
				<h2 className={`${styles.containerTitle} containerTitle`}>
					Descubre más en <span>nuestro blog</span>
				</h2>
				<BlogCardSlider items={blog} />
			</div>
			<Newsletter background={'secondary'} />
			<Footer />
			<Fixed />
		</Layout>
	);
};

export default primerosPasos;
