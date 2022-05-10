import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Summary.module.css';
import Techstack from '../techstack/Techstack';
import { useInView } from 'react-intersection-observer';

function Summary({ aboutRef }) {
	const [aboutList, setAboutList] = useState([]);

	const [ref, inView] = useInView({
		threshold: 0.2,
	});

	const aboutSentence =
		'My name is Mathias. I am a Computer Science and Web-development Bsc. Student. I am currently studying full-time, and I am looking for som projects to do in my free-time. If you want to hire me send me a message.';

	const createWordList = (sentence) => {
		const wordlist = sentence.split(' ');
		return wordlist;
	};

	useEffect(() => {
		setAboutList(createWordList(aboutSentence));
	}, []);
	return (
		<div className={styles.summary__main_container} ref={aboutRef}>
			<div className={styles.summary__art_container}>
				<Techstack />
			</div>

			<div className={styles.summary__text_container} ref={ref}>
				<h1>
					Hi!
					<motion.div
						animate={{
							rotate: [
								'20deg',
								'0deg',
								'20deg',
								'0deg',
								'20deg',
								'0deg',
								'20deg',
							],
							transition: {
								duration: 0.5,
								repeat: Infinity,

								repeatDelay: 0.5,
							},
						}}>
						👋
					</motion.div>
				</h1>
				<p style={{ display: 'flex', flexWrap: 'wrap' }}>
					{aboutList.map((word, index) => {
						return (
							<motion.div
								key={index}
								style={{ margin: '3px' }}
								initial={{ opacity: 0, y: 20 }}
								animate={
									inView
										? {
												opacity: 1,
												y: 0,
												transition: {
													duration: 0.3,
													delay: index * 0.02,
												},
										  }
										: {
												opacity: 0,
												y: 20,
												transition: {
													duration: 0.1,
													delay: 0,
												},
										  }
								}>
								{word}
							</motion.div>
						);
					})}
				</p>
			</div>
		</div>
	);
}

export default Summary;
