import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from '@components/Head';
import Layout from 'layout';
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

const DynamicBannerSlider = dynamic(
	() => import('@components/banner/BannerSlider')
);
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
					<DynamicBannerSlider items={banners} />
				</main>
				<div className='container'>
					<DynamicQuoter />
					<DynamicTrack />
					<DynamicServices items={services} />
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
					<DynamicAlly />
				</div>
				<div className='container'>
					<DynamicCommercial data={commercial} />
				</div>
				<div className={`${styles.containerBlog} container-background`}>
					<h5 className={`${styles.containerTitle} containerTitle`}>
						Blog <span>Mi Paquete</span>
					</h5>
					<DynamicBlogCardSlider items={posts} />
				</div>
				<div className='container'>
					<div className={styles.containerMedia}>
						<h5 className={`${styles.containerTitle} containerTitle`}>
							Conoce lo que los medios dicen <span>sobre nosotros</span>
						</h5>
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
