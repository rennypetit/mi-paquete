import type { NextPage } from 'next';
import Head from '@components/Head';
import Layout from 'layout';
import BannerExito from '@components/banner/BannerExito';
import CardExito from '@components/cards/CardExito';
import Commercial from '@components/commercial';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import {
	metaTags,
	banner,
	items,
	sectionThree,
	commercial,
} from '@data/casos-de-exito';

import styles from './CasosDeExito.module.scss';
import Expansion from '@components/expansion';
const CasosDeExito: NextPage = () => {
	return (
		<>
			<Head data={metaTags} />
			<Layout>
				<main>
					<BannerExito data={banner} />
					<div className={`${styles.containerCard} container`}>
						{items.map((item, index) => (
							<CardExito data={item} key={index} />
						))}
					</div>
					<div className={styles.background}>
						<Expansion data={sectionThree} />
					</div>
				</main>
				<div className={`container ${styles.commercial}`}>
					<Commercial data={commercial} />
				</div>
				<Newsletter background={'secondary'} />
				<Fixed />
			</Layout>
		</>
	);
};

export default CasosDeExito;
