import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import Mathiasgumpen from '../Fontui/Mathiasgumpen/Mathiasgumpen';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FadeInDown } from '../../../variants';

import styles from './Navbar.module.css';

function Navbar() {
	const router = useRouter();

	return (
		<motion.div
			className={styles.navbar__main_container}
			variants={FadeInDown}
			initial='initial'
			animate='animate'>
			<div className={styles.navbar__logo_container}>
				<Mathiasgumpen />
			</div>
			<ul className={styles.navbar__main_ul}>
				<li
					className={
						router.asPath == '/'
							? styles.navbar__main_li
							: styles.navbar__main_li
					}>
					<Link href='/'>
						<a className={styles.navbar__main_a}>
							{router.asPath == '/' ? (
								<motion.div
									layoutId='underline'
									className={styles.active}>
									Home
								</motion.div>
							) : (
								'Home'
							)}
						</a>
					</Link>
				</li>
				<li
					className={
						router.asPath == '/contact'
							? styles.navbar__main_li
							: styles.navbar__main_li
					}>
					<Link href='/contact'>
						<a className={styles.navbar__main_a}>
							{router.asPath == '/contact' ? (
								<motion.div
									layoutId='underline'
									className={styles.active}>
									Contact
								</motion.div>
							) : (
								'Contact'
							)}
						</a>
					</Link>
				</li>
				<li
					className={
						router.asPath == '/portfolio'
							? styles.navbar__main_li
							: styles.navbar__main_li
					}>
					<Link href='/portfolio'>
						<a className={styles.navbar__main_a}>
							{router.asPath == '/portfolio' ? (
								<motion.div
									layoutId='underline'
									className={styles.active}>
									Portfolio
								</motion.div>
							) : (
								'Portfolio'
							)}
						</a>
					</Link>
				</li>
				<li
					className={
						router.asPath == '/blog'
							? styles.navbar__main_li
							: styles.navbar__main_li
					}>
					<Link href='/blog'>
						{router.asPath == '/blog' ? (
							<motion.div
								layoutId='underline'
								className={styles.active}>
								Blog
							</motion.div>
						) : (
							'Blog'
						)}
					</Link>
				</li>
			</ul>
			<ul className={styles.navbar__contact_ul}>
				<li className={styles.navbar__contact_li}>
					<Link href=''>
						<a>
							<SiFiverr />
						</a>
					</Link>
				</li>
				<li className={styles.navbar__contact_li}>
					<Link href=''>
						<a>
							<FaGithub />
						</a>
					</Link>
				</li>
				<li className={styles.navbar__contact_li}>
					<Link href=''>
						<a>
							<FaLinkedin />
						</a>
					</Link>
				</li>
			</ul>
		</motion.div>
	);
}

export default Navbar;
