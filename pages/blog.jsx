import React from 'react';
import Construction from './components/404/Constructing/Construction';
import { motion } from 'framer-motion';
import styles from '../styles/Blog.module.css';

function blog() {
	return (
		<>
			<motion.div
				initial={{
					opacity: 1,
					backgroundColor: '#452f67',
					zIndex: 400,
					y: '100vh',
					height: '100px',
					width: '100vw',
					position: 'absolute',
				}}
				animate={{
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
					y: '-100vh',
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
					y: '100vh',
					zIndex: 300,
					height: '200px',
					width: '100vw',
					position: 'absolute',
				}}
				animate={{
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
					y: '-110vh',
					position: 'absolute',
				}}
				exit={{ opacity: 0 }}
				transition={{
					duration: 1.7,
				}}></motion.div>
			<div className={styles.blog__main_container}>
				<Construction />
			</div>
		</>
	);
}

export default blog;
