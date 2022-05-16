import type { NextPage } from 'next';
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
} from '@data/tienda-en-komercia';

import styles from './Komercia.module.scss';

const komercia: NextPage = () => {
	return (
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
				<Ally />
			</div>
			<div className='container'>
				<Question items={question} />
			</div>
			<Form data={form} background={'primary'} />
			<Newsletter background={'primary'} />
			<Fixed textWhatsapp={textWhatsapp} />
		</Layout>
	);
};

export default komercia;
