import type { NextPage } from 'next';
import Layout from 'layout';
import Card from '@components/cards/Card';
import Testimonial from '@components/Testimonial';
import Newsletter from '@components/newsletter';
import Footer from '@components/footer';
import Fixed from '@components/fixed';

// only data of components
import {
	cards
} from '@data/trabaja-con-nosotros';

import styles from './workWithUs.module.scss';
const workWithUs: NextPage = () => {
	return (
		<Layout>
			{/* slider of banner */}
			<main>
				<Card data={cards}/>
			</main>
			<div className='container'>
				<Testimonial />
			</div>
			{/* <div className={`container ${styles.margin_container}`}>
				<Commercial data={commercial} />
			</div> */}
			<Newsletter background={'secondary'} />
			<Footer />
			<Fixed />
		</Layout>
	);
};

export default workWithUs;
