import type { NextPage } from 'next';
import Head from '@components/Head';
import Layout from 'layout';
import Banner from '@components/banner';
import Feature from '@components/feature';
import Ally from '@components/ally';
import Form from '@components/form';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import {
	banner,
	features,
	featuresTwo,
	form,
	textWhatsapp,
	metaTags,
} from '@data/ecommerce-medianos';

import styles from './EcommerceMedianos.module.scss';

const ecommerceMedianos: NextPage = () => {
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
				<div className={`${styles.containerAllies} container-background`}>
					<Ally />
				</div>
				<Form data={form} background={'secondary'} />
				<Newsletter background={'secondary'} />
				<Fixed textWhatsapp={textWhatsapp} />
			</Layout>
		</>
	);
};

export default ecommerceMedianos;
