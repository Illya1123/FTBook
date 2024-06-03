'use client';
import { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import './bookDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Textarea,
	useDisclosure,
} from '@nextui-org/react';
import StarRatings from 'react-star-ratings';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { useTheme } from '../../_components/ThemeProvider';

export default function BookDetail({ params }) {
	const { userId } = useTheme();
	const [book, setBook] = useState(null);
	const [selectedImage, setSelectedImage] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const [price, setPrice] = useState(null);
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [valueRating, setValueRating] = useState();
	const [valueContent, setValueContent] = useState();
	const [categoryAll, setCategoryAll] = useState(null);
	const [dataReview, setDataReview] = useState();
	const [checkReview, setCheckReview] = useState();
	const [valueUserName, setValueUserName] = useState();
	const [Reload, setReload] = useState(0);
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);

	const handleImageChoose = (index) => {
		setSelectedImageIndex(index);
	  };

	var settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
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

	const loadUser = () => {
		fetch(`http://localhost:5000/user/${userId}`)
			.then((userResponse) => {
				if (!userResponse.ok) {
					throw new Error('Network response was not ok');
				}
				return userResponse.json();
			})
			.then((userData) => {
				setValueUserName(userData.fullName);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	};
	function fetchData() {
		// Fetch thông tin sách
		fetch(`http://localhost:5000/product/${params.bookId}`)
			.then((bookResponse) => {
				if (!bookResponse.ok) {
					throw new Error('Network response was not ok');
				}
				return bookResponse.json();
			})
			.then((bookData) => {
				// Tăng số lượt xem của sản phẩm
				fetch(`http://localhost:5000/product/${params.bookId}`, {
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ numberOfVisit: bookData.numberOfVisit + 1 }),
				})
					.then((response) => {
						if (!response.ok) {
							throw new Error('Failed to increase visit count');
						}
						setBook(bookData);
						setSelectedImage(bookData.image[0]);
						const categoryAllId = bookData?.categoryAllId;
						return fetch(`http://localhost:5000/categoryAll/${categoryAllId}`);
					})
					.then((categoryAllResponse) => {
						if (!categoryAllResponse.ok) {
							throw new Error('Network response was not ok');
						}
						return categoryAllResponse.json();
					})
					.then((categoryAllData) => {
						setCategoryAll(categoryAllData);
					})
					.catch((error) => {
						console.error('Error fetching data:', error);
					});
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}

	const loadReview = () => {
		fetch(`http://localhost:5000/review/product/${params.bookId}`)
			.then((reviewResponse) => {
				if (!reviewResponse.ok) {
					throw new Error('Network response was not ok');
				}
				return reviewResponse.json();
			})
			.then((reviewData) => {
				setDataReview(reviewData);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	};
	useEffect(() => {
		fetchData();

		loadUser();
	}, [params.bookId]);
	useEffect(() => {
		loadReview();
	}, [params.bookId, Reload]);
	// if (dataReview) {
	// 	console.log(dataReview);
	// }
	const breadcrumbItems = ['Trang chủ	', categoryAll?.name, book?.name];

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
				<p className='text-lg font-semibold text-gray-900'>{rating}</p>
				<FontAwesomeIcon icon={faStar} className='ml-4 text-yellow-500' />
				<div className='mx-4 flex-grow'>
					<Slider
						aria-label='Player progress'
						color='yellow'
						hideThumb={true}
						defaultValue={valueRating}
						className='w-full'
						isDisabled
					/>
				</div>
			</div>
		);
	};
	const ReviewItem = ({ name, createAt, content, rating }) => {
		return (
			<div className='border-t  py-4'>
				<div className='flex'>
					<div className='mr-32'>
						<p className='text-lg font-semibold text-gray-800'>{name}</p>
						<p className='text-sm text-gray-500'>{createAt}</p>
					</div>
					<div className='flex-1'>
						<div className='mb-2'>
							<StarRatings
								rating={rating}
								starDimension='20px'
								starSpacing='4px'
								starRatedColor='#FF9F00'
							/>
							<p className='mt-2 text-gray-700'>{content}</p>
						</div>
						<div className='flex cursor-pointer items-center gap-2 text-gray-600 hover:text-gray-800'>
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
	const handleChangeContent = (e) => {
		setValueContent(e.target.value);
	};
	const handleAddReview = () => {
		console.log(1);

		console.log('productId: ' + params.bookId);
		console.log('userId:' + userId);
		console.log(valueRating);
		console.log(valueContent);
		const newReviewer = {
			userName: valueUserName,
			userId: userId,
			rating: valueRating,
			content: valueContent,
		};
		fetch(`http://localhost:5000/review/product/${params.bookId}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((response) => {
				console.log(response);
				if (response.length === 0) {
					const reviewData = {
						productId: params.bookId,
						reviewer: [newReviewer],
					};
					fetch('http://localhost:5000/review', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(reviewData),
					})
						.then((response) => {
							if (!response.ok) {
								throw new Error('Network response was not ok');
							}
							return response.json();
						})
						.then((response) => {
							// console.log(response);
							setReload(Reload + 1);
						})
						.catch((error) => {
							console.error('Error:', error);
						});
				} else {
					const reviewId = response[0]._id;
					const updatedReviewers = [...response[0].reviewer, newReviewer];

					fetch(`http://localhost:5000/review/${reviewId}`, {
						method: 'PATCH',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ reviewer: updatedReviewers }),
					})
						.then((response) => {
							if (!response.ok) {
								throw new Error('Network response was not ok');
							}
							return response.json();
						})
						.then((response) => {
							// console.log(response);
							setReload(Reload + 1);
						})
						.catch((error) => {
							console.error('Error:', error);
						});
				}
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	return (
		<div className='min-h-screen rounded-md bg-white  p-4 '>
			{/* Breadcrumb */}
			<nav className='flex justify-start'>
				{breadcrumbItems.map((item, index) => (
					<span key={index} className='text-gray-600'>
						{item}
						{index < breadcrumbItems.length - 1 && <span className='mx-1'>&gt;</span>}
					</span>
				))}
			</nav>
			<div className='mx-auto py-8'>
				<div className='flex'>
					<div className='mr-4 w-1/2'>
						<div className='mb-4 flex justify-center'>
							<div className='w-1 rounded-lg border' style={{ width: '50vw', height: '60vh' }}>
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
						<div className='slider-container-item'>
							<Slider {...settings}>
								{book.image.map((image, index) => (
									<div key={index}  className={`image-wrapper ${index === selectedImageIndex ? 'selected' : ''}`}
									onClick={() => handleImageChoose(index)}>
										<img src={image} alt={`Image ${index}`} className='slider-image' 
										onClick={() => handleImageClick(image)}/>
									</div>
								))}
							</Slider>
						</div>
					</div>
					<div className='w-3/4'>
						<div className='flex flex-col justify-between'>
							<div className='my-3'>
								<h1 className='mb-4 text-3xl font-bold'>{book.name}</h1>
								<div className='flex items-center text-base'>
									<p className='font-bold'>Tác giả: </p>
									<p className='ml-4  '>{book.author}</p>
								</div>
							</div>
							<div className='my-3 flex items-center '>
								<p className='text-base font-bold '>Giá: </p>
								<p className='ml-4 text-lg text-emerald-500 '>
									{book.priceDiscount.toLocaleString('vi-VN', { minimumFractionDigits: 0 })} VNĐ
								</p>
								{book.priceSell && (
									<p className='ml-4 mr-2 text-sm text-gray-600 line-through'>
										{' '}
										{book.priceSell.toLocaleString('vi-VN', { minimumFractionDigits: 0 })} VNĐ
									</p>
								)}
								{book.priceSell && book.priceDiscount && (
									<p className='animate-flash ml-4 text-lg text-red-600'>
										Giảm{' '}
										{Math.round(((book.priceSell - book.priceDiscount) / book.priceSell) * 100)}%
									</p>
								)}
							</div>
						</div>
						<div className='my-3 flex items-center gap-12'>
							<div className='flex items-center gap-2'>
								<p className=''>Số lượng:</p>
								<div className='flex  items-center'>
									<button
										className=' rounded-l-md border border-gray-300 bg-white px-4 py-1 text-gray-700 transition duration-300 ease-in-out hover:border-gray-400 hover:bg-gray-100 active:scale-95 active:shadow-md'
										onClick={() => handleQuantityChange(-1)}
									>
										<span className='button-icon text-lg'>-</span>
									</button>
									<p className=' border-y border-gray-300 px-4 py-1 text-lg font-medium'>
										{quantity}
									</p>
									<button
										className='rounded-r-md  border border-gray-300 bg-white px-4 py-1 text-gray-700 transition duration-300 ease-in-out hover:border-gray-400 hover:bg-gray-100 active:scale-95 active:shadow-md'
										onClick={() => handleQuantityChange(1)}
									>
										<span className='button-icon text-lg'>+</span>
									</button>
								</div>
							</div>
							<button className=' my-3 w-60 rounded-md bg-blue1 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue1Hover'>
								Mua Ngay
							</button>
						</div>
					</div>
				</div>
				<p className='mt-4 rounded-lg border  bg-white p-6 text-xl font-bold text-gray-800 shadow'>
					Thông tin chi tiết:
				</p>

				<div className='mt-4 rounded-lg border shadow'>
					<table className='min-w-full  '>
						<tbody className='divide-y  bg-white'>
							<tr>
								<td className='w-1/5 whitespace-nowrap rounded-lg border-r border-gray-300 px-6 py-4 text-sm font-medium text-gray-700'>
									Hình thức
								</td>
								<td className='whitespace-nowrap rounded-lg px-6 py-4 text-sm text-gray-900'>
									{book.form}
								</td>
							</tr>
							<tr>
								<td className='whitespace-nowrap border-r border-gray-300 px-6 py-4 text-sm font-medium text-gray-700'>
									Ngôn ngữ
								</td>
								<td className='whitespace-nowrap px-6 py-4 text-sm text-gray-900'>
									{book.language}
								</td>
							</tr>
							<tr>
								<td className='whitespace-nowrap border-r border-gray-300 px-6 py-4 text-sm font-medium text-gray-700'>
									Năm phát hành
								</td>
								<td className='whitespace-nowrap px-6 py-4 text-sm text-gray-900'>
									{book.yearOfManufacture}
								</td>
							</tr>
							<tr>
								<td className='whitespace-nowrap border-r border-gray-300 px-6 py-4 text-sm font-medium text-gray-700'>
									Kích thước
								</td>
								<td className='whitespace-nowrap px-6 py-4 text-sm text-gray-900'>{book.size}</td>
							</tr>
							<tr>
								<td className='whitespace-nowrap border-r border-gray-300 px-6 py-4 text-sm font-medium text-gray-700'>
									Số trang
								</td>
								<td className='whitespace-nowrap px-6 py-4 text-sm text-gray-900'>
									{book.pageQuantity}
								</td>
							</tr>
							<tr>
								<td className='whitespace-nowrap border-r border-gray-300 px-6 py-4 text-sm font-medium text-gray-700'>
									Điểm xếp hạng
								</td>
								<td className='whitespace-nowrap px-6 py-4 text-sm text-gray-900'>
									{book.rate} ({book.ratingPoint} points)
								</td>
							</tr>
							<tr>
								<td className='whitespace-nowrap rounded-lg border-r border-gray-300 px-6 py-4 text-sm font-medium text-gray-700'>
									Số người xem
								</td>
								<td className='whitespace-nowrap rounded-lg px-6 py-4 text-sm text-gray-900'>
									{book.numberOfVisit}
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className='mt-8'>
					<p className='text-lg font-bold text-gray-900'>Mô tả:</p>
					<div className='mt-2 text-sm text-gray-700'>{book.description}</div>
				</div>
				<div className='rounded-md bg-white p-4 '>
					<p className='text-2xl font-bold text-gray-900'>Đánh giá sản phẩm</p>
					<div className='flex items-center gap-10 '>
						<div className='w-[30%]'>
							<StarItem rating={5} valueRating={90} />

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
													onChange={handleChangeContent}
												/>
											</ModalBody>
											<ModalFooter>
												<Button color='danger' variant='light' onPress={onClose}>
													Hủy
												</Button>
												<Button color='primary' onPress={onClose} onClick={handleAddReview}>
													Đánh giá
												</Button>
											</ModalFooter>
										</>
									)}
								</ModalContent>
							</Modal>
						</div>
					</div>
					{dataReview &&
					dataReview.length > 0 &&
					dataReview[0].reviewer &&
					dataReview[0].reviewer.length > 0 ? (
						dataReview[0].reviewer.map((data, index) => (
							<ReviewItem
								key={index}
								name={data.userName} // Replace with actual user name if available
								createdAt={data.createdAt}
								content={data.content}
								rating={data.rating}
							/>
						))
					) : (
						<div>Chưa có đánh giá nào</div>
					)}
					{/* <ReviewItem name='User2' createAt='02/05/2024' content='sách hay' rating={4} />
					<ReviewItem name='User3' createAt='02/05/2024' content='sách hay' rating={4} /> */}
				</div>
			</div>
		</div>
	);
}
