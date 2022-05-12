import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { TiArrowBack } from 'react-icons/ti';
import Link from 'next/link';
import testImage from '../../../public/projects/Skjermbilde 2022-05-07 kl. 16.31.39.png';
import styles from './post.module.css';
function Post() {
	const router = useRouter();
	const title = router.query;
	return (
		<div className={styles.post__container}>
			<div className={styles.back}>
				<Link href='/blog'>
					<a className={styles.back_icon}>
						<TiArrowBack />
					</a>
				</Link>
			</div>
			<div className={styles.post__post_container}>
				<div className={styles.post__image_container}>
					<Image
						src={testImage}
						layout='fill'
						alt='blog post header image'
					/>
				</div>
				<h1>{title.post}</h1>
				<div className={styles.post__text_container}>
					En liten nettside laget for lokal bedrift. <br />
					<br /> Lorem ipsum dolor sit amet consectetur adipisicing
					elit. corporis. Ipsa repellendus, iure ex enim asperiores
					eum adipisci cupiditate, ut ipsam error deserunt nisi
					quaerat est iusto magnam doloremque deleniti!
				</div>
			</div>
		</div>
	);
}

export default Post;
