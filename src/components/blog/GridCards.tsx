import BlogCard from './BlogCard';
import styles from './GridCards.module.scss';

const GridCards = ({ dataBlog }) => {
	return (
		<div className={styles.grid_template}>
			{dataBlog.map((item, index) => (
				<BlogCard data={item} key={index} blog={true} />
			))}
		</div>
	);
};

export default GridCards;
