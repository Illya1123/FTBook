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
	Spinner,
} from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faChevronDown, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import StarRatings from 'react-star-ratings';
import SideBarComponent from '../_components/SideBarComponent';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useTheme } from '../_components/ThemeProvider';
import { useSearchParams, useRouter } from 'next/navigation';

function bookCategory() {
	const { valueSearch, setValueSearch } = useTheme();
	const [dataBook, setDataBook] = useState([]);
	const [dataFilter, setDataFilter] = useState([]);
	const [filterValue, setFilterValue] = useState([]);
	const [filterValueSupplier, setFilterValueSupplier] = useState([]);
	const [filterValueCategory, setFilterValueCategory] = useState();
	const [filterValuePublished, setFilterValuePublished] = useState([]);
	const [filterValueYear, setFilterValueYear] = useState([]);
	const [selectedKeys, setSelectedKeys] = useState(new Set(['']));
	const [isLoading, setIsLoading] = useState(false);

	const selectedValue = React.useMemo(
		() => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
		[selectedKeys],
	);

	useEffect(() => {
		if (selectedKeys.currentKey) {
			if (dataFilter.length > 0) {
				let sortedDataFilter;
				if (selectedKeys.currentKey === 'Giá tăng dần') {
					sortedDataFilter = [...dataFilter].sort((a, b) => a.priceDiscount - b.priceDiscount);
				} else if (selectedKeys.currentKey === 'Giá giảm dần') {
					sortedDataFilter = [...dataFilter].sort((a, b) => b.priceDiscount - a.priceDiscount);
				} else if (selectedKeys.currentKey === 'Bán chạy tuần') {
					sortedDataFilter = [...dataFilter].sort((a, b) => b.ratingPoint - a.ratingPoint);
				}
				setDataFilter(sortedDataFilter);
			} else {
				let sortedDataBook;
				if (selectedKeys.currentKey === 'Giá tăng dần') {
					sortedDataBook = [...dataBook].sort((a, b) => a.priceSell - b.priceSell);
				} else if (selectedKeys.currentKey === 'Giá giảm dần') {
					sortedDataBook = [...dataBook].sort((a, b) => b.priceSell - a.priceSell);
				} else if (selectedKeys.currentKey === 'Bán chạy tuần') {
					sortedDataBook = [...dataBook].sort((a, b) => b.ratingPoint - a.ratingPoint);
				}
				setDataBook(sortedDataBook);
			}
		}
	}, [selectedKeys, dataBook, dataFilter]);

	useEffect(() => {
		if (valueSearch && dataBook) {
			const filterProducts = dataBook.filter((product) =>
				product.name.toLowerCase().includes(valueSearch.toLowerCase()),
			);
			setDataFilter(filterProducts);
		}
	}, [valueSearch, dataBook]);

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

		function formatNumber(number) {
			return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
		}

		const priceSale = priceSell - priceDiscount;
		const percentSale = Math.floor((priceSale / priceSell) * 100);

		const dispatch = useDispatch();

		const handleAddToCart = () => {
			// handle add to cart logic
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

	useEffect(() => {
		const filteredData = dataBook.filter((book) => {
			const priceFilter =
				filterValue.length === 0 ||
				filterValue.some((filter) => {
					return (
						!filter ||
						!filter.priceMin ||
						!filter.priceMax ||
						(book.priceDiscount > filter.priceMin && book.priceDiscount < filter.priceMax)
					);
				});

			const categoryFilter = !filterValueCategory || book.categoryAllId === filterValueCategory;

			const supplierFilter =
				filterValueSupplier.length === 0 ||
				filterValueSupplier.some((filter) => {
					return !filter || book.categorySupplierId === filter._id;
				});

			const publishedFilter =
				filterValuePublished.length === 0 ||
				filterValuePublished.some((filter) => {
					return book.categoryPublishId === filter._id;
				});

			const yearFilter =
				filterValueYear.length === 0 ||
				filterValueYear.some((filter) => {
					return book.categoryYearId === filter._id;
				});

			return priceFilter && categoryFilter && supplierFilter && publishedFilter && yearFilter;
		});

		setDataFilter(filteredData);
	}, [
		filterValue,
		filterValueCategory,
		filterValueSupplier,
		filterValuePublished,
		filterValueYear,
	]);

	const handleChangeValue = (value) => {
		if (filterValue.includes(value)) {
			const updatedFilterValue = filterValue.filter((item) => item !== value);
			setFilterValue(updatedFilterValue);
		} else {
			const updatedFilterValue = [...filterValue, value];
			setFilterValue(updatedFilterValue);
		}
	};

	const handleChangeValueSupplier = (value) => {
		if (filterValueSupplier.includes(value)) {
			const updatedFilterValue = filterValueSupplier.filter((item) => item !== value);
			setFilterValueSupplier(updatedFilterValue);
		} else {
			const updatedFilterValue = [...filterValueSupplier, value];
			setFilterValueSupplier(updatedFilterValue);
		}
	};

	const handleChangeValuePublish = (value) => {
		if (filterValuePublished.includes(value)) {
			const updatedFilterValue = filterValuePublished.filter((item) => item !== value);
			setFilterValuePublished(updatedFilterValue);
		} else {
			const updatedFilterValue = [...filterValuePublished, value];
			setFilterValuePublished(updatedFilterValue);
		}
	};

	const handleChangeValueYear = (value) => {
		if (filterValueYear.includes(value)) {
			const updatedFilterValue = filterValueYear.filter((item) => item !== value);
			setFilterValueYear(updatedFilterValue);
		} else {
			const updatedFilterValue = [...filterValueYear, value];
			setFilterValueYear(updatedFilterValue);
		}
	};

	const handleChangeValueCategory = (value) => {
		setFilterValueCategory(value);
	};

	const handleChangeSelectKey = (e) => {
		console.log(e);
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
						filterCategory={handleChangeValueCategory}
					/>
				</div>
				{!isLoading ? (
					<div className='flex h-80 w-full items-center justify-center'>
						<Spinner />
					</div>
				) : (
					<div className='ml-5 w-full rounded-md bg-white p-5'>
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
										onChange={handleChangeSelectKey}
										color='primary'
									>
										<DropdownItem key='Bán chạy tuần' textValue='ABC'>
											Bán chạy tuần
										</DropdownItem>
										<DropdownItem key='Giá tăng dần'>Giá tăng dần</DropdownItem>
										<DropdownItem key='Giá giảm dần'>Giá giảm dần</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</div>
						</div>

						{!filterValueCategory &&
						filterValue.length === 0 &&
						filterValueSupplier.length === 0 &&
						filterValuePublished.length === 0 &&
						filterValueYear.length === 0 &&
						!valueSearch ? (
							<div className=' my-5 grid grid-cols-4 gap-4'>
								{dataBook.map((product) => (
									<ProductCard key={product._id} product={product} small />
								))}
							</div>
						) : dataFilter.length > 0 ? (
							<div className=' my-5 grid grid-cols-4 gap-4'>
								{dataFilter.map((product) => (
									<ProductCard key={product._id} product={product} small />
								))}
							</div>
						) : (
							<div className='flex h-32 w-full items-center justify-center text-2xl'>
								Không tìm thấy kết quả phù hợp
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default bookCategory;
