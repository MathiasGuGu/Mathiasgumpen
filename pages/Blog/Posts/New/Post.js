import React from 'react';
import Link from 'next/link';
import { TiArrowBack } from 'react-icons/ti';
import styles from './New.module.css';
function Post() {
	return (
		<div className={styles.newPost__container}>
			<div className={styles.back}>
				<Link href='/blog'>
					<a className={styles.back_icon}>
						<TiArrowBack />
					</a>
				</Link>
			</div>
			<div className={styles.newPost__write_container}>
				Write a new blog post!
				<form className={styles.newPost__form}>
					<input type='file' name='image' placeholder='image...' />
					<input type='text' name='title' placeholder='Title...' />
					<textarea type='text' name='body' placeholder='Body...' />
				</form>
			</div>
		</div>
	);
}

export default Post;
