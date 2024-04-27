import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import AnimationComponents from '../_components/AnimationComponents';
import Header from '../_components/Header';
export default function About() {
	return (
		<div className='min-h-screen bg-gray-100'>
			<Header activeAbout />
			<title>FT BOOK - Giới thiệu thương hiệu sách</title>
			<div className='my-5 flex items-center'>
				<Link href='/' className='hover:text-blue'>
					Trang chủ
				</Link>
				<FontAwesomeIcon icon={faChevronRight} className='mx-2 h-2 w-2 ' />
				<p className=' text-orange'>FT BOOK - Giới thiệu thương hiệu sách</p>
			</div>
			<AnimationComponents bgPageInfor>
				<h1 className='mb-4 text-3xl font-bold'>Chào mừng đến với FT BOOK</h1>
				<p className='mb-6 text-base'>
					Nơi mà chúng tôi mang đến cho bạn những trải nghiệm đọc sách tuyệt vời và đầy cảm hứng!
				</p>
				<p className='mb-6 text-base'>
					Chúng tôi tự hào là một thương hiệu sách hàng đầu, cam kết cung cấp cho bạn những tác phẩm
					tuyệt vời nhất từ các tác giả hàng đầu trên thế giới.
				</p>
				<p className='mb-6 text-base'>
					Tại FT BOOK, chúng tôi tin rằng sách là nguồn cảm hứng vô tận. Chúng là cánh cửa đến thế
					giới của tri thức, sự sáng tạo và khám phá.
				</p>
				<p className='mb-6 text-base'>
					Với sứ mệnh truyền cảm hứng và khuyến khích việc đọc sách, chúng tôi mong muốn chia sẻ
					niềm đam mê với mọi người và giúp bạn khám phá những câu chuyện tuyệt vời mà thế giới sách
					mang lại.
				</p>
				<p className='mb-6 text-base'>
					Chất lượng là ưu tiên hàng đầu của chúng tôi. Chúng tôi tự hào về việc cung cấp cho bạn
					một bộ sưu tập đa dạng và phong phú của sách với nhiều thể loại khác nhau, bao gồm tiểu
					thuyết, văn học kinh điển, sách kỹ năng, kinh doanh, khoa học, và nhiều thể loại khác nữa.
					Chúng tôi luôn tìm kiếm những cuốn sách mới nhất và những tác giả đang nổi lên để bạn có
					thể tận hưởng những trải nghiệm đọc sách mới mẻ và độc đáo.
				</p>
				<p className='mb-6 text-base'>
					Trang web của chúng tôi được thiết kế đẹp mắt, dễ sử dụng và tối ưu hóa để bạn có thể dễ
					dàng tìm kiếm và khám phá những cuốn sách mà bạn quan tâm. Chúng tôi cung cấp thông tin
					chi tiết về mỗi cuốn sách, bao gồm tóm tắt, đánh giá và lời khuyên từ đội ngũ chuyên gia
					của chúng tôi. Bạn cũng có thể đọc nhận xét và đánh giá từ cộng đồng độc giả của chúng tôi
					để có cái nhìn tổng quan về cuốn sách trước khi quyết định mua.
				</p>
				<p className='text-base'>
					Ngoài ra, chúng tôi cung cấp dịch vụ giao hàng nhanh chóng và tin cậy để đảm bảo bạn nhận
					được sách một cách thuận tiện và kịp thời. Chúng tôi luôn lắng nghe ý kiến và phản hồi từ
					khách hàng để cải thiện chất lượng dịch vụ của mình. Hãy tham gia cùng chúng tôi trên hành
					trình khám phá thế giới sách tuyệt vời. Đăng ký nhận bản tin của chúng tôi để cập nhật
					thông tin về các cuốn sách mới nhất, ưu đãi đặc biệt và sự kiện độc quyền. Cảm ơn bạn đã
					ghé thăm FT BOOK. Chúc bạn có những trải nghiệm đọc sách tuyệt vời!
				</p>
			</AnimationComponents>
		</div>
	);
}
