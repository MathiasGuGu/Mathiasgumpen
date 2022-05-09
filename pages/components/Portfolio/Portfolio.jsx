import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Construction from '../404/Constructing/Construction';
import lasmannenImg from '../../../public/projects/Skjermbilde 2022-05-07 kl. 16.31.39.png';
import styles from './Portfolio.module.css';
function portfolio({ portfolioRef }) {
	const cards = [
		{
			title: 'Låsmannen.com',
			git: 'abc',
			url: 'def',
			image: lasmannenImg,
		},
		{
			title: 'Låsmannen.com',
			git: 'abc',
			url: 'def',
			image: '/mathiasgumpen/public/18824957-removebg.png',
		},
	];
	return (
		<>
			<div
				className={styles.portfolio__main_container}
				ref={portfolioRef}>
				{/* <Construction /> */}
				<div className={styles.portfolio__card_container}>
					{cards.map((card, index) => {
						return (
							<motion.div
								className={styles.card}
								initial={{ opacity: 0, y: -20 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.5,
										delay: index * 0.3,
									},
								}}
								whileHover={{
									scale: 1.05,
									cursor: 'pointer',
								}}>
								<div className={styles.portfolio__card_image}>
									<Image src={card.image} layout='fill' />
								</div>
								<div className={styles.portfolio__card_text}>
									<p>{card.title && card.title}</p>
									<div
										className={
											styles.portfolio__card_links
										}>
										<Link href=''>
											<a></a>
										</Link>
										<Link href=''>
											<a></a>
										</Link>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default portfolio;
