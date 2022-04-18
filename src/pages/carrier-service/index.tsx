import type { NextPage } from 'next';
import Layout from 'layout';
import Banner from '@components/banner/BannerCenter';
import Feature from '@components/feature';
import CardState from '@components/cardState';
import Question from '@components/question';
import Newsletter from '@components/newsletter';
import Footer from '@components/footer';
import Fixed from '@components/fixed';

// only data of components
import { banner, features, cardsState, question } from '@data/carrier-service';

import styles from './CarrierService.module.scss';

const woocommerce: NextPage = () => {
	return (
		<Layout>
			<main>
				<div className={styles.banner}>
					<Banner data={banner} />
				</div>
			</main>
			<div className='container margin-top'>
				<div className={styles.features}>
					<Feature items={features} />
				</div>
				<CardState data={cardsState} />
			</div>
			<Question items={question} />
			<Newsletter background={'secondary'} />
			<Footer />
			<Fixed />
		</Layout>
	);
};

export default woocommerce;
