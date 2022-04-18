import Image from 'next/image';
import Link from 'next/link';
import Button from '@components/button';
import styles from './Card.module.scss';
export default function Cards ({ data }) {
	return (
		<div className={(data.sizeCard ? `${styles[data.sizeCard]} ${styles.card}` : `${styles.card}`)}>
			<div className={styles.image}>
				<Link href={data.url}>
					<a>
						<Image src={data.image} alt={data.alt} width={290} height={180} />
					</a>
				</Link>
			</div>
			<div className={styles.content}>
				<div className={styles.description}>
					<h4>{data.title}</h4>
					<h5>{data.date}</h5>
					<p className={styles.description_p}>{data.description}</p>
					{
						(data.titleDate ? <p className={styles.description_p_bold}>{data.titleDate}</p> : "")
					}
					{
						(data.dateExpiry  ? <p className={styles.description_time}><time>{data.dateExpiry}</time></p> : "")
					}
					{
						(data.titleBtn ? <h5 className={styles.description_titleBtn}>{data.titleBtn}</h5> : "")
						
					}
					<div className={styles.buttons}>
						{data.buttonOne && <Button data={data.buttonOne} />}
					</div>
				</div>
			</div>
		</div>
	);
}