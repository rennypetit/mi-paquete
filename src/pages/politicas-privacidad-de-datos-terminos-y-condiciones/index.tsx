import type { NextPage } from 'next';
import Layout from 'layout';
import BannerPolitica from '@components/banner/BannerPolitica';
import Fixed from '@components/fixed';

import { textBanner, information } from '@data/politica-privacidad';
import styles from './politicas.module.scss';
const Politica: NextPage = () => {
	return (
		<Layout>
			{/* slider of banner */}
			<main>
				<BannerPolitica textBanner={textBanner} />
			</main>
			<div className={`container ${styles.container}`}>
				<h2 className={styles.title}>{information.title}</h2>
				<div
					className={`${styles.content}`}
					dangerouslySetInnerHTML={{ __html: information.content }}
				></div>
			</div>
			<Fixed />
		</Layout>
	);
};

export default Politica;
