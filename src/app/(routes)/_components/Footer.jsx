'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart, faUser, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import AnimationComponents from './AnimationComponents';

function Footer() {
	return (
		<div className='  border-t bg-white'>
			{/* <div className='mx-auto grid max-w-[1200px] grid-cols-[1fr_4fr] py-4'> */}
			<div className='mx-auto grid max-w-[1200px] grid-cols-4 gap-6 py-4'>
				<div>
					<h1 className=''>
						<Link href='/' className='text-4xl font-bold text-blue'>
							FT <span className='text-orange'>BOOK</span>
						</Link>
					</h1>
					<p className=' my-2 text-sm'>
						FTBOOK.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận
						hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống Fahasa trên toàn quốc.
					</p>
					<div className='my-4 grid grid-cols-4'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png'
							alt='facebook'
							className='h-8 w-8'
						/>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'
							alt='instagram'
							className='h-8 w-8'
						/>
						<img
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTowJjFW22_21ogdZ9nauAIrOeNsODULE319wj_6iFeQA&s'
							alt='youtube'
							className='h-8 w-10'
						/>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png'
							alt='instagram'
							className='h-8 w-8'
						/>
					</div>
				</div>
				{/* <div className='place-items-left grid grid-cols-3 gap-2'> */}
				<div className='min-w-0'>
					<h3 className='mx-4 font-bold'>DỊCH VỤ</h3>
					<ul className=' text-sm'>
						<li className='my-4'>
							<Link href='/termOfService' className='mx-4  hover:text-blue'>
								Điều khoản sử dụng
							</Link>
						</li>
						<li className='my-4'>
							<Link href='/privacy' className='mx-4  hover:text-blue'>
								Chính sách bảo mật thông tin
							</Link>
						</li>
						<li className='my-4'>
							<Link href='/paymentSecurityPolicy' className='mx-4  hover:text-blue'>
								Chính sách bảo mật thanh toán
							</Link>
						</li>
						<li className='my-4'>
							<Link href='/about' className='mx-4  hover:text-blue'>
								Giới thiệu FT BOOK
							</Link>
						</li>
						<li className='my-4'>
							<Link href='/contact' className='mx-4  hover:text-blue'>
								Hệ thống trung tâm nhà sách
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className='mx-4 font-bold'>HỖ TRỢ</h3>
					<ul className=' text-sm'>
						<li className='my-4'>
							<Link href='/returnPolicy' className='mx-4  hover:text-blue'>
								Chính sách đổi - trả - hoàn tiền
							</Link>
						</li>
						<li className='my-4'>
							<Link href='/returnPolicy' className='mx-4  hover:text-blue'>
								Chính sách bảo hành - bồi hoàn
							</Link>
						</li>
						<li className='my-4'>
							<Link href='/shippingPolicy' className='mx-4  hover:text-blue'>
								Chính sách vận chuyển
							</Link>
						</li>
						<li className='my-4'>
							<Link href='/wholesale' className='mx-4  hover:text-blue'>
								Chính sách khách sỉ
							</Link>
						</li>
						<li className='my-4'>
							<Link href='/' className='mx-4  hover:text-blue'>
								Phương thức thanh toán và xuất HĐ
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className='mx-4 font-bold'>Tài khoản</h3>
					<ul className=' text-sm'>
						<li className='my-4'>
							<Link href='/' className='mx-4  hover:text-blue'>
								Đăng nhập/tạo tài khoản
							</Link>
						</li>
						<li className='my-4'>
							<Link href='/' className='mx-4  hover:text-blue'>
								Chi tiết tài khoản
							</Link>
						</li>
						<li className='my-4'>
							<Link href='/' className='mx-4  hover:text-blue'>
								Lịch sử mua hàng
							</Link>
						</li>
					</ul>
				</div>
			</div>
			{/* </div> */}
		</div>
	);
}

export default Footer;
