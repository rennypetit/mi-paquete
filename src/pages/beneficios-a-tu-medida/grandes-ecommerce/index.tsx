import type { NextPage } from 'next';
import Head from '@components/Head';
import Layout from 'layout';
import Banner from '@components/banner';
import Feature from '@components/feature';
import Ally from '@components/ally';
import Commercial from '@components/commercial';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import {
	banner,
	commercial,
	features,
	metaTags,
} from '@data/grandes-ecommerce';

import styles from './GrandesEcommerce.module.scss';

const grandesEcommerce: NextPage = () => {
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
					<div className={styles.features}>
						<Feature items={features} icon={true} />
					</div>
				</div>
				<div className={`container ${styles.container}`}>
					<h3 className={`containerTitle ${styles.title}`}>
						Transportadoras aliadas con las que podrás{' '}
						<span>enviar mercancía</span>
					</h3>
					<Ally />
				</div>
				<div className={`container-background ${styles.containerCommercial}`}>
					<Commercial data={commercial} />
				</div>
				<Newsletter background={'primary'} />
				<Fixed />
			</Layout>
		</>
	);
};

export default grandesEcommerce;
