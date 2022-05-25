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
import { useState } from 'react';

const centroDeAyuda: NextPage = () => {
	const [data, setData] = useState(cards);
	const handleSearch = (primerosPasos, aprenderMas) => {
		if (primerosPasos & aprenderMas) {
			const info = cards.filter(
				(element) => element.id === 1 || element.id === 2
			);
			setData(info);
		} else if (primerosPasos) {
			const info = cards.filter((element) => element.id === 1);
			setData(info);
		} else if (aprenderMas) {
			const info = cards.filter((element) => element.id === 2);
			setData(info);
		} else {
			setData(null);
		}
	};
	return (
		<>
			<Head data={metaTags} />
			<Layout>
				<main>
					<Banner data={banner} handleSearch={handleSearch} />
				</main>
				{data ? (
					<Card items={data} />
				) : (
					<p className={styles.notFound}>información no encontrada.</p>
				)}
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
