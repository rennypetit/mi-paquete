import type { NextPage } from 'next';
import Layout from 'layout';
import BannerAgencias from '@components/banner/BannerAgencias';
import Ventajas from '@components/ventaja/';
import { BenefitAsesoria } from '@components/benefit/AsesoriaGrid';
import Form from '@components/form';
import Question from '@components/question';
import Newsletter from '@components/newsletter';
import Footer from '@components/footer';
import Fixed from '@components/fixed';

// only data of components
import {
	banner,
	benefits,
	ventajas,
	form,
	question,
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
				<BenefitAsesoria data={benefits} />
				<Ventajas data={ventajas} />
			</div>
			<Form data={form} background={'primary'} />
			<Question items={question} />
			<Newsletter background={'secondary'} />
			<Footer />
			<Fixed />
		</Layout>
	);
};

export default agencias;
