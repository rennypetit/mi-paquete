import type { NextPage } from 'next';
import Head from '@components/Head';
import Layout from 'layout';
import BannerPolitica from '@components/banner/BannerPolitica';
import Fixed from '@components/fixed';
import TYC from '@components/tyc';

import { textBanner, information } from '@data/tyc-campanas-comerciales';
import styles from './TYC.module.scss';

const PageTYC: NextPage = () => {
	return (
		<>
			<Head />
			<Layout>
				<main>
					<BannerPolitica textBanner={textBanner} />
				</main>
				<div className={`container ${styles.container}`}>
					<h2 className={styles.title}>{information.title}</h2>
					<div className={`${styles.content}`}>
						{information.map((item, index) => (
							<TYC item={item} key={index} />
						))}
					</div>
				</div>
				<Fixed />
			</Layout>
		</>
	);
};

export default PageTYC;
