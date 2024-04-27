'use client';
import React from 'react';

import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Button,
	Tooltip,
} from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faChevronDown, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import StarRatings from 'react-star-ratings';
import SideBarComponent from '../_components/SideBarComponent';

function bookCategory() {
	const [selectedKeys, setSelectedKeys] = React.useState(new Set(['Bán chạy tuần']));

	const selectedValue = React.useMemo(
		() => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
		[selectedKeys],
	);
	return (
		<div>
			<title>Book Category</title>
			<div className='my-10 flex'>
				<div className='min-w-[280px] rounded-md bg-white'>
					<SideBarComponent />
				</div>
				<div className='ml-5 rounded-md bg-white p-5'>
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
									<DropdownItem key='Bán chạy tuần'>Bán chạy tuần</DropdownItem>
									<DropdownItem key='Giá tăng dần'>Giá tăng dần</DropdownItem>
									<DropdownItem key='Giá giảm dần'>Giá giảm dần</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
					</div>
					{/* item */}
					<div className=' grid grid-cols-4 gap-1'>
						<div className='my-5'>
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
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'> */}
											<Tooltip showArrow={true} content='Quick view' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faEye} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <FontAwesomeIcon icon={faEye} className=' text-xl  ' />
												<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Quick view
												</p> */}
											{/* </div> */}

											<Tooltip showArrow={true} content='	Add to WishList' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faHeart} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
												<FontAwesomeIcon icon={faHeart} />
												<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Add to WishList
												</p>
											</div> */}
											<Tooltip showArrow={true} content='	Add to Cart' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faCartShopping} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
												<FontAwesomeIcon icon={faCartShopping} />
												<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Add to Cart
												</p>
											</div> */}
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
						</div>
						<div className='my-5'>
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
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'> */}
											<Tooltip showArrow={true} content='Quick view' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faEye} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <FontAwesomeIcon icon={faEye} className=' text-xl  ' />
												<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Quick view
												</p> */}
											{/* </div> */}

											<Tooltip showArrow={true} content='	Add to WishList' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faHeart} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
												<FontAwesomeIcon icon={faHeart} />
												<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Add to WishList
												</p>
											</div> */}
											<Tooltip showArrow={true} content='	Add to Cart' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faCartShopping} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
												<FontAwesomeIcon icon={faCartShopping} />
												<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Add to Cart
												</p>
											</div> */}
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
						</div>
						<div className='my-5'>
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
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'> */}
											<Tooltip showArrow={true} content='Quick view' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faEye} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <FontAwesomeIcon icon={faEye} className=' text-xl  ' />
												<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Quick view
												</p> */}
											{/* </div> */}

											<Tooltip showArrow={true} content='	Add to WishList' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faHeart} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
												<FontAwesomeIcon icon={faHeart} />
												<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Add to WishList
												</p>
											</div> */}
											<Tooltip showArrow={true} content='	Add to Cart' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faCartShopping} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
												<FontAwesomeIcon icon={faCartShopping} />
												<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Add to Cart
												</p>
											</div> */}
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
						</div>
						<div className='my-5'>
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
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'> */}
											<Tooltip showArrow={true} content='Quick view' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faEye} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <FontAwesomeIcon icon={faEye} className=' text-xl  ' />
												<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Quick view
												</p> */}
											{/* </div> */}

											<Tooltip showArrow={true} content='	Add to WishList' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faHeart} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
												<FontAwesomeIcon icon={faHeart} />
												<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Add to WishList
												</p>
											</div> */}
											<Tooltip showArrow={true} content='	Add to Cart' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faCartShopping} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
												<FontAwesomeIcon icon={faCartShopping} />
												<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Add to Cart
												</p>
											</div> */}
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
						</div>
						<div className='my-5'>
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
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'> */}
											<Tooltip showArrow={true} content='Quick view' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faEye} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <FontAwesomeIcon icon={faEye} className=' text-xl  ' />
												<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Quick view
												</p> */}
											{/* </div> */}

											<Tooltip showArrow={true} content='	Add to WishList' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faHeart} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
												<FontAwesomeIcon icon={faHeart} />
												<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Add to WishList
												</p>
											</div> */}
											<Tooltip showArrow={true} content='	Add to Cart' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faCartShopping} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
												<FontAwesomeIcon icon={faCartShopping} />
												<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Add to Cart
												</p>
											</div> */}
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
						</div>
						<div className='my-5'>
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
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'> */}
											<Tooltip showArrow={true} content='Quick view' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faEye} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <FontAwesomeIcon icon={faEye} className=' text-xl  ' />
												<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Quick view
												</p> */}
											{/* </div> */}

											<Tooltip showArrow={true} content='	Add to WishList' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faHeart} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
												<FontAwesomeIcon icon={faHeart} />
												<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Add to WishList
												</p>
											</div> */}
											<Tooltip showArrow={true} content='	Add to Cart' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faCartShopping} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
												<FontAwesomeIcon icon={faCartShopping} />
												<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Add to Cart
												</p>
											</div> */}
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
						</div>
						<div className='my-5'>
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
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'> */}
											<Tooltip showArrow={true} content='Quick view' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faEye} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <FontAwesomeIcon icon={faEye} className=' text-xl  ' />
												<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Quick view
												</p> */}
											{/* </div> */}

											<Tooltip showArrow={true} content='	Add to WishList' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faHeart} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
												<FontAwesomeIcon icon={faHeart} />
												<p className='quick absolute -top-8 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Add to WishList
												</p>
											</div> */}
											<Tooltip showArrow={true} content='	Add to Cart' delay={300}>
												<Button className='h-11 min-w-11 rounded-md bg-white p-0'>
													<FontAwesomeIcon icon={faCartShopping} className=' text-xl  ' />
												</Button>
											</Tooltip>
											{/* <div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
												<FontAwesomeIcon icon={faCartShopping} />
												<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
													Add to Cart
												</p>
											</div> */}
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default bookCategory;
