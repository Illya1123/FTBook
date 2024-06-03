// 'use client';
// import { useRouter } from 'next/navigation';
// import { Button } from '@nextui-org/react';
// import { useTheme } from '../_components/ThemeProvider';
// import Confetti from 'react-confetti';
// import { useEffect, useState, React } from 'react';
// import axios from 'axios';
// function OnboardingPage() {
// 	const { setIsOnBoarding, userId, setIsFirstLogin } = useTheme();
// 	const router = useRouter();
// 	const [dataUser, setDateUser] = useState([]);
// 	const [questions, setQuestions] = useState(null);

// 	useEffect(() => {
// 		axios
// 			.get(`http://localhost:5000/user/${userId}`)
// 			.then((response) => {
// 				setDateUser(response.data);
// 				// setIsLoading(false);
// 			})
// 			.catch((error) => {
// 				console.error('Error fetching data:', error);
// 				// setIsLoading(false);
// 			});
// 	}, []);
// 	useEffect(() => {
// 		// Lấy dữ liệu từ localStorage
// 		const storedData = localStorage.getItem('surveyData');
// 		if (storedData) {
// 			const parsedData = JSON.parse(storedData);
// 			setQuestions(parsedData);
// 			console.log('Data retrieved from localStorage:', parsedData);
// 		} else {
// 			console.log('No data found in localStorage');
// 		}
// 	}, []);
// 	useEffect(() => {
// 		if (dataUser && dataUser.categoryDetail && Array.isArray(dataUser.categoryDetail)) {
// 			let filterData = dataUser.categoryDetail.some((detail) =>
// 				parsedData.includes(detail.categoryDetailId),
// 			);
// 			console.log(filterData);
// 		} else {
// 			console.error('One of the variables is undefined');
// 		}
// 	}, [dataUser]);

// 	const startSurvey = () => {
// 		console.log('categoryDetail: ', questions.question2);
// 		const categoryDetail = questions.question2.map((id) => ({
// 			categoryDetailId: id,
// 			count: 1, // default count as per your schema, adjust if needed
// 		}));
// 		console.log(categoryDetail);
// 		axios
// 			.patch(`http://localhost:5000/user/${userId}`, {
// 				categoryDetail: categoryDetail,
// 				firstLogin: false,
// 			})
// 			.then((res) => {
// 				console.log(res.data);
// 				setIsOnBoarding(false);
// 				router.push('/');
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});

// 		// Uncomment this if needed elsewhere
// 		// setIsFirstLogin(false);
// 	};
// 	return (
// 		<div className='bg-white'>
// 			<Confetti />
// 			<div className='fixed left-0 right-0 top-0 py-5 text-center text-4xl shadow-md'>
// 				<h1 className='text-blue'>
// 					FT <span className=' text-orange'>BOOK</span>
// 				</h1>
// 			</div>
// 			<div className=' mx-auto flex h-screen max-w-[1200px] items-center justify-center '>
// 				<div className='text-center'>
// 					<h1 className='text-3xl'>Cảm ơn bạn đã cho chúng tôi biết thông tin !</h1>
// 					<Button onClick={startSurvey} color='primary' className='my-5 text-xl'>
// 						Hãy bắt đầu mua sắm nhé!
// 					</Button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default OnboardingPage;

'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';
import { useTheme } from '../_components/ThemeProvider';
import Confetti from 'react-confetti';
import { useEffect, useState, React } from 'react';
import axios from 'axios';

function OnboardingPage() {
	const { setIsOnBoarding, userId, setIsFirstLogin } = useTheme();
	const router = useRouter();
	const [dataUser, setDateUser] = useState([]);
	const [questions, setQuestions] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/user/${userId}`)
			.then((response) => {
				setDateUser(response.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching user data:', error);
				setIsLoading(false);
			});
	}, [userId]);

	useEffect(() => {
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
		if (
			dataUser &&
			questions &&
			dataUser.categoryDetail &&
			Array.isArray(dataUser.categoryDetail)
		) {
			const filterData = dataUser.categoryDetail.some((detail) =>
				questions.question2.includes(detail.categoryDetailId),
			);
			console.log(filterData);
		} else {
			console.error('Data not loaded properly or questions undefined');
		}
	}, [dataUser, questions]);

	const startSurvey = () => {
		if (!questions || !questions.question2) {
			console.error('Questions not loaded properly');
			return;
		}

		console.log('categoryDetail: ', questions.question2);
		const categoryDetail = questions.question2.map((id, index) => ({
			categoryDetailId: id,
			count: index === 0 ? 2 : 1,
		}));

		console.log(categoryDetail);
		axios
			.patch(`http://localhost:5000/user/${userId}`, {
				categoryDetail: categoryDetail,
				firstLogin: false,
			})
			.then((res) => {
				console.log(res.data);
				setIsOnBoarding(false);
				router.push('/');
			})
			.catch((err) => {
				console.error('Error updating user data:', err);
			});
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className='bg-white'>
			<Confetti />
			<div className='fixed left-0 right-0 top-0 py-5 text-center text-4xl shadow-md'>
				<h1 className='text-blue'>
					FT <span className=' text-orange'>BOOK</span>
				</h1>
			</div>
			<div className='mx-auto flex h-screen max-w-[1200px] items-center justify-center'>
				<div className='text-center'>
					<h1 className='text-3xl'>Cảm ơn bạn đã cho chúng tôi biết thông tin!</h1>
					<Button onClick={startSurvey} color='primary' className='my-5 text-xl'>
						Hãy bắt đầu mua sắm nhé!
					</Button>
				</div>
			</div>
		</div>
	);
}

export default OnboardingPage;
