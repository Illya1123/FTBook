import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

function SuccessfulTransaction() {
	return (
		<div className='my-4 flex h-[340px] flex-col items-center justify-center bg-white'>
			<title>Thanh toán thành công</title>
			<FontAwesomeIcon icon={faCircleCheck} className='text-green mb-2 h-12 w-12' />
			<p className='text-green text-3xl font-bold'>Đơn hàng của bạn đã được tiếp nhận</p>
			<div className='my-2 text-center'>
				<p>Cảm ơn bạn đã mua hàng tại FTBOOK.com</p>
				<p>
					Mã đơn hàng của bạn là: <span className='text-orange'>aduahd3f8effada2</span>{' '}
				</p>
				<p>Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất.</p>
			</div>

			<Link
				href='/'
				className='my-5 rounded-md border border-blue1 px-8 py-2 text-xl font-bold text-blue1 hover:bg-blue1 hover:text-white '
			>
				TIẾP TỤC MUA SẮM
			</Link>
		</div>
	);
}

export default SuccessfulTransaction;
