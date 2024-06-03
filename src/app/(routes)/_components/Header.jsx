'use client';
import { UserButton, useUser } from '@clerk/nextjs';
import { faBell, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import {
	faBook,
	faBrain,
	faCartShopping,
	faDollarSign,
	faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

import { useState } from 'react';
import { Book, Frown, LayoutList, RotateCcw, UserRoundCog } from 'lucide-react';
import AnimationComponents from './AnimationComponents';
import { useTheme } from './ThemeProvider';
import { useRouter } from 'next/navigation';
function Header({ activeHome, activeBook, activeAbout, activeContact }) {
	const { roleUser, setValueSearch } = useTheme();
	const { user } = useUser();
	const [isFocus, setIsFocus] = useState(false);
	const [dataProduct, setDataProduct] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [resultFilter, setResultFilter] = useState();
	const router = useRouter();
	// useEffect(() => {
	// 	user && createUserProfile();
	// }, [user]);

	// const createUserProfile = () => {
	// 	const data = {
	// 		fullName: user.fullName,
	// 		email: user.primaryEmailAddress.emailAddress,
	// 	};
	// 	GlobalApi.createUser(data).then((res) => {
	// 		console.log(res.data);
	// 		localStorage.setItem('isLogin', true);
	// 	});
	// };
	useEffect(() => {
		fetch('http://localhost:5000/product')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				setDataProduct(data);
				setIsLoading(true);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	});
	// useEffect(() => {
	// 	if (isLoading) {
	// 		console.log(dataProduct);
	// 	}
	// }, [isLoading]);
	const [quantityCart, setQuantityCart] = useState(0);
	const [isAuth, setIsAuth] = useState(false);
	const [valueSearched, setValueSearched] = useState([]);
	const handleChangeValue = (e) => {
		const value = e.target.value;
		if (value.indexOf(' ') === 0) {
			return;
		}
		setValueSearched(value);
		const filterProducts = dataProduct.filter((product) =>
			product.name.toLowerCase().includes(value.toLowerCase()),
		);
		setResultFilter(filterProducts);
		// setIsFocus(false);
	};
	const handleFocus = () => {
		setIsFocus(true);
	};
	const handleBlur = () => {
		setIsFocus(false);
	};
	const ItemResult = ({ imageUrl, name }) => {
		return (
			<div className='flex cursor-pointer items-center gap-2 px-1 py-2 hover:bg-grayhover'>
				<img src={imageUrl} alt='a' className='h-16 w-12 ' />

				<p className='line-clamp-2'>{name}</p>
			</div>
		);
	};
	const handleSwitchAdmin = () => {
		window.location.href = 'http://localhost:3000';
	};
	const handleSetValueSearched = () => {
		setValueSearch(valueSearched);
		router.push('/bookCategory', { query: { valueSearched } });
	};
	return (
		<div className='fixed left-0 right-0 top-0 z-[90]   border-b bg-white'>
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
					<Link className={`${activeBook ? 'text-blue' : ''} hover:text-blue`} href='/bookCategory'>
						Sách
					</Link>
					<Link className={`${activeAbout ? 'text-blue' : ''} hover:text-blue`} href='/about'>
						Giới thiệu
					</Link>
					<Link className={`${activeContact ? 'text-blue' : ''} hover:text-blue`} href='/contact'>
						Liên hệ
					</Link>
				</div>

				<div className='relative'>
					<input
						className=' w-[400px] rounded-md border py-2 pl-3 pr-20 outline-none'
						placeholder='Bạn tìm gì...'
						onChange={handleChangeValue}
						value={valueSearched}
						onFocus={handleFocus}
						onBlur={handleBlur}
					/>
					{isFocus ? (
						<div className=' absolute z-[1000000] mt-2 w-[400px] border bg-white px-2 pt-3 shadow-inner '>
							<div>
								<div className=' font-bold'>Từ khóa hot</div>
								<div className=' flex cursor-pointer items-center gap-1 py-1 hover:bg-grayhover'>
									<RotateCcw style={{ width: '16px', height: '16px' }} />
									<p>Sách học Tiếng Anh</p>
								</div>
								<div className=' flex cursor-pointer items-center gap-1 py-1 hover:bg-grayhover'>
									<RotateCcw style={{ width: '16px', height: '16px' }} />
									<p>Sách luyện thi</p>
								</div>
								<div className=' flex cursor-pointer items-center gap-1 py-1 hover:bg-grayhover'>
									<RotateCcw style={{ width: '16px', height: '16px' }} />
									<p>Sách về Marketing</p>
								</div>
							</div>
							{valueSearched.length > 0 ? (
								<div className='mt-2 border-t-2 pt-3'>
									<div className='flex items-center gap-1'>
										<p className='text-base font-bold'>Sản phẩm</p>
									</div>
									{resultFilter.length > 0 ? (
										resultFilter
											.slice(0, 3)
											.map((result) => (
												<ItemResult
													key={result._id}
													imageUrl={result.image[0]}
													name={result.name}
												/>
											))
									) : (
										<div className='flex items-center justify-center gap-2 py-3 '>
											Không tìm thấy sản phẩm phù hợp <Frown />
										</div>
									)}
								</div>
							) : (
								<div className='mt-2 border-t-2 pt-3'>
									<div className='flex items-center gap-1'>
										<p className=' text-base font-bold'>Danh mục sản phẩm</p>
									</div>
									<div className='flex cursor-pointer items-center gap-2 px-1 py-2 hover:bg-grayhover'>
										<div className='flex items-center justify-center rounded-md bg-category1 p-1'>
											<FontAwesomeIcon icon={faBook} className='h-4 w-4 text-white' />
										</div>
										<p>Văn học</p>
									</div>
									<div className='flex cursor-pointer items-center gap-2 px-1 py-2 hover:bg-grayhover'>
										<div className='flex items-center justify-center rounded-md bg-category2 p-1'>
											<FontAwesomeIcon icon={faBrain} className='h-4 w-4 text-white' />
										</div>
										<p>Tâm lý</p>
									</div>
									<div className='flex cursor-pointer items-center gap-2 px-1 py-2 hover:bg-grayhover'>
										<div className='flex items-center justify-center rounded-md bg-category4 p-1'>
											<FontAwesomeIcon icon={faDollarSign} className='h-4 w-4 text-white' />
										</div>
										<p>Kinh tế</p>
									</div>
								</div>
							)}
						</div>
					) : (
						''
					)}
					{valueSearched.length > 0 && (
						<div
							// href={`/bookCategory`}
							className='absolute -right-5 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-blue px-6 py-1 text-white hover:opacity-60'
							onClick={handleSetValueSearched}
						>
							<FontAwesomeIcon icon={faMagnifyingGlass} className='h-4 w-4' />
						</div>
					)}
				</div>

				<div className='grid grid-cols-3 place-content-center items-center gap-4'>
					<div className=' group relative h-5 w-5 '>
						<FontAwesomeIcon icon={faBell} className='h-5 w-5 cursor-pointer' />
						{user ? (
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

					{roleUser === 'user' ? (
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
					) : roleUser === 'admin' ? (
						<div onClick={handleSwitchAdmin} className=' cursor-pointer'>
							<UserRoundCog />
							{/* <FontAwesomeIcon icon={faCartShopping} className=' h-5 w-5 ' /> */}
						</div>
					) : (
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
					)}
					{!user ? (
						<div className='group relative h-5 w-5'>
							<FontAwesomeIcon icon={faUser} className='z-50 h-5 w-5 cursor-pointer' />
							<div className=' invisible absolute -right-10 top-[160%] z-50 min-w-56   bg-white shadow-lg before:absolute before:-right-2 before:-top-3 before:h-8 before:w-20  group-hover:visible'>
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
						<UserButton afterSignOutUrl='/' />
					)}
				</div>
			</div>
		</div>
	);
}

export default Header;
