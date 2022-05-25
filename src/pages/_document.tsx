import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='es-co'>
			<script
				async
				src='https://cdn.jsdelivr.net/npm/vanilla-lazyload@latest/dist/lazyload.min.js'
			></script>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
