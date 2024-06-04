'use client';

import {
	Button,
	Spinner,
	useDisclosure,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from '@nextui-org/react';
import { useTheme } from '../../_components/ThemeProvider';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	getKeyValue,
} from '@nextui-org/react';
import { data } from 'autoprefixer';

export const Orders = () => {
	const { userId } = useTheme();
	const [dataPayment, setDataPayment] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isShow, setIsShow] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState(null);
	const detailRef = useRef(null);
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [dataProduct, setDataProduct] = useState([]);
	const [dataDetails, setDataDetails] = useState([]);

	useEffect(() => {
		if (userId) {
			axios
				// .get(`http://localhost:5000/payment/user/${userId}`)
				.get(`http://localhost:5000/payment/user/6642f919e60deac0b3e1eb4e`)
				.then((res) => {
					// console.log(res.data);
					setDataPayment(res.data);
					setIsLoading(true);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [userId]);
	useEffect(() => {
		axios
			.get(`http://localhost:5000/product`)
			.then((res) => {
				setDataProduct(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	const handleViewDetails = (order) => {
		setSelectedOrder(order);
		const filterDetail = dataProduct
			.filter((product) =>
				order.products.some((orderProduct) => orderProduct.productId === product._id),
			)
			.map((product) => {
				const orderProduct = order.products.find(
					(orderProduct) => orderProduct.productId === product._id,
				);
				return {
					...product,
					quantityPayment: orderProduct ? orderProduct.quantity : 0,
				};
			});
		setDataDetails(filterDetail);
		console.log(filterDetail);
		onOpen();
	};
	function formatPrice(price) {
		return price.toLocaleString('vi-VN', { minimumFractionDigits: 0 }) + 'đ';
	}
	return (
		<>
			{userId ? (
				<div className=''>
					<table className='w-full table-auto'>
						<thead>
							<tr>
								<th className='px-4 py-2 text-left'>Mã Đơn Hàng</th>
								<th className='px-4 py-2 text-left'>Tên Người Nhận</th>
								<th className='px-4 py-2 text-left'>Tổng Tiền</th>
								<th className='px-4 py-2 text-left'>Trạng Thái </th>
								<th className='px-4 py-2 text-left'></th>
							</tr>
						</thead>
						<tbody>
							{isLoading ? (
								dataPayment.map((order) => (
									<tr key={order._id} className='border-b border-t'>
										<td className='px-4 py-2 text-xs'>{order._id}</td>
										<td className='px-4 py-2 text-xs'>{order.name}</td>
										<td className='px-4 py-2 text-xs'>{order.totalPrice}đ</td>
										<td className='px-4 py-2 text-xs'>{order.orderStatus}</td>
										<td className='px-4 py-2 text-xs'>
											<Button
												className='text-blue-500 bg-transparent text-xs hover:underline'
												onClick={() => handleViewDetails(order)}
												// onPress={onOpen}
											>
												Xem chi tiết
											</Button>
										</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan='5'>
										<div className='flex items-center justify-center'>
											<Spinner />
										</div>
									</td>
								</tr>
							)}
						</tbody>
					</table>
					<Modal
						isOpen={isOpen}
						onOpenChange={onOpenChange}
						size='5xl'
						className=' h-[500px] overflow-y-auto'
					>
						<ModalContent>
							{(onClose) => (
								<>
									<ModalHeader className='flex flex-col gap-1'>Chi Tiết Đơn Hàng</ModalHeader>
									<ModalBody>
										<div>
											<p>
												<strong>Mã Đơn Hàng:</strong> {selectedOrder._id}
											</p>
											<p>
												<strong>Tên Người Nhận:</strong> {selectedOrder.name}
											</p>
											<p>
												<strong>Tổng Tiền:</strong> {selectedOrder.totalPrice}đ
											</p>
											<p>
												<strong>Trạng Thái:</strong> {selectedOrder.orderStatus}
											</p>
											<p>
												<strong>Địa chỉ giao hàng:</strong> {selectedOrder.address}
											</p>
										</div>
										<table className='min-w-full divide-y divide-gray-200'>
											<thead>
												<tr>
													<th className='border-b border-t px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
														Hình ảnh
													</th>
													<th className='border-b border-t px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
														Tên sản phẩm
													</th>

													<th className='border-b border-t px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
														Số lượng
													</th>
													<th className='border-b border-t px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
														Giá bán
													</th>
													<th className='border-b border-t px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
														Thành tiền
													</th>
												</tr>
											</thead>
											<tbody className='divide-y divide-gray-200 bg-white'>
												{dataDetails.map((product, index) => (
													<tr key={index}>
														<td className='whitespace-nowrap border-b border-t px-6 py-4'>
															<img
																src={product.image[0]}
																alt={product.name}
																className='h-16 w-16 object-cover'
															/>
														</td>
														<td className='whitespace-nowrap border-b border-t px-6 py-4'>
															{product.name}
														</td>
														<td className='whitespace-nowrap border-b border-t px-6 py-4'>
															{product.quantityPayment}
														</td>
														<td className='whitespace-nowrap border-b border-t px-6 py-4'>
															{formatPrice(product.priceSell)}
														</td>
														<td className='whitespace-nowrap border-b border-t px-6 py-4'>
															{formatPrice(product.quantityPayment * product.priceSell)}
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</ModalBody>
									<ModalFooter></ModalFooter>
								</>
							)}
						</ModalContent>
					</Modal>
				</div>
			) : (
				<div className='text-center'>
					<p className='mb-4 text-lg text-gray-600'>
						Vui lòng đăng nhập để hiện thông tin chi tiết
					</p>
					<Button color='primary'>Đăng nhập</Button>
				</div>
			)}
		</>
	);
};

const OrderDetail = ({ order, onClose }) => {
	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
			<div className='w-3/4 rounded-lg bg-white p-6 shadow-lg'>
				{/* Add more details as needed */}
				<Button onClick={onClose} color='primary' className='mt-4'>
					Đóng
				</Button>
			</div>
		</div>
	);
};
