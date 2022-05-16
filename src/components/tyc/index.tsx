import Image from 'next/image';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';

import styles from './TYC.module.scss';
function TYC({ item }) {
	return (
		<section className={styles.container}>
			<Accordion allowZeroExpanded='true'>
				<AccordionItem>
					<AccordionItemHeading>
						<AccordionItemButton>
							<div className={styles.top}>
								<div className={styles.left}>
									<div className={styles.icon}></div>
									<h2>{item.title}</h2>
								</div>
								<div className={styles.arrow}>
									<Image
										src='/images/icons/arrow-orange.svg'
										alt='icon arrow'
										width={18}
										height={23}
										className='arrow-img'
									/>
								</div>
							</div>
						</AccordionItemButton>
					</AccordionItemHeading>
					<AccordionItemPanel>
						<div className={styles.items}>
							<Accordion allowZeroExpanded='true'>
								<AccordionItem>
									<div
										className={styles.description}
										dangerouslySetInnerHTML={{
											__html: item.description,
										}}
									></div>
								</AccordionItem>
							</Accordion>
						</div>
					</AccordionItemPanel>
				</AccordionItem>
			</Accordion>
		</section>
	);
}

export default TYC;
