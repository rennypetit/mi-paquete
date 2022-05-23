import type { NextPage } from 'next';
import Head from '@components/Head';
import Layout from 'layout';
import Banner from '@components/banner/';
import Card from '@components/cards/CardVideo';
import Commercial from '@components/commercial';
import Row from '@components/row';
import BlogCardSlider from '@components/blog/BlogCardSlider';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import {
	metaTags,
	banner,
	cards,
	videosWhatsapp,
	videosCarrierService,
	videosWoocommerce,
	commercial,
	row,
	commercialTwo,
} from '@data/primeros-pasos';
import posts from '@data/componentPostsBlog';

import styles from './PrimerosPasos.module.scss';

const primerosPasos: NextPage = () => {
	return (
		<>
			<Head data={metaTags} />
			<Layout>
				<main>
					<div className={styles.banner}>
						<Banner data={banner} />
					</div>
				</main>
				<div className='container'>
					<h2 className={styles.videosTitle}>Vídeo Tutoriales</h2>
					<Card items={cards} />
					<div id='whatsapp' className={styles.whatsapp}></div>
					<h2 className={`${styles.videosTitle} ${styles.titleWhatsapp}`}>
						Vídeos notificaciónes por whatsapp
					</h2>
					<Card items={videosWhatsapp} />
					<h2 className={styles.videosTitle}>
						Vídeos ¿Cómo instalar Carrier Service en tu Shopify?
					</h2>
					<Card items={videosCarrierService} />
					<h2 className={styles.videosTitle}>
						¿Cómo configurar Mi Paquete en tu tienda en Woocomerce?
					</h2>
					<Card items={videosWoocommerce} />
					<Commercial data={commercial} />
				</div>
				<div className={styles.row}>
					<Row data={row} />
				</div>
				<div className={`${styles.commercialTwo} container pagePrimerosPasos`}>
					<Commercial data={commercialTwo} />
				</div>
				<div className={styles.containerBlog}>
					<h2 className={`${styles.containerTitle} containerTitle`}>
						Descubre más en <span>nuestro blog</span>
					</h2>
					<BlogCardSlider items={posts} />
				</div>
				<div className={styles.newsletter}>
					<Newsletter background={'secondary'} />
				</div>
				<Fixed />
			</Layout>
		</>
	);
};

export default primerosPasos;
