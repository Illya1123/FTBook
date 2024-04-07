import { UserButton } from '@clerk/nextjs';
import Header from '../_components/Header';
function HomePage() {
	return (
		<div>
			<Header activeHome />
			<p>Welcome to the home page.</p>
			<UserButton />
		</div>
	);
}

export default HomePage;
