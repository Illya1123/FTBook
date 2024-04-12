import Image from 'next/image';
import { UserButton, useUser } from '@clerk/nextjs';
import HomePage from './(routes)/Home/page';

export default function Home() {
	return (
		<div>
			<title>FT BOOK</title>
			<HomePage />
		</div>
	);
}
