import type { NextPage } from 'next';
import Head from '@components/Head';
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
	textWhatsapp,
	metaTags,
} from '@data/envios-tradicionales';

import styles from './enviosTradicionales.module.scss';

const enviosTradicionales: NextPage = () => {
	return (
		<>
			<Head data={metaTags} />
			<Layout>
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
						<h2 className={`containerTitle ${styles.title}`}>
							Transportadoras aliadas con las que podrás{' '}
							<span>enviar mercancía</span>
						</h2>
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
					<div className={styles.testimonials}>
						<Testimonial data={testimonials} />
					</div>

					<div className={styles.containerCommercial}>
						<Commercial data={commercial} />
					</div>
				</div>
				<Newsletter background={'primary'} />
				<Fixed textWhatsapp={textWhatsapp} />
			</Layout>
		</>
	);
};

export default enviosTradicionales;
