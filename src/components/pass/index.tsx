import { useContext } from 'react';
import Image from 'next/image';
import WidthContext from '@contexts/width';
import styles from './Pass.module.scss';
const Pass = () => {
	const { widthViewport } = useContext(WidthContext);
	return (
		<section className={styles.container}>
			{widthViewport < 1024 ? (
				<Image
					src={'/images/pass.png'}
					alt={'pass'}
					quality={100}
					width={305}
					height={706}
					layout='fixed'
				/>
			) : (
				<Image
					src={'/images/pass-desktop.png'}
					alt={'pass'}
					quality={100}
					width={604}
					height={619}
					layout='fixed'
				/>
			)}
		</section>
	);
};

export default Pass;
