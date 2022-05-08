import React from 'react';
import { motion } from 'framer-motion';
import styles from './construction.module.css';
function Construction() {
	const sentence = [
		'T',
		'h',
		'i',
		's',
		' ',
		'p',
		'a',
		'g',
		'e',
		' ',
		'i',
		's',
		' ',
		'b',
		'e',
		'i',
		'n',
		'g',
		' ',
		'd',
		'e',
		'v',
		'e',
		'l',
		'o',
		'p',
		'e',
		'd',
		'.',
	];

	return (
		<motion.div className={styles.Construction}>
			<motion.div
				className={styles.text}
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: {
						duration: 1,
						delay: 1,
					},
				}}>
				{sentence.map((word, index) => {
					return (
						<motion.h1
							animate={{
								y: [0, -20, 0],
								transition: {
									duration: 0.7,
									delay: index * 0.1,
									repeat: Infinity,
									repeatDelay: 5,
								},
							}}
							key={word}>
							{word}
						</motion.h1>
					);
				})}
				{/* <motion.h1 animate={{}}>This</motion.h1> <motion.h1>page</motion.h1>
				<motion.h1>is</motion.h1> <motion.h1>being</motion.h1>
				<motion.h1>developed</motion.h1> */}
			</motion.div>
		</motion.div>
	);
}

export default Construction;
