'use client';
import { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import './bookDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Slider,
	Textarea,
	useDisclosure,
} from '@nextui-org/react';
import StarRatings from 'react-star-ratings';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';


export default function BookDetail({params}) {
	const [book, setBook] = useState(null);
	const [selectedImage, setSelectedImage] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const [price, setPrice] = useState(null);
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [valueRating, setValueRating] = useState();

	useEffect(() => {
		async function fetchBookData() {
			try {
				const response = await fetch(`http://localhost:5000/product/${params.bookId}`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const bookData = await response.json();
				setBook(bookData);
				setSelectedImage(bookData.image[0]);
				console.log(book);
			} catch (error) {
				console.error('Error fetching book data:', error);
			}
		}
	
		fetchBookData();
	}, [params.bookId]);

	const handleImageClick = (imageUrl) => {
		setSelectedImage(imageUrl);
	};

	const handleQuantityChange = (change) => {
		const newQuantity = Math.max(quantity + change, 1);
		setQuantity(newQuantity);
	};

	if (!book) {
		return <div>Loading...</div>;
	}
	const StarItem = ({ rating, valueRating }) => {
		return (
			<div className='my-2 flex items-center'>
				<p>{rating}</p>
				<FontAwesomeIcon icon={faStar} className='mr-4' />
				<Slider
					aria-label='Player progress'
					color='foreground'
					hideThumb={true}
					defaultValue={valueRating}
					className='max-w-md'
					isDisabled
				/>
			</div>
		);
	};
	const ReviewItem = ({ name, createAt, content, rating }) => {
		return (
			<div className=' border-t py-4'>
				<div className='flex'>
					<div className='mr-32'>
						<p>{name}</p>
						<p>{createAt}</p>
					</div>
					<div>
						<div>
							<StarRatings
								rating={rating}
								starDimension='20px'
								starSpacing='4px'
								starRatedColor='#FF9F00'
							/>
							<p>{content}</p>
						</div>
						<div className='flex items-center gap-2'>
							<FontAwesomeIcon icon={faThumbsUp} />
							<p>Thích</p>
						</div>
					</div>
				</div>
			</div>
		);
	};
	const handleChangeRating = (rating) => {
		setValueRating(rating);
	};
	return (
		<div className='min-h-screen rounded-md bg-white  p-4 '>
			<div className='mx-auto py-8'>
				<div className='flex'>
					<div className='mr-4 w-1/2'>
						<div className='mb-4 flex justify-center'>
							<div className='border w-1 rounded-lg' style={{ width: '50vw', height: '60vh' }}>
								<img
									src={selectedImage}
									alt={book.name}
									className='rounded-lg'
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'contain',
									}}
								/>
							</div>
						</div>
						<div className='grid grid-cols-4 gap-2'>
							{book.image.map((image, index) => (
								<img
									key={index}
									src={image}
									alt={`Image ${index}`}
									className='cursor-pointer rounded-lg border border-gray-300 hover:bg-gray-200'
									onClick={() => handleImageClick(image)}
								/>
							))}
						</div>
					</div>
					<div className='w-3/4'>
						<div className='flex flex-col justify-between'>
							<div>
								<h1 className='mb-4 text-3xl font-bold'>{book.name}</h1>
								<div className='flex items-center'>
									<p className='text-sm text-gray-600'>Tác giả: </p>
									<p className='ml-4 font-medium text-gray-800'>{book.author}</p>
								</div>
							</div>
							<div className='flex items-center'>
								<p className='text-lg font-bold text-gray-600'>Giá: </p>
								<p className='ml-4 text-lg font-medium text-emerald-500 '>
									{book.priceDiscount} VNĐ
								</p>
								{book.priceSell && (
									<p className='ml-4 mr-2 text-gray-600 line-through'> {book.priceSell} VNĐ</p>
								)}
							</div>
						</div>
						<div className='mt-8 flex items-center'>
							<p className='mr-4'>Số lượng:</p>
							<button className='quantity-button' onClick={() => handleQuantityChange(-1)}>
								-
							</button>
							<p className='mx-2 text-lg font-medium'>{quantity}</p>
							<button className='quantity-button' onClick={() => handleQuantityChange(1)}>
								+
							</button>
							<button className='buy-now-button ml-4'>Mua Ngay ({quantity} sản phẩm)</button>
						</div>
					</div>
				</div>
				<p className='mt-4 rounded border border-gray-300 p-4'>Thông tin chi tiết:</p>
				<div className='mt-4 rounded border border-gray-300 p-4'>
					<div className='flex'>
						<div className='w-1/2'>
							<p className='text-gray-600'>Hình thức: {book.form}</p>
							<p className='text-gray-600'>Ngôn ngữ: {book.language}</p>
							<p className='text-gray-600'>Năm phát hành: {book.yearOfManufacture}</p>
							<p className='text-gray-600'>Kích thước: {book.size}</p>
							<p className='text-gray-600'>Số trang: {book.pageQuantity}</p>
						</div>
						<div className='w-1/2'>
							<p className='text-gray-600'>
								Điểm xếp hạng: {book.rate} ({book.ratingPoint} points)
							</p>
							<p className='text-gray-600'>Số người xem: {book.numberOfVisit}</p>
						</div>
					</div>
				</div>
				<div className='mt-8'>
					<p className='text-lg font-bold'>Mô tả:</p>
					<div className='text-gray-800'>{book.description}</div>
				</div>
				<div className='rounded-md bg-white p-4 '>
					<p className=' text-2xl font-bold'> Đánh giá sản phẩm</p>
					<div className='flex items-center gap-10 '>
						<div className='w-[30%]'>
							<div className='flex items-center'>
								<p>5</p>
								<FontAwesomeIcon icon={faStar} className='mr-4' />
								<Slider
									aria-label='Player progress'
									color='foreground'
									hideThumb={true}
									defaultValue={90}
									className='max-w-md'
									isDisabled
								/>
							</div>
							<StarItem rating={4} valueRating={0} />
							<StarItem rating={3} valueRating={0} />
							<StarItem rating={2} valueRating={0} />
							<StarItem rating={1} valueRating={0} />
						</div>
						<div className='w-[70%]  text-center'>
							<Button className='w-40' color='primary' onClick={onOpen}>
								Viết đánh giá
							</Button>
							<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
								<ModalContent>
									{(onClose) => (
										<>
											<ModalHeader className='flex flex-col gap-1 text-center'>
												Viết đánh giá đánh giá
											</ModalHeader>
											<ModalBody>
												<StarRatings
													changeRating={handleChangeRating}
													rating={valueRating}
													starDimension='20px'
													starSpacing='4px'
													starRatedColor='#FF9F00'
												/>
												<Textarea
													isRequired
													// label='Description'
													labelPlacement='outside'
													placeholder='Hãy đánh giá sản phẩm của chúng tôi'
													className='max-w'
												/>
											</ModalBody>
											<ModalFooter>
												<Button color='danger' variant='light' onPress={onClose}>
													Hủy
												</Button>
												<Button color='primary' onPress={onClose}>
													Đánh giá
												</Button>
											</ModalFooter>
										</>
									)}
								</ModalContent>
							</Modal>
						</div>
					</div>
					<div className=' border-t py-4'>
						<div className='flex'>
							<div className='mr-32'>
								<p>User1</p>
								<p>03/05/2024</p>
							</div>
							<div>
								<div>
									<StarRatings
										rating={5}
										starDimension='20px'
										starSpacing='4px'
										starRatedColor='#FF9F00'
									/>
									<p>Sách này mang lại nhiều thú vị</p>
								</div>
								<div className='flex items-center gap-2'>
									<FontAwesomeIcon icon={faThumbsUp} />
									<p>Thích</p>
								</div>
							</div>
						</div>
					</div>
					<ReviewItem name='User2' createAt='02/05/2024' content='sách hay' rating={4} />
					<ReviewItem name='User3' createAt='02/05/2024' content='sách hay' rating={4} />
				</div>
			</div>
		</div>
	);
}