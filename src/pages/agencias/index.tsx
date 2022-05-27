import type { NextPage } from 'next';
import Layout from 'layout';
import BannerAgencias from '@components/banner/BannerAgencias';
import Ventajas from '@components/ventaja/';
import { BenefitAsesoria } from '@components/benefit/AsesoriaGrid';
import CardStateMaps from '@components/cardState/CardStateMaps';
import Form from '@components/form';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import {
	banner,
	benefits,
	maps,
	ventajas,
	form,
	textWhatsapp,
} from '@data/agencias';

import styles from './agencias.module.scss';

const agencias: NextPage = () => {
	return (
		<Layout>
			{/* slider of banner */}
			<main>
				<BannerAgencias data={banner} />
			</main>
			<div className='container margin-top'>
				<CardStateMaps data={maps} />
				<BenefitAsesoria data={benefits} />
			</div>
			<div className={`${styles.advantage} container-background`}>
				<Ventajas data={ventajas} />
			</div>
			<Form data={form} background={'primary'} pageAgencias={true} />
			<Newsletter background={'secondary'} />
			<Fixed textWhatsapp={textWhatsapp} />
		</Layout>
	);
};

export default agencias;
