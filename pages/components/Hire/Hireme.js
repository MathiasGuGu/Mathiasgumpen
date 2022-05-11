import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hireme.module.css';
function Hireme({ contactRef }) {
	const scrollToContact = () => {
		contactRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<div className={styles.hireme__main_container}>
			<div className={styles.hireme__text_container}>
				<h1>Want to hire me?</h1>
				<p>Send me a message, and I will get the work done.</p>
			</div>
			<div className={styles.hireme__button_container}>
				<motion.div
					className={styles.hireme__button}
					whileHover={{ scale: 1.05 }}
					onClick={scrollToContact}>
					Hire me!
				</motion.div>
			</div>
		</div>
	);
}

export default Hireme;
