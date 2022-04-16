import type { NextPage } from 'next';
import Layout from 'layout';
import Banner from '@components/banner';
import Feature from '@components/feature';
import Ally from '@components/ally';
import Commercial from '@components/commercial';
import Newsletter from '@components/newsletter';
import Footer from '@components/footer';
import Fixed from '@components/fixed';

// only data of components
import { banner, commercial, features } from '@data/grandes-ecommerce';

import styles from './GrandesEcommerce.module.scss';

const grandesEcommerce: NextPage = () => {
	return (
		<Layout>
			{/* slider of banner */}
			<main>
				<div className={styles.banner}>
					<Banner data={banner} />
				</div>
			</main>
			<div className='container margin-top'>
				<div className={styles.featuresTwo}>
					<Feature items={features} icon={true} />
				</div>
			</div>
			<div className={`container ${styles.container}`}>
				<Ally />
				<Commercial data={commercial} />
			</div>
			<Newsletter background={'primary'} />
			<Footer />
			<Fixed />
		</Layout>
	);
};

export default grandesEcommerce;
