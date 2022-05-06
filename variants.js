import { Variants } from 'framer-motion';

export const buttonFill = {
	initial: {
		opacity: 0,
		y: -50,
	},
	hover: {
		backgroundColor: '#f6b463',
		scale: 1.1,
		cursor: 'pointer',
		transition: {
			duration: 0.05,
			ease: 'easeInOut',
		},
	},
	tap: {
		scale: 0.95,
		backgroundColor: '#f6b463',
		transition: {
			duration: 0.01,
			ease: 'easeInOut',
		},
	},
};

export const FadeInUp = {
	initial: {
		y: 40,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,

		transition: {
			duration: 1,
			ease: 'easeInOut',
		},
	},
};
export const FadeInDown = {
	initial: {
		y: -60,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,

		transition: {
			duration: 1,
			ease: 'easeInOut',
		},
	},
};

export const staggerContainer = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.7,
		},
	},
};
