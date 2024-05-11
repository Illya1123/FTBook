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
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from './cartReducer';
import { dataBookss } from '../_components/data';
import { useRouter } from 'next/navigation';
import { useTheme } from '../_components/ThemeProvider';
function CartPage() {
	const { setTotalPriceCheckout, setDataCheckout } = useTheme();
	const router = useRouter();
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [isCart, setIsCart] = useState(true);
	const [quantity, setQuantity] = useState(1);
	const [totalPrice, setTotalPrice] = useState(0);
	const [filterDataCart, setFilterDataCart] = useState([]);
	const [checkedItems, setCheckedItems] = useState({});
	const items = useSelector((state) => state.cart.items);
	// const dispatch = useDispatch();
	// console.log(items);

	// const decreaseQuantity = () => {
	// 	if (quantity > 1) {
	// 		setQuantity(quantity - 1);
	// 	}
	// };

	// const increaseQuantity = () => {
	// 	setQuantity(quantity + 1);
	// };

	useEffect(() => {
		const newFilterCart = dataBookss
			.filter((cart) => {
				const cartItem = items.find((item) => item.id === cart._id);
				return cartItem;
			})
			.map((cart) => {
				const cartItem = items.find((item) => item.id === cart._id);
				return { ...cart, quantity: cartItem.quantity };
			});
		setFilterDataCart(newFilterCart);
	}, [items]);
	useEffect(() => {
		// Calculate total price whenever filterDataCart or checkedItems changes
		const totalPrice = filterDataCart.reduce((acc, curr) => {
			if (checkedItems[curr._id]) {
				const price = curr.priceDiscount ? curr.priceDiscount : curr.priceSell;
				return acc + price * curr.quantity;
			}
			return acc;
		}, 0);
		setTotalPrice(totalPrice);
	}, [filterDataCart, checkedItems]);
	const toggleItemCheck = (itemId) => {
		console.log(1);
		setCheckedItems((prevCheckedItems) => ({
			...prevCheckedItems,
			[itemId]: !prevCheckedItems[itemId],
		}));
	};
	const totalPriceFinal = totalPrice + 19000;
	const CartItem = ({
		imageSrc,
		productName,
		price,
		quantity,
		itemId,
		isChecked,
		onToggleCheck,
	}) => {
		const dispatch = useDispatch();

		const handleDecrease = () => {
			dispatch(decreaseQuantity(itemId));
		};

		const handleIncrease = () => {
			dispatch(increaseQuantity(itemId));
		};
		return (
			<div className='my-4 flex items-center justify-between border-b p-4'>
				<div className='flex w-[60%] items-center'>
					{/* <input type='checkbox' name='checkAllProduct' id='' className='mr-3' /> */}
					<input
						type='checkbox'
						checked={isChecked}
						onChange={() => onToggleCheck(itemId)}
						className='mr-3'
					/>
					<label htmlFor='checkAllProduct' className='flex'>
						<img src={imageSrc} alt={productName} className='h-28 w-28' />
						<p className='text-sm'>{productName}</p>
					</label>
				</div>
				<div className='w-[40%]'>
					<div className='flex items-center justify-around'>
						<div className='flex items-center'>
							<button
								className='flex h-8 items-center rounded-l border-y border-l px-3 py-1 text-gray-700 hover:bg-gray-100'
								onClick={handleDecrease}
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
								className='flex h-8 items-center rounded-r border-y border-r px-3 py-1 text-gray-700 hover:bg-gray-100'
								onClick={handleIncrease}
							>
								+
							</button>
						</div>
						<p>{price}</p>
					</div>
				</div>
			</div>
		);
	};
	// const navigateToCheckout = () => {
	// 	router.push('/oneStepCheckout');
	// 	setDataCheckout(filterDataCart);
	// 	setTotalPriceCheckout(totalPriceFinal);
	// };
	const navigateToCheckout = () => {
		const checkedProducts = filterDataCart.filter((product) => checkedItems[product._id]);
		router.push('/oneStepCheckout');
		setDataCheckout(checkedProducts);
		setTotalPriceCheckout(totalPrice);
	};
	return (
		<>
			<title>Giỏ hàng</title>
			<div className='mx-auto max-w-[1200px] '>
				{filterDataCart.length > 0 ? (
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
									{filterDataCart.map((product) => (
										<CartItem
											imageSrc={product.image[0]}
											productName={product.name}
											price={product.priceDiscount ? product.priceDiscount : product.priceSell}
											quantity={product.quantity}
											itemId={product._id}
											isChecked={checkedItems[product._id]}
											onToggleCheck={toggleItemCheck}
											// decreaseQuantity={decreaseQuantity}
											// increaseQuantity={increaseQuantity}
										/>
									))}

									{/* <CartItem
										imageSrc='https://cdn0.fahasa.com/media/catalog/product//i/m/image_195509_1_13799.jpg'
										productName='Thành Công Trong Kinh Doanh Nhờ NLP'
										price='162.000 đ'
										quantity={quantity}
										decreaseQuantity={decreaseQuantity}
										increaseQuantity={increaseQuantity}
									/> */}
									{/* <div className='my-4 flex items-center justify-between border-b  p-4 '>
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
									</div> */}
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
									<Modal isOpen={isOpen} onOpenChange={onOpenChange} size='3xl'>
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
																<div className=' flex  h-36 w-[17%] items-center  justify-center  bg-image-sale bg-contain bg-no-repeat'>
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
												</>
											)}
										</ModalContent>
									</Modal>
								</div>
								<div className='border '></div>
								<div className='my-4  bg-white p-4 '>
									<div className='my-2 flex justify-between'>
										<p className='w-[70%]'>Thành tiền</p>
										<p className=' text-right'>{totalPrice} đ</p>
									</div>
									<div className='my-2 flex justify-between'>
										<p className='w-[70%]'>Phí vận chuyển (Giao hàng tiêu chuẩn)</p>
										<p className=' text-right'>19.000 đ</p>
									</div>
									<div className='border'></div>
									<div className='my-2 flex items-center justify-between'>
										<p className='font-bold'>Tổng Số Tiền (gồm VAT)</p>
										<p className='text-xl font-bold text-orange'>{totalPriceFinal} đ</p>
									</div>
									<Button
										className='my-2 block w-full rounded-md bg-blue py-2 text-center font-bold text-white hover:bg-blueHover'
										onClick={navigateToCheckout}
									>
										THANH TOÁN
									</Button>
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
