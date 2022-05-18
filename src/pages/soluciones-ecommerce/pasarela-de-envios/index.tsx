import type { NextPage } from 'next';
import Head from '@components/Head';
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
	textWhatsapp,
	metaTags,
} from '@data/pasarela-de-envios';

import styles from './pasarelaDeEnvios.module.scss';

const pasarelaDeEnvios: NextPage = () => {
	return (
		<>
			<Head data={metaTags} />
			<Layout>
				{/* slider of banner */}
				<main className='page-pasarela-de-envios'>
					<Banner data={banner} />
				</main>
				<div className='container margin-top' id='logistica'>
					<Feature items={features} icon={true} />
					<div className={styles.commercial}>
						<Commercial data={commercial} />
					</div>
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
				<Fixed textWhatsapp={textWhatsapp} />
			</Layout>
		</>
	);
};

export default pasarelaDeEnvios;
