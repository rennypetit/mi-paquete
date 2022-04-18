import Content from './Content';
import styles from './Content.module.scss';
export default function Cards ({ section }) {
	return (
		<div className={styles.containerSection}>
			{
				section.items.map((item, index) =>(
					<Content data={item} key={index}/>
				))
			}
		</div>
	);
}