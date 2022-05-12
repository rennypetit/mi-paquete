import type { NextPage } from 'next';
import Image from 'next/image';
import Layout from 'layout';
import Banner from '@components/banner';
import Row from '@components/row';
import FeatureCardSlider from '@components/featureCardslider';
import Commercial from '@components/commercial';
import Ally from '@components/ally/AllyModal';
import Feature from '@components/feature';
import Testimonial from '@components/testimonial';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';
import Question from '@components/question';

// only data of components
import {
	banner,
	row,
	featuresCardSlider,
	commercial,
	features,
	testimonials,
	question,
} from '@data/envios-pago-contraentrega';

import styles from './enviosPagoContraEntrega.module.scss';

const enviosPagoContraEntrega: NextPage = () => {
	return (
		<Layout>
			<main>
				<Banner data={banner} />
			</main>
			<Row data={row} />
			<div className='container'>
				<FeatureCardSlider items={featuresCardSlider} />
				<div className={styles.containerCommercial}>
					<Commercial data={commercial} />
					<div className={styles.containerAllies}>
						<Ally />
					</div>
					<div className={styles.containerService}>
						<h2 className={styles.title}>
							¿Cómo funciona nuestro servicio de pago contra entrega para{' '}
							<span>ecommerce y tiendas online?</span>
						</h2>
						<p className={styles.description}>
							Adquirir el{' '}
							<strong>servicio de mensajería de pagos contra entrega</strong>{' '}
							para tu tienda online es más fácil de lo que imaginas, con tan
							solo estos pasos podrás llegar a tus clientes:
						</p>
						<Feature items={features} icon={true} />
						<div className={styles.containerIcon}>
							<hr className={styles.rowLine} />
							<Image
								src='/images/icons/truck.png'
								alt='icon truck'
								width={117}
								height={40}
							/>
							<hr className={styles.rowLine} />
						</div>
						<Testimonial data={testimonials} />
					</div>
				</div>
				<Question items={question} />
			</div>
			<Newsletter background={'primary'} />
			<Fixed />
		</Layout>
	);
};

export default enviosPagoContraEntrega;
