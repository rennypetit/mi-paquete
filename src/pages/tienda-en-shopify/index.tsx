import type { NextPage } from 'next';
import Layout from 'layout';
import BannerCenter from '@components/banner/BannerCenter';
import Feature from '@components/ecommerce/Feature';
import Ally from '@components/ally';
import Description from '@components/ecommerce/Description';
import CardBenefit from '@components/ecommerce/CardBenefit';
import Commercial from '@components/ecommerce/commercial';
import FeatureTwo from '@components/feature';
import Testimonial from '../../components/testimonial';
import Row from '@components/row';
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
	featuresTwo,
	row,
	question,
	form,
} from '@data/tienda-en-shopify';

import styles from './Shopify.module.scss';

const shopify: NextPage = () => {
	return (
		<Layout>
			<main>
				<BannerCenter data={banner} />
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
				<div className={styles.featuresTwo}>
					<FeatureTwo items={featuresTwo} icon={true} />
				</div>
				<Testimonial />
			</div>
			<Row data={row} />
			<Question items={question} />
			<Form data={form} background={'primary'} />
			<Newsletter background={'primary'} />
			<Footer />
			<Fixed />
		</Layout>
	);
};

export default shopify;
