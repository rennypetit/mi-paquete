import type { NextPage } from 'next';
import Layout from 'layout';
import Banner from '@components/banner/BannerHelp';
import Footer from '@components/footer';
import Fixed from '@components/fixed';
import Card from '@components/cards/CardHelp';
import Commercial from '@components/commercial/CommercialHelp';
import Question from '@components/question';
import Contact from '@components/contact';
// only data of components
import { banner, cards, commercial, question } from '@data/centro-de-ayuda';

import styles from './CentroAyuda.module.scss';

const centroDeAyuda: NextPage = () => {
	return (
		<Layout>
			{/* slider of banner */}
			<main>
				<Banner data={banner} />
			</main>
			<div className='container'>
				<Card items={cards} />
				<div className={styles.commercial}>
					<Commercial data={commercial} />
				</div>
			</div>
			<Question items={question} />
			<div className='container'>
				<Contact />
			</div>
			<Footer />
			<Fixed />
		</Layout>
	);
};

export default centroDeAyuda;
