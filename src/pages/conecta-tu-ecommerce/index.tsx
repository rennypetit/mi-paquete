import type { NextPage } from 'next';
import Layout from 'layout';
import Card from '@components/ecommerce/Card';
import Testimonial from '@components/testimonial';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import { cards, testimonials } from '@data/conecta-tu-ecommerce';

import styles from './conectaTuEcommerce.module.scss';

const conectaTuEcommerce: NextPage = () => {
	return (
		<Layout>
			<div className={styles.container}>
				<main>
					<div className={`container-background ${styles.background}`}>
						<h1 className='containerTitle'>
							Más envíos, más ventas para tu <span>ecommerce</span>
						</h1>
						<p className='containerDescription'>
							No importa en qué <strong>plataforma de ecommerce </strong> tengas
							alojada tu tienda virtual, con{' '}
							<strong>
								<mark>Mi Paquete</mark>
							</strong>{' '}
							podrás automatizar tus envíos, optimizar tu logística y ahorrar
							tiempo.
						</p>
						<Card items={cards} />
					</div>
				</main>
				<div className='container'>
					<Testimonial data={testimonials} />
				</div>
			</div>
			<Newsletter background={'primary'} />
			<Fixed />
		</Layout>
	);
};

export default conectaTuEcommerce;
