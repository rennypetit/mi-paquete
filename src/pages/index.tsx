import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from '@components/Head';
import Layout from 'layout';
import BannerSlider from '@components/banner/BannerSlider';
import Quoter from '@components/quoter';
import Track from '@components/track';
import Services from '@components/service';
// import Feature from '@components/feature';
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
	recognitions,
	testimonials,
	textWhatsapp,
	metaTags,
} from '@data/home';
import posts from '@data/componentPostsBlog';
import styles from './Home.module.scss';

const DynamicQuoter = dynamic(() => import('@components/quoter'));
const DynamicTrack = dynamic(() => import('@components/track'));
const DynamicServices = dynamic(() => import('@components/service'));
const DynamicFeature = dynamic(() => import('@components/feature'));
const DynamicAlly = dynamic(() => import('@components/ally'));
const DynamicCommercial = dynamic(() => import('@components/commercial'));
const DynamicBlogCardSlider = dynamic(
	() => import('@components/blog/BlogCardSlider')
);
const DynamicMedia = dynamic(() => import('@components/media'));
const DynamicRecognition = dynamic(() => import('@components/recognition'));
const DynamicTestimonial = dynamic(() => import('@components/testimonial'));
const DynamicNewsletter = dynamic(() => import('@components/newsletter'));

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
					<DynamicQuoter />
					<DynamicTrack />
					<DynamicServices items={services} />
					<div className={styles.containerFeatures}>
						<h2 className='containerTitle'>
							¿Por qué usar la logística de envío de productos con{' '}
							<span>
								<mark>Mi Paquete?</mark>
							</span>
						</h2>
						<DynamicFeature items={features} />
					</div>
				</div>
				<div className={`${styles.containerAllies} container-background`}>
					<DynamicAlly />
				</div>
				<div className='container'>
					<DynamicCommercial data={commercial} />
				</div>
				<div className={`${styles.containerBlog} container-background`}>
					<h2 className={`${styles.containerTitle} containerTitle`}>
						Blog <span>Mi Paquete</span>
					</h2>
					<DynamicBlogCardSlider items={posts} />
				</div>
				<div className='container'>
					<div className={styles.containerMedia}>
						<h2 className='containerTitle'>
							Conoce lo que los medios dicen <span>sobre nosotros</span>
						</h2>
					</div>
					<DynamicMedia />
				</div>
				<DynamicRecognition data={recognitions} />
				<div className='container'>
					<DynamicTestimonial data={testimonials} />
				</div>
				<DynamicNewsletter background={'primary'} />
				<Fixed textWhatsapp={textWhatsapp} />
			</Layout>
		</>
	);
};

export default Home;
