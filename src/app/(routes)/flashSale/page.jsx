'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faChevronRight, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import AnimationComponents from '../_components/AnimationComponents';
import Header from '../_components/Header';
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalHeader,
	useDisclosure,
	Spinner,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from '../_components/ProductCard';

export default function FlashSalePage() {
	const [isLoading, setIsLoading] = useState(false);
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('https://backend-book-store-two.vercel.app/product')
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setIsLoading(true);
			})
			.catch((err) => console.log(err));
	}, []);
	useEffect(() => {
		if (products) {
			const filterData = products.filter((data) => {
				const priceSale = data.priceSell - data.priceDiscount;
				const percent = (priceSale / data.priceSell) * 100;
				return percent > 30;
			});
			setProducts(filterData);
		}
	}, [products]);
	// const ProductCard = ({ product }) => {
	// 	const { name, image, priceSell, priceDiscount, _id } = product;
	// 	const firstImage = image[0];
	// 	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	// 	const items = useSelector((state) => state.cart.items);
	// 	// console.log(userId);
	// 	// console.log(items);
	// 	const dispatch = useDispatch();

	// 	// format giá - 3 số thêm 1 dấu chấm - Example: 100000 => 100.000
	// 	function formatNumber(number) {
	// 		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
	// 	}
	// 	// tính % giảm giá sản phẩm
	// 	const priceSale = priceSell - priceDiscount;
	// 	const percentSale = Math.floor((priceSale / priceSell) * 100);

	// 	const handleAddToCart = async (_id) => {
	// 		// Tạo đối tượng JSON để gửi lên server
	// 		const cartData = {
	// 			productId: _id,
	// 			quantity: 1,
	// 		};
	// 		try {
	// 			// Kiểm tra xem giỏ hàng của người dùng đã tồn tại hay chưa
	// 			const existingCart = await axios.get(`https://backend-book-store-two.vercel.app/cart/user/${user.id}`);

	// 			if (existingCart.data.length > 0) {
	// 				// Nếu giỏ hàng đã tồn tại
	// 				const cartId = existingCart.data[0]._id;
	// 				const existingProductIndex = existingCart.data[0].products.findIndex(
	// 					(product) => product.productId === _id,
	// 				);

	// 				if (existingProductIndex !== -1) {
	// 					// Nếu sản phẩm đã tồn tại trong giỏ hàng, thực hiện cập nhật số lượng
	// 					const existingProduct = existingCart.data[0].products[existingProductIndex];
	// 					const newQuantity = existingProduct.quantity + 1;
	// 					await axios.put(`https://backend-book-store-two.vercel.app/cart/edit/${user.id}`, {
	// 						productId: _id,
	// 						quantity: newQuantity,
	// 					});
	// 					console.log('Cart updated with quantity:', newQuantity);
	// 				} else {
	// 					// Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm mới sản phẩm vào giỏ hàng
	// 					await axios.post(`https://backend-book-store-two.vercel.app/cart/edit/${user.id}`, cartData);
	// 					console.log('Product added to cart.');
	// 				}
	// 			} else {
	// 				// Nếu giỏ hàng chưa tồn tại, thực hiện thêm mới
	// 				const response = await axios.post('https://backend-book-store-two.vercel.app/cart', {
	// 					userId: user.id,
	// 					status: 'active',
	// 					products: [cartData],
	// 				});
	// 				console.log('Cart added:', response.data);
	// 			}
	// 		} catch (error) {
	// 			console.error('Error adding to cart:', error);
	// 		}
	// 	};
	// 	return (
	// 		<div className='relative mx-5 rounded-md bg-white'>
	// 			<div className='group'>
	// 				<div className='relative flex cursor-pointer flex-col items-center'>
	// 					<div className='p-6'>
	// 						<img src={firstImage} alt='' className='h-52 w-48' />
	// 					</div>
	// 					<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
	// 						<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
	// 							<Button onPress={onOpen} className=' bg-transparent '>
	// 								<FontAwesomeIcon icon={faEye} className='text-xl' />
	// 							</Button>

	// 							<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
	// 								Xem nhanh
	// 							</p>
	// 							<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
	// 								<ModalContent className=' min-w-[600px]'>
	// 									{(onClose) => (
	// 										<>
	// 											<ModalHeader className='flex flex-col gap-1'></ModalHeader>
	// 											<ModalBody>
	// 												<div className='flex gap-2  '>
	// 													<img src={firstImage} alt='' className='h-52 w-48' />
	// 													<div>
	// 														<h3>{name}</h3>
	// 														<p className='my-4 font-bold text-red-500'>
	// 															Giá hiện tại: {formatNumber(priceDiscount)}đ
	// 														</p>
	// 														<p className=' text-gray-400 line-through'>
	// 															Giá gốc: {formatNumber(priceSell)}đ
	// 														</p>
	// 														{/* <p>Thông tin về sách</p> */}
	// 													</div>
	// 												</div>
	// 											</ModalBody>
	// 											<ModalFooter></ModalFooter>
	// 										</>
	// 									)}
	// 								</ModalContent>
	// 							</Modal>
	// 						</div>
	// 						<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
	// 							<Button className=' bg-transparent '>
	// 								<FontAwesomeIcon icon={faHeart} />
	// 							</Button>
	// 							<p className='quick absolute -top-12 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
	// 								Thêm danh sách yêu thích
	// 							</p>
	// 						</div>
	// 						<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
	// 							<Button onClick={() => handleAddToCart(_id)} className=' bg-transparent '>
	// 								<FontAwesomeIcon icon={faCartShopping} />
	// 							</Button>
	// 							<p className='quick absolute -top-12 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
	// 								Thêm giỏ hàng
	// 							</p>
	// 						</div>
	// 					</div>
	// 				</div>
	// 				<Link href={`/book/${_id}`}>
	// 					<div className='mx-4 px-2 py-4'>
	// 						<div>
	// 							<p className='line-clamp-2 h-10 text-sm'>{name}</p>
	// 						</div>
	// 						{priceDiscount && (
	// 							<p className='my-2 text-base font-bold text-red-500'>
	// 								{formatNumber(priceDiscount)}đ
	// 							</p>
	// 						)}
	// 						<p className='text-sm text-gray-300 line-through'>{formatNumber(priceSell)}đ</p>
	// 					</div>
	// 				</Link>
	// 			</div>
	// 			<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
	// 				<p className=' text-xs'>{percentSale}%</p>
	// 				<div className='half-square'></div>
	// 			</div>
	// 		</div>
	// 	);
	// };
	return (
		<div className='min-h-screen '>
			<Header activeAbout />
			<title>FT BOOK - Flash Sale</title>
			<div className='my-5 flex items-center'>
				<Link href='/' className='hover:text-blue'>
					Trang chủ
				</Link>
				<FontAwesomeIcon icon={faChevronRight} className='mx-2 h-2 w-2 ' />
				<p className=' text-orange'>FT BOOK - Flash Sale</p>
			</div>
			<div>
				<div className=' flex items-center justify-center rounded-md bg-red-500 p-6'>
					<img src='https://cdn0.fahasa.com/media/fahasa_web_image/thunder.jpg' className=' h-8' />
				</div>
				{isLoading ? (
					<div className='my-6 grid grid-cols-4 gap-6'>
						{products.map((product) => (
							<ProductCard key={product._id} product={product} />
						))}
					</div>
				) : (
					<div className=' flex h-64 w-full justify-center text-center'>
						<Spinner />
					</div>
				)}
			</div>
		</div>
	);
}
