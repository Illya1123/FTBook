import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import AnimationComponents from '../_components/AnimationComponents';

const PaymentSecurityPolicy = () => {
	return (
		<div className=''>
			<title>Chính sách bảo mật thanh toán</title>
			<div className='my-5 flex items-center'>
				<Link href='/' className='hover:text-blue'>
					Trang chủ
				</Link>
				<FontAwesomeIcon icon={faChevronRight} className='mx-2 h-2 w-2 ' />
				<p className=' text-orange'>Chính sách bảo mật thanh toán</p>
			</div>
			<AnimationComponents bgPageInfor>
				<h1 className='mb-4 text-3xl font-bold'>CHÍNH SÁCH BẢO MẬT THANH TOÁN</h1>

				<div className='mb-4'>
					<h2 className='text-lg font-bold'>1. Phương thức thanh toán</h2>
					<p className='text-sm'>
						FTBOOK cung cấp các phương thức thanh toán an toàn và đáng tin cậy để bạn có thể thực
						hiện giao dịch một cách thuận tiện.
					</p>
					<p className='text-sm'> Giao diện cho danh sách các phương thức thanh toán </p>
				</div>

				<div className='mb-4'>
					<h2 className='text-lg font-bold'>2. Bảo mật thông tin thanh toán</h2>
					<p className='text-sm'>
						Chúng tôi cam kết áp dụng các biện pháp an ninh hợp lý để bảo vệ thông tin thanh toán
						của bạn khỏi truy cập trái phép, sử dụng, tiết lộ hoặc hủy hoại.
					</p>
					<p className='text-sm'> Giao diện cho các biện pháp bảo mật thông tin </p>
				</div>

				<div className='mb-4'>
					<h2 className='text-lg font-bold'>3. Không chia sẻ thông tin thanh toán</h2>
					<p className='text-sm'>
						Chúng tôi cam kết không chia sẻ, bán, cho thuê hoặc trao đổi thông tin thanh toán của
						bạn với bất kỳ bên thứ ba nào trừ khi có sự đồng ý của bạn hoặc theo yêu cầu pháp luật.
					</p>
					<p className='text-sm'> Giao diện cho khẳng định không chia sẻ thông tin thanh toán </p>
				</div>

				<div className='mb-4'>
					<h2 className='text-lg font-bold'>4. Quyền riêng tư của người dùng</h2>
					<p className='text-sm'>
						Bạn có quyền truy cập, sửa đổi hoặc xóa thông tin thanh toán của mình bất kỳ lúc nào.
						Bạn cũng có quyền từ chối cho phép chúng tôi sử dụng thông tin thanh toán của bạn cho
						mục đích tiếp thị hoặc liên lạc với bạn.
					</p>
					<p className='text-sm'> Giao diện cho quyền riêng tư của người dùng </p>
				</div>

				<div className='mb-4'>
					<h2 className='text-lg font-bold'>5. Liên hệ</h2>
					<p className='text-sm'>
						Nếu bạn có bất kỳ câu hỏi, yêu cầu hoặc phản hồi liên quan đến Chính sách Bảo mật Thanh
						toán, vui lòng liên hệ với chúng tôi qua thông tin sau:
					</p>
					<p className='text-sm'>
						Tên công ty: FTBOOK
						<br />
						Địa chỉ: 123 Đường ABC, Thành phố XYZ
						<br />
						Email: info@ftbook.com
						<br />
						Số điện thoại: 0123456789
					</p>
				</div>
			</AnimationComponents>
		</div>
	);
};

export default PaymentSecurityPolicy;
