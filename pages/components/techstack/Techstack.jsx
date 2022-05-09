import React from 'react';
import { motion } from 'framer-motion';
import {
	FaReact,
	FaNodeJs,
	FaPython,
	FaCss3,
	FaHtml5,
	FaGit,
	FaGithub,
} from 'react-icons/fa';
import {
	SiJavascript,
	SiTypescript,
	SiGoland,
	SiVuedotjs,
} from 'react-icons/si';
import styles from './Techstack.module.css';
function Techstack() {
	const stack = [
		<FaCss3></FaCss3>,
		<FaHtml5></FaHtml5>,
		<SiJavascript></SiJavascript>,
		<SiTypescript></SiTypescript>,
		<SiGoland></SiGoland>,
		<FaReact></FaReact>,
		<SiVuedotjs></SiVuedotjs>,
		<FaNodeJs></FaNodeJs>,
		<FaPython></FaPython>,
		<FaGit></FaGit>,
		<FaGithub></FaGithub>,
	];

	return (
		<div className={styles.Techstack__main_container}>
			<h1>Tech stack</h1>
			<div className={styles.Techstack__tech_container}>
				{stack.map((tech) => {
					return (
						<motion.div
							className={styles.tech}
							whileHover={{ scale: 1.2, cursor: 'pointer' }}>
							{tech}
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}

export default Techstack;
