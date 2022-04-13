import { useContext } from 'react';
import Image from 'next/image';
import WidthContext from '@contexts/width';
import styles from './Pass.module.scss';
const Pass = () => {
	const { widthViewport } = useContext(WidthContext);
	return (
		<section className={styles.container}>
			{widthViewport < 1024 ? (
				<Image src={'/images/pass.png'} alt={'pass'} width={405} height={706} />
			) : (
				<Image
					src={'/images/pass-desktop.png'}
					alt={'pass'}
					width={754}
					height={769}
				/>
			)}
		</section>
	);
};

export default Pass;
