import styles from './article.module.scss';
import Image from 'next/image';
import Layout from 'layout';
import Fixed from '@components/fixed';
import BlogCard from '@components/blog/BlogCard';
import Shared from '@components/blog/Shared';
import DataAuthor from '@components/blog/DataAuthor';
const article = () => {
	const blog = [
		{
			url: '#',
			image: '/images/blog/entrada.png',
			title: 'NOMBRE DE LA ENTRADA',
			date: 'Autor y Fecha',
			description:
				'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
		},
		{
			url: '#',
			image: '/images/blog/entrada.png',
			title: 'NOMBRE DE LA ENTRADA',
			date: 'Autor y Fecha',
			description:
				'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
		},
		{
			url: '#',
			image: '/images/blog/entrada.png',
			title: 'NOMBRE DE LA ENTRADA',
			date: 'Autor y Fecha',
			description:
				'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
		},
		{
			url: '#',
			image: '/images/blog/entrada.png',
			title: 'NOMBRE DE LA ENTRADA',
			date: 'Autor y Fecha',
			description:
				'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
		},
		{
			url: '#',
			image: '/images/blog/entrada.png',
			title: 'NOMBRE DE LA ENTRADA',
			date: 'Autor y Fecha',
			description:
				'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
		},
		{
			url: '#',
			image: '/images/blog/entrada.png',
			title: 'NOMBRE DE LA ENTRADA',
			date: 'Autor y Fecha',
			description:
				'Praesent vestibulum, ligula eu porttitor imperdiet, arcu lacus mollis eros, quis dapibus lacus risus sit…',
		},
	];
	return (
		<Layout>
			<div className={styles.wrapper}>
				<article className={styles.article}>
					<h1 className={styles.title_main}>
						5 cosas que debes saber sobre{' '}
						<strong>los casilleros inteligentes</strong>
					</h1>
					<p className={styles.author_info}>Autor y Fecha</p>
					<p className={styles.descrip_short}>
						Un Casillero Inteligente es un espacio de almacenamiento seguro y de
						fácil acceso, pero te preguntarás ¿cómo funciona un Casillero
						Inteligente?
					</p>
					<Image
						src={
							'/images/blog/business-executives-discussing-with-their-colleagues-on-whiteboa.png'
						}
						alt={'imagen-destacada'}
						width={776}
						height={496}
						className={styles.img_featured}
					/>
					<Shared />
					<div className={styles.content}>
						<p>
							El funcionamiento se basa en 3 sencillos pasos:
							<p>Comprar: Realiza la compra online.</p>
							<p>
								Notificar: Recibe tu pedido en un Smart Locker y te será
								asignado un código entrega/retiro.
							</p>
							<p>
								Retirar: Con tu código recoge tu paquete. El usuario que decida
								hacer uso de los casilleros inteligentes estará más que
								complacido con el servicio, puesto que sus pertenencias o
								paquetería permanecerá en una taquilla con seguridad moderna, en
								donde la llave está en la palma de su mano.(El código único de
								seguridad)
							</p>
							Con estas 5 ventajas no te quedarán dudas para comenzar a usar
							este modelo de servicio: Ahorro: Con el servicio de retiro en
							casillero, ahorras el costo del despacho con acceso a cualquier
							hora. ¿Por qué? Porque en un mismo lugar puedes llevar todo tu
							inventario. Seguro: Cada código es único y solo tú lo tienes.
							Digitando el código asignado y ¡listo! El sistema es seguro y de
							clase mundial. Además, es una excelente solución para mitigar
							exponencialmente los hurtos y extravíos de paquetería, encomiendas
							y demás material de valor. Práctico: Con Casilleros Inteligentes,
							no tienes que preocuparte si estás fuera de casa. Si compraste tus
							productos, tú programas cuando recogerlos en cualquiera de los
							puntos habilitados. Rapidez: Para reclamar tu pedido recibirás una
							notificación con un código único a través de tu email o app.
							¡Digita, Retira Y Listo! Al ser la misma dirección de entrega para
							tus pedidos, olvídate de los largos tiempos de búsqueda en
							direcciones y entregas fallidas. Innovación: Smart Locker Son
							casilleros innovadores que cuentan con una nueva red tecnológica
							que permite la entrega y retiro de paquetes de forma segura e
							innovadora.
						</p>
						<blockquote>
							sus pertenencias o paquetería permanecerá en una taquilla con
							seguridad moderna, en donde la llave está en la palma de su mano.
						</blockquote>
						<hr className={styles.separator} />
						<Image
							src={'/images/blog/close-up-woman-receiving-pack.png'}
							alt={'imagen-destacada'}
							width={776}
							height={496}
							className={styles.img_featured}
						/>
						<p>
							También te puede interesar: Compara y elige la transportadora
							ideal para tus envíos También tienes la opción de retirar un
							paquete o entregar una encomienda, los grandes ecommerce están
							implementando smart locker como estrategia de omnicanalidad;
							Obteniendo así una nueva experiencia de compra, diferente, sin
							filas, con tecnología.
						</p>
						<p>
							Buy Online pick up in locker, Compra en línea recoge en un
							casillero. ¿Existe algo más fácil? Bien, exactamente esa es la
							razón de ser de Casilleros Inteligentes Colombia. Si tu idea es
							subir al siguiente nivel esta es la oportunidad de fabricar el
							tuyo a tu medida.
						</p>
						<p>
							Envía y recibe tus paquetes. ¡Sin esperas, sin colas! Recuerda que
							en mipaquete.com somos la mejor opción para la logística y
							cotización de tus envíos a nivel nacional. Cotiza tu envío aquí.
						</p>
						<Shared />
						<DataAuthor />
					</div>
				</article>
				<aside className={styles.sidebar}>
					{blog.map((item, index) => (
						<BlogCard data={item} key={index} />
					))}
				</aside>
			</div>
			<Fixed />
		</Layout>
	);
};

export default article;
