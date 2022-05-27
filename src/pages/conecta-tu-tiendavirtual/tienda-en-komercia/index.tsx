import type { NextPage } from 'next';
import Head from '@components/Head';
import Layout from 'layout';
import Banner from '@components/banner';
import Storage from '@components/ecommerce/Storage';
import Feature from '@components/ecommerce/Feature';
import Ally from '@components/ally';
import Question from '@components/question';
import Form from '@components/form';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import {
	banner,
	storages,
	features,
	question,
	form,
	textWhatsapp,
	metaTags,
} from '@data/tienda-en-komercia';

import styles from './Komercia.module.scss';

const komercia: NextPage = () => {
	return (
		<>
			<Head data={metaTags} />
			<Layout>
				<main>
					<div className={styles.banner}>
						<Banner data={banner} />
					</div>
				</main>
				<div className='storages-komercia'>
					<Storage data={storages} />
				</div>
				<div className='container margin-top'>
					<div className={styles.features}>
						<Feature items={features} />
					</div>
				</div>
				<div className={`${styles.containerAllies} container-background`}>
					<h5 className={`containerTitle ${styles.title}`}>
						Transportadoras aliadas con las que podrás{' '}
						<span>enviar mercancía</span>
					</h5>
					<Ally />
				</div>
				<div className='container'>
					<Question items={question} />
				</div>
				<Form data={form} background={'primary'} />
				<Newsletter background={'primary'} />
				<Fixed textWhatsapp={textWhatsapp} />
			</Layout>
		</>
	);
};

export default komercia;
