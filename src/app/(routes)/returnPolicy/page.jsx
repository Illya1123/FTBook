import Head from 'next/head';
import AnimationComponents from '../_components/AnimationComponents';
import NavigationBar from '../_components/NavigationBar';

export default function ReturnPolicyPage() {
	return (
		<div className='min-h-screen'>
			<title>Chính Sách Đổi/Trả/Hoàn Tiền - FTBOOK</title>

			<NavigationBar title='Chính Sách Đổi/Trả/Hoàn Tiền của FTBOOK' />
			<AnimationComponents className='container mx-auto py-8'>
				<h1 className='mb-4 text-3xl font-semibold'>Chính Sách Đổi/Trả/Hoàn Tiền của FTBOOK</h1>

				<div className='rounded-lg '>
					<h2 className='mb-2 text-xl font-semibold'>1. Chính Sách Đổi Hàng:</h2>
					<p className='mb-4'>
						- Khách hàng có thể đổi sản phẩm trong vòng 30 ngày kể từ ngày mua hàng, miễn là sản
						phẩm vẫn còn trong trạng thái mới và chưa qua sử dụng.
						<br />
						- Để đổi hàng, khách hàng vui lòng liên hệ với bộ phận chăm sóc khách hàng của chúng tôi
						để được hướng dẫn cụ thể về quy trình đổi hàng.
						<br />- Phí vận chuyển cho quá trình đổi hàng sẽ được khách hàng chịu trách nhiệm, trừ
						trường hợp sản phẩm bị lỗi từ phía chúng tôi.
					</p>

					<h2 className='mb-2 text-xl font-semibold'>2. Chính Sách Trả Hàng:</h2>
					<p className='mb-4'>
						- Chúng tôi chấp nhận việc trả lại sản phẩm trong vòng 15 ngày kể từ ngày mua hàng, miễn
						là sản phẩm vẫn còn trong trạng thái mới và chưa qua sử dụng.
						<br />
						- Khách hàng sẽ được hoàn lại số tiền mua hàng ban đầu dưới hình thức thanh toán ban đầu
						(thẻ tín dụng, chuyển khoản ngân hàng, hoặc các phương thức khác).
						<br />- Quá trình xử lý trả hàng có thể mất một khoảng thời gian nhất định, và chúng tôi
						sẽ thông báo cho khách hàng về tình trạng của việc trả hàng.
					</p>

					<h2 className='mb-2 text-xl font-semibold'>3. Chính Sách Hoàn Tiền:</h2>
					<p className='mb-4'>
						- Trong trường hợp sản phẩm không khớp với mô tả hoặc có lỗi từ phía chúng tôi, chúng
						tôi cam kết hoàn lại toàn bộ số tiền mua hàng cùng với phí vận chuyển ban đầu.
						<br />
						- Khách hàng sẽ cần cung cấp bằng chứng hoặc thông tin cụ thể về lỗi sản phẩm để được
						xem xét và hoàn tiền.
						<br />- Quá trình hoàn tiền có thể mất một thời gian để xử lý, và chúng tôi sẽ thông báo
						cho khách hàng về tình trạng của việc hoàn tiền.
					</p>

					<h2 className='mb-2 text-xl font-semibold'>4. Chú Ý:</h2>
					<ul className='mb-4 ml-6 list-disc'>
						<li>
							Mọi sản phẩm trả lại hoặc đổi hàng phải được gửi về địa chỉ chúng tôi chỉ định và phải
							được đóng gói cẩn thận để tránh hỏng hóc trong quá trình vận chuyển.
						</li>
						<li>
							Chúng tôi không chịu trách nhiệm cho bất kỳ mất mát hoặc hỏng hóc nào xảy ra trong quá
							trình vận chuyển khi khách hàng tự vận chuyển sản phẩm trở lại cho chúng tôi.
						</li>
						<li>
							Chúng tôi có thể từ chối việc đổi/trả/hoàn tiền nếu sản phẩm đã qua sử dụng hoặc không
							còn trong trạng thái mới ban đầu.
						</li>
					</ul>
				</div>
			</AnimationComponents>
		</div>
	);
}
