import type { NextPage } from 'next';
import Layout from 'layout';
import Banner from '@components/banner/BannerHelp';
import Card from '@components/cards/CardHelp';
import Commercial from '@components/commercial/CommercialHelp';
import Contact from '@components/contact';
import Fixed from '@components/fixed';
// only data of components
import { banner, cards, commercial } from '@data/centro-de-ayuda';

import styles from './CentroAyuda.module.scss';

const centroDeAyuda: NextPage = () => {
	return (
		<Layout>
			{/* slider of banner */}
			<main>
				<Banner data={banner} />
			</main>
			<Card items={cards} />
			<div className='container'>
				<div className={styles.commercial}>
					<Commercial data={commercial} />
				</div>
				<Contact />
			</div>
			<Fixed />
		</Layout>
	);
};

export default centroDeAyuda;
