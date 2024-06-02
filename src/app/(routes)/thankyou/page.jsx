'use client';
import { useRouter } from 'next/navigation';
import { Button, RadioGroup, Radio, Image } from '@nextui-org/react';
import { ChevronLeft } from 'lucide-react';
import { useTheme } from '../_components/ThemeProvider';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';
import axios from 'axios';
function OnboardingPage() {
	const { setIsOnBoarding, userId } = useTheme();
	const router = useRouter();
	const [dataUser, setDateUser] = useState([]);
	const [questions, setQuestions] = useState(null);
	useEffect(() => {
		axios
			.get(`http://localhost:5000/user/${userId}`)
			.then((response) => {
				setDateUser(response.data);
				// setIsLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
				// setIsLoading(false);
			});
	}, []);
	useEffect(() => {
		// Lấy dữ liệu từ localStorage
		const storedData = localStorage.getItem('surveyData');
		if (storedData) {
			const parsedData = JSON.parse(storedData);
			setQuestions(parsedData);
			console.log('Data retrieved from localStorage:', parsedData);
		} else {
			console.log('No data found in localStorage');
		}
	}, []);
	useEffect(() => {
		if (dataUser && dataUser.categoryDetail && Array.isArray(dataUser.categoryDetail)) {
			let filterData = dataUser.categoryDetail.some((detail) =>
				parsedData.includes(detail.categoryDetailId),
			);
			console.log(filterData);
		} else {
			console.error('One of the variables is undefined');
		}
	}, [dataUser]);

	const startSurvey = () => {
		console.log('categoryDetail: ', questions.question2);
		// setIsOnBoarding(false);
		// router.push('/');
	};
	return (
		<div className='bg-white'>
			{/* <Confetti width={window.innerWidth} height={window.innerHeight} /> */}
			<div className='fixed left-0 right-0 top-0 py-5 text-center text-4xl shadow-md'>
				<h1 className='text-blue'>
					FT <span className=' text-orange'>BOOK</span>
				</h1>
			</div>
			<div className=' mx-auto flex h-screen max-w-[1200px] items-center justify-center '>
				<div className='text-center'>
					<h1 className='text-3xl'>Cảm ơn bạn đã cho chúng tôi biết thông tin !</h1>
					<Button onClick={startSurvey} color='primary' className='my-5 text-xl'>
						Hãy bắt đầu mua sắm nhé!
					</Button>
				</div>
			</div>
		</div>
	);
}

export default OnboardingPage;
