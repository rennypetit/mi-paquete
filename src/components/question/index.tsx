import Image from 'next/image';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';

import styles from './Question.module.scss';
function Question({ items }) {
	return (
		<section className={styles.container}>
			<Accordion allowZeroExpanded='true'>
				<AccordionItem>
					<AccordionItemHeading>
						<AccordionItemButton>
							<div className={styles.top}>
								<div className={styles.left}>
									<Image
										src='/images/icons/accordion-question.svg'
										alt='icon question'
										width={30}
										height={30}
									/>
									<h2>Preguntas frecuentes</h2>
								</div>
								<div className={styles.arrow}>
									<Image
										src='/images/icons/arrow.svg'
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
							<ul>
								{items.map((item, index) => (
									<li key={index}>
										<Accordion allowZeroExpanded='true'>
											<AccordionItem>
												<AccordionItemHeading>
													<AccordionItemButton>
														<div className={styles.itemsTitle}>
															<strong>{item.title}</strong>
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
													<div
														className={styles.itemsDescription}
														dangerouslySetInnerHTML={{
															__html: item.description,
														}}
													></div>
												</AccordionItemPanel>
											</AccordionItem>
										</Accordion>
									</li>
								))}
							</ul>
						</div>
					</AccordionItemPanel>
				</AccordionItem>
			</Accordion>
		</section>
	);
}

export default Question;
