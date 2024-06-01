'use client';
import { UserButton, useUser } from '@clerk/nextjs';
import { TabContent, TabLink, Tabs } from 'react-tabs-redux';
// import Countdown from 'react-countdown';
import React, { useState } from 'react';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
	Spinner,
} from '@nextui-org/react';
import Slider from 'react-slick';
import { useEffect } from 'react';
import Header from '../_components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleRight,
	faBook,
	faBrain,
	faCartShopping,
	faChevronRight,
	faChild,
	faDollarSign,
	faEarthAsia,
} from '@fortawesome/free-solid-svg-icons';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import AnimationComponents from '../_components/AnimationComponents';

import axios from 'axios';
import { addItem } from '../cart/cartReducer';
import { useDispatch, useSelector } from 'react-redux';
import { dataBookss } from '../_components/data';

import FacebookMsg from '../_components/FacebookMsg';
import { useTheme } from '../_components/ThemeProvider';

const slides = [
	'https://cdn0.fahasa.com/media/magentothem/banner7/Week2_T424_Banner_Slide_840x320_1.jpg',
	'https://cdn0.fahasa.com/media/magentothem/banner7/Gold_MCBooks0424_Slide_840x320.jpg',
	'https://cdn0.fahasa.com/media/magentothem/banner7/TanViet_Silver_0424_Ver1_Slide_840x320_1.jpg',
	'https://cdn0.fahasa.com/media/magentothem/banner7/Zenbook_0424_BannerSlide_840x320.jpg',
	'https://cdn0.fahasa.com/media/magentothem/banner7/HSO_DoChoiT324-slide_-smallbanner_Slide_840x320.jpg',
	'https://cdn0.fahasa.com/media/magentothem/banner7/VPP_Slide_T4_840x320_1.jpg',
];

function HomePage() {
	const { userId } = useTheme();
	const { user } = useUser();

	const flashProducts = dataBookss.slice().sort((a, b) => b.ratingPoint - a.ratingPoint);
	const [dataBooks, setDataBooks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [filteredTab1, setFilteredTab1] = useState([]);
	const [filteredTab2, setFilteredTab2] = useState([]);
	const [filteredTab3, setFilteredTab3] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/product')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				setDataBooks(data);
				setIsLoading(true);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	});
	useEffect(() => {
		if (dataBookss && isLoading) {
			const newFilteredProducts = dataBookss.filter(
				(product) => product.categoryAllId === '661949cc343796e299686dc7',
			);
			const newFilterTab1 = dataBookss.filter(
				(product) => product.categoryPublishId === '66198b74c9f3ef21a7378d86',
			);
			const newFilterTab2 = dataBookss.filter(
				(product) => product.categoryPublishId === '66198b74c9f3ef21a7378d88',
			);
			const newFilterTab3 = dataBookss.filter(
				(product) => product.categoryPublishId === '66198b74c9f3ef21a7378d89',
			);

			setFilteredProducts(newFilteredProducts);
			setFilteredTab1(newFilterTab1);
			setFilteredTab2(newFilterTab2);
			setFilteredTab3(newFilterTab3);
		}
	}, [isLoading, dataBookss]);

	const settingsSlider = {
		dots: true,
		infinite: true,
		speed: 1000,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	var settings = {
		dots: false,
		infinite: false,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div className={className} onClick={onClick}>
				<ChevronRight style={{ color: '#858380', fontSize: '30px' }} />
			</div>
		);
	}
	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div className={className} onClick={onClick}>
				<ChevronLeft style={{ color: '#858380', fontSize: '30px' }} />
			</div>
		);
	}
	const SlideItem = ({ imageUrl }) => {
		return <img className='h-[378px] w-full' src={imageUrl} alt='Slider Item' />;
	};
	// hiển thị màu các danh mục
	const CategoryLink = ({ href, icon, name, colorC1, colorC2, colorC3, colorC4, colorC5 }) => {
		return (
			<Link
				href={href}
				className={`flex min-h-40 flex-col items-center justify-center rounded-md 
				${colorC1 ? 'bg-category1' : colorC2 ? 'bg-category2' : colorC3 ? 'bg-category3' : colorC4 ? 'bg-category4' : colorC5 ? 'bg-category5' : ''} 
				hover:opacity-60`}
			>
				<FontAwesomeIcon icon={icon} className='h-10 w-10 text-white' />
				<p className='mt-4 text-lg text-white'>{name}</p>
			</Link>
		);
	};

	const ProductCard = ({ product }) => {
		const { name, image, priceSell, priceDiscount, _id } = product;
		const firstImage = image[0];
		const { isOpen, onOpen, onOpenChange } = useDisclosure();
		const items = useSelector((state) => state.cart.items);
		const [favorite, setFavorite] = useState([]);
		// console.log(userId);
		// console.log(items);
		const dispatch = useDispatch();

		// format giá - 3 số thêm 1 dấu chấm - Example: 100000 => 100.000
		function formatNumber(number) {
			return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
		}
		// tính % giảm giá sản phẩm
		const priceSale = priceSell - priceDiscount;
		const percentSale = Math.floor((priceSale / priceSell) * 100);

		const handleAddToCart = async (_id) => {
			// Tạo đối tượng JSON để gửi lên server
			const cartData = {
				productId: _id,
				quantity: 1,
			};
			try {
				// Kiểm tra xem giỏ hàng của người dùng đã tồn tại hay chưa
				const existingCart = await axios.get(`http://localhost:5000/cart/user/${user.id}`);

				if (existingCart.data.length > 0) {
					// Nếu giỏ hàng đã tồn tại
					const cartId = existingCart.data[0]._id;
					const existingProductIndex = existingCart.data[0].products.findIndex(
						(product) => product.productId === _id,
					);

					if (existingProductIndex !== -1) {
						// Nếu sản phẩm đã tồn tại trong giỏ hàng, thực hiện cập nhật số lượng
						const existingProduct = existingCart.data[0].products[existingProductIndex];
						const newQuantity = existingProduct.quantity + 1;
						await axios.put(`http://localhost:5000/cart/edit/${user.id}`, {
							productId: _id,
							quantity: newQuantity,
						});
						console.log('Cart updated with quantity:', newQuantity);
					} else {
						// Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm mới sản phẩm vào giỏ hàng
						await axios.post(`http://localhost:5000/cart/edit/${user.id}`, cartData);
						console.log('Product added to cart.');
					}
				} else {
					// Nếu giỏ hàng chưa tồn tại, thực hiện thêm mới
					const response = await axios.post('http://localhost:5000/cart', {
						userId: user.id,
						status: 'active',
						products: [cartData],
					});
					console.log('Cart added:', response.data);
				}
			} catch (error) {
				console.error('Error adding to cart:', error);
			}
		};
		let productId = [];
		const handleAddFavorite = async (_id) => {};
		return (
			<div className='relative mx-5 rounded-md bg-white'>
				<div className='group'>
					<div className='relative flex cursor-pointer flex-col items-center'>
						<div className='p-6'>
							<img src={firstImage} alt='' className='h-52 w-48' />
						</div>
						<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
							<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
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
													<div className='flex gap-2  '>
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
							<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
								<Button className=' bg-transparent ' onClick={() => handleAddFavorite(_id)}>
									<FontAwesomeIcon icon={faHeart} />
								</Button>
								<p className='quick absolute -top-12 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
									Thêm danh sách yêu thích
								</p>
							</div>
							<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
								<Button onClick={() => handleAddToCart(_id)} className=' bg-transparent '>
									<FontAwesomeIcon icon={faCartShopping} />
								</Button>
								<p className='quick absolute -top-12 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
									Thêm giỏ hàng
								</p>
							</div>
						</div>
					</div>
					<Link href={`/book/${_id}`}>
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
	return (
		<div>
			<Header activeHome />
			<div>
				{/* Banner */}
				<div className='my-10'>
					<Slider {...settingsSlider}>
						{slides.map((slide, index) => (
							<SlideItem key={index} imageUrl={slide} />
						))}
					</Slider>
				</div>

				{!isLoading ? (
					<Spinner />
				) : (
					<>
						{/* BookCategoryFavorites */}
						<AnimationComponents className='my-24'>
							<div className='my-6 flex items-center justify-between'>
								<h3 className=' text-2xl'>Đề xuất cho bạn</h3>
								{/* <div className='flex items-center text-base hover:text-blue'>
									<Link href='#'>Xem tất cả</Link>
									<ChevronRight style={{ height: '16px', width: '16px' }} />
								</div> */}
							</div>
							<div className='slider-container-item'>
								<Slider {...settings}>
									{dataBookss.map((product) => (
										<ProductCard key={product._id} product={product} />
									))}
								</Slider>
							</div>
						</AnimationComponents>
						{/* flash sale */}
						<AnimationComponents className='my-24'>
							<div className='my-6 flex items-center justify-between rounded-md bg-white px-2 py-4 '>
								<div className='flex items-center '>
									<img src='https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/flashsale/label-flashsale.svg?q=' />

									<p className=' mx-5'>Kết thúc sau</p>
									{/* <Countdown date={Date.now() + 10000} /> */}
								</div>
								<div className='flex items-center text-base hover:text-blue'>
									<Link href='/flashSale'> Xem tất cả</Link>
									<FontAwesomeIcon icon={faChevronRight} className='h-4 w-4 font-thin' />
								</div>
							</div>
							<div className='slider-container-item'>
								<Slider {...settings}>
									{dataBookss.map((product) => (
										<ProductCard key={product._id} product={product} />
									))}
								</Slider>
							</div>
						</AnimationComponents>
						{/* Category */}
						<AnimationComponents className='my-24'>
							<div className='my-6 flex items-center justify-between'>
								<h3 className=' text-2xl'>Danh mục sản phẩm</h3>
								<div className='flex items-center text-base hover:text-blue'>
									<Link href='/bookCategory'>Xem tất cả</Link>

									<ChevronRight style={{ height: '16px', width: '16px' }} />
								</div>
							</div>
							<div className='grid grid-cols-5 gap-6'>
								<CategoryLink href='#' icon={faBook} name='Văn học' colorC1 />
								<CategoryLink href='#' icon={faBrain} name='Tâm lý' colorC2 />
								<CategoryLink href='#' icon={faChild} name='Thiếu nhi' colorC3 />
								<CategoryLink href='#' icon={faDollarSign} name='Kinh tế' colorC4 />
								<CategoryLink href='#' icon={faEarthAsia} name='Ngoại ngữ' colorC5 />
							</div>
						</AnimationComponents>
						{/* Book Selling */}
						<AnimationComponents className='my-24'>
							<div className='my-6 flex items-center justify-between'>
								<h3 className=' text-2xl'>Sách bán chạy nhất</h3>
								<div className='flex items-center text-base hover:text-blue'>
									<Link href='#'>Xem tất cả</Link>
									<ChevronRight style={{ height: '16px', width: '16px' }} />
								</div>
							</div>
							<div className='slider-container-item'>
								<Slider {...settings}>
									{flashProducts.map((product) => (
										<ProductCard key={product._id.$oid} product={product} />
									))}
								</Slider>
							</div>
						</AnimationComponents>
						{/* ... */}
						<div className='my-24'>
							<div className='my-6 flex items-center justify-between'>
								<h3 className=' text-2xl'>Kinh tế</h3>
								<div className='flex items-center text-base hover:text-blue'>
									<Link href='#'>Xem tất cả</Link>
									<ChevronRight style={{ height: '16px', width: '16px' }} />
								</div>
							</div>
							<div className='slider-container-item'>
								<Slider {...settings}>
									{filteredProducts.map((product) => (
										<ProductCard key={product._id.$oid} product={product} />
									))}
								</Slider>
							</div>
						</div>
						{/* Thương hiệu nổi bật */}
						<AnimationComponents className='my-24'>
							<Tabs
								activeLinkStyle={{
									color: '#009FE5',
									borderBottom: '1px solid #009FE5',
									transition: 'background-color 0.3s ease',
									paddingBottom: '8px',
								}}
							>
								<div className='flex items-center justify-between'>
									<div className='my-6 flex items-center justify-between '>
										<h3 className=' text-2xl font-bold'>Thương hiệu nổi bật</h3>
									</div>
									<div>
										<TabLink to='tab1' className=' hover:text-blue'>
											Thanh Niên
										</TabLink>
										<TabLink to='tab2' className='mx-10 hover:text-blue'>
											Tân Văn
										</TabLink>
										<TabLink to='tab3' className=' hover:text-blue'>
											Thế giới
										</TabLink>
									</div>
								</div>

								<TabContent for='tab1' className='mt-10'>
									<div className='slider-container-item'>
										<Slider {...settings}>
											{filteredTab1.map((product) => (
												<ProductCard key={product._id.$oid} product={product} />
											))}
										</Slider>
									</div>
									{/* <div className=' my-10 flex items-center justify-center '>
										<Link
											href='#'
											className=' rounded-md border border-blue px-4 py-1 font-bold text-blue hover:bg-blue hover:text-white '
										>
											Xem thêm
										</Link>
									</div> */}
								</TabContent>

								<TabContent for='tab2' className='mt-10'>
									<div className='slider-container-item'>
										<Slider {...settings}>
											{filteredTab2.map((product) => (
												<ProductCard key={product._id.$oid} product={product} />
											))}
										</Slider>
									</div>
									{/* <div className=' my-10 flex items-center justify-center '>
										<Link
											href='#'
											className=' rounded-md border border-blue px-4 py-1 font-bold text-blue hover:bg-blue hover:text-white '
										>
											Xem thêm
										</Link>
									</div> */}
								</TabContent>

								<TabContent for='tab3' className='mt-10'>
									<div className='slider-container-item'>
										<Slider {...settings}>
											{filteredTab3.map((product) => (
												<ProductCard key={product._id.$oid} product={product} />
											))}
										</Slider>
									</div>
									{/* <div className=' my-10 flex items-center justify-center '>
									<Link
										href='#'
										className=' rounded-md border border-blue px-4 py-1 font-bold text-blue hover:bg-blue hover:text-white '
									>
										Xem thêm
									</Link>
								</div> */}
								</TabContent>
							</Tabs>
						</AnimationComponents>
					</>
				)}
			</div>
		</div>
	);
}

export default HomePage;
