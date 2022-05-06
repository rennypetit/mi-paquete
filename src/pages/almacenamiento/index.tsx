import type { NextPage } from 'next';
import Layout from 'layout';
import Banner from '@components/banner/BannerBackground';
import Row from '@components/storage/Row';
import Slider from '@components/storage/Slider';
import Button from '@components/button';
import Plan from '@components/storage/Plan';
import Commercial from '@components/commercial';
import Form from '@components/form';
import Question from '@components/question';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import {
	banner,
	plans,
	row,
	slider,
	benefit,
	commercial,
	form,
	question,
} from '@data/almacenamiento';

import styles from './almacenamiento.module.scss';

const almacenamiento: NextPage = () => {
	return (
		<Layout>
			<main>
				<div className={styles.banner}>
					<Banner data={banner} />
				</div>
			</main>
			<div className='container margin-top'>
				<Row data={row} />
			</div>
			<Slider data={slider} />
			<div className='container'>
				<div className={styles.containerPlans}>
					<h2 className={`${styles.plan} containerTitle`}>
						Planes de almacenamiento <br />
						<span>de mercancía mensual</span>
					</h2>
					<Plan items={plans} />
				</div>
				<div className={styles.benefit}>
					<h3 className={styles.benefitTitle}>{benefit.title}</h3>
					<div
						className={styles.benefitDescription}
						dangerouslySetInnerHTML={{ __html: benefit.description }}
					></div>
					<div className={styles.benefitButton}>
						<Button data={benefit.button} />
					</div>
				</div>
				<Commercial data={commercial} />
			</div>
			<Form data={form} background={'primary'} />
			<div className='container'>
				<Question items={question} />
			</div>
			<Newsletter background={'secondary'} />
			<Fixed />
		</Layout>
	);
};

export default almacenamiento;
