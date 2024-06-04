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
import { set } from 'mongoose';

export const AccountProfile = () => {
	const { userId } = useTheme();
	const [dataUser, setDataUser] = useState();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [gender, setGender] = useState(); //male and female
	const [days, setDays] = useState([]);
	const [months, setMonths] = useState([]);
	const [years, setYears] = useState([]);
	const [selectedMonth, setSelectedMonth] = useState('');
	const [selectedYear, setSelectedYear] = useState('');
	const [avatar, setAvatar] = useState('');
	useEffect(() => {
		if (userId) {
			axios
				.get(`http://localhost:5000/user/${userId}`)
				.then((res) => {
					setDataUser(res.data);
					setAvatar(res.data.img);
					setFirstName(res.data.firstName);
					setLastName(res.data.lastName);
					setEmail(res.data.email);
					setPhone(res.data?.phone);
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
					readOnly
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
								src={avatar}
								className='h-32 w-32'
							/>
						</div>
						{/* Các trường thông tin tài khoản */}

						<ItemInputProfile label='Họ' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
						<ItemInputProfile label='Tên' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
						<ItemInputProfile label='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
						<ItemInputProfile label='Số điện thoại' type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
						
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
