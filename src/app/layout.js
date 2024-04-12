'use client';
import { Inter } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';
import Header from './(routes)/_components/Header';
import Footer from './(routes)/_components/Footer';
import HomePage from './(routes)/Home/page';
import { ClerkProvider } from '@clerk/nextjs';
import { NextUIProvider } from '@nextui-org/react';
const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
// 	title: 'FT BOOK',
// 	description: 'Generated by create next app',
// };

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={inter.className}>
					<NextUIProvider>
						<Header />
						<div className='mx-auto max-w-[1200px] pt-[74px]'>{children}</div>
            <Footer />
					</NextUIProvider>	
				</body>
			</html>
		</ClerkProvider>
	);
}
