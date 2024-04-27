'use client';
import Footer from './_components/Footer';
import Header from './_components/Header';

function App({ children }) {
	return (
		<>
			<Header />
			<div className='mx-auto max-w-[1200px] pt-[74px]'>{children}</div>
			<Footer />
		</>
	);
}

export default App;
