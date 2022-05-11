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
		<SiJavascript />,
		<SiTypescript />,
		<SiGoland />,
		<FaPython />,
		<FaCss3 />,
		<FaHtml5 />,
		<FaReact />,
		<SiPrisma />,
		<SiVuedotjs />,
		<FaNodeJs />,
		<FaGit />,
		<FaGithub />,
	];

	return (
		<div className={styles.Techstack__main_container}>
			<div className={styles.Techstack__tech_container}>
				{stack.map((tech, index) => {
					return (
						<div key={index}>
							<div
								key={index}
								className={styles.tech}
								// whileHover={{
								// 	scale: 1.2,
								// 	cursor: 'pointer',
								// 	color: 'black',
								// }}>
							>
								{tech}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Techstack;
