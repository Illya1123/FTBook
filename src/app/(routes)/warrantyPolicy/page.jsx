import React from 'react';
import AnimationComponents from '../_components/AnimationComponents';
import NavigationBar from '../_components/NavigationBar';

const WarrantyPolicyPage = () => {
	return (
		<div className='min-h-screen'>
			<title>Chính sách bảo hành – bồi hoàn</title>

			<NavigationBar title='Chính sách bảo hành – bồi hoàn' />
			<AnimationComponents bgPageInfor>
				<h2 className='mb-4 text-2xl font-semibold'>CHÍNH SÁCH BẢO HÀNH – BỒI HOÀN</h2>
				<ul className='mb-4 list-decimal pl-6'>
					<li>
						<h2 className='mb-2 text-lg font-semibold'>Tôi có thể bảo hành sản phẩm tại đâu?</h2>
						<p className='mb-4 text-sm'>
							Bạn có thể bảo hành sản phẩm tại các cửa hàng của chúng tôi hoặc thông qua dịch vụ bảo
							hành trực tuyến được cung cấp trên trang web của chúng tôi. Vui lòng kiểm tra hướng
							dẫn cụ thể cho từng loại sản phẩm để biết thông tin chi tiết về việc bảo hành tại các
							địa điểm cụ thể.
						</p>
					</li>
					<li>
						<h2 className='mb-2 text-lg font-semibold'>
							Tôi có thể được bảo hành sản phẩm miễn phí không?
						</h2>
						<p className='mb-4 text-sm'>
							Chính sách bảo hành miễn phí được áp dụng cho các sản phẩm có lỗi kỹ thuật hoặc về vấn
							đề chất lượng do sản xuất. Tuy nhiên, việc được bảo hành miễn phí có thể phụ thuộc vào
							điều kiện và thời gian sử dụng sản phẩm.
						</p>
						<p className='mb-2 text-sm'>
							Sản phẩm của quý khách được bảo hành miễn phí chính hãng khi:
						</p>
						<ul className='list-disc pl-6'>
							<li>
								<p className='mb-2 text-sm'>
									Sản phẩm gặp sự cố kỹ thuật hoặc lỗi sản xuất trong thời gian bảo hành được quy
									định.
								</p>
							</li>
							<li>
								<p className='mb-2 text-sm'>
									Sản phẩm không bị tổn hại do sử dụng không đúng cách hoặc can thiệp từ bên thứ ba.
								</p>
							</li>
						</ul>
						<p className='mb-2 text-sm'>Các trường hợp có thể phát sinh phí bảo hành:</p>
						<ul className='list-disc pl-6'>
							<li>
								<p className='mb-2 text-sm'>Sản phẩm nằm ngoài thời gian bảo hành được quy định.</p>
							</li>
							<li>
								<p className='mb-2 text-sm'>
									Sản phẩm bị hỏng do nguyên nhân nằm ngoài phạm vi bảo hành của nhà sản xuất.
								</p>
							</li>
						</ul>
					</li>
					<li>
						<h2 className='mb-2 text-lg font-semibold'>
							Sau bao lâu tôi có thể nhận lại sản phẩm bảo hành?
						</h2>
						<p className='mb-4 text-sm'>
							Thời gian cụ thể để nhận lại sản phẩm sau khi được bảo hành có thể thay đổi tùy thuộc
							vào loại sản phẩm và tình trạng sửa chữa. Thông thường, chúng tôi sẽ cố gắng hoàn tất
							quá trình bảo hành trong thời gian ngắn nhất có thể và thông báo cho bạn về thời gian
							dự kiến trước khi trả sản phẩm.
						</p>
					</li>
					<li>
						<h2 className='mb-2 text-lg font-semibold'>Bảo hành bằng các hình thức nào?</h2>
						<p>
							Sản phẩm tại <span className='font-bold'>FTBOOK</span> sẽ được bảo hành bằng 1 trong 4
							hình thức sau:
						</p>
						<ul className='list-disc pl-6 pt-2'>
							<li>
								<p className='mb-2 text-sm'>
									Hóa đơn - Bảo hành sẽ được thực hiện dựa trên thông tin trên hóa đơn mua hàng, vì
									vậy vui lòng bảo quản hóa đơn mua hàng của bạn cẩn thận.
								</p>
							</li>
							<li>
								<p className='mb-2 text-sm'>
									Phiếu bảo hành - Một phiếu bảo hành sẽ được cung cấp khi bạn mua sản phẩm, và bạn
									có thể sử dụng nó để yêu cầu bảo hành trong thời gian quy định.
								</p>
							</li>
							<li>
								<p className='mb-2 text-sm'>
									Tem bảo hành - Một tem bảo hành sẽ được dán trên sản phẩm, và bạn có thể sử dụng
									nó khi cần bảo hành.
								</p>
							</li>
							<li>
								<p className='mb-2 text-sm'>
									Điện tử - Một phiếu bảo hành điện tử có thể được gửi đến địa chỉ email của bạn
									hoặc lưu trữ trên tài khoản của bạn trên trang web của chúng tôi.
								</p>
							</li>
						</ul>
					</li>
					<li>
						<h2 className='mb-2 text-lg font-semibold'>Có bảo hành quà tặng kèm sản phẩm không?</h2>
						<p className='text-sm'>
							Chính sách bảo hành không áp dụng cho các sản phẩm quà tặng kèm theo sản phẩm chính,
							trừ khi được quy định rõ ràng trong điều khoản và điều kiện cụ thể. Xin vui lòng kiểm
							tra thông tin chi tiết về chính sách bảo hành của sản phẩm quà tặng trước khi sử dụng.
						</p>
					</li>
				</ul>
			</AnimationComponents>
		</div>
	);
};

export default WarrantyPolicyPage;
