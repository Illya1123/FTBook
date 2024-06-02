'use client';
import OnboardingPage from './onboarding/page';
import FacebookMsg from './_components/FacebookMsg';
import Footer from './_components/Footer';
import Header from './_components/Header';
import { useTheme } from './_components/ThemeProvider';
import Favorite from './_components/Favorite';

function App({ children }) {
	const { isOnBoarding } = useTheme();
	return (
		<>
			{isOnBoarding ? (
				<div className='bg-white'>
					<div className='   '>{children}</div>
				</div>
			) : (
				<>
					<Header />
					<Favorite />
					<div className='mx-auto max-w-[1200px]  pt-[74px]'>{children}</div>
					<Footer />
				</>
			)}
		</>
	);
}

export default App;
