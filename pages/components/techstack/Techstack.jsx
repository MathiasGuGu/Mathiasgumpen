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
	SiPrisma,
} from 'react-icons/si';
import styles from './Techstack.module.css';
function Techstack() {
	const stack = [
		<SiJavascript></SiJavascript>,
		<SiTypescript></SiTypescript>,
		<SiGoland></SiGoland>,
		<FaPython></FaPython>,
		<FaCss3></FaCss3>,
		<FaHtml5></FaHtml5>,
		<FaReact></FaReact>,
		<SiPrisma />,
		<SiVuedotjs></SiVuedotjs>,
		<FaNodeJs></FaNodeJs>,
		<FaGit></FaGit>,
		<FaGithub></FaGithub>,
	];

	return (
		<div className={styles.Techstack__main_container}>
			<div className={styles.Techstack__tech_container}>
				{stack.map((tech) => {
					return (
						<motion.div
							className={styles.tech}
							whileHover={{
								scale: 1.2,
								cursor: 'pointer',
								color: 'black',
							}}>
							{tech}
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}

export default Techstack;
