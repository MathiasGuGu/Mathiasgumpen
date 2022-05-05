import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Aboutme from './components/Aboutme/Aboutme';

import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<motion.div className={styles.index__main_container}>
				<motion.div
					initial={{
						opacity: 1,
						backgroundColor: '#452f67',
						zIndex: 200,
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
						zIndex: 100,
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
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: [0, 0, 0, 0, 0, 1] }}
					transition={{ duration: 1 }}>
					<Aboutme />
				</motion.div>
			</motion.div>
		</>
	);
}
