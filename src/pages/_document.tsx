import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='es-co'>
			<Head>
				<link
					href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
					rel='stylesheet'
					crossOrigin
				/>
				<link
					rel='stylesheet'
					type='text/css'
					href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
					crossOrigin
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
