'use client';
import { useRouter } from 'next/navigation';
import { Button, RadioGroup, Radio, Image } from '@nextui-org/react';
import { ChevronLeft } from 'lucide-react';

function OnboardingPage() {
	const router = useRouter();

	const startSurvey = () => {
		router.push('/question1');
	};
	return (
		<div className='bg-white'>
			<div className='fixed left-0 right-0 top-0 py-5 text-center text-4xl shadow-md'>
				<h1 className='text-blue'>
					FT <span className=' text-orange'>BOOK</span>
				</h1>
			</div>
			<div className=' mx-auto flex h-screen max-w-[1200px] items-center justify-center '>
				<div className='text-center'>
					<h1 className='text-3xl'>Chào mừng bạn đến với cửa hàng sách của chúng tôi!</h1>
					<Button onClick={startSurvey} color='primary' className='my-5 text-xl'>
						Bắt đầu nhé!
					</Button>
				</div>
			</div>
		</div>
	);
}

export default OnboardingPage;
