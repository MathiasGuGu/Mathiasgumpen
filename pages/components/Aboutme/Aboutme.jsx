import React from 'react';
import Image from 'next/image';
import image from '../../../public/18824957-removebg.png';
import Contact from '../UI/Buttons/Contact';
import { motion } from 'framer-motion';
import styles from './Aboutme.module.css';
import { FadeInUp, staggerContainer } from '../../../variants';
function Aboutme() {
	return (
		<div className={styles.aboutme__main_container}>
			<motion.div
				className={styles.aboutme__text_container}
				variants={staggerContainer}
				initial='initial'
				animate='animate'>
				<h1 className={styles.h1}>
					<motion.div className={styles.bold} variants={FadeInUp}>
						Software developer
					</motion.div>
					&
					<motion.div className={styles.bold} variants={FadeInUp}>
						web-designer
					</motion.div>
				</h1>
				<motion.p variants={FadeInUp}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptate tenetur nemo pariatur ut, aut nesciunt,
					consectetur nostrum veniam similique porro debitis minima.
				</motion.p>

				<Contact text={'Send me a message'} />
			</motion.div>
			<div className={styles.aboutme__image_container}>
				<Image src={image} width={1100} height={650} />
			</div>
		</div>
	);
}

export default Aboutme;
