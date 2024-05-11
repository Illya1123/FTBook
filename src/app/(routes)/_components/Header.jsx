'use client';
import { UserButton, useUser } from '@clerk/nextjs';
import { faBell, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import GlobalApi from '@/app/_utils/GlobalApi';

import { useState } from 'react';


function Header({ activeHome, activeBook, activeAbout, activeContact }) {
	const {user} = useUser();
	useEffect(() => {
		user && createUserProfile();
	}, [user]);

	const createUserProfile = () => {
		const data = {
			fullName: user.fullName,
			email: user.primaryEmailAddress.emailAddress,
			img: user.imageUrl,
		}
		GlobalApi.createUser(data).then(res => {
			console.log(res.data);
		})
	}
	const [quantityCart, setQuantityCart] = useState(0);
	const [isAuth, setIsAuth] = useState(false);
	return (
		<div className='fixed left-0 right-0 top-0  z-[100000] border-b bg-white'>
			<div className='mx-auto flex max-w-[1200px] items-center justify-between py-4'>
				<div>
					<h1 className='text-2xl font-bold text-blue'>
						<Link href='/'>
							FT <span className='text-orange'>BOOK</span>
						</Link>
					</h1>
				</div>
				<div className='grid grid-cols-4 place-items-center gap-2'>
					<Link className={`${activeHome ? 'text-blue' : ''} hover:text-blue`} href='/'>
						Trang chủ
					</Link>
					<Link className={`${activeBook ? 'text-blue' : ''} hover:text-blue`} href='#'>
						Sách
					</Link>
					<Link className={`${activeAbout ? 'text-blue' : ''} hover:text-blue`} href='#'>
						Giới thiệu
					</Link>
					<Link className={`${activeContact ? 'text-blue' : ''} hover:text-blue`} href='#'>
						Liên hệ
					</Link>
				</div>
				<div className='relative'>
					<input
						className=' w-[400px] rounded-md border py-2 pl-3 pr-20 outline-none'
						placeholder='Bạn tìm gì...'
					/>
					<Link
						href='/search'
						className='absolute -right-5 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-blue px-6 py-1 text-white hover:opacity-60'
					>
						<FontAwesomeIcon icon={faMagnifyingGlass} className='h-4 w-4' />
					</Link>
				</div>
				<div className='grid grid-cols-3 place-content-center items-center gap-4'>
					<div className=' group relative h-5 w-5 '>
						<FontAwesomeIcon icon={faBell} className='h-5 w-5 cursor-pointer' />
						{isAuth ? (
							<div className='animate-fadeindown invisible  absolute right-0 top-[160%] z-50 min-w-80 bg-white before:absolute before:-right-2 before:-top-3 before:h-12 before:w-28    group-hover:visible'>
								<div className='rounded-md border '>
									<div className='flex items-center justify-between border-b  px-2 py-4'>
										<div className='flex items-center'>
											<FontAwesomeIcon icon={faBell} className='h-4 w-4' />
											<h3 className='ml-2 text-base font-bold'>Thông báo</h3>
										</div>
										<Link href='#' className='font-bold text-blue'>
											Xem tất cả
										</Link>
									</div>

									<div className=''>
										<Link href='#' className=' flex px-2 py-3 hover:bg-[#f2f4f5]'>
											<div className=' w-1/4'>
												<img src='https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/customer/ico_noti_other.svg' />
											</div>
											<div className='ml-2'>
												<p className=' text-sm font-bold'>SÀI GÒN BOOKS giảm mạnh 40%</p>
												<p className=' line-clamp-2 text-xs'>
													Giảm đến 40% các tựa sách Kinh tế, Văn học, Phụ nữ, Tâm lý kỹ năng,... Sài
													Gòn Books
												</p>
											</div>
										</Link>
										<Link href='#' className=' flex px-2 py-3 hover:bg-[#f2f4f5]'>
											<div className=' w-1/4'>
												<img src='https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/customer/ico_noti_other.svg' />
											</div>
											<div className='ml-2'>
												<p className=' text-sm font-bold'>SÀI GÒN BOOKS giảm mạnh 40%</p>
												<p className=' line-clamp-2 text-xs'>
													Giảm đến 40% các tựa sách Kinh tế, Văn học, Phụ nữ, Tâm lý kỹ năng,... Sài
													Gòn Books
												</p>
											</div>
										</Link>
										<Link href='#' className=' flex px-2 py-3 hover:bg-[#f2f4f5]'>
											<div className=' w-1/4'>
												<img src='https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/customer/ico_noti_other.svg' />
											</div>
											<div className='ml-2'>
												<p className=' text-sm font-bold'>SÀI GÒN BOOKS giảm mạnh 40%</p>
												<p className=' line-clamp-2 text-xs'>
													Giảm đến 40% các tựa sách Kinh tế, Văn học, Phụ nữ, Tâm lý kỹ năng,... Sài
													Gòn Books
												</p>
											</div>
										</Link>
										<Link href='#' className=' flex px-2 py-3 hover:bg-[#f2f4f5]'>
											<div className=' w-1/4'>
												<img src='https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/customer/ico_noti_other.svg' />
											</div>
											<div className='ml-2'>
												<p className=' text-sm font-bold'>SÀI GÒN BOOKS giảm mạnh 40%</p>
												<p className=' line-clamp-2 text-xs'>
													Giảm đến 40% các tựa sách Kinh tế, Văn học, Phụ nữ, Tâm lý kỹ năng,... Sài
													Gòn Books
												</p>
											</div>
										</Link>
									</div>
								</div>
							</div>
						) : (
							<div className=' animate-fadeindown invisible absolute right-0 top-[160%]  z-50 min-w-64  bg-white before:absolute before:-right-2  before:-top-3 before:h-12 before:w-28 group-hover:visible'>
								<div className='rounded-md border '>
									<div className='flex  items-center border-b px-2 py-4'>
										<FontAwesomeIcon icon={faBell} className='h-4 w-4' />
										<h3 className='ml-2 text-base font-bold'>Thông báo</h3>
									</div>

									<div className='px-2 pb-2'>
										<div className='flex w-full items-center justify-center '>
											<img
												src='https://media.istockphoto.com/id/936681148/vector/lock-icon.jpg?s=612x612&w=0&k=20&c=_0AmWrBagdcee-KDhBUfLawC7Gh8CNPLWls73lKaNVA='
												className=' h-32 w-32'
											/>
										</div>
										<p className='px-6 text-center text-sm'>Vui lòng đăng nhập để xem thông báo</p>
										<div className=' mt-4'>
											<div className='my-2 rounded-md border border-blue bg-blue px-2 py-1 text-center text-white hover:opacity-60'>
												<Link href='sign-in'>Đăng nhập</Link>
											</div>
											<div className='my-2 rounded-md border border-blue px-2 py-1 text-center text-blue hover:opacity-60'>
												<Link href='sign-up'>Đăng ký</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							)}
						</div>
						<div className=' relative h-5 w-5 '>
							<Link href='/cart'>
								<FontAwesomeIcon icon={faCartShopping} className=' h-5 w-5 ' />
							</Link>
							{quantityCart > 0 ? (
								<div className='absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white'>
									<p>{quantityCart}</p>
								</div>
							) : null}
						</div>
						{!user ? (
							<div className='group relative h-5 w-5'>
								<FontAwesomeIcon icon={faUser} className='z-50 h-5 w-5 cursor-pointer' />
								<div className=' invisible absolute right-0 top-[160%] z-50 min-w-56  animate-fade-in-down bg-white shadow-lg before:absolute before:-right-2 before:-top-3 before:h-8 before:w-11 group-hover:visible'>
									<div className=' rounded-md border px-2 py-2'>
										<div className='my-2 rounded-md border border-blue bg-blue px-2 py-1 text-center text-white hover:opacity-60 '>
											<Link href='sign-in'>Đăng nhập</Link>
										</div>
										<div className='my-2 rounded-md border border-blue px-2 py-1 text-center text-blue hover:opacity-60 '>
											<Link href='sign-up'>Đăng ký</Link>
										</div>
									</div>

								</div>
							</div>
						) : (
							<UserButton afterSignOutUrl='/'/>
						)}
					</div>
				</div>
			</div>

	);
}

export default Header;