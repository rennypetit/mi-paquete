import type { NextPage } from 'next';
import Layout from 'layout';
import Banner from '@components/banner';
import Feature from '@components/feature';
import Row from '@components/storage/Row';
import Commercial from '@components/commercial';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import {
	banner,
	features,
	featuresTwo,
	row,
	commercial,
} from '@data/emprendedor-digital';

import styles from './EmprendedorDigital.module.scss';

const emprendedorDigital: NextPage = () => {
	return (
		<Layout>
			{/* slider of banner */}
			<main>
				<div className={styles.banner}>
					<Banner data={banner} />
				</div>
			</main>
			<div className='container'>
				<div className={styles.featuresOne}>
					<Feature items={features} />
				</div>
				<div className={styles.featuresTwo}>
					<Feature
						items={featuresTwo}
						icon={true}
						optionalText={'optionalTrue'}
					/>
				</div>
			</div>
			<div className={styles.rowContainer}>
				<div className={styles.rowBackground}>
					<Row data={row} />
				</div>
			</div>
			<div className='container'>
				<div className={styles.containerService}>
					<h2 className={styles.title}>
						Conoce a detalle nuestros beneficios para <br />
						<span>emprendedores digitales</span>
					</h2>
					<p className={styles.description}>
						Descubre cómo ganar <strong>puntos Mi Paquete</strong> y usarlos a
						tu favor para hacer crecer tu tienda online o incrementar tus{' '}
						<strong>ventas en redes sociales</strong> y mejorar tu{' '}
						<strong>logística de envíos.</strong>
					</p>
				</div>
				<div className={styles.commercial}>
					<Commercial data={commercial} />
				</div>
			</div>
			<Newsletter background={'primary'} />
			<Fixed />
		</Layout>
	);
};

export default emprendedorDigital;
