import type { NextPage } from 'next';
import Layout from 'layout';
import Banner from '@components/banner';
import Storage from '@components/ecommerce/Storage';
import Feature from '@components/ecommerce/Feature';
import Ally from '@components/ally';
import Testimonial from '@components/testimonial';
import Question from '@components/question';
import Form from '@components/form';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import {
	banner,
	storages,
	features,
	testimonials,
	question,
	form,
	textWhatsapp,
} from '@data/tienda-en-jumpseller';

import styles from './Jumpseller.module.scss';

const jumpseller: NextPage = () => {
	return (
		<Layout>
			<main>
				<div className={styles.banner}>
					<Banner data={banner} />
				</div>
			</main>
			<div className='storages-jumpseller'>
				<Storage data={storages} />
			</div>
			<div className={`${styles.featureOne} container margin-top`}>
				<Feature items={features} />
			</div>
			<div className={`${styles.containerAllies} container-background`}>
				<Ally />
			</div>
			<div className='container'>
				<Testimonial data={testimonials} />
				<Question items={question} />
			</div>
			<Form data={form} background={'primary'} />
			<Newsletter background={'primary'} />
			<Fixed textWhatsapp={textWhatsapp} />
		</Layout>
	);
};

export default jumpseller;
