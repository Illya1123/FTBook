'use client';
import React, { useEffect, useState } from 'react';

import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
	Tooltip,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faChevronDown, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import StarRatings from 'react-star-ratings';
import SideBarComponent from '../_components/SideBarComponent';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function bookCategory() {
	const [dataBook, setDataBook] = useState([]);
	const [filterValue, setFilterValue] = useState([]);
	const [valueFilterSupplier, setValueFilterSupplier] = useState([]);
	// const [filterValue, setValueFilterPrice] = useState();
	const [dataFilter, setDataFilter] = useState([]);
	// const [selectedKeys, setSelectedKeys] = React.useState(new Set(['Bestseller']));
	// const selectedValue = React.useMemo(
	// 	() => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
	// 	[selectedKeys]
	//   );
	const [selectedKeys, setSelectedKeys] = React.useState(new Set(['']));

	const selectedValue = React.useMemo(
		() => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
		[selectedKeys],
	);
	useEffect(() => {
		axios
			.get('http://localhost:5000/product')
			.then((response) => {
				setDataBook(response.data);
				setIsLoading(true);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);
	const ProductCard = ({ product, small }) => {
		const { name, image, priceSell, priceDiscount } = product;
		const firstImage = image[0];
		const { isOpen, onOpen, onOpenChange } = useDisclosure();
		// format giá - 3 số thêm 1 dấu chấm - Example: 100000 => 100.000
		function formatNumber(number) {
			return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
		}
		// tính % giảm giá sản phẩm
		const priceSale = priceSell - priceDiscount;
		const percentSale = Math.floor((priceSale / priceSell) * 100);

		const dispatch = useDispatch();

		const handleAddToCart = () => {
			// console.log(1);
			// const item = { id: 1, name: 'Product Name', price: 10 }; // Thay đổi thông tin sản phẩm tùy ý
			// dispatch(addItem(item));
		};
		return (
			<div className='relative max-w-[288px] rounded-md border bg-white'>
				<div className='group'>
					<div className='relative flex cursor-pointer flex-col items-center'>
						<div className='p-6'>
							<img src={firstImage} alt='' className='h-40 w-40' />
						</div>
						<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
							<div
								className={`quick-view relative flex ${small ? `h-8 w-8` : `h-11 w-11`}  items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white`}
							>
								<Button onPress={onOpen} className=' bg-transparent '>
									<FontAwesomeIcon icon={faEye} className='text-xl' />
								</Button>
								<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
									Xem nhanh
								</p>
								<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
									<ModalContent className=' min-w-[600px]'>
										{(onClose) => (
											<>
												<ModalHeader className='flex flex-col gap-1'></ModalHeader>
												<ModalBody>
													<div className='flex  '>
														<img src={firstImage} alt='' className='h-52 w-48' />
														<div>
															<h3>{name}</h3>
															<p className='my-4 font-bold text-red-500'>
																Giá hiện tại: {formatNumber(priceDiscount)}đ
															</p>
															<p className=' text-gray-400 line-through'>
																Giá gốc: {formatNumber(priceSell)}đ
															</p>
															{/* <p>Thông tin về sách</p> */}
														</div>
													</div>
												</ModalBody>
												<ModalFooter></ModalFooter>
											</>
										)}
									</ModalContent>
								</Modal>
							</div>
							<div
								className={`quick-view relative flex ${small ? `h-8 w-8` : `h-11 w-11`} items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white`}
							>
								<FontAwesomeIcon icon={faHeart} />
								<p className='quick absolute -top-12 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
									Thêm danh sách yêu thích
								</p>
							</div>
							<div
								className={`quick-view relative flex ${small ? `h-8 w-8` : `h-11 w-11`} items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white`}
							>
								<button onClick={handleAddToCart}>
									<FontAwesomeIcon icon={faCartShopping} />
								</button>
								<p className='quick absolute -top-12 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'></p>
							</div>
						</div>
					</div>
					<Link href='#'>
						<div className='mx-4 px-2 py-4'>
							<div>
								<p className='line-clamp-2 h-10 text-sm'>{name}</p>
							</div>
							{priceDiscount && (
								<p className='my-2 text-base font-bold text-red-500'>
									{formatNumber(priceDiscount)}đ
								</p>
							)}
							<p className='text-sm text-gray-300 line-through'>{formatNumber(priceSell)}đ</p>

							{/* <p className='my-2 text-base font-bold text-red-500'>{formatNumber(priceSell)}đ</p>
							{priceDiscount && (
								<p className='text-sm text-gray-300 line-through'>{formatNumber(priceDiscount)}đ</p>
							)} */}
						</div>
					</Link>
				</div>
				<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
					<p className=' text-xs'>{percentSale}%</p>
					<div className='half-square'></div>
				</div>
			</div>
		);
	};
	const handleChangeValueSupplier = (value) => {
		// console.log(value);
	};
	const handleChangeValue = (value) => {
		// Nếu giá trị đã tồn tại trong mảng filterValue, hãy loại bỏ nó
		if (filterValue.includes(value)) {
			const updatedFilterValue = filterValue.filter((item) => item !== value);
			setFilterValue(updatedFilterValue);
		} else {
			// Nếu giá trị chưa tồn tại, thêm vào mảng
			const updatedFilterValue = [...filterValue, value];
			setFilterValue(updatedFilterValue);
		}
	};

	useEffect(() => {
		if (filterValue && filterValue.length > 0) {
			const filteredData = dataBook.filter((book) => {
				return filterValue.some((filter) => {
					// Nếu filter không có giá trị, trả về true để bỏ qua bộ lọc này
					if (!filter || !filter.priceMin || !filter.priceMax) {
						return true;
					}
					// Kiểm tra nếu giá sách nằm trong phạm vi giá trị được lọc
					return book.priceDiscount > filter.priceMin && book.priceDiscount < filter.priceMax;
				});
			});
			setDataFilter(filteredData);
		} else {
			// Nếu không có bộ lọc nào, hiển thị toàn bộ dữ liệu
			setDataFilter(dataBook);
		}
	}, [filterValue, dataBook]);
	// useEffect(()=>{
	// 	if()
	// },[selectedKeys])
	const handleChangeValuePublish = (value) => {
		// console.log(value);
	};
	const handleChangeValueYear = (value) => {
		console.log(value);
	};
	return (
		<div>
			<title>Book Category</title>
			<div className='my-10 flex'>
				<div className='min-w-[280px] rounded-md bg-white'>
					<SideBarComponent
						filterPrice={handleChangeValue}
						filterSupplier={handleChangeValueSupplier}
						filterPublish={handleChangeValuePublish}
						filterYear={handleChangeValueYear}
					/>
				</div>
				<div className='ml-5 w-full rounded-md bg-white p-5'>
					{/* select dropdown */}
					<div className='flex items-center'>
						<p className='mr-2'>Sắp xếp theo: </p>
						<div>
							<Dropdown type='menu'>
								<DropdownTrigger>
									<Button variant='bordered' className='max-h-8 rounded-md  border capitalize'>
										{selectedValue} <FontAwesomeIcon icon={faChevronDown} />
									</Button>
								</DropdownTrigger>
								<DropdownMenu
									aria-label='Single selection example'
									variant='flat'
									disallowEmptySelection
									selectionMode='single'
									selectedKeys={selectedKeys}
									onSelectionChange={setSelectedKeys}
									color='primary'
								>
									{/* <DropdownItem key='Bestseller'>Bán chạy tuần</DropdownItem>
									<DropdownItem key='PricesIncrease'>Giá tăng dần</DropdownItem>
									<DropdownItem key='PricesDecrease'>Giá giảm dần</DropdownItem> */}
									<DropdownItem key='Bán chạy tuần' textValue='ABC'>
										Bán chạy tuần
									</DropdownItem>
									<DropdownItem key='Giá tăng dần'>Giá tăng dần</DropdownItem>
									<DropdownItem key='Giá giảm dần'>Giá giảm dần</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
					</div>
					{/* item */}
					<div className=' my-5 grid grid-cols-4 gap-4'>
						{filterValue.length === 0
							? // Nếu filterValue rỗng, hiển thị dataBook
								dataBook.map((product) => <ProductCard key={product._id} product={product} small />)
							: // Ngược lại, hiển thị dataFilter nếu đã được lọc
								dataFilter.map((product) => (
									<ProductCard key={product._id} product={product} small />
								))}
						{/* <div className='my-5'>
							<div className='relative max-w-[288px] rounded-md border bg-white'>
								<div className='group '>
									<div className=' relative flex cursor-pointer flex-col items-center'>
										<div className='p-6'>
											<img
												src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
												alt=''
												className='h-40 w-40'
											/>
										</div>
										<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
											<Tooltip showArrow={true} content='Xem chi tiết' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faEye} className=' text-xl  ' />
												</Button>
											</Tooltip>

											<Tooltip showArrow={true} content='Thêm vào yêu thích' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faHeart} className=' text-xl  ' />
												</Button>
											</Tooltip>

											<Tooltip showArrow={true} content='Thêm giỏ hàng' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faCartShopping} className=' text-xl  ' />
												</Button>
											</Tooltip>
										</div>
									</div>
									<Link href='#'>
										<div className='mx-4 px-2 py-4'>
											<div>
												<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
											</div>
											<div className='flex items-center'>
												<p className='my-2  mr-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className=' text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
											<StarRatings
												rating={4.403}
												starDimension='16px'
												starSpacing='5px'
												starRatedColor='#F6A500'
											/>
										</div>
									</Link>
								</div>
								<div className=' absolute top-3  w-8 bg-blue text-center text-white'>
									<p className=' text-xs'>24%</p>
									<div className='half-square1'></div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default bookCategory;
