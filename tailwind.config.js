const { nextui } = require('@nextui-org/react');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				blue: '#009FE5',
				orange: '#F16754',
			},
			keyframes: {
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-100px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'fade-out-down': {
					from: {
						opacity: '1',
						transform: 'translateY(0px)',
					},
					to: {
						opacity: '0',
						transform: 'translateY(10px)',
					},
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'fade-out-up': {
					from: {
						opacity: '1',
						transform: 'translateY(0px)',
					},
					to: {
						opacity: '0',
						transform: 'translateY(10px)',
					},
				},
			},
			animation: {
				'fade-in-down': 'fade-in-down 3s ease-out',
				'fade-out-down': 'fade-out-down 0.5s ease-out',
				'fade-in-up': 'fade-in-up 0.5s ease-out',
				'fade-out-up': 'fade-out-up 0.5s ease-out',
			},
		},
	},

	darkMode: 'class',
	plugins: [nextui()],
};
