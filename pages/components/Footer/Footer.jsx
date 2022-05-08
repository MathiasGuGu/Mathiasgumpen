import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaSlack } from 'react-icons/fa';
import styles from './Footer.module.css';
function Footer() {
	return (
		<div className={styles.footer__main_container}>
			<div className={styles.footer__links_container}>
				<div className={styles.footer__links_email}></div>
				<div className={styles.footer__links_icons}>
					<Link href=''>
						<a>
							<FaGithub />
						</a>
					</Link>
					<Link href=''>
						<a>
							<FaLinkedin />
						</a>
					</Link>
					<Link href=''>
						<a>
							<FaSlack />
						</a>
					</Link>
				</div>
			</div>
			<div className={styles.footer__creation_container}>
				<p>Created with love by me❤️</p>
				<p>Mathias Gumpen Gundersen</p>
			</div>
			<div className={styles.footer__newsletter_container}>
				<form>
					<h4 className={styles.footer__newsletter_title}>
						Subscribe to the newsletter
					</h4>
					<p className={styles.footer__newsletter_p}>
						To get updated when i write a blog post.
					</p>
					<input
						className={styles.footer__newsletter_input}
						type='text'
						placeholder='John@gmail.com'
					/>
					<button className={styles.footer__newsletter_button}>
						Subscribe
					</button>
				</form>
			</div>
		</div>
	);
}

export default Footer;
