import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Construction from '../404/Constructing/Construction';
import Modal from '../modal/Modal';
import Backdrop from '../backdrop/backdrop';
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
			techstack: [<FaReact />, <FaHtml5 />, <FaCss3 />, <SiPrisma />],
			info: 'The homepage and business site for Laasmannen, A locksmith company. Built with NextJs with Sanity and prisma for the backend. Website is being developed further.',
			id: 'laasmannen',
		},
	];
	return (
		<>
			<div
				className={
					modalOpen
						? styles.portfolio__main_container + ' ' + styles.open
						: styles.portfolio__main_container
				}
				ref={portfolioRef}>
				{/* <Construction /> */}
				{modalOpen && (
					<Backdrop onClick={modalOpen ? closeModal : openModal}>
						<Modal
							title={currentModalInfo.title}
							image={currentModalInfo.image}
							url={currentModalInfo.url}
							git={currentModalInfo.git}
							techstack={currentModalInfo.techstack}
							info={currentModalInfo.info}
						/>
					</Backdrop>
				)}
				<div>
					<h1
						style={{
							color: 'var(--text-purple)',
							fontWeight: '300',
						}}>
						My projects
					</h1>
				</div>
				<div className={styles.portfolio__card_container} ref={ref}>
					{cards.map((card, index) => {
						return (
							<motion.div
								key={index}
								className={styles.card}
								initial={{ opacity: 0, x: -100 }}
								animate={
									inView
										? {
												opacity: 1,
												x: 0,
												transition: {
													duration: 0.5,
													delay: index * 0.3,
												},
										  }
										: { x: -500, opacity: 0 }
								}>
								<div className={styles.portfolio__card_image}>
									<Image
										src={card.image}
										layout='fill'
										alt='Descriptive project image'
									/>
								</div>
								<div className={styles.portfolio__card_text}>
									<h2 style={{ fontWeight: '400' }}>
										{card.title && card.title}
									</h2>
									<div
										className={
											styles.portfolio__card_links
										}>
										<motion.a
											whileHover={{ scale: 1.1 }}
											target='_blank'
											href={card.git}
											rel='noopener noreferrer'>
											<FaGithub />
										</motion.a>
										<motion.a
											whileHover={{ scale: 1.1 }}
											target='_blank'
											href={card.url}
											rel='noopener noreferrer'>
											<FaGlobe />
										</motion.a>
									</div>
									<motion.div
										whileHover={{
											scale: 1.05,
											cursor: 'pointer',
										}}
										className={styles.project_info_btn}
										onClick={() => {
											openModal();
											setCurrentModalInfo({
												title: card.title,
												image: card.image,
												url: card.url,
												git: card.git,
												techstack: card.techstack,
												info: card.info,
											});
										}}>
										More info
									</motion.div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Portfolio;
