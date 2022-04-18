import type { NextPage } from 'next';
import Layout from 'layout';
import Card from '@components/cards/Card';
import BannerWorks from '@components/banner/BannerWorks';
import Testimonial from '@components/testimonial';
import Newsletter from '@components/newsletter';
import Footer from '@components/footer';
import Fixed from '@components/fixed';

// only data of components
import { cards, banner } from '@data/trabaja-con-nosotros';

import styles from './workWithUs.module.scss';
const workWithUs: NextPage = () => {
	return (
		<Layout>
			{/* slider of banner */}
			<main className={styles.main}>
				<BannerWorks data={banner} />
				<Card data={cards} />
			</main>
			<div className={`container ${styles.margin_container}`}>
				<Testimonial />
			</div>
			<Newsletter background={'secondary'} />
			<Footer />
			<Fixed />
		</Layout>
	);
};

export default workWithUs;
