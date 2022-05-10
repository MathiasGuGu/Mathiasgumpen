import React from 'react';

import styles from './backdrop.module.css';
function Backdrop(props) {
	return (
		<div className={styles.backdrop} onClick={props.onClick}>
			{props.children}
		</div>
	);
}

export default Backdrop;
