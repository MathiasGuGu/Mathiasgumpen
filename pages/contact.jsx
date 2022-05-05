import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../styles/Contact.module.css';

function contact() {
	return (
		<>
			<motion.div
				className={styles.index__main_container}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{
					duration: 1,
				}}>
				<motion.div className={styles.contact__main_container}>
					<motion.div className={styles.contact__contact_info}>
						Contact-info:
						<motion.p
							initial={{
								paddingTop: '50px',
								height: '200px',
								width: '100%',
								fontSize: 0,
								borderTop: '3px solid #452f67',
							}}
							whileHover={{
								cursor: 'pointer',
								height: '300px',
								width: '100%',
								fontSize: '1.2rem',
								transition: {
									duration: 0.2,
								},
							}}>
							I will answer as fast as i can. <br /> I will
							respond on Email.
							<br />
							Contact me if you want to work.
							<br />
						</motion.p>
					</motion.div>
					<motion.div className={styles.contact__form_container}>
						<motion.form
							className={styles.contact__form}
							onSubmit={(e) => {
								e.preventDefault();
							}}>
							<motion.label
								htmlFor='name'
								initial={{ x: 0, y: -5 }}
								animate={{ x: -200, y: -10 }}>
								Your name
							</motion.label>
							<motion.input
								type='text'
								name='name'
								whileFocus={{
									scale: 1.1,
									backgroundColor: '#ffffff',
									borderBottom: '5px solid #452f67',
									exit: 'borderBottom: 3px solid #452f67',
									transition: {
										duration: 0.3,
									},
								}}
								whileHover={{
									transition: {
										duration: 1,
										repeat: Infinity,
									},
								}}
							/>
							<motion.label
								htmlFor='email'
								initial={{ x: 0, y: -5 }}
								animate={{ x: -200, y: -10 }}>
								Email
							</motion.label>
							<motion.input
								type='text'
								name='email'
								whileFocus={{
									scale: 1.1,
									backgroundColor: '#ffffff',
									borderBottom: '5px solid #452f67',

									transition: {
										duration: 0.3,
									},
								}}
							/>
							<motion.label
								htmlFor='message'
								initial={{ x: 0, y: -5 }}
								animate={{ x: -200, y: -10 }}>
								Message
							</motion.label>
							<motion.textarea
								htmlFor=''
								name='message'
								layoutId='textarea-1'
								whileFocus={{
									scale: 1.05,
									backgroundColor: '#ffffff',
									borderBottom: '5px solid #452f67',
									transition: {
										duration: 0.3,
									},
								}}></motion.textarea>

							<motion.button
								whileHover={{
									scale: 1.05,
									cursor: 'pointer',
								}}
								whileTap={{
									backgroundColor: '#f6b463',
									scale: 0.9,
									transition: {
										duration: 0.05,
									},
								}}>
								Deliver
							</motion.button>
						</motion.form>
					</motion.div>
				</motion.div>
			</motion.div>
		</>
	);
}

export default contact;
