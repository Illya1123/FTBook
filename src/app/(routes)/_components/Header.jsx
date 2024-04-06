
'use client';
import { faBell, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';

function Header({ activeHome, activeBook, activeAbout, activeContact }) {
	const [quantityCart, setQuantityCart] = useState(0);
	return (
		<div className='fixed left-0 right-0 top-0 border-b'>
			<div className='mx-auto flex max-w-[1200px] items-center justify-between py-4'>
				<div>
					<h1 className='text-blue text-2xl font-bold'>
						FT <span className='text-orange'>BOOK</span>
					</h1>
				</div>
				<div className='grid grid-cols-4 place-items-center gap-2'>
					<Link className={activeHome ? `text-blue` : null} href='#'>
						Trang chủ
					</Link>
					<Link className={activeBook ? `text-blue` : null} href='#'>
						Sách
					</Link>
					<Link className={activeAbout ? `text-blue` : null} href='#'>
						Giới thiệu
					</Link>
					<Link className={activeContact ? `text-blue` : null} href='#'>
						Liên hệ
					</Link>
				</div>
				<div>
					<input className='border px-2 py-1 outline-none' />
				</div>
				<div className='grid grid-cols-4 place-items-center gap-4'>
					<div className=' '>
						<FontAwesomeIcon icon={faBell} className='h-5 w-5' />
					</div>
					<div className=' relative'>
						<FontAwesomeIcon icon={faCartShopping} className=' h-5 w-5 ' />
						{quantityCart > 0 ? (
							<div className='absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white'>
								<p>{quantityCart}</p>
							</div>
						) : null}
					</div>
					<div className=' group relative cursor-pointer'>
						<FontAwesomeIcon icon={faUser} className='  h-5 w-5' />
						<div className='  before-user invisible absolute right-0 top-[200%] z-50  min-w-48  group-hover:visible'>
							<div className='rounded-md border p-2'>
								<div className='cursor-pointer border-b py-2 hover:text-gray-300'>
									<Link href='#'>Đăng nhập</Link>
								</div>
								<div className='cursor-pointer border-b  py-2 hover:text-gray-300'>
									<Link href='#'>Đăng ký</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
