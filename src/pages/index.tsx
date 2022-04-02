import Image from 'next/image';
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

// only data of components
import {
	banners,
	services,
	features,
	allies,
	commercial,
	blog,
	recognitions,
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
					<h2 className={styles.containerTitle}>
						¿Por qué usar la logística de envío de productos con{' '}
						<span>Mi Paquete?</span>
					</h2>
					<Feature items={features} />
				</div>
				<div className={styles.containerAllies}>
					<h2 className={styles.containerTitle}>
						Transportadoras aliadas con las que podrás{' '}
						<span>enviar mercancía</span>
					</h2>
					<Ally items={allies} />
				</div>
				<Commercial data={commercial} />
				<div className={styles.containerBlog}>
					<h2 className={styles.containerTitle}>
						Blog <span>Mi Paquete</span>
					</h2>
					<BlogCardSlider items={blog} />
				</div>
				<div className={styles.containerBlog}>
					<h2 className={styles.containerTitle}>
						Conoce lo que los medios dicen <span>sobre nosotros</span>
					</h2>
					<Media />
					<Recognition data={recognitions} />
				</div>
				<Testimonial />
			</div>
		</Layout>
	);
};

export default Home;
