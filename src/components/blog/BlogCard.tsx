import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogCard.module.scss';
export default function BlogCard({ data }) {
	return (
		<div className={styles.card}>
			<div className={styles.image}>
				<Link href={data.url}>
					<a>
						<Image src={data.image} alt={data.alt} width={270} height={150} />
					</a>
				</Link>
			</div>
			<div className={styles.content}>
				<div className={styles.description}>
					<h4>{data.title}</h4>
					<h5>{data.date}</h5>
					<p>{data.description}</p>
					<div className={styles.seeMore}>VER MÁS</div>
				</div>
			</div>
		</div>
	);
}
