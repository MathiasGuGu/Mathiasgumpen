import React, { useState } from 'react';
import { FaReact, FaHtml5, FaCss3, FaGit } from 'react-icons/fa';
import {
	SiJavascript,
	SiTypescript,
	SiPrisma,
	SiGoland,
	SiNodedotjs,
	SiVuedotjs,
} from 'react-icons/si';
import styles from './Skills.module.css';
function Skills() {
	const mySkills = [
		{
			title: 'Back-end development',
			body: 'I do backend development with different technologies. Eg.',
			list: (
				<ul>
					<li>Go</li>
					<li>NodeJs</li>
					<li>MongoDb</li>
					<li>Sql</li>
				</ul>
			),
			image: [
				{ icon: <SiPrisma></SiPrisma> },
				{ icon: <SiGoland></SiGoland> },
				{ icon: <SiNodedotjs></SiNodedotjs> },
			],
		},
		{
			title: 'Front-end development',
			body: 'I do front-end development full-time. Mainly in React and NextJs',
			list: (
				<ul>
					<li>Javascript/Typescript</li>
					<li>Html</li>
					<li>Css</li>
				</ul>
			),
			image: [
				{ icon: <SiJavascript></SiJavascript> },
				{ icon: <FaHtml5></FaHtml5> },
				{ icon: <FaCss3></FaCss3> },
			],
		},
		{
			title: 'Tools and frameworks',
			body: 'I use a variety of different tools. Like:',
			list: (
				<ul>
					<li>Git</li>
					<li>ReactJs</li>
					<li>NextJs</li>
					<li>VueJs</li>
				</ul>
			),
			image: [
				{ icon: <FaReact></FaReact> },
				{ icon: <SiVuedotjs></SiVuedotjs> },
				{ icon: <FaGit></FaGit> },
			],
		},
	];

	return (
		<div className={styles.skills__main_container}>
			<div className={styles.skills__title}>
				<h1>My skills</h1>
			</div>
			<div className={styles.skills__skill_container}>
				{mySkills.map((skill) => {
					return (
						<div
							key={skill?.title}
							className={styles.skills__skill_card}>
							<div className={styles.skills__card_image}>
								{skill?.image.map((tech, index) => {
									return (
										<div
											key={index}
											className={
												styles.skills__card_tech
											}>
											{tech.icon}
										</div>
									);
								})}
							</div>
							<div className={styles.skills__card_title}>
								{skill?.title}
							</div>
							<div className={styles.skills__card_body}>
								<div>{skill?.body}</div>
								<div>{skill?.list}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Skills;
