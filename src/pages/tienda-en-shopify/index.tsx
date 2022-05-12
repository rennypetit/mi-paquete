import type { NextPage } from 'next';
import Layout from 'layout';
import BannerCenter from '@components/banner/BannerCenter';
import Feature from '@components/ecommerce/Feature';
import Ally from '@components/ally';
import Description from '@components/ecommerce/Description';
import CardBenefit from '@components/ecommerce/CardBenefit';
import Commercial from '@components/ecommerce/commercial';
import FeatureTwo from '@components/feature';
import Testimonial from '@components/testimonial';
import Row from '@components/row';
import Question from '@components/question';
import Form from '@components/form';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import {
	banner,
	description,
	features,
	cards,
	commercial,
	featuresTwo,
	testimonials,
	row,
	question,
	form,
} from '@data/tienda-en-shopify';

import styles from './Shopify.module.scss';

const shopify: NextPage = () => {
	return (
		<Layout>
			<main>
				<div className={styles.banner}>
					<BannerCenter data={banner} />
				</div>
			</main>
			<div className='container margin-top'>
				<Feature items={features} />
			</div>
			<div className={`${styles.containerAllies} container-background`}>
				<Ally />
			</div>
			<div className='container'>
				<Description data={description} />
				<h2 className='containerTitle'>
					Beneficios que <span>encontrarás</span>
				</h2>
				<CardBenefit items={cards} />
			</div>
			<div className={styles.commercial}>
				<Commercial data={commercial} />
			</div>
			<div className='container'>
				<div className={styles.featuresTwo}>
					<FeatureTwo items={featuresTwo} icon={true} />
				</div>
				<Testimonial data={testimonials} />
			</div>
			<div className={styles.row}>
				<Row data={row} />
			</div>
			<div className='container'>
				<Question items={question} />
			</div>
			<div id='asesor'>
				<Form data={form} background={'primary'} />
			</div>
			<Newsletter background={'primary'} />
			<Fixed />
		</Layout>
	);
};

export default shopify;
