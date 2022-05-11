import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Aboutme from './components/Aboutme/Aboutme';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Whitespace from './components/UI/Whitespace/Whitespace';
import Summary from './components/Summary/Summary';
import Navbar from './components/Navbar/Navbar';
import Techstack from './components/techstack/Techstack';
import Skills from './components/skills/Skills';
import styles from '../styles/Home.module.css';
import { useInView } from 'react-intersection-observer';

import react, { useRef } from 'react';
import Hireme from './components/Hire/Hireme';

export default function Home() {
	const PortfolioRef = useRef();
	const ContactRef = useRef();
	const AboutRef = useRef();

	return (
		<>
			<motion.div className={styles.index__main_container}>
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
						transition: {
							duration: 1.5,
						},
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
						transition: {
							duration: 1.3,
						},
					}}
					exit={{ opacity: 0 }}></motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					<nav>
						<Navbar
							aboutRef={AboutRef}
							portfolioRef={PortfolioRef}
							contactRef={ContactRef}
						/>
					</nav>
					<main>
						<Aboutme contactRef={ContactRef} />
						<Summary aboutRef={AboutRef} />
						<Skills />
						<Whitespace />
						<Hireme contactRef={ContactRef} />
						<Portfolio portfolioRef={PortfolioRef} />
						<Whitespace />
						<Contact contactRef={ContactRef} />
					</main>
					<footer>
						<Footer />
					</footer>
				</motion.div>
			</motion.div>
		</>
	);
}
