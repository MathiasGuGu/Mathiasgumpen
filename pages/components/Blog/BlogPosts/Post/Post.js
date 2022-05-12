import React from 'react';
import Image from 'next/image';
import styles from './Post.module.css';
function Post({ title, image, summary, short }) {
	return (
		<div className={styles.post__container}>
			{!short && (
				<div className={styles.post__image_container}>
					{image && (
						<Image
							className={styles.img}
							src={image}
							layout='fill'
							alt='post image'
						/>
					)}
				</div>
			)}
			<div className={styles.post__title}>
				<h1>{title}</h1>
			</div>
			<div className={styles.post__summary}>
				<p>{summary}</p>
			</div>
		</div>
	);
}

export default Post;
