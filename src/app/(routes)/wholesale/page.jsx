import React from 'react';
import AnimationComponents from '../_components/AnimationComponents';
import NavigationBar from '../_components/NavigationBar';

const WholeSalePage = () => {
	return (
		<div className='min-h-screen'>
			<title>Chính sách khách mua sỉ cho website FTBOOK</title>

			<NavigationBar title='Chính sách bảo hành – bồi hoàn' />
			<AnimationComponents className='container mx-auto py-4'>
				<h2 className='mb-4 text-2xl font-semibold'>Chính sách khách mua sỉ cho website FTBOOK</h2>
				<p>
					Chào mừng quý khách đến với FTBOOK! Chúng tôi rất vui mừng khi được hợp tác cùng quý khách
					trong việc cung cấp sản phẩm chất lượng và dịch vụ tốt nhất. Chính sách mua sỉ của chúng
					tôi được thiết kế để đáp ứng nhu cầu của các đối tác kinh doanh, nhà phân phối và cá nhân
					muốn mua số lượng lớn sản phẩm từ chúng tôi. Dưới đây là những điều khoản và điều kiện cụ
					thể:
				</p>
				<ul className='mb-4 mt-2 list-decimal pl-6'>
					<li>
						<h2 className='mb-2 text-lg font-semibold'>Số lượng tối thiểu</h2>
						<p className='mb-4 text-sm'>
							Để được áp dụng chính sách mua sỉ, quý khách cần mua số lượng tối thiểu được xác định
							trước. Số lượng tối thiểu có thể thay đổi tùy theo từng sản phẩm và loại hàng hóa. Vui
							lòng liên hệ với chúng tôi để biết thông tin chi tiết về số lượng tối thiểu áp dụng
							cho sản phẩm bạn quan tâm.
						</p>
					</li>
					<li>
						<h2 className='mb-2 text-lg font-semibold'>Giá bán sỉ</h2>
						<p className='mb-4 text-sm'>
							Chúng tôi cam kết cung cấp giá bán sỉ cạnh tranh và linh hoạt, phản ánh số lượng sản
							phẩm mà quý khách định mua. Giá bán sỉ có thể được điều chỉnh dựa trên số lượng đặt
							hàng và các yếu tố khác. Vui lòng liên hệ với chúng tôi để nhận báo giá chi tiết và ưu
							đãi đặc biệt cho đơn hàng mua sỉ của bạn.
						</p>
					</li>
					<li>
						<h2 className='mb-2 text-lg font-semibold'>Thanh toán</h2>
						<p className='mb-4 text-sm'>
							Chúng tôi chấp nhận các phương thức thanh toán đa dạng như chuyển khoản ngân hàng, thẻ
							tín dụng, PayPal, và các phương thức thanh toán trực tuyến khác. Thời gian thanh toán
							và điều kiện thanh toán cụ thể sẽ được thỏa thuận trong hợp đồng hoặc trước khi xác
							nhận đơn hàng.
						</p>
					</li>
					<li>
						<h2 className='mb-2 text-lg font-semibold'>Vận chuyển và giao hàng</h2>
						<p className='mb-4 text-sm'>
							Chúng tôi sẽ hỗ trợ vận chuyển và giao hàng cho đơn hàng mua sỉ. Phí vận chuyển và
							thời gian giao hàng sẽ được tính dựa trên địa chỉ nhận hàng, số lượng sản phẩm và
							phương thức vận chuyển bạn chọn. Chúng tôi cam kết cung cấp dịch vụ vận chuyển nhanh
							chóng, an toàn và đảm bảo sản phẩm đến tay quý khách một cách an toàn.
						</p>
					</li>
					<li>
						<h2 className='mb-2 text-lg font-semibold'>Chính sách hoàn trả và đổi trả</h2>
						<p className='mb-4 text-sm'>
							Vui lòng xem xét kỹ trước khi đặt đơn hàng, vì chúng tôi không chấp nhận đổi trả hoặc
							hoàn tiền đối với các đơn hàng mua sỉ trừ trường hợp hàng bị lỗi hoặc hỏng hóc trong
							quá trình vận chuyển. Trong trường hợp này, chúng tôi sẽ hoàn lại hoặc thay thế sản
							phẩm bị lỗi một cách nhanh chóng và hiệu quả.
						</p>
					</li>
					<li>
						<h2 className='mb-2 text-lg font-semibold'>
							Chính sách đặt hàng và thanh toán đặt cọc
						</h2>
						<p className='mb-4 text-sm'>
							Để đảm bảo việc xử lý đơn hàng mua sỉ một cách nhanh chóng và hiệu quả, chúng tôi có
							thể yêu cầu thanh toán đặt cọc trước khi xác nhận đơn hàng. Số tiền đặt cọc sẽ được
							thỏa thuận trước giữa hai bên và sẽ được trừ vào tổng số tiền thanh toán.
						</p>
					</li>
					<li>
						<h2 className='mb-2 text-lg font-semibold'>Bảo mật thông tin</h2>
						<p className='mb-4 text-sm'>
							Chúng tôi cam kết bảo mật thông tin của quý khách và chỉ sử dụng thông tin đó để xử lý
							đơn hàng mua sỉ. Mọi thông tin cá nhân và giao dịch của quý khách sẽ được bảo vệ và
							không được tiết lộ cho bất kỳ bên thứ ba nào.
						</p>
					</li>
					<li>
						<h2 className='mb-2 text-lg font-semibold'>Hỗ trợ khách hàng</h2>
						<p className='mb-4 text-sm'>
							Đội ngũ hỗ trợ khách hàng của chúng tôi luôn sẵn lòng hỗ trợ và giải đáp mọi thắc mắc
							của quý khách về chính sách mua sỉ và sản phẩm của chúng tôi. Vui lòng liên hệ với
							chúng tôi qua email hoặc số điện thoại được cung cấp trên trang web.
						</p>
					</li>
				</ul>
				<p>
					Chúng tôi hy vọng rằng chính sách mua sỉ của chúng tôi sẽ đáp ứng được nhu cầu của quý
					khách và tạo điều kiện thuận lợi cho sự hợp tác lâu dài giữa chúng tôi và quý khách. Xin
					chân thành cảm ơn sự quan tâm và ủng hộ của quý khách!
				</p>
			</AnimationComponents>
		</div>
	);
};

export default WholeSalePage;
