import React from 'react';
import Link from 'next/link';
import { TiArrowBack } from 'react-icons/ti';
import styles from './BlogNav.module.css';
function BlogNav() {
	return (
		<div className={styles.main__container}>
			<div className={styles.back}>
				<Link href='/'>
					<a className={styles.back_icon}>
						<TiArrowBack />
					</a>
				</Link>
			</div>
			<div className={styles.nav_logo}>
				<h1>Gumpen.</h1>
			</div>
			<div className={styles.searchbar}>
				<input
					type='text'
					placeholder='Search...'
					className={styles.search}
				/>
			</div>
			<div className={styles.credentials}>
				<div>
					<Link href='/Blog/Posts/New/Post'>
						<a>New post</a>
					</Link>
				</div>
				<div>Login</div>
				<div>Register</div>
			</div>
		</div>
	);
}

export default BlogNav;
