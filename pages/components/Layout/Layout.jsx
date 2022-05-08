import React from 'react';
import Navbar from '../Navbar/Navbar';
import Head from 'next/head';
import { animate, motion } from 'framer-motion';
import styles from './Layout.module.css';
import { AnimatePresence } from 'framer-motion';
import Footer from '../Footer/Footer';
function Layout(props) {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
				/>
				<title>Mathias Gumpen</title>
				<meta name='title' content='Mathias Gumpen' />
			</Head>
			<div className={styles.layout__background}>
				<nav></nav>

				<main>
					<AnimatePresence exitBeforeEnter initial={true}>
						{props.children}
					</AnimatePresence>
				</main>
			</div>
		</>
	);
}

export default Layout;
