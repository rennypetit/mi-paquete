import type { NextPage } from 'next';
import Layout from 'layout';
import Card from '@components/cards/Card';
import BannerStories from '@components/banner/BannerStories';
import ContentParrafo from '@components/contentStories/ContentParrafo';
import TestimonialStories from '@components/testimonial/TestimonialStories';
import Commercial from '@components/commercial';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import {
	pages,
	banner,
	contentParrafo,
	sectionStories,
  cards,
  commercial,
	testimonials
} from '@data/caso-de-exito-pages';

import styles from './successStories.module.scss';

const stories: NextPage = () => {
	return (
		<Layout>
			{/* slider of banner */}
			<main>
			<div className={`container ${styles.margin_container_banner}`}>
				<BannerStories data={banner}/>
			</div>
			<div className={`container ${styles.margin_container_content}`}>
				<ContentParrafo content={contentParrafo} section={sectionStories} />
			</div>
				<div className={`container ${styles.margin_container} ${styles.width_container}`}>
					<TestimonialStories data={testimonials} />
				</div>
        <Card data={cards} />
			</main>
			<div className={`container ${styles.margin_container}`}>
        <Commercial data={commercial} />
			</div>
			<Newsletter background={'secondary'} />
			<Fixed />
		</Layout>
	);
};

export default stories;