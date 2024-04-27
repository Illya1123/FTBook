'use client';
import { useEffect, useState } from 'react';
import Header from '../_components/Header';
import Link from 'next/link';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faTicket } from '@fortawesome/free-solid-svg-icons';
import RootLayout from '@/app/layout';

function CartPage() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [isCart, setIsCart] = useState(true);
	const [quantity, setQuantity] = useState(1);

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	return (
		<>
			<title>Giỏ hàng</title>
			<div className='mx-auto max-w-[1200px] '>
				{isCart ? (
					<>
						<div className='my-2 font-bold'>
							<p>
								GIỎ HÀNG <span>2</span> sản phẩm
							</p>
						</div>
						<div className='flex items-start '>
							<div className=' w-[70%]'>
								<div className='flex items-center justify-between rounded-md bg-white p-4'>
									<div className='flex w-[60%] items-center'>
										<input type='checkbox' name='checkAllProduct' id='' className='mr-3' />
										<label htmlFor='checkAllProduct'>
											Chọn tất cả <span>2</span> sản phẩm
										</label>
									</div>
									<div className='w-[40%]'>
										<div className='flex justify-around'>
											<p>Số lượng</p>
											<p>Thành tiền</p>
										</div>
									</div>
								</div>
								<div className='rounded-md bg-white'>
									<div className='my-4 flex items-center justify-between  border-b p-4'>
										<div className='flex w-[60%] items-center'>
											<input type='checkbox' name='checkAllProduct' id='' className='mr-3' />
											<label htmlFor='checkAllProduct' className='flex'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product//i/m/image_195509_1_13799.jpg'
													alt=''
													className=' h-28 w-28'
												/>
												<p className=' text-sm'>Thành Công Trong Kinh Doanh Nhờ NLP</p>
											</label>
										</div>
										<div className='w-[40%]'>
											<div className='flex items-center justify-around'>
												<div className='flex items-center'>
													<button
														className=' flex  h-8 items-center rounded-l border-y border-l px-3 py-1 text-gray-700 hover:bg-gray-100'
														onClick={decreaseQuantity}
													>
														-
													</button>
													<input
														type='text'
														className='h-8 w-12 border-y text-center'
														value={quantity}
														readOnly
													/>
													<button
														className='flex h-8  items-center rounded-r border-y border-r px-3 py-1 text-gray-700 hover:bg-gray-100'
														onClick={increaseQuantity}
													>
														+
													</button>
												</div>
												<p>162.000 đ</p>
											</div>
										</div>
									</div>
									<div className='my-4 flex items-center justify-between border-b  p-4 '>
										<div className='flex w-[60%] items-center'>
											<input type='checkbox' name='checkAllProduct' id='' className='mr-3' />
											<label htmlFor='checkAllProduct' className='flex'>
												<img
													src='https://cdn0.fahasa.com/media/catalog/product//i/m/image_195509_1_13799.jpg'
													alt=''
													className=' h-28 w-28'
												/>
												<p className=' text-sm'>Thành Công Trong Kinh Doanh Nhờ NLP</p>
											</label>
										</div>
										<div className='w-[40%]'>
											<div className='flex items-center justify-around'>
												<div className='flex items-center'>
													<button
														className=' flex  h-8 items-center rounded-l border-y border-l px-3 py-1 text-gray-700 hover:bg-gray-100'
														onClick={decreaseQuantity}
													>
														-
													</button>
													<input
														type='text'
														className='h-8 w-12 border-y text-center'
														value={quantity}
														readOnly
													/>
													<button
														className='flex h-8  items-center rounded-r border-y border-r px-3 py-1 text-gray-700 hover:bg-gray-100'
														onClick={increaseQuantity}
													>
														+
													</button>
												</div>
												<p>162.000 đ</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='ml-[2%] w-[28%] rounded-md '>
								<div className='flex items-center justify-between bg-white p-4  text-blue'>
									<div className='flex items-center'>
										<FontAwesomeIcon icon={faTicket} />
										<p className='ml-2'>KHUYẾN MÃI</p>
									</div>
									<Button
										className=' bg-transparent text-blue hover:text-blue1Hover'
										onPress={onOpen}
									>
										Xem thêm <FontAwesomeIcon icon={faAngleRight} />
									</Button>
									<Modal isOpen={true} onOpenChange={onOpenChange} size='3xl'>
										<ModalContent onScroll={true}>
											{(onClose) => (
												<>
													<ModalHeader className='flex flex-col gap-1'>
														Danh sách mã khuyến mãi
													</ModalHeader>
													<ModalBody>
														<div className=' h-96 overflow-auto'>
															<div className='flex items-center justify-between'>
																<p>Mã Khuyến mãi</p>
																<p>Áp dụng tới đa: 1</p>
															</div>
															<div className='flex items-start gap-4 '>
																<div className=' bg-image-sale  flex h-36 w-[17%]  items-center  justify-center bg-contain bg-no-repeat'>
																	<img
																		src='https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/promotion/ico_promotion.svg?q=105606'
																		alt='sale '
																		className=' '
																	/>
																</div>
																<div className='w-[80%]'>
																	<div>
																		<p>MÃ GIẢM GIÁ 20K - ĐƠN HÀNG TỪ 150K</p>
																	</div>
																	<div className=' text-right'>
																		<Button>Áp dụng</Button>
																	</div>
																</div>
															</div>
														</div>
													</ModalBody>
													{/* <ModalFooter>
														<Button color='danger' variant='light' onPress={onClose}>
															Close
														</Button>
														<Button color='primary' onPress={onClose}>
															Action
														</Button>
													</ModalFooter> */}
												</>
											)}
										</ModalContent>
									</Modal>
								</div>
								<div className='border '></div>
								<div className='my-4  bg-white p-4 '>
									<div className='my-2 flex justify-between'>
										<p className='w-[70%]'>Thành tiền</p>
										<p className=' text-right'>264.400 đ</p>
									</div>
									<div className='my-2 flex justify-between'>
										<p className='w-[70%]'>Phí vận chuyển (Giao hàng tiêu chuẩn)</p>
										<p className=' text-right'>19.000 đ</p>
									</div>
									<div className='border'></div>
									<div className='my-2 flex items-center justify-between'>
										<p className='font-bold'>Tổng Số Tiền (gồm VAT)</p>
										<p className='text-xl font-bold text-orange'>283.400 đ</p>
									</div>
									<Link
										className='my-2 block w-full rounded-md bg-blue py-2 text-center font-bold text-white hover:bg-blueHover'
										href='#'
									>
										THANH TOÁN
									</Link>
								</div>
							</div>
						</div>
					</>
				) : (
					<div className='mt-16 flex min-h-[680px] items-center justify-center bg-white py-8'>
						<div>
							<div className='my-4 flex items-center justify-center'>
								<img
									src='https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/checkout_cart/ico_emptycart.svg'
									className='h-40 w-40'
								/>
							</div>
							<p className='my-8 text-sm'> Chưa có sản phẩm trong giỏ hàng của bạn.</p>
							<div className='my-4 rounded-md border border-blue bg-blue px-2 py-2 text-center text-base text-white'>
								<Link href='#'>MUA SẮM NGAY</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default CartPage;
