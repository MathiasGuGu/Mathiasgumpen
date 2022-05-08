import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { buttonFill } from '../../../../variants';
import styles from './Buttons.module.css';
function Contact({ text, onClick }) {
	return (
		<>
			<motion.div
				onClick={onClick}
				className={styles.contact}
				whileHover={{
					backgroundColor: '#f6b463',
					cursor: 'pointer',
					scale: 1.05,
				}}
				whileTap={{ scale: [0.1, 0.9] }}
				transition={{ duration: 0.01 }}>
				Send me a message
			</motion.div>
		</>
	);
}

export default Contact;
