import type { NextPage } from 'next';
import Layout from 'layout';
import Banner from '@components/banner';
import Feature from '@components/feature';
import Ally from '@components/ally';
import Form from '@components/form';
import Newsletter from '@components/newsletter';
import Footer from '@components/footer';
import Fixed from '@components/fixed';

// only data of components
import { banner, features, featuresTwo, form } from '@data/ecommerce-medianos';

import styles from './EcommerceMedianos.module.scss';

const ecommerceMedianos: NextPage = () => {
	return (
		<Layout>
			{/* slider of banner */}
			<main>
				<div className={styles.banner}>
					<Banner data={banner} />
				</div>
			</main>
			<div className='container'>
				<div className={styles.featuresOne}>
					<Feature items={features} />
				</div>
				<div className={styles.featuresTwo}>
					<Feature
						items={featuresTwo}
						icon={true}
						optionalText={'optionalTrue'}
					/>
				</div>
			</div>
			<div className='container'>
				<Ally />
			</div>
			<Form data={form} background={'secondary'} />
			<Newsletter background={'secondary'} />
			<Footer />
			<Fixed />
		</Layout>
	);
};

export default ecommerceMedianos;
