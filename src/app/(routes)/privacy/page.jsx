import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import AnimationComponents from '../_components/AnimationComponents';

const PrivacyPage = () => {
	return (
		<div className='container mx-auto p-4'>
			<div className='my-5 flex items-center'>
				<Link href='/' className='hover:text-blue'>
					Trang chủ
				</Link>
				<FontAwesomeIcon icon={faChevronRight} className='mx-2 h-2 w-2 ' />
				<p className=' text-orange'>Chính sách bảo mật</p>
			</div>
			<title>Chính sách bảo mật - FTBOOK</title>
			<AnimationComponents bgPageInfor>
				<h1 className='mb-4 text-3xl font-bold'>Chính sách bảo mật</h1>
				<p>
					Chào mừng bạn đến với chính sách bảo mật thông tin cá nhân của FTBOOK. Chúng tôi cam kết
					bảo vệ thông tin cá nhân của bạn và tuân thủ các quy định pháp luật về bảo vệ dữ liệu cá
					nhân. Trang này sẽ giúp bạn hiểu rõ hơn về cách chúng tôi thu thập, sử dụng và bảo vệ
					thông tin cá nhân của bạn.
				</p>
				<h2 className='mt-6 text-xl font-bold'>1. Thu thập thông tin cá nhân</h2>
				<p>
					Khi bạn sử dụng website của chúng tôi, chúng tôi có thể thu thập các thông tin cá nhân như
					tên, địa chỉ email, số điện thoại, địa chỉ nhà, v.v. Các thông tin này được thu thập khi
					bạn đăng ký tài khoản, gửi liên hệ, hoặc tham gia các hoạt động khác trên website.
				</p>
				<h2 className='mt-6 text-xl font-bold'>2. Sử dụng thông tin cá nhân</h2>
				<p>
					Chúng tôi sử dụng thông tin cá nhân của bạn để cung cấp, duy trì và cải thiện dịch vụ của
					chúng tôi. Các mục đích sử dụng thông tin cá nhân bao gồm:
				</p>
				<ul className='ml-6 list-disc'>
					<li>Cung cấp và cá nhân hóa các dịch vụ theo yêu cầu của bạn</li>
					<li>Gửi thông tin liên quan đến tài khoản của bạn và các thông báo quan trọng khác</li>
					<li>Phân tích và cải thiện trải nghiệm người dùng trên website</li>
					<li>Liên hệ và hỗ trợ khách hàng</li>
					<li>Thực hiện các hoạt động quảng cáo và tiếp thị</li>
					<li>Đảm bảo tuân thủ các quy định pháp luật và chính sách của chúng tôi</li>
				</ul>
				<h2 className='mt-6 text-xl font-bold'>3. Bảo mật thông tin cá nhân</h2>
				<p>
					Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn và áp dụng các biện pháp an ninh hợp lý
					để ngăn chặn truy cập trái phép, sử dụng, tiết lộ hoặc hủy hoại thông tin cá nhân của bạn.
					Chúng tôi sử dụng các phương pháp bảo mật công nghệ và quản lý để bảo vệ thông tin cá nhân
					của bạn.
				</p>
				<h2 className='mt-6 text-xl font-bold'>4. Chia sẻ thông tin cá nhân</h2>
				<p>
					Chúng tôi không chia sẻ thông tin cá nhân của bạn với bất kỳ bên thứ ba nào trừ khi có sự
					đồng ý của bạn hoặc theo yêu cầu pháp luật. Chúng tôi có thể tiết lộ thông tin cá nhân của
					bạn cho các đối tác hoặc nhà cung cấp dịch vụ của chúng tôi để hỗ trợ hoạt động kinh doanh
					của chúng tôi, nhưng chúng tôi đảm bảo rằng các bên thứ ba này tuân thủ chính sách bảo mật
					tương tự như chúng tôi.
				</p>
				<h2 className='mt-6 text-xl font-bold'>5. Quyền riêng tư của người dùng</h2>
				<p>
					Bạn có quyền truy cập, sửa đổi hoặc xóa thông tin cá nhân của mình bất kỳ lúc nào. Bạn
					cũng có quyền từ chối cho phép chúng tôi sử dụng thông tin cá nhân của bạn cho mục đích
					quảng cáo và tiếp thị. Để thực hiện các quyền này, vui lòng liên hệ với chúng tôi qua
					thông tin liên lạc được cung cấp ở cuối chính sách này.
				</p>
				<h2 className='mt-6 text-xl font-bold'>6. Thay đổi chính sách</h2>
				<p>
					Chúng tôi có quyền cập nhật hoặc thay đổi chính sách bảo mật này vào bất kỳ lúc nào. Bất
					kỳ thay đổi nào sẽ có hiệu lực ngay khi được đăng trên trang web của chúng tôi. Chúng tôi
					khuyến nghị bạn kiểm tra thường xuyên trang chính sách bảo mật để cập nhật với các biện
					pháp mới nhất.
				</p>
				<h2 className='mt-6 text-xl font-bold'>7. Liên hệ chúng tôi</h2>
				<p>
					Nếu bạn có bất kỳ câu hỏi, ý kiến ​​hoặc khiếu nại về chính sách bảo mật, vui lòng liên hệ
					với chúng tôi qua thông tin liên hệ dưới đây: - Địa chỉ: 123 Đường ABC, Thành phố XYZ -
					Điện thoại: 0123456789 - Email: info@ftbook.com
				</p>
			</AnimationComponents>
		</div>
	);
};

export default PrivacyPage;
