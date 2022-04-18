import type { NextPage } from 'next';
import Layout from 'layout';
import Banner from '@components/banner/BannerHelp';
import Footer from '@components/footer';
import Fixed from '@components/fixed';
import Card from '@components/cards/CardHelp';
// only data of components
import { banner, cards } from '@data/centro-de-ayuda';

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
			</div>
			<Footer />
			<Fixed />
		</Layout>
	);
};

export default centroDeAyuda;
