'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '../../_components/ThemeProvider';
import axios from 'axios';
import {
	Button,
	Image,
	Input,
	Radio,
	RadioGroup,
	Select,
	SelectItem,
	Calendar,
} from '@nextui-org/react';
import { day, month, year } from '../../_components/data';

export const AccountProfile = () => {
	const { userId } = useTheme();
	const [dataUser, setDataUser] = useState();
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	const [gender, setGender] = useState(); //male and female
	const [days, setDays] = useState([]);
	const [months, setMonths] = useState([]);
	const [years, setYears] = useState([]);
	const [selectedMonth, setSelectedMonth] = useState('');
	const [selectedYear, setSelectedYear] = useState('');
	useEffect(() => {
		if (userId) {
			axios
				.get(`http://localhost:5000/users/${userId}`)
				.then((res) => {
					setDataUser(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [userId]);
	useEffect(() => {
		if (selectedMonth !== '' && selectedYear !== '') {
			const daysInMonth = getDaysInMonth(parseInt(selectedMonth), parseInt(selectedYear));
			const filteredDays = days.filter((day) => parseInt(day.label) <= daysInMonth);
			setDays(filteredDays);
		}
	}, [selectedMonth, selectedYear]);
	// const [dataUser, setDataUser] = useState(null);
	const ItemInputProfile = ({ label, onChange, type, value }) => {
		return (
			<div className='flex items-center rounded-lg  py-4 shadow-sm'>
				<p className='w-1/3 text-base font-semibold text-gray-600'>{label}:</p>
				<Input
					type={type}
					variant='bordered'
					radius='sm'
					className='outline-none'
					onChange={onChange}
					value={value}
				/>
			</div>
		);
	};

	// =============================date =============================

	useEffect(() => {
		const day = [];
		for (let i = 1; i <= 31; i++) {
			day.push({ key: i.toString(), label: i.toString() });
		}
		setDays(day);
		const month = [];
		for (let i = 1; i <= 12; i++) {
			month.push({ key: `${i}th`, label: i.toString() });
		}
		setMonths(month);
		const year = [];
		const currentYear = new Date().getFullYear();
		for (let i = currentYear; i >= currentYear - 100; i--) {
			year.push({ key: i.toString(), label: i.toString() });
		}
		setYears(year);
	}, []);
	useEffect(() => {
		if (selectedMonth !== '' && selectedYear !== '') {
			const daysInMonth = getDaysInMonth(parseInt(selectedMonth), parseInt(selectedYear));
			const filteredDays = days.filter((day) => parseInt(day.label) <= daysInMonth);
			setDays(filteredDays);
		}
	}, [selectedMonth, selectedYear]);

	const getDaysInMonth = (month, year) => {
		return new Date(year, month, 0).getDate();
	};
	return (
		<div className=' mx-auto '>
			{userId ? (
				<>
					<h2 className=' text-3xl font-bold text-gray-800'>Hồ Sơ Tài Khoản</h2>
					<div className='  '>
						<div className='my-4'>
							<Image
								src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg'
								className='h-32 w-32'
							/>
						</div>
						{/* Các trường thông tin tài khoản */}

						<ItemInputProfile label='Họ' type='text' />
						<ItemInputProfile label='Tên' type='text' />
						<ItemInputProfile label='Email' type='email' />
						<ItemInputProfile label='Số điện thoại' type='text' />

						<div className='flex items-center rounded-lg py-4 shadow-sm'>
							<p className='w-1/4 text-base font-semibold text-gray-600'>Giới tính:</p>
							<RadioGroup className='' orientation='horizontal' size='sm'>
								<Radio value='male' className=' text-lg'>
									Nam
								</Radio>
								<Radio value='female' className='ml-10 text-lg'>
									Nữ
								</Radio>
							</RadioGroup>
						</div>
						{/* <div className='flex items-center rounded-lg  py-4 shadow-sm'>
							<p className='w-1/3 text-base font-semibold text-gray-600'>Giới tính:</p>
							<Input type='text' variant='bordered' radius='sm' />
						</div> */}
						<div className='flex items-center rounded-lg py-4 shadow-sm'>
							<p className='w-full text-base font-semibold text-gray-600'>Ngày sinh:</p>
							{/* <Spacer x={1} /> */}
							<Select label='Ngày' className='mr-2'>
								{days.map((day) => (
									<SelectItem key={day.key}>{day.label}</SelectItem>
								))}
							</Select>
							<Select
								label='Tháng'
								className='mr-2'
								onChange={(e) => setSelectedMonth(e.target.value)}
							>
								{months.map((month) => (
									<SelectItem key={month.key}>{month.label}</SelectItem>
								))}
							</Select>
							<Select label='Năm' onChange={(e) => setSelectedYear(e.target.value)}>
								{years.map((year) => (
									<SelectItem key={year.key}>{year.label}</SelectItem>
								))}
							</Select>
							{/* <Calendar aria-label='Date (Show Month and Year Picker)' showMonthAndYearPickers /> */}
						</div>
					</div>
					<div className='my-5 flex items-center justify-center '>
						<Button color='primary' className='px-10'>
							Lưu thay đổi
						</Button>
					</div>
				</>
			) : (
				<div className='text-center'>
					<p className='mb-4 text-base text-gray-600'>
						Vui lòng đăng nhập để hiện thông tin chi tiết
					</p>
					<Button color='primary'>Đăng nhập</Button>
				</div>
			)}
		</div>
	);
};
