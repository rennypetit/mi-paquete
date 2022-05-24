import type { NextPage } from 'next';
import Head from '@components/Head';
import Layout from 'layout';
import Card from '@components/cards/CardSoluciones';
import Feature from '@components/feature';
import Ally from '@components/ally';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import { metaTags, cards, features } from '@data/soluciones-ecommerce';

import styles from './solucionesEcommerce.module.scss';

const SolucionesEcommerce: NextPage = () => {
	return (
		<>
			<Head data={metaTags} />
			<Layout>
				<div className={styles.container}>
					<main>
						<div className='pageSolucionesEcommerce'>
							<h1 className='containerTitle'>
								Soluciones <span>ecommerce</span>
							</h1>
							<p className='containerDescription'>
								En Mi Paquete no solo encontrarás diferentes servicios de
								envíos, también tienes la posibilidad de adquirir almacenamiento
								para tu mercancía, elegir diferentes opciones de transportadoras
								y más.
							</p>
							<div className='container'>
								<Card items={cards} />
							</div>
							<div className='container-background'>
								<div className={styles.features}>
									<Feature items={features} />
								</div>
								<div className={`${styles.containerAllies}`}>
									<Ally />
								</div>
							</div>
						</div>
					</main>
				</div>
				<Newsletter background={'primary'} />
				<Fixed />
			</Layout>
		</>
	);
};

export default SolucionesEcommerce;
