'use client';
import { useState } from 'react';
import Header from '../_components/Header';
import Link from 'next/link';

function CartPage() {
	const [isCart, setIsCart] = useState(false);
	return (
		<>
			<Header />
			<div className='mx-auto max-w-[1200px]'>
				{isCart ? (
					<div>True</div>
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
