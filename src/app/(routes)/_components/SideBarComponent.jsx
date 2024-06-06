'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const dataPriceOption = [
	{
		id: 11,
		name: '0đ - 150.000đ',
		priceMin: 0,
		priceMax: 150000,
	},
	{
		id: 12,
		name: '150.000đ - 300.000đ',
		priceMin: 150000,
		priceMax: 300000,
	},
	{
		id: 13,
		name: '300.000đ - 500.000đ',
		priceMin: 300000,
		priceMax: 500000,
	},
	{
		id: 14,
		name: '500.000đ - 1000.000đ',
		priceMin: 500000,
		priceMax: 1000000,
	},
	{
		id: 15,
		name: '1000.000đ - 2000.000đ',
		priceMin: 1000000,
		priceMax: 2000000,
	},
];

function ListCheckbox({ option, onSelect }) {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
		onSelect(option);
	};

	return (
		<div className='my-2 pl-2'>
			<input
				type='checkbox'
				id={`option-${option.id}`}
				name={`option-${option.id}`}
				className='mr-3'
				checked={isChecked}
				onChange={handleCheckboxChange}
			/>
			<label htmlFor={`option-${option.id}`}>{option.name}</label>
		</div>
	);
}
function SideBarComponent({
	filterPrice,
	filterSupplier,
	filterPublish,
	filterYear,
	filterCategory,
}) {
	const [activeButton, setActiveButton] = useState(null);
	const [selectedOptionPrice, setSelectedOptionPrice] = useState([]);
	const [selectedOptionSupplier, setSelectedOptionSupplier] = useState([]);
	const [selectedOptionPublish, setSelectedOptionPublish] = useState([]);
	const [selectedOptionYear, setSelectedOptionYear] = useState([]);
	const [dataCaregoryDetail, setDataCategoryDetail] = useState([]);
	const [dataSupplier, setDataSupplier] = useState([]);
	const [dataPublish, setDataPublish] = useState([]);
	const [dataYear, setDataYear] = useState([]);
	useEffect(() => {
		axios
			.get('https://backend-book-store-two.vercel.app/categoryAll')
			.then((response) => {
				setDataCategoryDetail(response.data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
		axios
			.get('https://backend-book-store-two.vercel.app/categorySupplier')
			.then((response) => {
				setDataSupplier(response.data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
		axios
			.get('https://backend-book-store-two.vercel.app/categoryPublish')
			.then((response) => {
				setDataPublish(response.data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
		axios
			.get('https://backend-book-store-two.vercel.app/categoryYear')
			.then((response) => {
				setDataYear(response.data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);
	const buttonCategory = ({ _id, name }) => (
		<div
			// key={_id}
			className={`cursor-pointer rounded-lg px-4 py-2 
					${activeButton === _id ? 'bg-blue-500 text-orange' : ' hover:text-orange'}`}
			onClick={() => {
				setActiveButton(_id);
				filterCategory(_id);
			}}
		>
			{name}
		</div>
	);

	const handleSelectOption = (option) => {
		filterPrice(option);
		// const isSelected = selectedOptionPrice.some(
		// 	(selectedOption) => selectedOption._id === option._id,
		// );
		// if (isSelected) {
		// 	setSelectedOptionPrice(
		// 		selectedOptionPrice.filter((selectedOption) => selectedOption.id !== option.id),
		// 	);
		// } else {
		// 	setSelectedOptionPrice([...selectedOptionPrice, option]);
		// }
	};
	const handleSelectOptionSupplier = (option) => {
		filterSupplier(option);
		// const isSelected = selectedOptionSupplier.some(
		// 	(selectedOption) => selectedOption._id === option._id,
		// );
		// if (isSelected) {
		// 	setSelectedOptionSupplier(
		// 		selectedOptionSupplier.filter((selectedOption) => selectedOption._id !== option._id),
		// 	);
		// 	filterSupplier(
		// 		selectedOptionSupplier.filter((selectedOption) => selectedOption._id !== option._id),
		// 	);
		// } else {
		// 	setSelectedOptionSupplier([...selectedOptionSupplier, option]);
		// 	filterSupplier([...selectedOptionSupplier, option]);
		// }
	};
	const handleSelectOptionPublish = (option) => {
		filterPublish(option);
		// const isSelected = selectedOptionPublish.some(
		// 	(selectedOption) => selectedOption._id === option._id,
		// );
		// if (isSelected) {
		// 	setSelectedOptionPublish(
		// 		selectedOptionPublish.filter((selectedOption) => selectedOption._id !== option._id),
		// 	);
		// 	filterPublish(
		// 		selectedOptionPublish.filter((selectedOption) => selectedOption._id !== option._id),
		// 	);
		// } else {
		// 	setSelectedOptionPublish([...selectedOptionPublish, option]);
		// 	filterPublish([...selectedOptionPublish, option]);
		// }
	};
	// console.log(selectedOptionPublish);
	const handleSelectOptionYear = (option) => {
		filterYear(option);
		// const isSelected = selectedOptionYear.some(
		// 	(selectedOption) => selectedOption._id === option._id,
		// );
		// if (isSelected) {
		// 	setSelectedOptionYear(
		// 		selectedOptionYear.filter((selectedOption) => selectedOption._id !== option._id),
		// 	);
		// 	filterYear(selectedOptionYear.filter((selectedOption) => selectedOption._id !== option._id));
		// } else {
		// 	setSelectedOptionYear([...selectedOptionYear, option]);
		// 	filterYear([...selectedOptionYear, option]);
		// }
	};

	return (
		<div className='p-4'>
			<h3 className='font-bold'>Nhóm sản phẩm</h3>
			<div className='pl-6'>
				{dataCaregoryDetail.map((category) =>
					buttonCategory({ _id: category._id, name: category.name }),
				)}
			</div>
			<div className='my-4 border'></div>
			<div>
				<h3 className='font-bold'>Giá</h3>
				<div className='pl-2'>
					{dataPriceOption.map((option) => (
						<ListCheckbox key={option.id} option={option} onSelect={handleSelectOption} />
					))}
				</div>
			</div>
			<div className='my-4 border'></div>
			<div>
				<h3 className='font-bold'>Nhà cung cấp</h3>
				<div className='pl-2'>
					{dataSupplier.map((option) => (
						<ListCheckbox key={option._id} option={option} onSelect={handleSelectOptionSupplier} />
					))}
				</div>
			</div>
			<div className='my-4 border'></div>
			<div>
				<h3 className='font-bold'>Nhà xuất bản</h3>
				<div className='pl-2'>
					{dataPublish.map((option) => (
						<ListCheckbox key={option.id} option={option} onSelect={handleSelectOptionPublish} />
					))}
				</div>
			</div>
			<div className='my-4 border'></div>
			<div>
				<h3 className='font-bold'>Độ tuổi</h3>
				<div className='pl-2'>
					{dataYear.map((option) => (
						<ListCheckbox key={option.id} option={option} onSelect={handleSelectOptionYear} />
					))}
				</div>
			</div>
			<div className='my-4 border'></div>
		</div>
	);
}

export default SideBarComponent;
