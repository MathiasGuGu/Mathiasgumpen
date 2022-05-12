import React from 'react';
import BlogFooter from '../BlogFooter/BlogFooter';
import BlogNav from '../BlogNav/BlogNav';

import styles from './Layout.module.css';
function Layout(props) {
	return (
		<nav className={styles.blog__container}>
			<nav>
				<BlogNav />
			</nav>
			<main>{props.children}</main>
		</nav>
	);
}

export default Layout;
