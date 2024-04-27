'use client';
import React, { useState } from 'react';
const dataCaregoryDetauil = [
	{
		id: 1,
		name: 'Kinh tế',
	},
	{
		id: 2,
		name: 'Chính trị',
	},
	{
		id: 3,
		name: 'Văn hóa',
	},
	{
		id: 4,
		name: 'Thiếu nhi',
	},
	{
		id: 5,
		name: 'Ngoại ngữ',
	},
];
const dataPriceOption = [
	{
		id: 11,
		name: '0đ - 150.000đ',
	},
	{
		id: 12,
		name: '150.000đ - 300.000đ',
	},
	{
		id: 13,
		name: '300.000đ - 500.000đ',
	},
	{
		id: 14,
		name: '500.000đ - 1000.000đ',
	},
	{
		id: 15,
		name: '1000.000đ - 2000.000đ',
	},
];
const dataSupplier = [
	{
		id: 21,
		name: '<NAME21>',
	},
	{
		id: 22,
		name: '<NAME22>',
	},
	{
		id: 23,
		name: '<NAME23',
	},
	{
		id: 24,
		name: '<NAME24',
	},
	{
		id: 25,
		name: '<NAME25',
	},
	{
		id: 26,
		name: '<NAME26',
	},
];
const dataPublish = [
	{
		id: 31,
		name: '<NAME31>',
	},
	{
		id: 32,
		name: '<NAME32',
	},
	{
		id: 33,
		name: '<NAME33',
	},
	{
		id: 34,
		name: '<NAME34',
	},
	{
		id: 35,
		name: '<NAME35',
	},
	{
		id: 36,
		name: '<NAME36',
	},
	{
		id: 37,
		name: '<NAME37',
	},
	{
		id: 38,
		name: '<NAME38',
	},
];
const dataYear = [
	{
		id: 41,
		name: '6+',
	},
	{
		id: 42,
		name: '14+',
	},
	{
		id: 43,
		name: '16+',
	},
	{
		id: 44,
		name: '18+',
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
function SideBarComponent() {
	const [activeButton, setActiveButton] = useState(null);
	const [selectedOptionPrice, setSelectedOptionPrice] = useState([]);
	const [selectedOptionSupplier, setSelectedOptionSupplier] = useState([]);
	const [selectedOptionPublish, setSelectedOptionPublish] = useState([]);
	const [selectedOptionYear, setSelectedOptionYear] = useState([]);
	const buttonCategory = ({ id, name }) => (
		<div
			key={id}
			className={`cursor-pointer rounded-lg px-4 py-2 
					${activeButton === id ? 'bg-blue-500 text-orange' : ' hover:text-orange'}`}
			onClick={() => setActiveButton(id)}
		>
			{name}
		</div>
	);
	const handleSelectOption = (option) => {
		const isSelected = selectedOptionPrice.some(
			(selectedOption) => selectedOption.id === option.id,
		);
		if (isSelected) {
			setSelectedOptionPrice(
				selectedOptionPrice.filter((selectedOption) => selectedOption.id !== option.id),
			);
		} else {
			setSelectedOptionPrice([...selectedOptionPrice, option]);
		}
	};
	const handleSelectOptionSupplier = (option) => {
		const isSelected = selectedOptionSupplier.some(
			(selectedOption) => selectedOption.id === option.id,
		);
		if (isSelected) {
			setSelectedOptionSupplier(
				selectedOptionSupplier.filter((selectedOption) => selectedOption.id !== option.id),
			);
		} else {
			setSelectedOptionSupplier([...selectedOptionSupplier, option]);
		}
	};
	const handleSelectOptionPublish = (option) => {
		const isSelected = selectedOptionPublish.some(
			(selectedOption) => selectedOption.id === option.id,
		);
		if (isSelected) {
			setSelectedOptionPublish(
				selectedOptionPublish.filter((selectedOption) => selectedOption.id !== option.id),
			);
		} else {
			setSelectedOptionPublish([...selectedOptionPublish, option]);
		}
	};
	const handleSelectOptionYear = (option) => {
		const isSelected = selectedOptionYear.some((selectedOption) => selectedOption.id === option.id);
		if (isSelected) {
			setSelectedOptionYear(
				selectedOptionYear.filter((selectedOption) => selectedOption.id !== option.id),
			);
		} else {
			setSelectedOptionYear([...selectedOptionYear, option]);
		}
	};

	return (
		<div className='p-4'>
			<h3 className='font-bold'>Nhóm sản phẩm</h3>
			<div className='pl-6'>
				{dataCaregoryDetauil.map((category) =>
					buttonCategory({ id: category.id, name: category.name }),
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
						<ListCheckbox key={option.id} option={option} onSelect={handleSelectOptionSupplier} />
					))}
				</div>
			</div>
			<div className='my-4 border'></div>
			<div>
				<h3 className='font-bold'>Nhà cung cấp</h3>
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
