import Head from 'next/head';
import { useRouter } from 'next/router';
const MyHead = ({ data }) => {
	const router = useRouter();
	const canonical = `${process.env.NEXT_PUBLIC_HOST}${router.pathname}`;
	const image = `${process.env.NEXT_PUBLIC_HOST}/images/image-og.jpg`;
	return (
		<Head>
			<title>{data?.title}</title>
			<meta charSet='utf-8' />
			<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
			<meta
				content='width=device-width,initial-scale=1,maximum-scale=5'
				name='viewport'
			/>
			<meta name='robots' content='noindex' />

			{/* navegador */}
			<meta name='title' content={data?.title} />
			<meta name='description' content={data?.description} />
			<link rel='canonical' href={canonical} />

			{/* opengraph */}
			<meta property='og:title' content={data?.title} />
			<meta property='og:description' content={data?.description} />
			<meta property='og:url' content={canonical} />
			<meta property='og:image' content={image} />
			<meta property='og:type' content='website' />
			<meta property='og:site_name' content='"Mi Paquete' />
			<meta property='og:locale' content='es_CO' />
			<meta property='og:image:width' content='400' />
			<meta property='og:image:height' content='400' />

			{/* twitter */}
			<meta name='twitter:title' content={data?.title} />
			<meta name='twitter:description' content={data?.description} />
			<meta name='twitter:url' content={canonical} />
			<meta name='twitter:image' content={image} />
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:site' content='Mi Paquete' />

			{/* favicon */}
			<link
				rel='shortcut icon'
				href={`/images/favicon.ico`}
				type='image/x-icon'
			/>
			<link rel='icon' href={`/images/favicon.ico`} type='image/x-icon' />
			{/* JSON-LD */}
			{/* <script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
			/> */}
		</Head>
	);
};

export default MyHead;
