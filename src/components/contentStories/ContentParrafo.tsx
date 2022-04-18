import styles from './Content.module.scss';
import ContentSection from './ContentSection';
export default function Card ({ content, section }) {
	return (
		<div className={styles.containerDescription}>
      <div
				className={styles.containerDescription_width}
				dangerouslySetInnerHTML={{ __html: content.description }}></div>
			<ContentSection section={section} />
    </div>
	);
}