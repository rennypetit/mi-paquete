import type { NextPage } from 'next';
import Layout from 'layout';
import Banner from '@components/banner/BannerBackground';
import Feature from '@components/feature';
import Commercial from '@components/commercial';
import Pass from '@components/pass';
import Rate from '@components/rate';
import Form from '@components/form';
import Ally from '@components/ally';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import {
	banner,
	commercial,
	features,
	form,
	commercialTwo,
} from '@data/pasarela-de-envios';

import styles from './pasarelaDeEnvios.module.scss';

const pasarelaDeEnvios: NextPage = () => {
	return (
		<Layout>
			{/* slider of banner */}
			<main className='page-pasarela-de-envios'>
				<Banner data={banner} />
			</main>
			<div className='container margin-top' id='logistica'>
				<Feature items={features} icon={true} />
				<Commercial data={commercial} />
			</div>
			<div className={`container-background ${styles.background}`}>
				<Pass />
			</div>
			<div className='container margin-top'>
				<Rate />
				<Ally />
			</div>
			<Form data={form} background={'secondary'} />
			<div className={`container ${styles.commercialTwo}`}>
				<Commercial data={commercialTwo} />
			</div>
			<Newsletter background={'secondary'} />
			<Fixed />
		</Layout>
	);
};

export default pasarelaDeEnvios;
