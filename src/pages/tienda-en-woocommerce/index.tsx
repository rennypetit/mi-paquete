import type { NextPage } from 'next';
import Layout from 'layout';
import Banner from '@components/banner';
import Feature from '@components/ecommerce/Feature';
import Ally from '@components/ally';
import SliderVideos from '@components/ecommerce/SliderVideos';
import Description from '@components/ecommerce/Description';
import CardBenefit from '@components/ecommerce/CardBenefit';
import Commercial from '@components/ecommerce/commercial';
import CommercialTwo from '@components/commercial';
import Testimonial from '../../components/testimonial';
import Question from '@components/question';
import Form from '@components/form';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import {
	banner,
	description,
	features,
	videos,
	cards,
	commercial,
	testimonials,
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
			<div className={`${styles.featureOne} container`}>
				<Feature items={features} />
			</div>
			<div className={`${styles.containerAllies} container-background`}>
				<Ally />
			</div>
			<div className={'containerVideos'}>
				<div className='container'>
					<h2 className='containerTitle'>
						¿Cómo configurar Mi Paquete en <span>tu tienda en Woocomerce?</span>
					</h2>
					<SliderVideos items={videos} />
				</div>
			</div>
			<div className={`container ${styles.description}`}>
				<Description data={description} />
				<h2 className='containerTitle'>
					Beneficios que <span>encontrarás</span>
				</h2>
				<CardBenefit items={cards} />
			</div>
			<Commercial data={commercial} />
			<div className={`container ${styles.testimonials}`}>
				<Testimonial data={testimonials} haveLink={false} />
				<div className={styles.featuresTwo}>
					<CommercialTwo data={commercialTwo} />
				</div>
			</div>
			<div className='container'>
				<Question items={question} />
			</div>
			<Form data={form} background={'primary'} />
			<Newsletter background={'primary'} />
			<Fixed />
		</Layout>
	);
};

export default woocommerce;
