import styles from './FeaturedPost.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPost = ({ data }) => {
	return (
		<div className={styles.featured_post}>
			<Link href={`/blog/${data.category}/${data.url}`}>
				<a>
					{' '}
					<div className={styles.card}>
						<Image
							src={'/images/blog/featured-post.png'}
							width={600}
							height={420}
							quality={100}
							alt={'imagen-destacada'}
						/>
						<div className={styles.card__content}>
							<h3>{data.title}</h3>
							<p>{data.description}</p>
							<div className={styles.seeMore}>VER MÁS</div>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default FeaturedPost;
