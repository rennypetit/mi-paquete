import styles from './FeaturedPost.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPost = () => {
	return (
		<div className={styles.featured_post}>
			<div className={styles.card}>
				<Image
					src={'/images/blog/featured-post.png'}
					width={600}
					height={420}
					alt={'imagen-destacada'}
				/>
				<div className={styles.card__content}>
					<h3>
						¿Cómo potenciar las ventas <span>de tu tienda virtual?</span>
					</h3>
					<p>
						Tener una tienda online requiere esfuerzos adicionales además de
						vender productos, por eso hoy te mostramos algunas estrategias que
						han funcionado en las tiendas más reconocidas internacionalmente
						para incrementar sus ventas y fidelizar clientes. In ornare vel urna
						quis venenatis. Maecenas orci mauris.
					</p>
					<div className={styles.seeMore}>VER MÁS</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedPost;
