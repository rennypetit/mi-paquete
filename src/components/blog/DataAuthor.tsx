import Image from 'next/image';
import styles from './DataAuthor.module.scss';

const DataAuthor = () => {
	return (
		<div className={styles.data_author}>
			<div className={styles.avatar}>
				<Image
					src={'/images/blog/avatar.png'}
					alt={'avatar'}
					width={80}
					height={80}
				/>
			</div>
			<div className={styles.data}>
				<small>Author</small>
				<h4>Marcela Smith Roberts</h4>
				<p>
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
					nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
					sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
					rebum.
				</p>
			</div>
		</div>
	);
};

export default DataAuthor;
