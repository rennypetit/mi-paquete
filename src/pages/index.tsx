import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from '@components/Head';
import Layout from 'layout';
import BannerSlider from '@components/banner/BannerSlider';
import Quoter from '@components/quoter';
import Track from '@components/track';
import Services from '@components/service';
// import Feature from '@components/feature';
import Ally from '@components/ally';
import Commercial from '@components/commercial';
import BlogCardSlider from '@components/blog/BlogCardSlider';
import Media from '@components/media';
import Recognition from '@components/recognition';
import Testimonial from '@components/testimonial';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';

// only data of components
import {
	banners,
	services,
	features,
	commercial,
	recognitions,
	testimonials,
	textWhatsapp,
	metaTags,
} from '@data/home';
import posts from '@data/componentPostsBlog';

import styles from './Home.module.scss';

const DynamicFeature = dynamic(() => import('@components/feature'), {
	ssr: true,
});
const Home: NextPage = () => {
	return (
		<>
			<Head data={metaTags} />
			<Layout>
				{/* slider of banner */}
				<main>
					<BannerSlider items={banners} />
				</main>
				<div className='container'>
					<Quoter />
					<Track />
					<Services items={services} />
					<div className={styles.containerFeatures}>
						<h5 className='containerTitle'>
							¿Por qué usar la logística de envío de productos con{' '}
							<span>
								<mark>Mi Paquete?</mark>
							</span>
						</h5>
						<DynamicFeature items={features} />
					</div>
				</div>
				<div className={`${styles.containerAllies} container-background`}>
					<h5 className={`containerTitle ${styles.title}`}>
						Transportadoras aliadas con las que podrás{' '}
						<span>enviar mercancía</span>
					</h5>
					<Ally />
				</div>
				<div className='container'>
					<Commercial data={commercial} />
				</div>
				<div className={`${styles.containerBlog} container-background`}>
					<h5 className={`${styles.containerTitle} containerTitle`}>
						Blog <span>Mi Paquete</span>
					</h5>
					<BlogCardSlider items={posts} />
				</div>
				<div className='container'>
					<div className={styles.containerMedia}>
						<h5 className={`${styles.containerTitle} containerTitle`}>
							Conoce lo que los medios dicen <span>sobre nosotros</span>
						</h5>
					</div>
					<Media />
				</div>
				<Recognition data={recognitions} />
				<div className='container'>
					<Testimonial data={testimonials} />
				</div>
				<Newsletter background={'primary'} />
				<Fixed textWhatsapp={textWhatsapp} />
			</Layout>
		</>
	);
};

export default Home;
