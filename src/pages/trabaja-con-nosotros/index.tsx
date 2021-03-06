import type { NextPage } from 'next';
import Head from '@components/Head';
import Layout from 'layout';
import Card from '@components/cards/Card';
import BannerWorks from '@components/banner/BannerWorks';
import Testimonial from '@components/testimonial/';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import {
	cards,
	banner,
	testimonials,
	metaTags,
} from '@data/trabaja-con-nosotros';

import styles from './workWithUs.module.scss';
const workWithUs: NextPage = () => {
	return (
		<>
			<Head data={metaTags} />
			<Layout>
				<main className={styles.main}>
					<BannerWorks data={banner} />
					{/* <Card data={cards} /> */}
				</main>
				<div className={`container ${styles.margin_container}`}>
					<Testimonial data={testimonials} haveLink={false} />
				</div>
				<Newsletter background={'secondary'} />
				<Fixed />
			</Layout>
		</>
	);
};

export default workWithUs;
