import type { NextPage } from 'next';
import Layout from 'layout';
import Card from '@components/cards/Card';
import Commercial from '@components/commercial';
import Newsletter from '@components/newsletter';
import Footer from '@components/footer';
import Fixed from '@components/fixed';

// only data of components
import {
	cards,
	commercial
} from '@data/casos-de-exito';

import styles from './successStories.module.scss';
const successStories: NextPage = () => {
	return (
		<Layout>
			{/* slider of banner */}
			<main>
				<Card data={cards}/>
			</main>
			<div className={`container ${styles.margin_container}`}>
				<Commercial data={commercial} />
			</div>
			<Newsletter background={'primary'} />
			<Footer />
			<Fixed />
		</Layout>
	);
};

export default successStories;