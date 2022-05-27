import type { NextPage } from 'next';
import Head from '@components/Head';
import Layout from 'layout';
import Banner from '@components/banner/BannerItems';
import Automations from '@components/automation';
import Ally from '@components/ally';
import Row from '@components/row';
import Question from '@components/question';
import Form from '@components/form';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import {
	banner,
	automations,
	row,
	question,
	form,
	textWhatsapp,
	metaTags,
} from '@data/api-integracion';
import styles from './ApiIntegracion.module.scss';
const apiIntegracion: NextPage = () => {
	return (
		<>
			<Head data={metaTags} />
			<Layout>
				<main>
					<Banner data={banner} />
				</main>
				<div className='container'>
					<Automations data={automations} />
				</div>
				<div className={`${styles.containerAllies} container-background`}>
					<h3 className={`containerTitle ${styles.title}`}>
						Transportadoras aliadas con las que podrás{' '}
						<span>enviar mercancía</span>
					</h3>
					<Ally />
				</div>
				<Row data={row} />
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

export default apiIntegracion;
