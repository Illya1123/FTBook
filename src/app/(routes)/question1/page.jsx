'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { Image, Radio, RadioGroup, Button } from '@nextui-org/react';

export default function Question1() {
	const { handleSubmit, setValue } = useForm();
	const router = useRouter();
	const [selectedValue, setSelectedValue] = useState('');

	useEffect(() => {
		const savedData = JSON.parse(localStorage.getItem('surveyData')) || {};
		if (savedData.question1) {
			setSelectedValue(savedData.question1);
			setValue('question1', savedData.question1); // Synchronize with react-hook-form
		}
	}, [setValue]);

	const onChange = (event) => {
		setSelectedValue(event.target.value);
	};

	const onSubmit = () => {
		const prevData = JSON.parse(localStorage.getItem('surveyData')) || {};
		const newData = { ...prevData, question1: selectedValue };
		localStorage.setItem('surveyData', JSON.stringify(newData));
		router.push('/question2');
	};

	const goBack = () => {
		router.back();
	};

	return (
		<div className='bg-white'>
			<div className='fixed left-0 right-0 top-0 py-5 text-center text-4xl shadow-md'>
				<h1 className='text-blue'>
					FT <span className=' text-orange'>BOOK</span>
				</h1>
			</div>
			<div className='mx-auto max-w-[1200px] pt-20'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='my-5 flex items-center justify-between '></div>
					<div className='my-10 flex items-center justify-between'>
						<div>
							<RadioGroup
								label='Độ tuổi của bạn:'
								color='primary'
								className='m text-2xl text-black'
								value={selectedValue}
								onChange={onChange}
							>
								<Radio value='66198bd0c9f3ef21a7378d91' className='py-4'>
									Dưới 14 tuổi
								</Radio>
								<Radio value='66198bd0c9f3ef21a7378d92' className='py-4'>
									Dưới 16 tuổi
								</Radio>
								<Radio value='66198bd0c9f3ef21a7378d93' className='py-4'>
									Dưới 18 tuổi
								</Radio>
								<Radio value='66198bd0c9f3ef21a7378d94' className='py-4'>
									Trên 18 tuổi
								</Radio>
							</RadioGroup>
						</div>

						<div className='flex w-[80%] items-center justify-center'>
							<Image
								height={200}
								width={300}
								src='https://static.vecteezy.com/system/resources/previews/002/405/482/non_2x/cartoon-characters-in-different-ages-vector.jpg'
								alt='age'
							/>
						</div>
					</div>
					<div className='my-5'>
						<Button type='submit' color='primary' className='px-8'>
							Tiếp theo
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
