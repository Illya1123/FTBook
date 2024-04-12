import Head from 'next/head';
import AnimationComponents from '../_components/AnimationComponents';
import NavigationBar from '../_components/NavigationBar';

export default function ShippingPolicy() {
	return (
		<div className='container mx-auto'>
			<title>Chính Sách Vận Chuyển - FTBOOK</title>

			<NavigationBar title='Chính Sách Vận Chuyển/Đóng Gói cho FTBOOK' />
			<AnimationComponents>
				<h1 className='mb-4 text-3xl font-semibold'>Chính Sách Vận Chuyển/Đóng Gói</h1>

				<section className='mb-8'>
					<h2 className='mb-2 text-xl font-semibold'>Chính Sách Vận Chuyển</h2>
					<p className='mb-4'>
						Chúng tôi cam kết cung cấp dịch vụ vận chuyển hàng hóa đáng tin cậy và chất lượng cho
						tất cả các đơn hàng trên website FTBOOK. Thời gian vận chuyển có thể thay đổi tùy theo
						địa chỉ giao hàng và điều kiện giao thông.
					</p>
					<p className='font-bold'>Bảng thời gian dự kiến như sau:</p>
					<table className='mt-4 table-auto border-collapse border border-gray-400'>
						<thead>
							<tr>
								<th className='border border-gray-400 px-4 py-2'>Tuyến</th>
								<th className='border border-gray-400 px-4 py-2'>Khu Vực</th>
								<th className='border border-gray-400 px-4 py-2'>Thời Gian Dự Kiến</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='border border-gray-400 px-4 py-2'>
									Hồ Chí Minh – Hồ Chí Minh
									<br />
									Hà Nội – Hà Nội
								</td>
								<td className='border border-gray-400 px-4 py-2'>
									Nội Thành <br />
									Ngoại Thành
								</td>
								<td className='border border-gray-400 px-4 py-2'>
									<br />1 - 2 ngày
								</td>
							</tr>
							<tr>
								<td className='border border-gray-400 px-4 py-2'>
									Hồ Chí Minh – Miền Nam
									<br />
									Hà Nội – Miền Bắc
								</td>
								<td className='border border-gray-400 px-4 py-2'>
									Trung tâm Tỉnh, Thành phố, Thị xã
									<br />
									Huyện, xã
								</td>
								<td className='border border-gray-400 px-4 py-2'>
									2 ngày
									<br />1 - 2 ngày
								</td>
							</tr>
							<tr>
								<td className='border border-gray-400 px-4 py-2'>
									Hồ Chí Minh – Miền Trung
									<br />
									Hà Nội – Miền Trung
								</td>
								<td className='border border-gray-400 px-4 py-2'>
									Trung tâm Tỉnh, Thành phố, Thị xã
									<br />
									Huyện, xã
								</td>
								<td className='border border-gray-400 px-4 py-2'>
									4 ngày
									<br />3 - 4 ngày
								</td>
							</tr>
							<tr>
								<td className='border border-gray-400 px-4 py-2'>
									Hồ Chí Minh – Miền Bắc
									<br />
									Hà Nội – Miền Nam
								</td>
								<td className='border border-gray-400 px-4 py-2'>
									Trung tâm Tỉnh, Thành phố, Thị xã
									<br />
									Huyện, xã
								</td>
								<td className='border border-gray-400 px-4 py-2'>
									4 ngày
									<br />5 - 6 ngày
								</td>
							</tr>
						</tbody>
					</table>
				</section>

				{/* Bảng Giá Dịch Vụ Vận Chuyển Hàng Hóa */}
				<section className='mb-8'>
					<h2 className='mb-2 text-xl font-semibold'>Bảng Giá Dịch Vụ Vận Chuyển Hàng Hóa</h2>
					<div className='overflow-x-auto'>
						<table className='table-auto border-collapse border border-gray-400'>
							<thead>
								<tr>
									<th className='border border-gray-400 px-4 py-2'>Khu vực giao</th>
									<th className='border border-gray-400 px-4 py-2'>
										Phí vận chuyển (đã bao gồm VAT)
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className='border border-gray-400 px-4 py-2'>
										Nội Thành Hồ Chí Minh, Hà Nội
									</td>
									<td className='border border-gray-400 px-4 py-2'>
										20.000 đồng
										<br />
										Quý khách kiểm tra phí vận chuyển tại bước “Thanh toán”.
									</td>
								</tr>
								<tr>
									<td className='border border-gray-400 px-4 py-2'>Các khu vực còn lại</td>
									<td className='border border-gray-400 px-4 py-2'>
										35.000 đồng
										<br />
										Quý khách kiểm tra phí vận chuyển tại bước “Thanh toán”.
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>

				<section className='mb-8'>
					<h2 className='mb-2 text-xl font-semibold'>Một Số Lưu Ý Khi Nhận Hàng</h2>
					<ul className='mb-4 ml-6 list-disc'>
						<li>
							Vui lòng kiểm tra hàng hóa ngay sau khi nhận để đảm bảo không có hỏng hóc hoặc thiếu
							sót.
						</li>
						<li>
							Quý khách vui lòng ký vào biên bản giao nhận hàng hóa chỉ sau khi kiểm tra kỹ lưỡng.
						</li>
						<li>
							Trong trường hợp phát hiện bất kỳ vấn đề nào, vui lòng liên hệ với chúng tôi ngay lập
							tức để được hỗ trợ.
						</li>
					</ul>
				</section>

				<section className='mb-8'>
					<h2 className='mb-2 text-xl font-semibold'>Tra Cứu Thông Tin Vận Chuyển Đơn Hàng</h2>
					<ul className='mb-4 ml-6 list-disc'>
						<li>
							Để tra cứu thông tin vận chuyển của đơn hàng, vui lòng đăng nhập vào tài khoản của bạn
							trên trang web và truy cập vào mục "Theo Dõi Đơn Hàng".
						</li>
						<li>
							Nếu có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng tôi qua số hotline hoặc email
							hỗ trợ.
						</li>
					</ul>
				</section>
				<p>
					Chúng tôi cảm ơn sự tin tưởng và ủng hộ của quý khách đối với dịch vụ của chúng tôi. Đừng
					ngần ngại liên hệ nếu cần thêm thông tin hoặc hỗ trợ!
				</p>
			</AnimationComponents>
		</div>
	);
}
