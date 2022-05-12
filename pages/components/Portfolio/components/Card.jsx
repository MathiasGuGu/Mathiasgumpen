import React from 'react';
import Image from 'next/image';
import logo from '../../../../public/projects/Skjermbilde 2022-05-07 kl. 16.31.39.png';

import styles from '../Portfolio.module.css';
function Card({ title, body, button, left }) {
	return (
		<div className={styles.portfolio__projects_card}>
			{!left ? (
				<>
					<div className={styles.card__text_container}>
						<div className={styles.card__title}>{title}</div>
						<div className={styles.card__body}>{body}</div>
						<div className={styles.card__button}>{button}</div>
					</div>
					<div className={styles.card__image_container}>
						<Image
							src={logo}
							layout='fill'
							className={styles.card__image}
							alt='project image'
						/>
					</div>
				</>
			) : (
				<>
					<div className={styles.card__image_left_container}>
						<Image
							src={logo}
							layout='fill'
							className={styles.card__image_left}
							alt='project image'
						/>
					</div>
					<div className={styles.card__text_left_container}>
						<div className={styles.card__title}>{title}</div>
						<div className={styles.card__body}>{body}</div>
						<div className={styles.card__button}>{button}</div>
					</div>
				</>
			)}
		</div>
	);
}

export default Card;
