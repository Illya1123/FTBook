'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Checkbox, Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ChevronLeft } from 'lucide-react';

export default function Question2() {
	const { handleSubmit, setValue } = useForm();
	const router = useRouter();
	const [selectedValues, setSelectedValues] = useState([]);
	const [dataCategory, setDataCategory] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get('http://localhost:5000/categoryAll')
			.then((response) => {
				setDataCategory(response.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
				setIsLoading(false);
			});
	}, []);

	useEffect(() => {
		const savedData = JSON.parse(localStorage.getItem('surveyData')) || {};
		if (savedData.question2) {
			setSelectedValues(savedData.question2);
			setValue('question2', savedData.question2); // Synchronize with react-hook-form
		}
	}, [setValue]);

	const onChange = (value) => {
		setSelectedValues((prev) =>
			prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
		);
	};

	const onSubmit = () => {
		const prevData = JSON.parse(localStorage.getItem('surveyData')) || {};
		const newData = { ...prevData, question2: selectedValues };
		localStorage.setItem('surveyData', JSON.stringify(newData));
		router.push('/thankyou');
	};
	console.log(selectedValues);
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
					<div className='my-5 flex items-center justify-between'>
						<div>
							<Button
								type='button'
								onClick={goBack}
								className='flex items-center gap-2 bg-transparent px-0'
							>
								<ChevronLeft />
								<p className='text-base'>Quay lại</p>
							</Button>
						</div>
					</div>
					<div className='my-10 flex items-center justify-between'>
						<div>
							<div className='m text-2xl text-black'>
								<label className='mb-4 block'>Loại sách mà bạn yêu thích:</label>
								{!isLoading ? (
									dataCategory.map((data) => (
										<Checkbox
											key={data._id}
											value={data._id}
											className='block py-2'
											onChange={() => onChange(data._id)}
											checked={selectedValues.includes(data._id)}
										>
											{data.name}
										</Checkbox>
									))
								) : (
									<p>Loading...</p>
								)}
							</div>
						</div>
						<div className='flex w-[80%] items-center justify-center'>
							<img
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
