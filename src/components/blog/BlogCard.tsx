import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogCard.module.scss';
export default function BlogCard({ data, blog = false }) {
	return (
		<div className={`${styles.card} ${!blog && styles.cardWidth}`}>
			<Link href={`/blog/${data.category}/${data.url}`}>
				<a>
					<div className={styles.image}>
						<Image
							src={data.image}
							alt={data.alt}
							width={270}
							height={150}
							layout='responsive'
						/>
					</div>
					<div className={styles.content}>
						<div className={styles.description}>
							<h4>{data.title}</h4>
							<p>{data.description}</p>
							<div className={styles.seeMore}>VER MÁS</div>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
}
