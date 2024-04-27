'use client';
import { useEffect, useState } from 'react';
import './bookDetail.css';

export default function BookDetail() {
	const [book, setBook] = useState(null);
	const [selectedImage, setSelectedImage] = useState(null);
	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		const hardcodedBook = {
			_id: '662523afd636426682e12ada',
			name: 'Nghệ Thuật Bán Hàng Bằng Câu Chuyện',
			categoryAllId: '661949cc343796e299686dc7',
			categoryDetailId: '66194f95343796e299686ddc',
			categorySupplierId: '66198823243a328164578cc1',
			categoryPublishId: '66198b74c9f3ef21a7378d89',
			categoryYearId: '66198bd0c9f3ef21a7378d94',
			image: [
				'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/nghe_thuat_ban_hang_bang_cau_chuyen_tai_ban_2023/2023_03_21_10_28_39_1-390x510.jpg?_gl=1*1wuvo8a*_ga*MjM5MDM3ODcxLjE3MTMzNjIxMzU.*_ga_460L9JMC2G*MTcxMzcwNzM4Mi44LjEuMTcxMzcwNzYwMC42MC4wLjE0MTk5MzY0Mjc.*_gcl_au*MzUxNzI2NTczLjE3MTMzNjIxMzQ.',
				'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/nghe_thuat_ban_hang_bang_cau_chuyen_tai_ban_2023/2023_03_21_10_28_39_2-390x510.jpg',
				'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/nghe_thuat_ban_hang_bang_cau_chuyen_tai_ban_2023/2023_03_21_10_28_39_3-390x510.jpg',
				'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/nghe_thuat_ban_hang_bang_cau_chuyen_tai_ban_2023/2023_03_21_10_28_39_4-390x510.jpg',
			],
			priceOld: 188000,
			priceCurrent: 146000,
			author: 'Paul Smith',
			form: 'Bìa Mềm',
			language: 'Tiếng Việt',
			yearOfManufacture: 2023,
			size: '20.5 x 13 x 1 cm',
			pageQuantity: 200,
			description:
				'Câu chuyện là vũ khí bán hàng quan trọng nhất của người bán hàng. Tuy nhiên rất nhiều nhân viên quản lý kinh doanh và nhân viên bán hàng thường kể chuyện rất dở. Rất dở! Các câu chuyện của họ nhàm chán, lộn xộn, thường vô nghĩa, và hầu hết luôn hướng về bản thân.',
			rate: 4,
			ratingPoint: 100,
			numberOfVisit: 5,
		};

		// Set the book state with the hardcoded data
		setBook(hardcodedBook);
		// Set the first image as selected by default
		setSelectedImage(hardcodedBook.image[0]);
	}, []);

	const handleImageClick = (imageUrl) => {
		setSelectedImage(imageUrl);
	};

	const handleQuantityChange = (change) => {
		const newQuantity = Math.max(quantity + change, 1); // Ensures quantity stays at least 1
		setQuantity(newQuantity);
	};

	if (!book) {
		return <div>Loading...</div>;
	}

	return (
		<div className='min-h-screen bg-gray-100'>
			<div className='mx-auto max-w-4xl px-4 py-8'>
				<div className='flex'>
					<div className='mr-4 w-1/4'>
						<div className='mb-4 flex justify-center'>
							<img src={selectedImage} alt={book.name} className='rounded-lg' />
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
									{book.priceCurrent} VNĐ
								</p>
								{book.priceOld && (
									<p className='ml-4 mr-2 text-gray-600 line-through'> {book.priceOld} VNĐ</p>
								)}
							</div>
						</div>
						<div className='mt-8 flex items-center'>
                            <p>Số lượng:</p>
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
			</div>
		</div>
	);
}
