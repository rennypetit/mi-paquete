import Image from 'next/image';
import Button from '@components/button';
import data from '@data/404';

import styles from './errorPage.module.scss';
const Page404 = () => {
	return (
		<main className={styles.container}>
			<h1 className={styles.title}>
				PAGE NOT FOUND <strong>404</strong>
			</h1>
			<div className={styles.containerBackground}>
				<div className={styles.background}>
					<Image
						src='/images/404/background.png'
						alt='background'
						quality={100}
						layout='fill'
					/>
				</div>

				<div className={styles.image}>
					<Image
						src='/images/404/person.png'
						alt='person'
						quality={100}
						width={362}
						height={399}
						layout='fixed'
					/>
					<hr />
				</div>
			</div>
			<div className={styles.buttons}>
				<Button data={data.buttonOne} />
			</div>
		</main>
	);
};

export default Page404;
