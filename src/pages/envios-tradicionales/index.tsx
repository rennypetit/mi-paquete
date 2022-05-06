import type { NextPage } from 'next';
import Layout from 'layout';
import Banner from '@components/banner';
import Description from '@components/description';
import Ally from '@components/ally';
import Benefit from '@components/benefit';
import Question from '@components/question';
import Commercial from '@components/commercial';
import Testimonial from '@components/testimonial';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import {
	banner,
	description,
	benefits,
	question,
	commercial,
	testimonials,
} from '@data/envios-tradicionales';

import styles from './enviosTradicionales.module.scss';

const enviosTradicionales: NextPage = () => {
	return (
		<Layout>
			{/* slider of banner */}
			<main>
				<Banner data={banner} />
			</main>
			<div className={`${styles.description} container-background`}>
				<div className={styles.descriptionTitleDesktop}>
					<h2 className='containerTitle margin-top'>
						{description.title} <span>{description.titleSpan}</span>
					</h2>
				</div>
				<Description data={description} />
			</div>
			<div className='container'>
				<div className={styles.containerAllies}>
					<Ally />
				</div>
			</div>
			<div className={`${styles.benefits} container-background`}>
				<div className='container'>
					<Benefit data={benefits} />
				</div>
			</div>
			<div className='container'>
				<Question items={question} />
				<Testimonial data={testimonials} />

				<div className={styles.containerCommercial}>
					<Commercial data={commercial} />
				</div>
			</div>
			<Newsletter background={'primary'} />
			<Fixed />
		</Layout>
	);
};

export default enviosTradicionales;
