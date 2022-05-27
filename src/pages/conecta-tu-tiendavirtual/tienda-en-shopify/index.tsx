import type { NextPage } from 'next';
import Head from '@components/Head';
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
import SliderVideos from '@components/ecommerce/SliderVideos';
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
	videos,
	question,
	form,
	textWhatsapp,
	metaTags,
} from '@data/tienda-en-shopify';

import styles from './Shopify.module.scss';

const shopify: NextPage = () => {
	return (
		<>
			<Head data={metaTags} />
			<Layout>
				<main>
					<div className={styles.banner}>
						<BannerCenter data={banner} />
					</div>
				</main>
				<div className={`container ${styles.features}`}>
					<Feature items={features} />
				</div>
				<div className={`${styles.containerAllies} container-background`}>
					<h3 className={`containerTitle ${styles.title}`}>
						Transportadoras aliadas con las que podrás{' '}
						<span>enviar mercancía</span>
					</h3>
					<Ally />
				</div>
				<div className={`container ${styles.description}`}>
					<Description data={description} />
					<div className={styles.benefits}>
						<h4 className='containerTitle'>
							Beneficios que <span>encontrarás</span>
						</h4>
						<CardBenefit items={cards} />
					</div>
				</div>
				<div className={styles.commercial}>
					<Commercial data={commercial} />
				</div>
				<div className='container'>
					<div className={styles.featuresTwo}>
						<FeatureTwo items={featuresTwo} icon={true} />
					</div>
					<div className={styles.testimonials}>
						<Testimonial data={testimonials} />
					</div>
				</div>
				<div className={styles.row}>
					<Row data={row} />
				</div>
				<div className={'containerVideos'}>
					<div className='container'>
						<h5 className='containerTitle'>
							¿Cómo instalar Carrier Service <span>en tu Shopify?</span>
						</h5>
						<SliderVideos items={videos} />
					</div>
				</div>
				<div className='container'>
					<Question items={question} />
				</div>
				<div id='asesor'>
					<Form data={form} background={'primary'} />
				</div>
				<Newsletter background={'primary'} />
				<Fixed textWhatsapp={textWhatsapp} />
			</Layout>
		</>
	);
};

export default shopify;
