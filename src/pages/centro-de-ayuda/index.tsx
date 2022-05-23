import type { NextPage } from 'next';
import Head from '@components/Head';
import Layout from 'layout';
import Banner from '@components/banner/BannerHelp';
import Card from '@components/cards/CardHelp';
import AllQuestions from '@components/question/AllQuestions';
import Commercial from '@components/commercial/CommercialHelp';
import Contact from '@components/contact';
import Fixed from '@components/fixed';
// only data of components
import {
	banner,
	cards,
	commercial,
	allQuestions,
	metaTags,
} from '@data/centro-de-ayuda';

import styles from './CentroAyuda.module.scss';

const centroDeAyuda: NextPage = () => {
	return (
		<>
			<Head data={metaTags} />
			<Layout>
				<main>
					<Banner data={banner} />
				</main>
				<Card items={cards} />
				<div className='container'>
					<div className={styles.commercial}>
						<Commercial data={commercial} />
						<div
							id='preguntas-frecuentes'
							className={styles.preguntasFrecuentes}
						></div>
						<div className={styles.allQuestions}>
							<AllQuestions items={allQuestions} />
						</div>
					</div>
					<Contact />
				</div>
				<Fixed />
			</Layout>
		</>
	);
};

export default centroDeAyuda;
