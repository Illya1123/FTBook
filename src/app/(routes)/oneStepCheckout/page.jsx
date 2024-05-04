'use client';
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
import { useState } from 'react';
function oneStepCheckoutPage() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [checked, setChecked] = useState();

	const handleChangeCheck = (event) => {
		setChecked(event.target.checked);
	};
	return (
		<div>
			<title>Checkout</title>
			<div className='fixed  bottom-0 left-0 right-0 h-[180px] bg-white shadow-inner '>
				<div className='mx-auto max-w-[1200px]'>
					<div>
						<div className='my-2 flex'>
							<p className='w-[90%] text-right'>Thành tiền</p>
							<p className='w-[10%] text-right'>264.400 đ</p>
						</div>
						<div className='my-2 flex'>
							<p className='w-[90%] text-right'>Phí vận chuyển (Giao hàng tiêu chuẩn)</p>
							<p className='w-[10%] text-right'>19.000 đ</p>
						</div>
						<div className='my-2 flex'>
							<p className='w-[90%] text-right'>Tổng Số Tiền (gồm VAT)</p>
							<p className='w-[10%] text-right font-bold text-orange'>283.400 đ</p>
						</div>
					</div>
					<div className='my-4 border'></div>
					<div className='flex justify-between'>
						<div className='flex items-center'>
							<input
								type='checkbox'
								// name='condition'
								// id='condition'
								className='mr-4 h-4 w-4'
								checked={checked}
								onChange={handleChangeCheck}
							/>
							<div>
								Bằng việc tiến hành Mua hàng, Bạn đã đồng ý với <br />
								<Link href='#' className='font-bold text-blue1'>
									Điều khoản & Điều kiện của Fahasa.com
								</Link>
							</div>
						</div>
						<Button
							onPress={onOpen}
							className='rounded-md bg-blue1 px-12 py-2 font-bold text-white hover:bg-blue1Hover'
							isDisabled={!checked}
						>
							<p>XÁC NHẬN THANH TOÁN</p>
						</Button>
					</div>
					<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
						<ModalContent className=' min-w-[600px]'>
							{(onClose) => (
								<>
									<ModalHeader className='flex items-center justify-center bg-orange text-white'>
										Xác nhận địa chỉ giao hàng
									</ModalHeader>
									<ModalBody>
										<div className='my-4  '>
											<p>Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh</p>
										</div>
									</ModalBody>
									<ModalFooter>
										<Button color='danger' variant='light' onPress={onClose}>
											Hủy
										</Button>
										<Button color='primary' onPress={onClose}>
											<Link href='/successfulTransaction'>Xác nhận</Link>
										</Button>
									</ModalFooter>
								</>
							)}
						</ModalContent>
					</Modal>
				</div>
			</div>
			{/* địa chỉ nhận nhàng */}
			<div className='my-5 rounded-md bg-white p-5'>
				<h3 className='my-4 font-bold '>ĐỊA CHỈ GIAO HÀNG</h3>
				<div className='border'></div>
				<div>
					<div className='my-6 flex items-center'>
						<div className='w-44'>
							<p>Họ và tên người nhận</p>
						</div>
						<input type='text' name='' id='' className=' ml-4 w-[400px] border outline-none' />
					</div>
					<div className='my-6 flex items-center'>
						<div className='w-44'>
							<p>Số điện thoại</p>
						</div>
						<input type='text' name='' id='' className=' ml-4 w-[400px] border outline-none' />
					</div>
					<div className='my-6 flex items-center'>
						<div className='w-44'>
							<p>Tỉnh/Thành Phố</p>
						</div>
						<input type='text' name='' id='' className=' ml-4 w-[400px] border outline-none' />
					</div>
					<div className='my-6 flex items-center'>
						<div className='w-44'>
							<p>Quận/Huyện</p>
						</div>
						<input type='text' name='' id='' className=' ml-4 w-[400px] border outline-none' />
					</div>
					<div className='my-6 flex items-center'>
						<div className='w-44'>
							<p>Phường/Xã</p>
						</div>
						<input type='text' name='' id='' className=' ml-4 w-[400px] border outline-none' />
					</div>
					<div className='mt-6 flex items-center'>
						<div className='w-44'>
							<p>Địa chỉ nhận hàng</p>
						</div>
						<input type='text' name='' id='' className=' ml-4 w-[400px] border outline-none' />
					</div>
				</div>
			</div>
			{/* Phương thức vận chuyển */}
			<div className='my-5 rounded-md bg-white p-5'>
				<h3 className='my-4 font-bold '>Phương thức vận chuyển</h3>
				<div className='border'></div>
				<div className='mt-4'>
					<input type='radio' name='StandardDelivery' id='' className='mr-2' />
					<label for='StandardDelivery'>Giao hàng tiêu chuẩn: 19.000đ</label>
				</div>
			</div>
			{/* Phương thức thanh toán */}
			<div className='my-5 rounded-md bg-white p-5'>
				<h3 className='my-4 font-bold '>Phương thức thanh toán</h3>
				<div className='border'></div>
				<div className='mt-4'>
					<input type='radio' name='ZaloPay' id='' className='mr-2' />
					<label for='StandardDelivery'>Ví ZaloPay</label>
				</div>
				<div className='mt-4'>
					<input type='radio' name='VNPay' id='' className='mr-2' />
					<label for='StandardDelivery'>Ví VNPay</label>
				</div>
				<div className='mt-4'>
					<input type='radio' name='ShopeePay' id='' className='mr-2' />
					<label for='StandardDelivery'>Ví ShopeePay</label>
				</div>
				<div className='mt-4'>
					<input type='radio' name='MoMo' id='' className='mr-2' />
					<label for='StandardDelivery'>Ví MoMo</label>
				</div>
				<div className='mt-4'>
					<input type='radio' name='directPayment' id='' className='mr-2' />
					<label for='StandardDelivery'>Thanh toán bằng tiền mặt khi nhận hàng</label>
				</div>
			</div>
			{/* Mã khuyến mãi */}
			<div className='my-5 rounded-md bg-white p-5'>
				<h3 className='my-4 font-bold '>MÃ KHUYẾN MÃI/MÃ QUÀ TẶNG</h3>
				<div className='border'></div>
				<div className='my-6 flex items-center'>
					<div className='w-44'>
						<p>Mã KM/Quà tặng</p>
					</div>
					<div className='ml-4   rounded-md border p-1'>
						<input
							type='text'
							name=''
							id=''
							className='  w-[400px] px-2 outline-none'
							placeholder='Nhập mã khuyến mãi'
						/>
						<button className='rounded-md bg-blue1 px-4 py-1 text-white hover:bg-blue1Hover'>
							Áp dụng
						</button>
					</div>
					<button className='ml-4  text-blue1 underline hover:text-blue1Hover'>
						Chọn mã khuyến mãi
					</button>
				</div>
			</div>
			{/* Kiểm tra lại đơn hàng */}
			<div className='my-5 rounded-md bg-white p-5'>
				<h3 className='my-4 font-bold '>KIỂM TRA LẠI ĐƠN HÀNG</h3>
				<div className='my-2 border'></div>
				<div className=' flex items-start justify-between'>
					<div className='flex'>
						<img
							src='https://cdn0.fahasa.com/media/catalog/product//8/9/8935235241275.jpg'
							alt='adad'
							className=' h-36 w-36'
						/>
						<p className='text-sm'>Tazaki Tsukuru Không Màu Và Những Năm Tháng Hành Hương</p>
					</div>
					<div className='mr-[100px] flex w-1/4 justify-between text-sm'>
						<div>
							<p>102.400 đ</p>
							<p>128.000 đ</p>
						</div>
						<p>1</p>
						<p className='text-orange'>102.400 đ</p>
					</div>
				</div>
				<div className='my-2 border'></div>
				<div className=' flex items-start justify-between'>
					<div className='flex'>
						<img
							src='https://cdn0.fahasa.com/media/catalog/product//8/9/8935235241275.jpg'
							alt='adad'
							className=' h-36 w-36'
						/>
						<p className='text-sm'>Tazaki Tsukuru Không Màu Và Những Năm Tháng Hành Hương</p>
					</div>
					<div className='mr-[100px] flex w-1/4 justify-between text-sm'>
						<div>
							<p>102.400 đ</p>
							<p>128.000 đ</p>
						</div>
						<p>1</p>
						<p className='text-orange'>102.400 đ</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default oneStepCheckoutPage;
