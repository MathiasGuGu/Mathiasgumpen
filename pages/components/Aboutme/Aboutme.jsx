import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import image from '../../../public/18824957-removebg.png';
import Contact from '../UI/Buttons/Contact';
import { motion } from 'framer-motion';
import styles from './Aboutme.module.css';
import { FadeInUp, staggerContainer } from '../../../variants';
import { useInView } from 'react-intersection-observer';

function Aboutme({ contactRef }) {
	const states = ['Software', 'WebDev', 'Engineer'];
	const [introList, setIntroList] = useState([]);
	const [aboutList, setAboutList] = useState([]);

	const [ref, inView] = useInView({
		threshold: 0.2,
	});

	const introSentence =
		'Computer Science and Web-Design Bsc. student. Working part-time, studying full-time.';

	const createWordList = (sentence) => {
		const wordlist = sentence.split(' ');
		return wordlist;
	};

	const scrollToContact = () => {
		contactRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		setIntroList(createWordList(introSentence));
	}, []);

	const [introState, setIntroState] = useState(0);

	return (
		<div className={styles.aboutme__main_container} ref={ref}>
			<motion.div
				className={styles.aboutme__text_container}
				variants={staggerContainer}
				initial='initial'
				animate='animate'
				ref={ref}>
				<motion.h1
					className={styles.h1}
					variants={staggerContainer}
					initial='initial'
					animate='animate'>
					<motion.div className={styles.bold} variants={FadeInUp}>
						{states[introState] === 'Software'
							? 'Software developer'
							: states[introState] === 'WebDev'
							? ' Web developer'
							: states[introState] === 'Engineer'
							? 'Computer engineer'
							: 'Software developer'}
					</motion.div>
					&
					<motion.div className={styles.bold} variants={FadeInUp}>
						web-designer
					</motion.div>
				</motion.h1>
				<p
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						maxWidth: '800px',
						flexWrap: 'wrap',
						textAlign: 'center',
					}}>
					{introList.map((word, index) => {
						return (
							<motion.div
								style={{ margin: '3px' }}
								key={word}
								initial={{ opacity: 0, y: 10 }}
								animate={
									inView
										? {
												opacity: 1,
												y: 0,
												transition: {
													delay: index * 0.08,
												},
										  }
										: {
												opacity: 0,
												y: 10,
												transition: {
													delay: 0,
													duration: 0.5,
												},
										  }
								}>
								{word}
							</motion.div>
						);
					})}
				</p>

				<Contact text={'Send me a message'} onClick={scrollToContact} />
			</motion.div>
		</div>
	);
}

export default Aboutme;
