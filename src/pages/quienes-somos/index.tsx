import type { NextPage } from 'next';
import Layout from 'layout';
import BannerAboutUs from '@components/banner/BannerAboutUs';
import Ally from '@components/ally';
import Video from '@components/video/Video';
import Media from '@components/media';
import Recognition from '@components/recognition';
import Newsletter from '@components/newsletter';
import Fixed from '@components/fixed';
// only data of components
import { banner, sectionVideo, recognitions } from '@data/quienes-somos';

import styles from './aboutUs.module.scss';
const aboutUs: NextPage = () => {
	return (
		<Layout>
			{/* slider of banner */}
			<main>
				<BannerAboutUs data={banner} />
			</main>
			<div className={`container ${styles.margin_container}`}>
				<Video data={sectionVideo} />
				<Ally />
			</div>
			<Recognition data={recognitions} />
			<div className={`container ${styles.margin_container}`}>
				<div className={styles.containerBlog}>
					<h2 className='containerTitle'>
						Conoce lo que los medios dicen <span>sobre nosotros</span>
					</h2>
					<Media />
				</div>
			</div>
			<Newsletter background={'primary'} />
			<Fixed />
		</Layout>
	);
};

export default aboutUs;
