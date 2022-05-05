import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../styles/Contact.module.css';
import { FadeInUp, staggerContainer } from '../variants';

function contact() {
	return (
		<>
			<motion.div
				initial={{
					opacity: 1,
					backgroundColor: '#452f67',
					zIndex: 200,
					y: '-100vh',
					height: '100px',
					width: '100vw',
					position: 'absolute',
				}}
				animate={{
					opacity: 1,
					height: [
						'0vh',
						'10vh',
						'30vh',
						'60vh',
						'100vh',
						'100vh',
						'60vh',
						'30vh',
						'10vh',
						'0vh',
					],
					y: '100vh',
					position: 'absolute',
				}}
				exit={{
					opacity: 1,
					height: [
						'10vh',
						'30vh',
						'60vh',
						'100vh',
						'100vh',
						'60vh',
						'30vh',
						'10vh',
					],
					y: '100vh',
					position: 'absolute',
				}}
				transition={{
					duration: 1.3,
				}}></motion.div>
			<motion.div
				initial={{
					opacity: 1,
					backgroundColor: '#f6b463',
					y: '-100vh',
					zIndex: 100,
					height: '200px',
					width: '100vw',
					position: 'absolute',
				}}
				animate={{
					opacity: 1,
					height: [
						'0vh',
						'10vh',
						'30vh',
						'60vh',
						'100vh',
						'100vh',
						'60vh',
						'30vh',
						'10vh',
						'0vh',
					],
					y: '110vh',
					position: 'absolute',
				}}
				exit={{ opacity: 0 }}
				transition={{
					duration: 1.7,
				}}></motion.div>
			<motion.div className={styles.contact__main_container}>
				<motion.div className={styles.contact__form_container}>
					<motion.form
						className={styles.contact__form}
						initial={{ opacity: 0 }}
						animate={{ opacity: [0, 0, 0, 0, 1] }}
						transition={{
							duration: 1.4,
						}}>
						<motion.h1
							initial={{ opacity: 0, y: -10 }}
							animate={{
								opacity: [0, 0, 0, 0, 1],
								y: [-10, -10, -10, -10, 0],
							}}
							transition={{
								duration: 1.7,
							}}>
							Send me a message
						</motion.h1>
						<motion.input
							type='text'
							name='name'
							animate={{
								opacity: [0, 0, 0, 0, 1],
								x: [-10, -10, -10, -10, 0],
								transition: {
									duration: 1.7,
								},
							}}
							placeholder='Your name'
							whileFocus={{
								scale: 1.06,
								borderBottom: [
									'0px solid var(--main-orage)',
									'1px solid var(--main-orage)',
									'2px solid var(--main-orage)',
									'3px solid var(--main-orage)',
								],
							}}
							whileHover={{
								scale: 1.06,
							}}
							transition={{
								duration: 0.2,
							}}
						/>
						<motion.input
							type='text'
							name='email'
							placeholder='Your email'
							whileFocus={{
								scale: 1.06,
								borderBottom: [
									'0px solid var(--main-orage)',
									'1px solid var(--main-orage)',
									'2px solid var(--main-orage)',
									'3px solid var(--main-orage)',
								],
							}}
							whileHover={{
								scale: 1.06,
							}}
							transition={{
								duration: 0.2,
							}}
							animate={{
								opacity: [0, 0, 0, 0, 1],
								x: [-30, -30, -30, -30, 0],
								transition: {
									duration: 1.8,
								},
							}}
						/>
						<motion.textarea
							name='message'
							placeholder='Type your message'
							whileFocus={{
								scale: 1.06,
								borderBottom: [
									'0px solid var(--main-orage)',
									'2px solid var(--main-orage)',
									'4px solid var(--main-orage)',
									'5px solid var(--main-orage)',
								],
							}}
							whileHover={{
								scale: 1.06,
							}}
							transition={{
								duration: 0.2,
							}}
							animate={{
								opacity: [0, 0, 0, 0, 1],
								x: [-50, -50, -50, -50, 0],
								transition: {
									duration: 1.9,
								},
							}}></motion.textarea>
						<div className={styles.contact__form_button_container}>
							<motion.button
								onClick={(e) => e.preventDefault()}
								whileHover={{
									scale: 1.05,
									backgroundColor: 'var(--main-orage)',
									cursor: 'pointer',
								}}
								whileTap={{
									scale: 0.9,
									opacity: 0.8,
								}}
								transition={{
									duration: 0.3,
								}}
								animate={{
									opacity: [0, 0, 0, 0, 1],
									x: [-60, -60, -60, -60, 0],
									transition: {
										duration: 2,
									},
								}}>
								Send
							</motion.button>
						</div>
					</motion.form>
				</motion.div>
				<motion.div
					className={styles.contact__art_container}></motion.div>
			</motion.div>
		</>
	);
}

export default contact;
