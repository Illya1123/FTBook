'use client';
import { UserButton, useUser } from '@clerk/nextjs';
import { TabContent, TabLink, Tabs } from 'react-tabs-redux';
// import Countdown from 'react-countdown';
import React from 'react';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
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

import Link from 'next/link';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import AnimationComponents from '../_components/AnimationComponents';

const slides = [
	'https://cdn0.fahasa.com/media/magentothem/banner7/Week2_T424_Banner_Slide_840x320_1.jpg',
	'https://cdn0.fahasa.com/media/magentothem/banner7/Gold_MCBooks0424_Slide_840x320.jpg',
	'https://cdn0.fahasa.com/media/magentothem/banner7/TanViet_Silver_0424_Ver1_Slide_840x320_1.jpg',
	'https://cdn0.fahasa.com/media/magentothem/banner7/Zenbook_0424_BannerSlide_840x320.jpg',
	'https://cdn0.fahasa.com/media/magentothem/banner7/HSO_DoChoiT324-slide_-smallbanner_Slide_840x320.jpg',
	'https://cdn0.fahasa.com/media/magentothem/banner7/VPP_Slide_T4_840x320_1.jpg',
];

function HomePage() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const settingsSlider = {
		dots: true,
		infinite: true,
		speed: 1000,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	var settings = {
		dots: false,
		infinite: false,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 4,
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
			<div
				className={className}
				style={{ ...style, display: 'block', width: '44px' }}
				onClick={onClick}
			/>
		);
	}

	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
	}
	const SlideItem = ({ imageUrl }) => {
		return <img className='h-[378px] w-full' src={imageUrl} alt='Slider Item' />;
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
				{/* flash sale */}
				<AnimationComponents className='my-24'>
					<div className='my-6 flex items-center justify-between rounded-md bg-white px-2 py-4 '>
						<div className='flex items-center '>
							<img src='https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/flashsale/label-flashsale.svg?q=' />

							<p className=' mx-5'>Kết thúc sau</p>
							{/* <Countdown date={Date.now() + 10000} /> */}
						</div>
						<div className='flex items-center text-base hover:text-blue'>
							<Link href='#'> Xem tất cả</Link>
							<FontAwesomeIcon icon={faChevronRight} className='h-4 w-4 font-thin' />
						</div>
					</div>
					<div className='slider-container-item'>
						<Slider {...settings}>
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white '>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl  ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>{' '}
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p> 24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>
						</Slider>
					</div>
				</AnimationComponents>
				{/* Category */}
				<AnimationComponents className='my-24'>
					<div className='my-6 flex items-center justify-between'>
						<h3 className=' text-2xl'>Danh mục sản phẩm</h3>
						<div className='flex items-center text-base hover:text-blue'>
							<Link href='#'>Xem tất cả</Link>
							<FontAwesomeIcon icon={faChevronRight} className='h-4 w-4 font-thin' />
						</div>
					</div>
					<div className='grid grid-cols-5 gap-6'>
						<Link
							href='#'
							className='flex min-h-40 flex-col items-center justify-center rounded-md bg-[#93CFFF] hover:opacity-60'
						>
							<FontAwesomeIcon icon={faBook} className='h-10 w-10 text-white' />
							<p className='mt-4 text-lg text-white'>Văn học</p>
						</Link>
						<Link
							href='#'
							className=' flex min-h-40 flex-col items-center justify-center rounded-md bg-[#FF9C8C] hover:opacity-60'
						>
							<FontAwesomeIcon icon={faBrain} className='h-10 w-10 text-white' />
							<p className='mt-4 text-lg text-white'>Tâm lý</p>
						</Link>
						<Link
							href='#'
							className=' flex min-h-40 flex-col items-center justify-center rounded-md bg-[#FF649A] hover:opacity-60'
						>
							<FontAwesomeIcon icon={faChild} className='h-10 w-10 text-white' />
							<p className='mt-4 text-lg text-white'>Thiếu nhi</p>
						</Link>
						<Link
							href='#'
							className=' flex min-h-40 flex-col items-center justify-center rounded-md bg-[#D3A77F] hover:opacity-60'
						>
							<FontAwesomeIcon icon={faDollarSign} className='h-10 w-10 text-white' />
							<p className='mt-4 text-lg text-white'>Kinh tế</p>
						</Link>
						<Link
							href='#'
							className=' flex min-h-40 flex-col items-center justify-center rounded-md bg-[#00C9AC] hover:opacity-60'
						>
							<FontAwesomeIcon icon={faEarthAsia} className='h-10 w-10 text-white' />
							<p className='mt-4 text-lg text-white'>Ngoại ngữ</p>
						</Link>
					</div>
				</AnimationComponents>
				{/* Book Selling */}
				<AnimationComponents className='my-24'>
					<div className='my-6 flex items-center justify-between'>
						<h3 className=' text-2xl'>Sách bán chạy nhất</h3>
						<div className='flex items-center text-base hover:text-blue'>
							<Link href='#'>Xem tất cả</Link>
							<FontAwesomeIcon icon={faChevronRight} className='h-4 w-4 font-thin' />
						</div>
					</div>
					<div className='slider-container-item'>
						<Slider {...settings}>
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<Button onPress={onOpen} className=' bg-transparent '>
														<FontAwesomeIcon icon={faEye} className='  text-xl' />
													</Button>

													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view1
													</p>
													<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
														<ModalContent className=' min-w-[600px]'>
															{(onClose) => (
																<>
																	<ModalHeader className='flex flex-col gap-1'>
																		{/* <Button color='danger' variant='light' onPress={onClose}>
																		
																		</Button> */}
																	</ModalHeader>
																	<ModalBody>
																		<div className='flex  '>
																			<img
																				src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
																				alt=''
																				className='h-52 w-48'
																			/>
																			<div>
																				<h3>Hackers Ielts Listening (Tái Bản)</h3>
																				<p>Tác giả: ABC</p>
																				<p>Nhà cung cấp: XYZ</p>
																				<p>Thông tin về sách</p>
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
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>{' '}
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>
						</Slider>
					</div>
				</AnimationComponents>
				{/* ... */}
				<AnimationComponents className='my-24'>
					<div className='my-6 flex items-center justify-between'>
						<h3 className=' text-2xl'>Kinh tế</h3>
						<div className='flex items-center text-base hover:text-blue'>
							<Link href='#'>Xem tất cả</Link>
							<FontAwesomeIcon icon={faChevronRight} className='h-4 w-4 font-thin' />
						</div>
					</div>
					<div className='slider-container-item'>
						<Slider {...settings}>
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>{' '}
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>
							<div>
								<div className='relative max-w-[288px] rounded-md bg-white'>
									<div className='group'>
										<div className=' relative flex cursor-pointer flex-col items-center'>
											<div className='p-6'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
													alt=''
													className='h-52 w-48'
												/>
											</div>
											<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faEye} className=' text-xl ' />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Quick view
													</p>
												</div>

												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faHeart} />
													<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to WishList
													</p>
												</div>
												<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
													<FontAwesomeIcon icon={faCartShopping} />
													<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
														Add to Cart
													</p>
												</div>
											</div>
										</div>
										<Link href='#'>
											<div className='mx-4 px-2 py-4'>
												<div>
													<p className='line-clamp-3 text-sm'>Hackers Ielts Listening (Tái Bản)</p>
												</div>
												<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
												<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
											</div>
										</Link>
									</div>
									<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
										<p>24%</p>
										<div className='half-square'></div>
									</div>
								</div>
							</div>
						</Slider>
					</div>
				</AnimationComponents>
				{/* Thương hiệu nổi bật */}
				<AnimationComponents className='my-24'>
					<div className='my-6 flex items-center justify-between '>
						<h3 className=' text-2xl font-bold'>Thương hiệu nổi bật</h3>
					</div>
					{/* <div>
						<div className='flex '>
							<p className={`cursor-pointer border-b border-blue pb-2 text-blue`}>Minh Long</p>
							<p className={` mx-12 cursor-pointer pb-2 hover:text-blue`}>Tân việt</p>
							<p className={` cursor-pointer pb-2 hover:text-blue`}>Zenbooks</p>
						</div>
					</div> */}

					<Tabs
						activeLinkStyle={{
							color: '#009FE5',
							borderBottom: '1px solid #009FE5',
							transition: 'background-color 0.3s ease',
							paddingBottom: '8px',
						}}
					>
						<TabLink to='tab1' className=' hover:text-blue'>
							Minh Long
						</TabLink>
						<TabLink to='tab2' className='mx-10 hover:text-blue'>
							Tân việt
						</TabLink>
						<TabLink to='tab3' className=' hover:text-blue'>
							Zenbooks
						</TabLink>

						<TabContent for='tab1' className='mt-10'>
							<div className='slider-container-item'>
								<Slider {...settings}>
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className='h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>
									<div className='relative max-w-[288px] rounded-md bg-white'>
										<div className='group'>
											<div className=' relative flex cursor-pointer flex-col items-center'>
												<div className='p-6'>
													<img
														src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
														alt=''
														className='h-52 w-48'
													/>
												</div>
												<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
													<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
														<FontAwesomeIcon icon={faEye} className=' text-xl ' />
														<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
															Quick view
														</p>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className='h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className='h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className='h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>{' '}
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className='h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className='h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>
								</Slider>
							</div>
							<div className=' my-10 flex items-center justify-center '>
								<Link
									href='#'
									className=' rounded-md border border-blue px-4 py-1 font-bold text-blue hover:bg-blue hover:text-white '
								>
									Xem thêm
								</Link>
							</div>
						</TabContent>

						<TabContent for='tab2' className='mt-10'>
							<div className='slider-container-item'>
								<Slider {...settings}>
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className='h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className='h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className='h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className='h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className='h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>{' '}
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className='h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className='h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>
								</Slider>
							</div>
							<div className=' my-10 flex items-center justify-center '>
								<Link
									href='#'
									className=' rounded-md border border-blue px-4 py-1 font-bold text-blue hover:bg-blue hover:text-white '
								>
									Xem thêm
								</Link>
							</div>
						</TabContent>

						<TabContent for='tab3' className='mt-10'>
							<div className='slider-container-item'>
								<Slider {...settings}>
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className='h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className=' h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className='h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className='h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className='h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>{' '}
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className='h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through'>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>
									<div>
										<div className='relative max-w-[288px] rounded-md bg-white'>
											<div className='group'>
												<div className=' relative flex cursor-pointer flex-col items-center'>
													<div className='p-6'>
														<img
															src='https://cdn0.fahasa.com/media/catalog/product/8/9/8935309503162.jpg'
															alt=''
															className='h-52 w-48'
														/>
													</div>
													<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faEye} className=' text-xl ' />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Quick view
															</p>
														</div>

														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faHeart} />
															<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to WishList
															</p>
														</div>
														<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
															<FontAwesomeIcon icon={faCartShopping} />
															<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
																Add to Cart
															</p>
														</div>
													</div>
												</div>
												<Link href='#'>
													<div className='mx-4 px-2 py-4'>
														<div>
															<p className='line-clamp-3 text-sm'>
																Hackers Ielts Listening (Tái Bản)
															</p>
														</div>
														<p className='my-2 text-base font-bold text-red-500'>240.000 đ</p>
														<p className='text-sm text-gray-300 line-through '>140.000 đ</p>
													</div>
												</Link>
											</div>
											<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
												<p>24%</p>
												<div className='half-square'></div>
											</div>
										</div>
									</div>
								</Slider>
							</div>
							<div className=' my-10 flex items-center justify-center '>
								<Link
									href='#'
									className=' rounded-md border border-blue px-4 py-1 font-bold text-blue hover:bg-blue hover:text-white '
								>
									Xem thêm
								</Link>
							</div>
						</TabContent>
					</Tabs>
				</AnimationComponents>
			</div>
			<UserButton />
		</div>
	);
}

export default HomePage;
