'use client';
import Link from 'next/link';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
	Input,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from '../_components/ThemeProvider';
import { country } from '../_components/data';
import { Select, SelectItem } from '@nextui-org/react';
import { SelectorIcon } from '../_components/icon';
import './style.css';
import axios from 'axios';
const discountCodes = [
	{
		id: 1,
		code: 'DISCOUNT20',
		name: 'Giảm giá 20K',
		condition: 'Áp dụng cho đơn hàng từ 150K trở lên',
		startDate: '2024-05-15',
		endDate: '2024-05-30',
		applicableValue: 150000,
	},
	{
		id: 2,
		code: 'SAVE10',
		name: 'Giảm 10%',
		condition: 'Áp dụng cho tất cả đơn hàng',
		startDate: '2024-05-20',
		endDate: '2024-06-10',
		applicableValue: 0,
	},
	{
		id: 3,
		code: 'DISCOUNT50',
		name: 'Giảm giá 50K',
		condition: 'Áp dụng cho đơn hàng từ 200K trở lên',
		startDate: '2024-05-18',
		endDate: '2024-06-05',
		applicableValue: 200000,
	},
	{
		id: 4,
		code: 'SAVE15',
		name: 'Giảm 15%',
		condition: 'Áp dụng cho tất cả đơn hàng',
		startDate: '2024-05-25',
		endDate: '2024-06-15',
		applicableValue: 0,
	},
	{
		id: 5,
		code: 'DISCOUNT100',
		name: 'Giảm giá 100K',
		condition: 'Áp dụng cho đơn hàng từ 500K trở lên',
		startDate: '2024-05-22',
		endDate: '2024-06-20',
		applicableValue: 500000,
	},
	{
		id: 6,
		code: 'SAVE20',
		name: 'Giảm 20%',
		condition: 'Áp dụng cho tất cả đơn hàng',
		startDate: '2024-05-28',
		endDate: '2024-06-25',
		applicableValue: 0,
	},
	{
		id: 7,
		code: 'DISCOUNT30',
		name: 'Giảm giá 30K',
		condition: 'Áp dụng cho đơn hàng từ 250K trở lên',
		startDate: '2024-05-17',
		endDate: '2024-06-08',
		applicableValue: 250000,
	},
	{
		id: 8,
		code: 'SAVE25',
		name: 'Giảm 25%',
		condition: 'Áp dụng cho tất cả đơn hàng',
		startDate: '2024-05-30',
		endDate: '2024-06-30',
		applicableValue: 0,
	},
	{
		id: 9,
		code: 'DISCOUNT75',
		name: 'Giảm giá 75K',
		condition: 'Áp dụng cho đơn hàng từ 300K trở lên',
		startDate: '2024-05-19',
		endDate: '2024-06-12',
		applicableValue: 300000,
	},
	{
		id: 10,
		code: 'SAVE30',
		name: 'Giảm 30%',
		condition: 'Áp dụng cho tất cả đơn hàng',
		startDate: '2024-05-23',
		endDate: '2024-06-18',
		applicableValue: 0,
	},
];

function oneStepCheckoutPage() {
	const router = useRouter();
	const { totalPriceCheckout, dataCheckout, userId, setCodeOrder } = useTheme();
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [isShowTotalPriceCheckout, setIsShowTotalPriceCheckout] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [checked, setChecked] = useState(true);
	const [dataUser, setDataUser] = useState();
	const [valueNameUser, setValueNameUser] = useState();
	const [valuePhoneUser, setValuePhoneUser] = useState();
	const [valueProvinceUser, setValueProvinceUser] = useState();
	const [valueDistrictUser, setValueDistrictUser] = useState();
	const [valueWardUser, setValueWardUser] = useState();
	const [valueAddressUser, setValueAddressUser] = useState();
	const { isOpen: isOpen1, onOpen: onOpen1, onOpenChange: onOpenChange1 } = useDisclosure();
	const [listDiscount, setListDiscount] = useState();
	const [valueDiscountCode, setValueDiscountCode] = useState();
	const [appliedDiscountCode, setAppliedDiscountCode] = useState('');
	const [inforDiscountCode, setInforDiscountCode] = useState();
	const [totalPriceFinal, setTotalPriceFinal] = useState();
	const [orderStatus, setOrderStatus] = useState('Đã đặt hàng');
	const [orderId, setOderId] = useState();
	// address
	const [valueCity, setValueCity] = useState('');
	const [valueDistrict, setValueDistrict] = useState('');
	const [valueWard, setValueWard] = useState('');

	const [dataDiscountCode, setDataDiscountCode] = useState([]);
	const [isLoadingDiscount, setIsLoadingDiscount] = useState(false);
	// format number 199000 => 199.000
	function formatNumber(number) {
		const parts = number.toString().split('.');
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
		if (parts[1]) {
			parts[1] = parts[1].slice(0, 2);
		}
		return parts.join('.');
	}

	useEffect(() => {
		fetch('http://localhost:5000/discountCode')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setDataDiscountCode(data);
				setIsLoadingDiscount(true);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	// ------------------------ Mã giảm giá ------------------------
	useEffect(() => {
		const newFilterDiscount = dataDiscountCode.filter(
			(discount) => totalPriceCheckout > discount.applicableCode,
		);
		setListDiscount(newFilterDiscount);
	}, [isLoadingDiscount]);
	const handleChangeDiscountCode = (e) => {
		setValueDiscountCode(e.target.value);
	};
	const handleApplyDiscount = () => {
		setAppliedDiscountCode(valueDiscountCode);
	};
	// Hàm xử lý sự kiện khi người dùng áp dụng mã giảm giá
	const handleApplyDiscountCode = (code) => {
		// console.log(code);
		setAppliedDiscountCode(code);
	};
	useEffect(() => {
		let priceGG = 0;
		if (appliedDiscountCode === 'DISCOUNT20') {
			priceGG = 20000;
			setTotalPriceFinal(totalPriceCheckout - priceGG);
		} else if (appliedDiscountCode === 'SAVE10') {
			priceGG = totalPriceCheckout * 0.1;
			setTotalPriceFinal(totalPriceCheckout - priceGG);
		} else if (appliedDiscountCode === 'DISCOUNT50') {
			priceGG = 50000;
			setTotalPriceFinal(totalPriceCheckout - priceGG);
		} else if (appliedDiscountCode === 'SAVE15') {
			priceGG = totalPriceCheckout * 0.15;
			setTotalPriceFinal(totalPriceCheckout - priceGG);
		} else if (appliedDiscountCode === 'DISCOUNT100') {
			priceGG = 100000;
			setTotalPriceFinal(totalPriceCheckout - priceGG);
		} else if (appliedDiscountCode === 'SAVE20') {
			priceGG = totalPriceCheckout * 0.2;
			setTotalPriceFinal(totalPriceCheckout - priceGG);
		} else if (appliedDiscountCode === 'DISCOUNT30') {
			priceGG = 30000;
			setTotalPriceFinal(totalPriceCheckout - priceGG);
		} else if (appliedDiscountCode === 'SAVE25') {
			priceGG = totalPriceCheckout * 0.25;
			setTotalPriceFinal(totalPriceCheckout - priceGG);
		} else if (appliedDiscountCode === 'DISCOUNT75') {
			priceGG = 75000;
			setTotalPriceFinal(totalPriceCheckout - priceGG);
		} else if (appliedDiscountCode === 'SAVE30') {
			priceGG = totalPriceCheckout * 0.3;
			setTotalPriceFinal(totalPriceCheckout - priceGG);
		}

		const discountInfo = discountCodes.filter(
			(discountCode) => discountCode.code === appliedDiscountCode,
		);

		if (discountInfo.length > 0) {
			setInforDiscountCode({
				...discountInfo[0], // Chắc chắn chỉ lấy phần tử đầu tiên
				priceGG: priceGG,
			});
		}
	}, [appliedDiscountCode]);
	// ------------------------ Phương thức thanh toán ------------------------
	const [selectedMethod, setSelectedMethod] = useState('VNPay');
	const [nameMethod, setNameMethod] = useState('Thanh toán khi nhận hàng');

	const handleMethodChange = (e) => {
		setSelectedMethod(e.target.value);
	};

	// ------------------------ ---------------------- ------------------------
	const handleChangeCheck = (event) => {
		setChecked(event.target.checked);
	};
	useEffect(() => {
		fetch(`http://localhost:5000/user/${userId}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				setDataUser(data);
				setIsLoading(true);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [userId]);

	// ---------------------------- delivery address information --------------------------
	useEffect(() => {
		if (dataUser) {
			setValueNameUser(dataUser.fullName);
			setValuePhoneUser(dataUser.phone);
			setValueProvinceUser(dataUser.addresses.province);
			setValueDistrictUser(dataUser.addresses.district);
			setValueWardUser(dataUser.addresses.ward);
			const fullAddress = `${dataUser.addresses.ward}, ${dataUser.addresses.district}, ${dataUser.addresses.province}`;
			setValueAddressUser(fullAddress);
		}
	}, [dataUser]);
	const handleChangeValueName = (e) => {
		setValueNameUser(e.target.value);
	};
	const handleChangeValuePhone = (e) => {
		setValuePhoneUser(e.target.value);
	};
	const handleChangeValueProvince = (e) => {
		setValueProvinceUser(e.target.value);
	};
	const handleChangeValueDistrict = (e) => {
		setValueDistrictUser(e.target.value);
	};
	const handleChangeValueWard = (e) => {
		setValueWardUser(e.target.value);
	};

	const handleChangeValueAddress = (e) => {
		setValueAddressUser(e.target.value);
	};
	//render address
	const renderCities = () => {
		return country.map((city) => ({
			key: city.name,
			label: city.name,
		}));
	};

	const handleCityChange = (e) => {
		setValueCity(e.target.value);
		setValueProvinceUser(e.target.value);
		setValueDistrictUser('');
		const fullAddress = `${e.target.value}`;
		setValueAddressUser(fullAddress);
	};
	const renderDistricts = () => {
		if (!valueProvinceUser) return [];

		const city = country.find((city) => city.name === valueProvinceUser);
		return city.districts.map((district) => ({
			key: district.name,
			label: district.name,
		}));
	};
	const handleDistrictChange = (e) => {
		setValueDistrictUser(e.target.value);
		const fullAddress = `${e.target.value}, ${valueProvinceUser}`;
		setValueAddressUser(fullAddress);
	};

	const renderWards = () => {
		if (!valueProvinceUser || !valueDistrictUser) return [];

		const city = country.find((city) => city.name === valueProvinceUser);
		const district = city.districts.find((district) => district.name === valueDistrictUser);
		return district.wards.map((ward) => ({
			key: ward.name,
			label: ward.name,
		}));
	};
	const handleWardChange = (e) => {
		setValueWardUser(e.target.value);
		const fullAddress = `${e.target.value}, ${valueDistrictUser}, ${valueProvinceUser}`;
		setValueAddressUser(fullAddress);
	};

	// Prepare the user data for the order

	useEffect(() => {
		if (valueWardUser && valueDistrictUser && valueProvinceUser) {
			setValueAddressUser(valueWardUser + ', ' + valueDistrictUser + ', ' + valueProvinceUser);
		}
	}, [valueWardUser, valueDistrictUser, valueProvinceUser]);
	// -------------------------- confirm payment ----------------------------

	// Biến để đánh dấu việc callback đã nhận được
	const handleConfirmPayment = () => {
		const products = dataCheckout.map((product) => ({
			productId: product._id,
			quantity: product.quantityPurchased,
		}));

		const userData = {
			userId,
			name: valueNameUser,
			address: valueAddressUser,
			totalPrice: totalPriceFinal ? totalPriceFinal + 19000 : totalPriceCheckout + 19000,
			orderStatus:
				selectedMethod === 'MoMo' || selectedMethod === 'VNPay' ? 'Đã thanh toán' : orderStatus,
			paymentMethod: selectedMethod,
			products,
		};

		// Function to handle payment for MoMo
		const processPaymentMoMo = () => {
			const paymentPromise = fetch('http://localhost:5000/payment_momo', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					totalPrice: userData.totalPrice,
				}),
			}).then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			});

			paymentPromise
				.then((data) => {
					window.location.href = data.shortLink; // Chuyển trang
					const checkStatusPromise = fetch('http://localhost:5000/check-status-transaction', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ orderId: data.orderId }),
					}).then((response) => {
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.json();
					});

					checkStatusPromise
						.then((statusData) => {
							console.log(statusData);
							if (statusData.message === 'Thành công.') {
								processPayment();
							}
						})
						.catch((err) => {
							console.error('Error:', err);
						});
				})
				.catch((err) => {
					console.error('Error:', err);
				});
		};
		const processPaymentVNPay = () => {
			const paymentPromise = fetch('http://localhost:5000/order', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					totalPrice: userData.totalPrice,
				}),
			}).then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			});

			paymentPromise
				.then((data) => {
					window.location.href = data.vnpUrl; // Redirect to VNPay payment page
					const checkStatusPromise = fetch('http://localhost:5000/check-status-transaction-vnpay', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						// body: JSON.stringify({ orderId: data.orderId }),
						body: JSON.stringify({ orderId: data.vnp_TxnRef }),
					}).then((response) => {
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.json();
					});

					checkStatusPromise
						.then((statusData) => {
							console.log(statusData);
							if (statusData.message === 'Thành công.') {
								processPayment();
							}
						})
						.catch((err) => {
							console.error('Error:', err);
						});
				})
				.catch((err) => {
					console.error('Error:', err);
				});
		};

		const processPayment = () => {
			fetch('http://localhost:5000/payment', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userData),
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then((data) => {
					setCodeOrder(data._id);
					router.push(`/successfulTransaction`);
				})
				.catch((err) => {
					console.error('Error:', err);
				});
		};

		if (selectedMethod === 'MoMo') {
			processPayment();
			processPaymentMoMo();
		} else if (selectedMethod === 'VNPay') {
			processPayment();
			processPaymentVNPay();
		} else {
			processPayment();
		}
	};

	const InputInforItem = ({ title, onChange, value }) => {
		return (
			<div className='my-6 flex items-center'>
				<div className='w-44'>
					<p>{title}</p>
				</div>
				<input
					type='text'
					className=' ml-4 w-1/2 rounded-md border px-2 py-1 outline-none'
					value={value}
					onChange={onChange}
				/>
			</div>
		);
	};
	const DiscountCode = ({ discount, onclick, onPress, setIsShowTotalPriceCheckout }) => {
		const handleApplyDiscount = () => {
			onclick(discount.code);
			setIsShowTotalPriceCheckout(true);
		};
		function formatNumber(number) {
			return number.toLocaleString('de-DE');
		}
		function formatDate(dateString) {
			const date = new Date(dateString);
			return date.toLocaleDateString('en-GB', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric',
			});
		}
		// If the discount code expires, hide it
		const currentDate = new Date();
		const endDate = new Date(discount.endDate);
		if (endDate < currentDate) {
			return null;
		}
		return (
			<div className='my-4 rounded-lg border p-4 shadow-md' key={discount.id}>
				<div className='mb-2 flex items-center justify-between'>
					<p className='font-semibold text-gray-700'>Mã Khuyến mãi</p>
					<p className='text-gray-500'>Áp dụng tối đa: 1</p>
				</div>
				<div className='flex items-start gap-4'>
					<div className='flex h-36 w-[17%] items-center justify-center rounded-lg bg-gray-100 bg-image-sale bg-contain bg-no-repeat'>
						<img
							src='https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/promotion/ico_promotion.svg?q=105606'
							alt='sale'
							className='h-16 w-16'
						/>
					</div>
					<div className='w-[80%]'>
						<div className='mb-2'>
							<p className='text-lg font-semibold text-gray-800'>
								{discount.name} - <span className='text-blue-600'>{discount.code}</span>
							</p>
							<p className='text-gray-600'>{discount.condition}</p>
							<p className='text-gray-600'>Ngày bắt đầu: {formatDate(discount.startDate)}</p>
							<p className='text-gray-600'>Ngày kết thúc: {formatDate(discount.endDate)}</p>
						</div>
						<div className='text-right'>
							<Button
								className=' hover:bg-blue-700 rounded-lg px-4 py-2  '
								onClick={handleApplyDiscount}
								color='primary'
								onPress={onPress}
							>
								Áp dụng
							</Button>
						</div>
					</div>
				</div>
			</div>
		);
	};
	const ProductItem = ({ imageUrl, name, quantityPurchased, priceSell, priceDiscount }) => {
		function formatNumber(number) {
			const parts = number.toString().split('.');
			parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
			if (parts[1]) {
				parts[1] = parts[1].slice(0, 2);
			}
			return parts.join('.');
		}
		return (
			<div className='my-4 flex items-start justify-between border-b pb-4'>
				<div className='flex gap-8'>
					<img src={imageUrl} alt='adad' className='h-40 w-36' />
					<p className='text-sm'>{name}</p>
				</div>
				<div className='mr-[100px] flex w-1/4 justify-between text-sm'>
					<div>
						<p>{formatNumber(priceDiscount)} đ</p>
						<p className='text-orange line-through'>{formatNumber(priceSell)} đ</p>
					</div>
					<p>{quantityPurchased}</p>
					<p className='text-orange'>
						{priceDiscount ? formatNumber(priceDiscount) : formatNumber(priceSell)} đ
					</p>
				</div>
			</div>
		);
	};

	return (
		<div>
			<title>Checkout</title>
			{isShowTotalPriceCheckout ? (
				<div
					className={`${inforDiscountCode ? 'h-[180px]' : 'h-[150px]'} fixed   bottom-0 left-0 right-0 z-[99] bg-white  shadow-inner `}
				>
					<div className='mx-auto max-w-[1200px] text-sm'>
						<div>
							<div className='my-2 flex items-center'>
								<p className='w-[90%] text-right'>Thành tiền:</p>
								<p className='w-[10%] text-right '>{formatNumber(totalPriceCheckout)} đ</p>
							</div>
							<div className='my-2 flex items-center'>
								<p className='w-[90%] text-right'>Phí vận chuyển (Giao hàng tiêu chuẩn):</p>
								<p className='w-[10%] text-right '>19.000 đ</p>
							</div>
							{inforDiscountCode && (
								<div className='my-2 flex items-center'>
									<p className='w-[90%] text-right'>{inforDiscountCode.name}:</p>
									<p className='w-[10%] text-right '>
										{`-${formatNumber(inforDiscountCode.priceGG)}đ`} đ
									</p>
								</div>
							)}
							<div className='my-2 flex items-center'>
								<p className='w-[90%] text-right'>Tổng Số Tiền (gồm VAT):</p>
								<p className='w-[10%] text-right  font-bold text-orange'>
									{`${
										totalPriceFinal
											? formatNumber(totalPriceFinal + 19000)
											: formatNumber(totalPriceCheckout + 19000)
									} đ`}
								</p>
							</div>
						</div>
						<div className='my-2 border'></div>
						<div className='flex justify-between'>
							<div className='flex items-center'>
								<input
									type='checkbox'
									className='mr-4 h-4 w-4'
									checked={checked}
									onChange={handleChangeCheck}
								/>
								<div>
									Bằng việc tiến hành Mua hàng, Bạn đã đồng ý với <br />
									<Link href='#' className='font-bold text-blue1'>
										Điều khoản & Điều kiện của Fahasa.com
									</Link>
								</div>
							</div>
							<Button
								onPress={onOpen}
								className='rounded-md bg-blue1 px-12 font-bold text-white hover:bg-blue1Hover'
								isDisabled={!checked}
							>
								<p>XÁC NHẬN THANH TOÁN</p>
							</Button>
						</div>
						<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
							<ModalContent className=' min-w-[600px]'>
								{(onClose) => (
									<>
										<ModalHeader className='flex items-center justify-center bg-orange text-white'>
											Xác nhận địa chỉ giao hàng
										</ModalHeader>
										<ModalBody>
											<div className='my-4  '>
												{/* <p>Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh</p> */}
												<p>{valueAddressUser}</p>
											</div>
										</ModalBody>
										<ModalFooter>
											<Button color='danger' variant='light' onPress={onClose}>
												Hủy
											</Button>
											<Button color='primary' onPress={onClose} onClick={handleConfirmPayment}>
												{/* <Link href='/successfulTransaction'>Xác nhận</Link> */}
												<p>Xác nhận</p>
											</Button>
										</ModalFooter>
									</>
								)}
							</ModalContent>
						</Modal>
					</div>
				</div>
			) : null}
			{/* địa chỉ nhận nhàng */}
			<div className='my-5 rounded-md bg-white p-5'>
				<h3 className='my-4 font-bold '>ĐỊA CHỈ GIAO HÀNG</h3>
				<div className='border'></div>
				{!isLoading ? (
					<>
						<InputInforItem title='Họ và tên người nhận' />
						<InputInforItem title='Số điện thoại' />
						<InputInforItem title='Tỉnh/Thành Phố' />
						<InputInforItem title='Quận/Huyện' />
						<InputInforItem title='Phường/Xã' />
						<InputInforItem title='Địa chỉ' />
					</>
				) : (
					<>
						<div className='my-6 flex items-center'>
							<div className='w-44'>
								<p>Họ và tên người nhận</p>
							</div>
							<Input
								type='text'
								variant='bordered'
								className=' ml-4 w-1/2  px-2 py-1 outline-none '
								value={valueNameUser}
								onChange={handleChangeValueName}
							/>
						</div>
						<div className='my-6 flex items-center'>
							<div className='w-44'>
								<p>Số điện thoại</p>
							</div>
							<Input
								type='text'
								variant='bordered'
								className=' ml-4 w-1/2  px-2 py-1 outline-none '
								value={valuePhoneUser}
								onChange={handleChangeValuePhone}
							/>
						</div>
						<div className='my-6 flex items-center'>
							<div className='w-44'>
								<p>Tỉnh/Thành Phố</p>
							</div>
							<Select
								color='default'
								placeholder={'Chọn Tỉnh/Thành phố'}
								labelPlacement='outside'
								variant='bordered'
								disableSelectorIconRotation
								selectorIcon={<SelectorIcon />}
								onChange={handleCityChange}
								className=' ml-4 w-1/2 border-0 px-2 py-1 text-black  outline-none'
							>
								{renderCities().map((data) => (
									<SelectItem key={data.key}>{data.label}</SelectItem>
								))}
							</Select>
						</div>
						<div className='my-6 flex items-center'>
							<div className='w-44'>
								<p>Quận/Huyện</p>
							</div>
							<Select
								placeholder='Chọn Quận/Huyện'
								labelPlacement='outside'
								variant='bordered'
								className=' ml-4 w-1/2 border-0 px-2 py-1 outline-none '
								disableSelectorIconRotation
								selectorIcon={<SelectorIcon />}
								onChange={handleDistrictChange}
								value={valueDistrictUser}
							>
								{renderDistricts().map((data) => (
									<SelectItem key={data.key}>{data.label}</SelectItem>
								))}
							</Select>
						</div>
						<div className='my-6 flex items-center'>
							<div className='w-44'>
								<p>Phường/Xã</p>
							</div>
							<Select
								placeholder='Chọn Phường/Xã'
								labelPlacement='outside'
								variant='bordered'
								className=' ml-4 w-1/2 border-0 px-2 py-1 outline-none '
								disableSelectorIconRotation
								selectorIcon={<SelectorIcon />}
								onChange={handleWardChange}
								value={valueWardUser}
							>
								{renderWards().map((data) => (
									<SelectItem key={data.key}>{data.label}</SelectItem>
								))}
							</Select>
						</div>
						<div className='my-6 flex items-center'>
							<div className='w-44'>
								<p>Địa chỉ</p>
							</div>
							<Input
								type='text'
								variant='bordered'
								className=' ml-4 w-1/2  px-2 py-1 outline-none '
								value={valueAddressUser}
								onChange={handleChangeValueAddress}
							/>
						</div>
					</>
				)}
			</div>
			{/* Phương thức vận chuyển */}
			<div className='my-5 rounded-md bg-white p-5'>
				<h3 className='my-4 font-bold '>Phương thức vận chuyển</h3>
				<div className='border'></div>
				<div className='mt-4'>
					<input
						type='radio'
						name='StandardDelivery'
						id='StandardDelivery'
						className='mr-2'
						checked
					/>
					<label htmlFor='StandardDelivery'>Giao hàng tiêu chuẩn: 19.000đ</label>
				</div>
			</div>
			{/* Phương thức thanh toán */}
			<div className='my-5 rounded-md bg-white p-5'>
				<h3 className='my-4 font-bold'>Phương thức thanh toán</h3>
				<div className='border'></div>
				<div className='mt-4'>
					<input
						type='radio'
						name='paymentMethod'
						id='ZaloPay'
						value='ZaloPay'
						className='mr-2'
						checked={selectedMethod === 'ZaloPay'}
						onChange={handleMethodChange}
					/>
					<label htmlFor='ZaloPay'>Ví ZaloPay</label>
				</div>
				<div className='mt-4'>
					<input
						type='radio'
						name='paymentMethod'
						id='VNPay'
						value='VNPay'
						className='mr-2'
						checked={selectedMethod === 'VNPay'}
						onChange={handleMethodChange}
					/>
					<label htmlFor='VNPay'>Ví VNPay</label>
				</div>
				<div className='mt-4'>
					<input
						type='radio'
						name='paymentMethod'
						id='ShopeePay'
						value='ShopeePay'
						className='mr-2'
						checked={selectedMethod === 'ShopeePay'}
						onChange={handleMethodChange}
					/>
					<label htmlFor='ShopeePay'>Ví ShopeePay</label>
				</div>
				<div className='mt-4'>
					<input
						type='radio'
						name='paymentMethod'
						id='MoMo'
						value='MoMo'
						className='mr-2'
						checked={selectedMethod === 'MoMo'}
						onChange={handleMethodChange}
					/>
					<label htmlFor='MoMo'>Ví MoMo</label>
				</div>
				<div className='mt-4'>
					<input
						type='radio'
						name='paymentMethod'
						id='NH'
						value='NH'
						className='mr-2'
						checked={selectedMethod === 'NH'}
						onChange={handleMethodChange}
					/>
					<label htmlFor='NH'>Thanh toán bằng tiền mặt khi nhận hàng</label>
				</div>
			</div>
			{/* Mã khuyến mãi */}
			<div className='my-5 rounded-md bg-white p-5'>
				<h3 className='my-4 font-bold '>MÃ KHUYẾN MÃI/MÃ QUÀ TẶNG</h3>
				<div className='border'></div>
				<div className='my-6 flex items-center'>
					<div className='w-44'>
						<p>Mã KM/Quà tặng</p>
					</div>
					<div className='ml-4   rounded-md border p-1'>
						<input
							type='text'
							name=''
							id=''
							className='  w-[400px] px-2 outline-none'
							placeholder='Nhập mã khuyến mãi'
							value={valueDiscountCode}
							onChange={handleChangeDiscountCode}
						/>
						<button
							className='rounded-md bg-blue1 px-4 py-1 text-white hover:bg-blue1Hover'
							onClick={handleApplyDiscount}
						>
							Áp dụng
						</button>
					</div>
					<Button
						className='ml-4 '
						color='primary'
						variant='ghost'
						onPress={onOpen1}
						onClick={() => setIsShowTotalPriceCheckout(false)}
					>
						Chọn mã khuyến mãi
					</Button>
					<Modal
						isOpen={isOpen1}
						onOpenChange={(isOpen) => {
							onOpenChange1(isOpen);
							if (!isOpen) {
								setIsShowTotalPriceCheckout(true);
							}
						}}
						size='3xl'
					>
						<ModalContent onScroll={true}>
							{(onClose) => (
								<>
									<ModalHeader className='flex flex-col gap-1'>Danh sách mã khuyến mãi</ModalHeader>
									<ModalBody>
										<div className='h-96 overflow-auto'>
											{listDiscount.map((discount) => (
												<DiscountCode
													discount={discount}
													onclick={handleApplyDiscountCode}
													onPress={onOpenChange1}
													setIsShowTotalPriceCheckout={setIsShowTotalPriceCheckout}
												/>
											))}
										</div>
									</ModalBody>
								</>
							)}
						</ModalContent>
					</Modal>
				</div>
			</div>
			{/* Kiểm tra lại đơn hàng */}
			<div className='my-5 rounded-md bg-white p-5'>
				<h3 className='my-4 font-bold '>KIỂM TRA LẠI ĐƠN HÀNG</h3>
				<div className='my-2 border'></div>

				{dataCheckout.map((data) => (
					<ProductItem
						imageUrl={data.image[0]}
						priceDiscount={data.priceDiscount}
						priceSell={data.priceSell}
						quantityPurchased={data.quantityPurchased}
						name={data.name}
					/>
				))}
			</div>
		</div>
	);
}

export default oneStepCheckoutPage;
