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
import Footer from '@components/footer';
import Fixed from '@components/fixed';

// only data of components
import {
	banner,
	storages,
	features,
	question,
	form,
} from '@data/tienda-en-komercia';
import allies from '@data/componentAllies';

import styles from './Komercia.module.scss';

const komercia: NextPage = () => {
	return (
		<Layout>
			<main>
				<Banner data={banner} />
			</main>
			<Storage data={storages} />
			<div className='container'>
				<Feature items={features} />
				<div className={styles.containerAllies}>
					<h2 className='containerTitle'>
						Transportadoras aliadas con las que podrás{' '}
						<span>enviar mercancía</span>
					</h2>
					<Ally data={allies} />
				</div>
				<Testimonial />
			</div>
			<Question items={question} />
			<Form data={form} background={'primary'} />
			<Newsletter background={'primary'} />
			<Footer />
			<Fixed />
		</Layout>
	);
};

export default komercia;
