import type { NextPage } from 'next';
import Layout from 'layout';
import Banner from '@components/banner';
import Feature from '@components/ecommerce/Feature';
import Ally from '@components/ally';
import Description from '@components/ecommerce/Description';
import CardBenefit from '@components/ecommerce/CardBenefit';
import Commercial from '@components/ecommerce/commercial';
import CommercialTwo from '@components/commercial';
import Testimonial from '../../components/testimonial';
import Question from '@components/question';
import Form from '@components/form';
import Newsletter from '@components/newsletter';
import Footer from '@components/footer';
import Fixed from '@components/fixed';

// only data of components
import {
	banner,
	description,
	features,
	cards,
	commercial,
	commercialTwo,
	question,
	form,
} from '@data/tienda-en-woocommerce';

import styles from './Woocommerce.module.scss';

const woocommerce: NextPage = () => {
	return (
		<Layout>
			<main>
				<div className={styles.banner}>
					<Banner data={banner} />
				</div>
			</main>
			<div className='container margin-top'>
				<Feature items={features} />
				<Ally />
				<Description data={description} />
				<h2 className='containerTitle'>
					Beneficios que <span>encontrarás</span>
				</h2>
				<CardBenefit items={cards} />
			</div>
			<Commercial data={commercial} />
			<div className='container'>
				<Testimonial />
				<div className={styles.featuresTwo}>
					<CommercialTwo data={commercialTwo} />
				</div>
			</div>
			<Question items={question} />
			<Form data={form} background={'primary'} />
			<Newsletter background={'primary'} />
			<Footer />
			<Fixed />
		</Layout>
	);
};

export default woocommerce;
