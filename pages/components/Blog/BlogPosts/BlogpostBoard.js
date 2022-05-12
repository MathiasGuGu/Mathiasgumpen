import React from 'react';

import Link from 'next/link';
import Post from './Post/Post';
import testImage from '../../../../public/projects/Skjermbilde 2022-05-07 kl. 16.31.39.png';
import styles from './BlogpostBoard.module.css';
function BlogpostBoard() {
	const posts = [
		{
			title: 'Låsmannen.com',
			body: 'this is a body',
			summary:
				'A small business website created for a local business called Låsmannen. Developed with next.js and Go.',
			image: testImage,
			id: 'react-1',
		},
		{
			title: 'Learning Go for backend development',
			body: 'How do you create a backend with go. Find out with me as I create a blog.',
			summary:
				'How do you create a backend with go. Find out with me as I create a blog.',

			id: 'react-2',
		},
		{
			title: 'Freelancing as a software engineer',
			body: 'Freelancing as a software engineer done right.',
			summary: 'Freelancing as a software engineer done right.',

			id: 'react-3',
		},
		{
			title: 'Is this how you make a blog?',
			body: 'So, I have no idea how to make a Blog. Let´s do it!',
			summary: 'So, I have no idea how to make a Blog. Let´s do it!',
			id: 'react-4',
		},
	];

	return (
		<div className={styles.main__container}>
			{posts.map((post, index) => {
				return (
					<>
						{index == 0 && (
							<h1 className={styles.featured}>Featured</h1>
						)}
						{index == 1 && (
							<h1 className={styles.featured}>More posts</h1>
						)}
						<div key={index} className={styles.blogpost__outline}>
							<Link href={'/Blog/Posts/' + post?.title}>
								<a>
									{index < 1 ? (
										<>
											<Post
												title={post?.title}
												image={post.image && post.image}
												summary={post.summary}
												short={false}
											/>
										</>
									) : (
										<Post
											title={post.title}
											summary={
												post.summary && post.summary
											}
											image={post.image}
											short={true}
										/>
									)}
								</a>
							</Link>
						</div>
					</>
				);
			})}
		</div>
	);
}

export default BlogpostBoard;
