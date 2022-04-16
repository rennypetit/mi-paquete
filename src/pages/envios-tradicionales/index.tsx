import type { NextPage } from 'next';
import Layout from 'layout';
import Banner from '@components/banner';
import Footer from '@components/footer';
import Newsletter from '@components/newsletter';
import Testimonial from '@components/testimonial';
import Description from '@components/description';
import Ally from '@components/ally';
import Benefit from '@components/benefit';
import Question from '@components/question';
import Commercial from '@components/commercial';
import Fixed from '@components/fixed';

// only data of components
import {
	banner,
	description,
	benefits,
	question,
	commercial,
} from '@data/envios-tradicionales';

import styles from './enviosTradicionales.module.scss';

const enviosTradicionales: NextPage = () => {
	return (
		<Layout>
			{/* slider of banner */}
			<main>
				<Banner data={banner} />
			</main>
			<div className='container'>
				<div className={styles.descriptionTitleDesktop}>
					<h2 className='containerTitle'>
						{description.title} <span>{description.titleSpan}</span>
					</h2>
				</div>
				<Description data={description} />
				<div className={styles.containerAllies}>
					<Ally />
				</div>
				<Benefit data={benefits} />
				<Question items={question} />
				<Testimonial />
				<div className={styles.containerCommercial}>
					<Commercial data={commercial} />
				</div>
			</div>
			<Newsletter background={'primary'} />
			<Footer />
			<Fixed />
		</Layout>
	);
};

export default enviosTradicionales;
