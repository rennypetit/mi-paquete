import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
const MyHead = ({ data }) => {
	const router = useRouter();
	const canonical = `${process.env.NEXT_PUBLIC_HOST}${router.pathname}`;
	const image = `${process.env.NEXT_PUBLIC_HOST}/images/image-og.jpg`;
	return (
		<>
			<Head>
				<title>{data?.title}</title>
				<meta charSet='utf-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					content='width=device-width,initial-scale=1,maximum-scale=5'
					name='viewport'
				/>
				{/* <meta name='robots' content='index' /> */}
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
				<Script
					async
					src='https://www.googletagmanager.com/gtag/js?id=UA-198816249-1'
				/>

				<Script
					type='text/javascript'
					defer
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-198816249-1');`,
					}}
				/>
				<Script
					type='text/javascript'
					defer
					dangerouslySetInnerHTML={{
						__html: `
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.defer=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-55G9B7V')`,
					}}
				/>

				<Script
					type='text/javascript'
					defer
					dangerouslySetInnerHTML={{
						__html: `
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '165976621942991');fbq('track', 'PageView');`,
					}}
				/>
			</Head>
			<noscript>
				<iframe
					title='facebook'
					defer
					src={`https://www.googletagmanager.com/ns.html?id=GTM-55G9B7V`}
					height='0'
					width='0'
					style={{ display: 'none', visibility: 'hidden' }}
				></iframe>
			</noscript>
			<noscript>
				<img
					height='1'
					width='1'
					style={{ display: 'none' }}
					src='https://www.facebook.com/tr?id=165976621942991&ev=PageView&noscript=1'
				/>
			</noscript>
		</>
	);
};

export default MyHead;
