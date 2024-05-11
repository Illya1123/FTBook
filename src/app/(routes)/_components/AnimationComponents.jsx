'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimationComponents = ({ children, className, bgPageInfor }) => {
	const [isVisible, setIsVisible] = useState(false);
	const { ref, inView } = useInView();

	useEffect(() => {
		setIsVisible(inView);
	}, [inView]);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.75 }}
			className={bgPageInfor ? `mb-10 rounded-md bg-white p-4 ${className}` : `${className}`}
		>
			{children}
		</motion.div>
	);
};

export default AnimationComponents;
