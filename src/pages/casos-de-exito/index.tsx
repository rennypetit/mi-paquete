import type { NextPage } from 'next';
import Head from '@components/Head';
import Layout from 'layout';
import Card from '@components/cards/Card';
import Commercial from '@components/commercial';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import { cards, commercial, metaTags } from '@data/casos-de-exito';

import styles from './successStories.module.scss';
const successStories: NextPage = () => {
	return (
		<>
			<Head data={metaTags} />
			<Layout>
				<main>
					<Card data={cards} />
				</main>
				<div className={`container ${styles.margin_container}`}>
					<Commercial data={commercial} />
				</div>
				<Newsletter background={'primary'} />
				<Fixed />
			</Layout>
		</>
	);
};

export default successStories;
