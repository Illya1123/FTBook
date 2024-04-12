import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import AnimationComponents from '../_components/AnimationComponents';
const TermsOfServicePage = () => {
	return (
		<div>
			<title>Điều khoản sử dụng</title>
			<div className='my-5 flex items-center'>
				<Link href='/' className='hover:text-blue'>
					Trang chủ
				</Link>
				<FontAwesomeIcon icon={faChevronRight} className='mx-2 h-2 w-2 ' />
				<p className=' text-orange'>Điều khoản sử dụng</p>
			</div>
			<AnimationComponents className='min-h-screen  py-4 '>
				<div className='mx-auto rounded-md  '>
					<h2 className='mb-4 text-2xl font-bold'>Điều khoản sử dụng</h2>
					<p className='mb-8 text-sm'>
						Xin vui lòng đọc kỹ các điều khoản và điều kiện sau đây ("Điều khoản") trước khi sử dụng
						website FTBOOK ("Chúng tôi", "của chúng tôi"). Bằng cách truy cập hoặc sử dụng website
						của chúng tôi, bạn đồng ý tuân thủ các điều khoản và điều kiện này. Nếu bạn không đồng ý
						với bất kỳ điều khoản nào, xin vui lòng không sử dụng website của chúng tôi.
					</p>
					<h3 className='mb-2 text-lg font-bold'>Tài khoản của khách hàng</h3>
					<ul className='mb-4 list-disc pl-6'>
						<li>
							<p className='text-sm'>
								Để sử dụng một số dịch vụ hoặc chức năng đặc biệt trên website FTBOOK, bạn có thể
								cần đăng ký một tài khoản. Bằng cách tạo tài khoản, bạn cam kết cung cấp thông tin
								cá nhân chính xác, đầy đủ và không gian lận. Bạn chịu trách nhiệm duy trì tính bảo
								mật của tài khoản và mật khẩu của mình và chịu trách nhiệm cho tất cả các hoạt động
								được thực hiện từ tài khoản của bạn. Bạn đồng ý thông báo ngay lập tức cho chúng tôi
								về bất kỳ việc sử dụng trái phép hoặc không được ủy quyền của tài khoản của bạn.
							</p>
						</li>
						<li>
							<p className='text-sm'>
								Chúng tôi có quyền tạm ngừng hoặc chấm dứt tài khoản của bạn nếu chúng tôi tin rằng
								bạn vi phạm các điều khoản và điều kiện này hoặc luật pháp hiện hành.
							</p>
						</li>
					</ul>
					<h3 className='mb-2 text-lg font-bold'>Bảo mật thông tin của khách hàng</h3>
					<ul className='mb-4 list-disc pl-6'>
						<li>
							<p className='text-sm'>
								Chúng tôi cam kết bảo vệ thông tin cá nhân của khách hàng theo Chính sách Bảo mật
								của chúng tôi. Chúng tôi sẽ không tiết lộ thông tin cá nhân của khách hàng cho bất
								kỳ bên thứ ba nào mà không có sự đồng ý của khách hàng, trừ khi có yêu cầu pháp lý
								hoặc theo quy định của pháp luật hiện hành.
							</p>
						</li>
						<li>
							<p className='text-sm'>
								Mặc dù chúng tôi đã áp dụng các biện pháp bảo mật hợp lý để bảo vệ thông tin cá nhân
								của khách hàng, tuy nhiên, việc truyền dữ liệu qua internet không hoàn toàn an toàn
								và chúng tôi không thể đảm bảo tính bảo mật tuyệt đối của thông tin bạn truyền đến
								chúng tôi. Khách hàng chịu mọi rủi ro liên quan đến việc truyền thông tin cá nhân
								qua internet.
							</p>
						</li>
					</ul>
					<h3 className='mb-2 text-lg font-bold'>
						Trách nhiệm của khách hàng khi sử dụng dịch vụ của FTBOOK
					</h3>
					<ul className='mb-4 list-disc pl-6'>
						<li>
							<p className='text-sm'>
								Khách hàng cam kết sử dụng dịch vụ của FTBOOK một cách hợp pháp và tuân thủ tất cả
								các quy định và hướng dẫn được công bố trên website.
							</p>
						</li>
						<li>
							<p className='text-sm font-semibold'>Khách hàng không được:</p>
							<ul className='list-disc pl-6'>
								<li>
									<p className='text-sm'>
										Sử dụng dịch vụ của FTBOOK để thực hiện bất kỳ hành vi vi phạm pháp luật hoặc
										xâm phạm đến quyền lợi của người khác.
									</p>
								</li>
								<li>
									<p className='text-sm'>
										Thực hiện bất kỳ hành động nào gây ảnh hưởng đến hệ thống hoặc an ninh của
										FTBOOK hoặc bất kỳ hệ thống nào liên quan đến dịch vụ của chúng tôi.
									</p>
								</li>
								<li>
									<p className='text-sm'>
										Tạo ra, đăng tải, truyền tải hoặc lưu trữ bất kỳ nội dung vi phạm bản quyền,
										thông tin sai lệch, đe dọa, phỉ báng, xúc phạm hoặc bất kỳ nội dung không phù
										hợp nào khác.
									</p>
								</li>
								<li>
									<p className='text-sm'>
										Gây cản trở hoặc gây trở ngại cho hoạt động bình thường của dịch vụ FTBOOK hoặc
										làm ảnh hưởng đến trải nghiệm của người dùng khác.
									</p>
								</li>
							</ul>
						</li>
						<li>
							<p className='text-sm'>
								Khách hàng chịu mọi trách nhiệm pháp lý và hậu quả phát sinh từ việc vi phạm các
								điều khoản và điều kiện này hoặc vi phạm pháp luật hiện hành.
							</p>
						</li>
					</ul>
					<h3 className='mb-2 text-lg font-bold'>Trách nhiệm và quyền lợi của FTBOOK</h3>
					<ul className='mb-4 list-disc pl-6'>
						<li>
							<p className='text-sm'>
								FTBOOK cam kết cung cấp dịch vụ của mình một cách có chất lượng và đảm bảo tính khả
								dụng trong phạm vi tối đa có thể. Tuy nhiên, chúng tôi không chịu trách nhiệm đối
								với bất kỳ thiệt hại trực tiếp hoặc gián tiếp nào phát sinh từ việc sử dụng hoặc
								không thể sử dụng dịch vụ của chúng tôi.
							</p>
						</li>
						<li>
							<p className='text-sm'>
								FTBOOK không đảm bảo rằng website sẽ hoạt động một cách liên tục và không bị gián
								đoạn hoặc không có lỗi. Chúng tôi cũng không đảm bảo rằng thông tin trên website là
								chính xác, đầy đủ hoặc hiện tại. Bạn chịu trách nhiệm kiểm tra tính chính xác, độ
								tin cậy và tính khả dụng của bất kỳ thông tin nào trên website trước khi dựa vào nó.
							</p>
						</li>
						<li>
							<p className='text-sm'>
								FTBOOK có quyền thay đổi, điều chỉnh hoặc chấm dứt dịch vụ của mình mà không cần
								thông báo trước. Chúng tôi cũng có quyền từ chối hoặc hạn chế quyền truy cập của
								khách hàng vào website FTBOOK hoặc dịch vụ liên quan nếu chúng tôi cho rằng khách
								hàng vi phạm các điều khoản và điều kiện này hoặc luật pháp hiện hành.
							</p>
						</li>
					</ul>
				</div>
			</AnimationComponents>
		</div>
	);
};

export default TermsOfServicePage;
