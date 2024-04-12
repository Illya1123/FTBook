'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart, faUser, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import AnimationComponents from './AnimationComponents';

function Footer() {
	return (
		<div className= 'bottom-0 left-0 right-0 flex border-t bg-white'>
			<div className='grid grid-cols-[1fr_4fr] mx-auto max-w-[1200px] py-4'>
				<div>
					<h1 className='text-6xl font-bold text-blue mr-10'>
						<Link href='/'>
							FT <span className='text-orange'>BOOK</span>
						</Link>
					</h1>
				</div>
				<div className='grid grid-cols-[2fr_2fr_1fr] place-items-left gap-2'>
				    <div className='min-w-0'>
    				    <h3 className='mx-4 font-bold'>
        					DỊCH VỤ
        				</h3>
                        <ul>
                            <li>
                                <Link href='/' className='mx-4 hover:text-blue'>
                                    Điều khoản sử dụng
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className='mx-4 hover:text-blue'>
                                    Chính sách bảo mật thông tin
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className='mx-4 hover:text-blue'>
                                    Chính sách bảo mật thanh toán
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className='mx-4 hover:text-blue'>
                                    Giới thiệu FT BOOK
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className='mx-4 hover:text-blue'>
                                    Hệ thống trung tâm nhà sách
                                </Link>
                            </li>
                        </ul>
    				</div>
    				<div>
    				    <h3 className='mx-4 font-bold'>
        					HỖ TRỢ
        				</h3>
                        <ul>
                            <li>
                                <Link href='/' className='mx-4 hover:text-blue'>
                                    Chính sách đổi - trả - hoàn tiền
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className='mx-4 hover:text-blue'>
                                    Chính sách bảo hành - bồi hoàn
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className='mx-4 hover:text-blue'>
                                    Chính sách vận chuyển
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className='mx-4 hover:text-blue'>
                                    Chính sách khách sỉ
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className='mx-4 hover:text-blue'>
                                    Phương thức thanh toán và xuất HĐ
                                </Link>
                            </li>
                        </ul>
    				</div>
    				<div>
    				    <h3 className='mx-4 font-bold'>
        					LIÊN HỆ
        				</h3>
                        <ul>
                            <li>
                                <Link href='/' className='mx-4 hover:text-blue'>
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className='mx-4 hover:text-blue'>
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href='/' className='mx-4 hover:text-blue'>
                                    Twitter
                                </Link>
                            </li>
                        </ul>
    				</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
