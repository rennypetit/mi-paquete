import type { NextPage } from 'next';
import Layout from 'layout';
import BannerSlider from '@components/banner/BannerSlider';
import Quoter from '@components/quoter';
import Track from '@components/track';
import Services from '@components/service';
import Feature from '@components/feature';
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
	blog,
	recognitions,
	testimonials,
} from '@data/home';

import styles from './Home.module.scss';

const Home: NextPage = () => {
	return (
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
					<h2 className='containerTitle'>
						¿Por qué usar la logística de envío de productos con{' '}
						<span>
							<mark>Mi Paquete?</mark>
						</span>
					</h2>
					<Feature items={features} />
				</div>
			</div>
			<div className={`${styles.containerAllies} container-background`}>
				<Ally />
			</div>
			<div className='container'>
				<Commercial data={commercial} />
			</div>
			<div className={`${styles.containerBlog} container-background`}>
				<h2 className={`${styles.containerTitle} containerTitle`}>
					Blog <span>Mi Paquete</span>
				</h2>
				<BlogCardSlider items={blog} />
			</div>
			<div className='container'>
				<div className={styles.containerMedia}>
					<h2 className='containerTitle'>
						Conoce lo que los medios dicen <span>sobre nosotros</span>
					</h2>
				</div>
				<Media />
			</div>
			<Recognition data={recognitions} />
			<div className='container'>
				<Testimonial data={testimonials} />
			</div>
			<Newsletter background={'primary'} />
			<Fixed />
		</Layout>
	);
};

export default Home;
