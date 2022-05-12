import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Construction from '../404/Constructing/Construction';
import Modal from '../modal/Modal';
import Backdrop from '../backdrop/Backdrop';
import lasmannenImg from '../../../public/projects/Skjermbilde 2022-05-07 kl. 16.31.39.png';
import { useInView } from 'react-intersection-observer';

import {
	Fa500Px,
	FaCss3,
	FaGithub,
	FaHtml5,
	FaReact,
	FaGlobe,
} from 'react-icons/fa';
import { SiPrisma } from 'react-icons/si';
import styles from './Portfolio.module.css';
import Card from './components/Card';
function Portfolio({ portfolioRef }) {
	const [ref, inView] = useInView({
		threshold: 0.2,
	});

	const [modalOpen, setModalOpen] = useState(false);
	const [currentModalInfo, setCurrentModalInfo] = useState({});

	const openModal = () => {
		console.log('open');
		setModalOpen(true);
	};
	const closeModal = () => {
		console.log('close');
		setModalOpen(false);
	};

	const cards = [
		{
			title: 'Låsmannen.com',
			git: 'https://github.com/MathiasGuGu/Lasmannen.no',
			url: 'https://lasmannen-no.vercel.app/',
			image: lasmannenImg,
			techstack: [
				{ icon: <FaReact></FaReact> },
				{ icon: <FaHtml5 /> },
				{ icon: <FaCss3 /> },
				{ icon: <SiPrisma /> },
			],
			info: 'The homepage and business site for Laasmannen, A locksmith company. Built with NextJs with Sanity and prisma for the backend. Website is being developed further.',
			id: 'laasmannen',
		},
	];
	return (
		<>
			<div
				className={styles.portfolio__main_container}
				ref={portfolioRef}>
				<div className={styles.portfolio__title}>
					<h1>My projects</h1>
				</div>

				<div className={styles.portfolio__projects_container}>
					<Card
						left={false}
						title={'Låsmannen website and business portfolio'}
						body={'Web-design and development'}
						button={
							<motion.div
								className={styles.laas_button}
								whileHover={{ scale: 1.06, cursor: 'pointer' }}
								whileTap={{ scale: 0.9 }}>
								View more
							</motion.div>
						}></Card>
					<Card left={true}></Card>
				</div>
			</div>
		</>
	);
}

export default Portfolio;
