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
										src='/images/icons/accordion-question.png'
										alt='icon question'
										width={35}
										height={35}
										layout='fixed'
									/>
									<p className={styles.testimonialsTitle}>
										Preguntas frecuentes
									</p>
								</div>
								<div className={styles.arrow}>
									<Image
										src='/images/icons/arrow.svg'
										alt='icon arrow'
										width={18}
										height={23}
										className='arrow-img'
										layout='fixed'
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
																	layout='fixed'
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
