import React from 'react';
import { motion } from 'framer-motion';
import Construction from '../404/Constructing/Construction';
import styles from './Portfolio.module.css';
function portfolio({ portfolioRef }) {
	return (
		<>
			<div
				className={styles.portfolio__main_container}
				ref={portfolioRef}>
				<Construction />
			</div>
		</>
	);
}

export default portfolio;
