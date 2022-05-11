import React from 'react';
import styles from './modal.module.css';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
function Modal({ title, image, url, git, techstack, info }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{
				opacity: 1,
				y: 0,
				transition: {
					duration: 1,
				},
			}}
			className={styles.modal__modal}>
			<div className={styles.modal__image}>
				<Image
					src={image}
					layout='fill'
					alt='descriptive project image'
				/>
			</div>
			<div className={styles.modal__info_container}>
				<div className={styles.modal__project_info}>
					<div className={styles.modal__title}>
						<h1>{title}</h1>
					</div>
					<div className={styles.modal__info_text}>{info}</div>
					<div className={styles.modal__techstack}>
						{techstack.map((tech, index) => {
							return (
								<motion.div
									key={index}
									whileHover={{
										scale: 1.1,
										color: 'var(--text-purple)',
									}}
									transition={{
										duration: 0.1,
									}}>
									{tech}
								</motion.div>
							);
						})}
					</div>
				</div>
				<div className={styles.modal__links}></div>
			</div>
		</motion.div>
	);
}

export default Modal;
