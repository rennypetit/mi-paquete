import type { NextPage } from 'next';
import Head from '@components/Head';
import Layout from 'layout';
import Feature from '@components/feature';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import {
	metaTags,
	features,
	featuresTwo,
	featuresThree,
} from '@data/beneficios-a-tu-medida';

import styles from './BeneficiosTuMedida.module.scss';

const BeneficiosTuMedida: NextPage = () => {
	return (
		<>
			<Head data={metaTags} />
			<Layout>
				<main>
					<div
						className={`${styles.container} container pageBeneficiosTuMedida`}
					>
						<div className={styles.containerService}>
							<h1 className={styles.title}>
								Adquiere nuestros <span>beneficios a tu medida</span>
							</h1>
							<p className={styles.description}>
								Sin importar de qué tamaño sea tu emprendimiento, marca o
								empresa, en Mi Paquete contamos con beneficios que se adaptan al
								volumen de los envíos de tu ecommerce, nivel de ventas y más.
							</p>
						</div>
						<div className={styles.features}>
							<Feature items={features} />
						</div>
						<div className={styles.featuresTwo}>
							<Feature items={featuresTwo} />
						</div>
						<div className={styles.featuresThree}>
							<Feature items={featuresThree} />
						</div>
					</div>
				</main>
				<Newsletter background={'secondary'} />
				<Fixed />
			</Layout>
		</>
	);
};

export default BeneficiosTuMedida;
