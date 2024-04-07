import { motion } from 'framer-motion';

function AnimationComponents({ children, className }) {
	const variants = {
		hidden: { opacity: 0, y: -5 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.div
			className={` ${className}`}
			variants={variants}
			initial='hidden'
			whileHover='visible'
			transition={{ duration: 0.5 }}
		>
			{children}
		</motion.div>
	);
}
export default AnimationComponents;
