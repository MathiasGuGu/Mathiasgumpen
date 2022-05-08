import React, { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import Mathiasgumpen from '../Fontui/Mathiasgumpen/Mathiasgumpen';
import { useRouter } from 'next/router';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { FadeInDown } from '../../../variants';

import styles from './Navbar.module.css';

function Navbar({ portfolioRef, aboutRef, contactRef }) {
	const [active, setActive] = useState('index');
	const router = useRouter();

	useEffect(() => {
		if (router.asPath === '/blog') {
			setActive('blog');
		}
	}, []);

	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToIndex = () => {
		console.log('Index');
		aboutRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollToPortfolio = () => {
		console.log('Portfolio');
		portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	const scrollToContact = () => {
		console.log('Contact');
		contactRef.current.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<motion.div
			className={
				scrollPosition > 2745
					? styles.navbar__main_container_top
					: styles.navbar__main_container
			}
			variants={FadeInDown}
			initial='initial'
			animate='animate'>
			<div className={styles.navbar__logo_container}>
				<Mathiasgumpen />
			</div>
			<ul className={styles.navbar__main_ul}>
				<li className={styles.navbar__main_li}>
					{router.asPath !== '/' ? (
						<Link href='/'>
							<a
								className={styles.navbar__main_a}
								onClick={() => {
									setActive('index');
								}}>
								{active == 'index' ? (
									<motion.div className={styles.active}>
										About
									</motion.div>
								) : (
									'About'
								)}
							</a>
						</Link>
					) : (
						<a
							className={styles.navbar__main_a}
							onClick={() => {
								scrollToIndex();
								setActive('index');
							}}>
							{active == 'index' ? (
								<motion.div className={styles.active}>
									About
								</motion.div>
							) : (
								'About'
							)}
						</a>
					)}
				</li>
				<li className={styles.navbar__main_li}>
					<a
						className={styles.navbar__main_a}
						onClick={() => {
							setActive('portfolio');
							scrollToPortfolio();
						}}>
						{active == 'portfolio' ? (
							<motion.div className={styles.active}>
								Portfolio
							</motion.div>
						) : (
							'Portfolio'
						)}
					</a>
				</li>
				<li className={styles.navbar__main_li}>
					<a
						className={styles.navbar__main_a}
						onClick={() => {
							setActive('contact');
							scrollToContact();
						}}>
						{active === 'contact' ? (
							<motion.div className={styles.active}>
								Contact
							</motion.div>
						) : (
							'Contact'
						)}
					</a>
				</li>

				<li className={styles.navbar__main_li}>
					<Link href='/blog'>
						<a
							className={styles.navbar__main_a}
							onClick={() => {
								setActive('blog');
							}}>
							{active == 'blog' ? (
								<motion.div
									layoutId='underline'
									className={styles.active}>
									Blog
								</motion.div>
							) : (
								'Blog'
							)}
						</a>
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
