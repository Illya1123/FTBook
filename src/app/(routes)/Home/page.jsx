'use client';
import { UserButton, useUser } from '@clerk/nextjs';
import { TabContent, TabLink, Tabs } from 'react-tabs-redux';
// import Countdown from 'react-countdown';
import React from 'react';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from '@nextui-org/react';
import Slider from 'react-slick';
import { useEffect } from 'react';
import Header from '../_components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleRight,
	faBook,
	faBrain,
	faCartShopping,
	faChevronRight,
	faChild,
	faDollarSign,
	faEarthAsia,
} from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';
import { faEye, faHeart } from '@fortawesome/free-regular-svg-icons';
import AnimationComponents from '../_components/AnimationComponents';
import FacebookMsg from '../_components/FacebookMsg';
const products = [
	{
		_id: {
			$oid: '663376f4e7f9fda487047237',
		},
		name: 'Cây Cam Ngọt Của Tôi',
		quantity: 100,
		categoryAllId: '661949cc343796e299686dc4',
		categoryDetailId: '66194f95343796e299686dd1',
		categorySupplierId: '66198823243a328164578cc0',
		categoryPublishId: '66198b74c9f3ef21a7378d85',
		categoryYearId: '66198bd0c9f3ef21a7378d92',
		image: [
			'https://cdn0.fahasa.com/media/catalog/product/i/m/image_217480.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cay_cam_ngot_cua_toi/2020_12_17_16_50_30_1-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cay_cam_ngot_cua_toi/2020_12_17_16_50_30_2-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cay_cam_ngot_cua_toi/2020_12_17_16_50_30_3-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cay_cam_ngot_cua_toi/2020_12_17_16_50_30_6-390x510.jpg',
		],
		priceImport: 70000,
		priceSell: 108000,
		priceDiscount: 75600,
		author: 'José Mauro de Vasconcelos',
		form: 'Bìa Mềm',
		language: 'Tiếng Việt',
		yearOfManufacture: 2020,
		size: '20 x 14.5 cm',
		pageQuantity: 244,
		description:
			'“Vị chua chát của cái nghèo hòa trộn với vị ngọt ngào khi khám phá ra những điều khiến cuộc đời này đáng sống... một tác phẩm kinh điển của Brazil.” - Booklist. “Một cách nhìn cuộc sống gần như hoàn chỉnh từ con mắt trẻ thơ… có sức mạnh sưởi ấm và làm tan nát cõi lòng, dù người đọc ở lứa tuổi nào.” - The National. Hãy làm quen với Zezé, cậu bé tinh nghịch siêu hạng đồng thời cũng đáng yêu bậc nhất, với ước mơ lớn lên trở thành nhà thơ cổ thắt nơ bướm. Chẳng phải ai cũng công nhận khoản “đáng yêu” kia đâu nhé. Bởi vì, ở cái xóm ngoại ô nghèo ấy, nỗi khắc khổ bủa vây đã che mờ mắt người ta trước trái tim thiện lương cùng trí tưởng tượng tuyệt vời của cậu bé con năm tuổi.\n\nCó hề gì đâu bao nhiêu là hắt hủi, đánh mắng, vì Zezé đã có một người bạn đặc biệt để trút nỗi lòng: cây cam ngọt nơi vườn sau. Và cả một người bạn nữa, bằng xương bằng thịt, một ngày kia xuất hiện, cho cậu bé nhạy cảm khôn sớm biết thế nào là trìu mến, thế nào là nỗi đau, và mãi mãi thay đổi cuộc đời cậu.\n\nMở đầu bằng những thanh âm trong sáng và kết thúc lắng lại trong những nốt trầm hoài niệm, Cây cam ngọt của tôi khiến ta nhận ra vẻ đẹp thực sự của cuộc sống đến từ những điều giản dị như bông hoa trắng của cái cây sau nhà, và rằng cuộc đời thật khốn khổ nếu thiếu đi lòng yêu thương và niềm trắc ẩn. Cuốn sách kinh điển này bởi thế không ngừng khiến trái tim người đọc khắp thế giới thổn thức, kể từ khi ra mắt lần đầu năm 1968 tại Brazil.\n\nTÁC GIẢ:\n\nJOSÉ MAURO DE VASCONCELOS (1920-1984) là nhà văn người Brazil. Sinh ra trong một gia đình nghèo ở ngoại ô Rio de Janeiro, lớn lên ông phải làm đủ nghề để kiếm sống. Nhưng với tài kể chuyện thiên bẩm, trí nhớ phi thường, trí tưởng tượng tuyệt vời cùng vốn sống phong phú, José cảm thấy trong mình thôi thúc phải trở thành nhà văn nên đã bắt đầu sáng tác năm 22 tuổi. Tác phẩm nổi tiếng nhất của ông là tiểu thuyết mang màu sắc tự truyện Cây cam ngọt của tôi. Cuốn sách được đưa vào chương trình tiểu học của Brazil, được bán bản quyền cho hai mươi quốc gia và chuyển thể thành phim điện ảnh. Ngoài ra, José còn rất thành công trong vai trò diễn viên điện ảnh và biên kịch.\n\nMã hàng        8935235228351\nTên Nhà Cung Cấp        Nhã Nam\nTác giả        José Mauro de Vasconcelos\nNgười Dịch        Nguyễn Bích Lan, Tô Yến Ly\nNXB        NXB Hội Nhà Văn\nNăm XB        2020\nTrọng lượng (gr)        280\nKích Thước Bao Bì        20 x 14.5 cm\nSố trang        244\nHình thức        Bìa Mềm\nSản phẩm hiển thị trong        \nĐồ Chơi Cho Bé - Giá Cực Tốt\nNhã Nam\nRƯỚC DEAL LINH ĐÌNH VUI ĐÓN TRUNG THU\nSản phẩm bán chạy nhất        Top 100 sản phẩm Tiểu thuyết bán chạy của tháng\nGiá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...\nChính sách khuyến mãi trên Fahasa.com không áp dụng cho Hệ thống Nhà sách Fahasa trên toàn quốc\n“Vị chua chát của cái nghèo hòa trộn với vị ngọt ngào khi khám phá ra những điều khiến cuộc đời này đáng sống... một tác phẩm kinh điển của Brazil.” - Booklist\n\n“Một cách nhìn cuộc sống gần như hoàn chỉnh từ con mắt trẻ thơ… có sức mạnh sưởi ấm và làm tan nát cõi lòng, dù người đọc ở lứa tuổi nào.” - The National\n\nHãy làm quen với Zezé, cậu bé tinh nghịch siêu hạng đồng thời cũng đáng yêu bậc nhất, với ước mơ lớn lên trở thành nhà thơ cổ thắt nơ bướm. Chẳng phải ai cũng công nhận khoản “đáng yêu” kia đâu nhé. Bởi vì, ở cái xóm ngoại ô nghèo ấy, nỗi khắc khổ bủa vây đã che mờ mắt người t a trước trái tim thiện lương cùng trí tưởng tượng tuyệt vời của cậu bé con năm tuổi. Có hề gì đâu bao nhiêu là hắt hủi, đánh mắng, vì Zezé đã có một người bạn đặc biệt để trút nỗi lòng: cây cam ngọt nơi vườn sau. Và cả một người bạn nữa, bằng xương bằng thịt, một ngày kia xuất hiện, cho cậu bé nhạy cảm khôn sớm biết thế nào là trìu mến, thế nào là nỗi đau, và mãi mãi thay đổi cuộc đời cậu. Mở đầu bằng những thanh âm trong sáng và kết thúc lắng lại trong những nốt trầm hoài niệm, Cây cam ngọt của tôi khiến ta nhận ra vẻ đẹp thực sự của cuộc sống đến từ những điều giản dị như bông hoa trắng của cái cây sau nhà, và rằng cuộc đời thật khốn khổ nếu thiếu đi lòng yêu thương và niềm trắc ẩn. Cuốn sách kinh điển này bởi thế không ngừng khiến trái tim người đọc khắp thế giới thổn thức, kể từ khi ra mắt lần đầu năm 1968 tại Brazil. JOSÉ MAURO DE VASCONCELOS (1920-1984) là nhà văn người Brazil. Sinh ra trong một gia đình nghèo ở ngoại ô Rio de Janeiro, lớn lên ông phải làm đủ nghề để kiếm sống. Nhưng với tài kể chuyện thiên bẩm, trí nhớ phi thường, trí tưởng tượng tuyệt vời cùng vốn sống phong phú, José cảm thấy trong mình thôi thúc phải trở thành nhà văn nên đã bắt đầu sáng tác năm 22 tuổi. Tác phẩm nổi tiếng nhất của ông là tiểu thuyết mang màu sắc tự truyện Cây cam ngọt của tôi. Cuốn sách được đưa vào chương trình tiểu học của Brazil, được bán bản quyền cho hai mươi quốc gia và chuyển thể thành phim điện ảnh. Ngoài ra, José còn rất thành công trong vai trò diễn viên điện ảnh và biên kịch.',
		rate: 4,
		ratingPoint: 100,
		numberOfVisit: 6,
		createAt: {
			$date: '2024-04-30T13:53:24.821Z',
		},
	},
	{
		_id: {
			$oid: '663376f4e7f9fda487047238',
		},
		name: 'Lũ Trẻ Đường Tàu',
		quantity: 100,
		categoryAllId: '661949cc343796e299686dc4',
		categoryDetailId: '66194f95343796e299686dd1',
		categorySupplierId: '66198823243a328164578cc0',
		categoryPublishId: '66198b74c9f3ef21a7378d85',
		categoryYearId: '66198bd0c9f3ef21a7378d92',
		image: [
			'https://cdn0.fahasa.com/media/catalog/product/8/9/8935212365994.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/lu_tre_duong_tau/2023_11_25_09_30_17_1-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/lu_tre_duong_tau/2023_11_25_09_30_17_2-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/lu_tre_duong_tau/2023_11_25_09_30_17_5-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/lu_tre_duong_tau/2023_11_25_09_30_17_6-390x510.jpg',
		],
		priceImport: 60000,
		priceSell: 109000,
		priceDiscount: 70850,
		author: 'Edith Nesbit',
		form: 'Bìa Mềm',
		language: 'Tiếng Việt',
		yearOfManufacture: 2023,
		size: '20.5 x 14.5 x 1.4 cm',
		pageQuantity: 288,
		description:
			'Kỳ thực chúng nào phải là trẻ đường tàu. Tôi đoán chừng là chúng chưa từng lăn tăn gì về đường tàu ngoại trừ ấy là phương tiện đưa chúng tới Maskelyne và Cooke để xem ảo thuật, coi kịch câm pantomime, đi chơi vườn bách thảo, và tham quan bảo tàng tượng sáp Madame Tussaud. Chúng chỉ là những đứa trẻ ngoại ô bình thường, sống cùng cha mẹ trong một căn biệt thự bình thường có mặt tiền ốp gạch đỏ, cửa ra vào lắp kính màu, một lối đi lát gạch gọi là hành lang, một phòng tắm có nước nóng lạnh, chuông điện, cửa sổ kiểu Pháp, tường quét vôi trắng, và “mọi tiện nghi hiện đại”, theo ngôn ngữ của cánh môi giới nhà đất.',
		rate: 4,
		ratingPoint: 100,
		numberOfVisit: 6,
		createAt: {
			$date: '2024-04-30T13:53:24.821Z',
		},
	},
	{
		_id: {
			$oid: '663376f4e7f9fda487047239',
		},
		name: 'Cho Tôi Xin Một Vé Đi Tuổi Thơ (Tái Bản 2023)',
		quantity: 100,
		categoryAllId: '661949cc343796e299686dc4',
		categoryDetailId: '66194f95343796e299686dd1',
		categorySupplierId: '66198823243a328164578cb9',
		categoryPublishId: '66198b74c9f3ef21a7378d85',
		categoryYearId: '66198bd0c9f3ef21a7378d91',
		image: [
			'https://cdn0.fahasa.com/media/catalog/product/8/9/8934974187639.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2023/2023_07_10_17_20_59_1-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2023/2023_07_10_17_20_59_2-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2023/2023_07_10_17_20_59_3-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2023/2023_07_10_17_20_59_6-390x510.jpg',
		],
		priceImport: 50000,
		priceSell: 90000,
		priceDiscount: 63000,
		author: 'Nguyễn Nhật Ánh',
		form: 'Bìa Mềm',
		language: 'Tiếng Việt',
		yearOfManufacture: 2023,
		size: '20 x 13 x 1 cm',
		pageQuantity: 208,
		description:
			'Truyện Cho tôi xin một vé đi tuổi thơ là sáng tác mới nhất của nhà văn Nguyễn Nhật Ánh. Nhà văn mời người đọc lên chuyến tàu quay ngược trở lại thăm tuổi thơ và tình bạn dễ thương của 4 bạn nhỏ. Những trò chơi dễ thương thời bé, tính cách thật thà, thẳng thắn một cách thông minh và dại dột, những ước mơ tự do trong lòng… khiến cuốn sách có thể làm các bậc phụ huynh lo lắng rồi thở phào. Không chỉ thích hợp với người đọc trẻ, cuốn sách còn có thể hấp dẫn và thực sự có ích cho người lớn trong quan hệ với con mình.',
		rate: 5,
		ratingPoint: 100,
		numberOfVisit: 10,
		createAt: {
			$date: '2024-04-30T13:53:24.821Z',
		},
	},
	{
		_id: {
			$oid: '663376f4e7f9fda487047239',
		},
		name: 'Cho Tôi Xin Một Vé Đi Tuổi Thơ (Tái Bản 2023)',
		quantity: 100,
		categoryAllId: '661949cc343796e299686dc4',
		categoryDetailId: '66194f95343796e299686dd1',
		categorySupplierId: '66198823243a328164578cb9',
		categoryPublishId: '66198b74c9f3ef21a7378d85',
		categoryYearId: '66198bd0c9f3ef21a7378d91',
		image: [
			'https://cdn0.fahasa.com/media/catalog/product/8/9/8934974187639.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2023/2023_07_10_17_20_59_1-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2023/2023_07_10_17_20_59_2-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2023/2023_07_10_17_20_59_3-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2023/2023_07_10_17_20_59_6-390x510.jpg',
		],
		priceImport: 50000,
		priceSell: 90000,
		priceDiscount: 63000,
		author: 'Nguyễn Nhật Ánh',
		form: 'Bìa Mềm',
		language: 'Tiếng Việt',
		yearOfManufacture: 2023,
		size: '20 x 13 x 1 cm',
		pageQuantity: 208,
		description:
			'Truyện Cho tôi xin một vé đi tuổi thơ là sáng tác mới nhất của nhà văn Nguyễn Nhật Ánh. Nhà văn mời người đọc lên chuyến tàu quay ngược trở lại thăm tuổi thơ và tình bạn dễ thương của 4 bạn nhỏ. Những trò chơi dễ thương thời bé, tính cách thật thà, thẳng thắn một cách thông minh và dại dột, những ước mơ tự do trong lòng… khiến cuốn sách có thể làm các bậc phụ huynh lo lắng rồi thở phào. Không chỉ thích hợp với người đọc trẻ, cuốn sách còn có thể hấp dẫn và thực sự có ích cho người lớn trong quan hệ với con mình.',
		rate: 5,
		ratingPoint: 100,
		numberOfVisit: 10,
		createAt: {
			$date: '2024-04-30T13:53:24.821Z',
		},
	},
	{
		_id: {
			$oid: '663376f4e7f9fda487047239',
		},
		name: 'Cho Tôi Xin Một Vé Đi Tuổi Thơ (Tái Bản 2023)',
		quantity: 100,
		categoryAllId: '661949cc343796e299686dc4',
		categoryDetailId: '66194f95343796e299686dd1',
		categorySupplierId: '66198823243a328164578cb9',
		categoryPublishId: '66198b74c9f3ef21a7378d85',
		categoryYearId: '66198bd0c9f3ef21a7378d91',
		image: [
			'https://cdn0.fahasa.com/media/catalog/product/8/9/8934974187639.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2023/2023_07_10_17_20_59_1-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2023/2023_07_10_17_20_59_2-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2023/2023_07_10_17_20_59_3-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2023/2023_07_10_17_20_59_6-390x510.jpg',
		],
		priceImport: 50000,
		priceSell: 90000,
		priceDiscount: 63000,
		author: 'Nguyễn Nhật Ánh',
		form: 'Bìa Mềm',
		language: 'Tiếng Việt',
		yearOfManufacture: 2023,
		size: '20 x 13 x 1 cm',
		pageQuantity: 208,
		description:
			'Truyện Cho tôi xin một vé đi tuổi thơ là sáng tác mới nhất của nhà văn Nguyễn Nhật Ánh. Nhà văn mời người đọc lên chuyến tàu quay ngược trở lại thăm tuổi thơ và tình bạn dễ thương của 4 bạn nhỏ. Những trò chơi dễ thương thời bé, tính cách thật thà, thẳng thắn một cách thông minh và dại dột, những ước mơ tự do trong lòng… khiến cuốn sách có thể làm các bậc phụ huynh lo lắng rồi thở phào. Không chỉ thích hợp với người đọc trẻ, cuốn sách còn có thể hấp dẫn và thực sự có ích cho người lớn trong quan hệ với con mình.',
		rate: 5,
		ratingPoint: 100,
		numberOfVisit: 10,
		createAt: {
			$date: '2024-04-30T13:53:24.821Z',
		},
	},
	{
		_id: {
			$oid: '663376f4e7f9fda487047239',
		},
		name: 'Cho Tôi Xin Một Vé Đi Tuổi Thơ (Tái Bản 2023)',
		quantity: 100,
		categoryAllId: '661949cc343796e299686dc4',
		categoryDetailId: '66194f95343796e299686dd1',
		categorySupplierId: '66198823243a328164578cb9',
		categoryPublishId: '66198b74c9f3ef21a7378d85',
		categoryYearId: '66198bd0c9f3ef21a7378d91',
		image: [
			'https://cdn0.fahasa.com/media/catalog/product/8/9/8934974187639.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2023/2023_07_10_17_20_59_1-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2023/2023_07_10_17_20_59_2-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2023/2023_07_10_17_20_59_3-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/cho_toi_xin_mot_ve_di_tuoi_tho_tai_ban_2023/2023_07_10_17_20_59_6-390x510.jpg',
		],
		priceImport: 50000,
		priceSell: 90000,
		priceDiscount: 63000,
		author: 'Nguyễn Nhật Ánh',
		form: 'Bìa Mềm',
		language: 'Tiếng Việt',
		yearOfManufacture: 2023,
		size: '20 x 13 x 1 cm',
		pageQuantity: 208,
		description:
			'Truyện Cho tôi xin một vé đi tuổi thơ là sáng tác mới nhất của nhà văn Nguyễn Nhật Ánh. Nhà văn mời người đọc lên chuyến tàu quay ngược trở lại thăm tuổi thơ và tình bạn dễ thương của 4 bạn nhỏ. Những trò chơi dễ thương thời bé, tính cách thật thà, thẳng thắn một cách thông minh và dại dột, những ước mơ tự do trong lòng… khiến cuốn sách có thể làm các bậc phụ huynh lo lắng rồi thở phào. Không chỉ thích hợp với người đọc trẻ, cuốn sách còn có thể hấp dẫn và thực sự có ích cho người lớn trong quan hệ với con mình.',
		rate: 5,
		ratingPoint: 100,
		numberOfVisit: 10,
		createAt: {
			$date: '2024-04-30T13:53:24.821Z',
		},
	},
	{
		_id: {
			$oid: '663376f4e7f9fda48704723a',
		},
		name: 'Moriarty The Patriot - Tập 13',
		quantity: 100,
		categoryAllId: '661949cc343796e299686dc9',
		categoryDetailId: '66194f95343796e299686de0',
		categorySupplierId: '66198823243a328164578cb9',
		categoryPublishId: '66198b74c9f3ef21a7378d86',
		categoryYearId: '66198bd0c9f3ef21a7378d92',
		image: [
			'https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_12022024_040257_1.jpg',
			'https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_12022024_040257.jpg',
		],
		priceImport: 35000,
		priceSell: 45000,
		priceDiscount: 42750,
		author: 'Ryosuke Takeuchi, Hikaru Mi',
		form: 'Bìa Mềm',
		language: 'Tiếng Việt',
		yearOfManufacture: 2024,
		size: '17.6 x 11.3 x 1 cm',
		pageQuantity: 200,
		description:
			'Vào thế kỷ 19, đế chế Anh quốc áp đặt sự thống trị của mình bao trùm khắp thế giới. Tầng lớp quý tộc tự cho mình những đặc ân chưa từng thấy, khiến hố ngăn giai cấp ngày càng bị đào sâu. Sinh ra trong một gia đình quý tộc như thế, nhưng Albert James Moriarty cảm thấy chán ghét chính dòng máu đang chảy trong người mình, và trong một lần thăm cô nhi viện, cậu đã tìm thấy hai đứa trẻ cùng chung lý tưởng. Cậu quyết định nhận nuôi cả hai, bước đầu tiên đưa William James Moriarty bước lên vũ đài, với khát khao thay đổi thế giới, mang lại một cuộc sống tươi đẹp hơn cho nhân loại.',
		rate: 4,
		ratingPoint: 100,
		numberOfVisit: 4,
		createAt: {
			$date: '2024-04-30T13:53:24.821Z',
		},
	},
	{
		_id: {
			$oid: '663376f4e7f9fda48704723b',
		},
		name: 'Cardcaptor Sakura - Thẻ Bài Pha Lê - Tập 9',
		quantity: 100,
		categoryAllId: '661949cc343796e299686dc9',
		categoryDetailId: '66194f95343796e299686de0',
		categorySupplierId: '66198823243a328164578cb8',
		categoryPublishId: '66198b74c9f3ef21a7378d86',
		categoryYearId: '66198bd0c9f3ef21a7378d92',
		image: [
			'https://cdn0.fahasa.com/media/catalog/product/c/a/cardcaptor-sakura_the-bai-pha-le_bia_tap-9.jpg',
			'https://cdn0.fahasa.com/media/catalog/product/c/a/cardcaptor_sakura_the_bai_pha_le_bia_tap_9.jpg',
			'https://cdn0.fahasa.com/media/catalog/product/c/a/cardcaptor_sakura_the_bai_pha_le_bia_4_tap_9.jpg',
		],
		priceImport: 20000,
		priceSell: 30000,
		priceDiscount: 28500,
		author: 'Clamp',
		form: 'Bìa Mềm',
		language: 'Tiếng Việt',
		yearOfManufacture: 2024,
		size: '17.6 x 11.3 x 0.8 cm',
		pageQuantity: 160,
		description:
			'Vì những ngày tháng hạnh phúc bên gia đình, bạn bè và người thân yêu nhất… Để bảo vệ tương lai trước mắt, nhóm bạn bắt đầu hành động! Fujitaka - bố của Sakura và Kaito - người giám hộ của Akiho đã đến tham gia buổi dự giờ tại trường. Sakura và Akiho đều hạnh phúc vì sự hiện diện của người quan trọng đối với mình, nhưng Kaito lại có một mục tiêu khác... Tại sao Sakura lại tạo ra thẻ bài pha lê? Và mục đích của Kaito đến khu phố Tomoeda là gì!?',
		rate: 4,
		ratingPoint: 100,
		numberOfVisit: 4,
		createAt: {
			$date: '2024-04-30T13:53:24.821Z',
		},
	},
	{
		_id: {
			$oid: '663376f4e7f9fda48704723c',
		},
		name: 'Nghệ Thuật Bán Hàng Bằng Câu Chuyện (Tái Bản 2023)',
		quantity: 100,
		categoryAllId: '661949cc343796e299686dc7',
		categoryDetailId: '66194f95343796e299686ddc',
		categorySupplierId: '66198823243a328164578cc1',
		categoryPublishId: '66198b74c9f3ef21a7378d89',
		categoryYearId: '66198bd0c9f3ef21a7378d93',
		image: [
			'https://cdn0.fahasa.com/media/catalog/product/8/9/8935246937778.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/nghe_thuat_ban_hang_bang_cau_chuyen_tai_ban_2023/2023_03_21_10_28_39_2-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/nghe_thuat_ban_hang_bang_cau_chuyen_tai_ban_2023/2023_03_21_10_28_39_3-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/nghe_thuat_ban_hang_bang_cau_chuyen_tai_ban_2023/2023_03_21_10_28_39_4-390x510.jpg',
			'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/nghe_thuat_ban_hang_bang_cau_chuyen_tai_ban_2023/2023_03_21_10_28_39_6-390x510.jpg',
		],
		priceImport: 115000,
		priceSell: 188000,
		priceDiscount: 122200,
		author: 'Paul Smith',
		form: 'Bìa Mềm',
		language: 'Tiếng Việt',
		yearOfManufacture: 2023,
		size: '20.5 x 13 x 1 cm',
		pageQuantity: 330,
		description:
			'Câu chuyện là vũ khí bán hàng quan trọng nhất của người bán hàng. Tuy nhiên rất nhiều nhân viên quản lý kinh doanh và nhân viên bán hàng thường kể chuyện rất dở. Rất dở! Các câu chuyện của họ nhàm chán, lộn xộn, thường vô nghĩa, và hầu hết luôn hướng về bản thân. Trên thực tế, như bạn sẽ đọc được trong Chương 1 của cuốn sách Nghệ thuật bán hàng bằng câu chuyện, nhiều câu chuyện thậm chí còn thiếu các thành phần quan trọng để có thể được xem là một “câu chuyện”. Một câu chuyện bán hàng tuyệt hay sẽ thay đổi tất thảy. Nó khiến người mua gỡ bỏ hàng rào đề phòng. Nó giúp họ thư giãn. Nó chiếm được lý trí lẫn tình cảm của họ bằng cách lôi cuốn được trí tuệ và cảm xúc của họ. Một câu chuyện hay xây dựng được uy tín và định vị bạn trong mắt người mua một cách chuẩn xác. Thay vì chỉ được coi là một người chào hàng (bằng những kiến thức quý báu Smith đã đúc rút từ người làm nghề thu mua vật tư), một câu chuyện hấp dẫn sẽ giúp bạn trở thành một người tạo ra giá trị, người giải quyết vấn đề một cách chuyên nghiệp, và là nhà tư vấn mà bạn mong muốn trở thành. Thậm chí, có lẽ còn quan trọng hơn, câu chuyện đầy sức mạnh của bạn cho phép người mua mở lòng và chia sẻ câu chuyện của chính họ. Chẳng gì có thể khích lệ khách hàng tiềm năng trả lời cho những câu hỏi mang tính chất thăm dò của bạn, tiết lộ vấn đề, nhu cầu, kết quả họ muốn, tâm tình, thất vọng, và những cơ hội hơn là năng lực kể được một câu chuyện liên quan, đúng cách và đúng lúc! Thường thường, chúng ta làm hỏng chuyện rất nhanh ở giai đoạn tìm hiểu, bởi lẽ người mua chưa sẵn sàng chia sẻ thông tin. Điển hình là sự thăm dò của bạn không hiệu quả vì chúng ta chưa “hâm nóng” được khách hàng tiềm năng, thiết lập lòng tín nhiệm, hay giành được quyền nêu lên những câu hỏi gợi mở mạnh - tất thảy những gì một câu chuyện tuyệt vời có thể thực hiện cho chúng ta. Nghệ thuật bán hàng bằng câu chuyện thể hiện đúng hứa hẹn trong tiêu đề phụ của sách: Phương pháp gây chú ý, xây dựng niềm tin, và chốt được đơn hàng - bằng cách cho thấy các nhân viên bán hàng bỏ thật kể các câu chuyện xuyên suốt từng giai đoạn của quá trình bán hàng như thế nào. Riêng các câu chuyện chân thật về cách những người bán hàng triển khai các câu chuyện của mình trong lúc xây dựng mối quan hệ, thuyết trình, xử lý ý kiến phản bác, chốt đơn hàng, và chăm sóc khách hàng hậu mãi, đã đáng để độc giả bỏ tiền mua sách. Một trong những khía cạnh thú vị nhất của cuốn sách này là, ngoài việc mang tính giải trí cao và dễ đọc (vì chứa đầy những câu chuyện hấp dẫn!), nó còn giúp bạn áp dụng những nguyên tắc hữu ích này vào thực tế.',
		rate: 4,
		ratingPoint: 120,
		numberOfVisit: 11,
		createAt: {
			$date: '2024-04-30T13:53:24.821Z',
		},
	},
];
const slides = [
	'https://cdn0.fahasa.com/media/magentothem/banner7/Week2_T424_Banner_Slide_840x320_1.jpg',
	'https://cdn0.fahasa.com/media/magentothem/banner7/Gold_MCBooks0424_Slide_840x320.jpg',
	'https://cdn0.fahasa.com/media/magentothem/banner7/TanViet_Silver_0424_Ver1_Slide_840x320_1.jpg',
	'https://cdn0.fahasa.com/media/magentothem/banner7/Zenbook_0424_BannerSlide_840x320.jpg',
	'https://cdn0.fahasa.com/media/magentothem/banner7/HSO_DoChoiT324-slide_-smallbanner_Slide_840x320.jpg',
	'https://cdn0.fahasa.com/media/magentothem/banner7/VPP_Slide_T4_840x320_1.jpg',
];

function HomePage() {
	const flashProducts = products.slice().sort((a, b) => b.ratingPoint - a.ratingPoint);
	const filteredProducts = products.filter(
		(product) => product.categoryAllId === '661949cc343796e299686dc4',
	);
	const settingsSlider = {
		dots: true,
		infinite: true,
		speed: 1000,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	var settings = {
		dots: false,
		infinite: false,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{ ...style, display: 'block', width: '44px' }}
				onClick={onClick}
			/>
		);
	}

	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
	}
	const SlideItem = ({ imageUrl }) => {
		return <img className='h-[378px] w-full' src={imageUrl} alt='Slider Item' />;
	};
	// hiển thị màu các danh mục
	const CategoryLink = ({ href, icon, name, colorC1, colorC2, colorC3, colorC4, colorC5 }) => {
		return (
			<Link
				href={href}
				className={`flex min-h-40 flex-col items-center justify-center rounded-md 
				${colorC1 ? 'bg-category1' : colorC2 ? 'bg-category2' : colorC3 ? 'bg-category3' : colorC4 ? 'bg-category4' : colorC5 ? 'bg-category5' : ''} 
				hover:opacity-60`}
			>
				<FontAwesomeIcon icon={icon} className='h-10 w-10 text-white' />
				<p className='mt-4 text-lg text-white'>{name}</p>
			</Link>
		);
	};
	const ProductCard = ({ product }) => {
		const { name, image, priceSell, priceDiscount } = product;
		const firstImage = image[0];
		const { isOpen, onOpen, onOpenChange } = useDisclosure();
		// format giá - 3 số thêm 1 dấu chấm - Example: 100000 => 100.000
		function formatNumber(number) {
			return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
		}
		// tính % giảm giá sản phẩm
		const priceSale = priceSell - priceDiscount;
		const percentSale = (priceSale / priceSell) * 100;
		console.log(percentSale);
		return (
			<div className='relative max-w-[288px] rounded-md bg-white'>
				<div className='group'>
					<div className='relative flex cursor-pointer flex-col items-center'>
						<div className='p-6'>
							<img src={firstImage} alt='' className='h-52 w-48' />
						</div>
						<div className='invisible absolute bottom-0 left-0 right-0 top-0 grid grid-cols-3 place-content-center place-items-center rounded-t-md bg-[#009fe557] px-8 group-hover:visible'>
							<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
								<Button onPress={onOpen} className=' bg-transparent '>
									<FontAwesomeIcon icon={faEye} className='text-xl' />
								</Button>

								<p className='quick absolute -top-8 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
									Xem nhanh
								</p>
								<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
									<ModalContent className=' min-w-[600px]'>
										{(onClose) => (
											<>
												<ModalHeader className='flex flex-col gap-1'></ModalHeader>
												<ModalBody>
													<div className='flex  '>
														<img src={firstImage} alt='' className='h-52 w-48' />
														<div>
															<h3>{name}</h3>
															<p className='my-4 font-bold text-red-500'>
																Giá hiện tại: {formatNumber(priceDiscount)}đ
															</p>
															<p className=' text-gray-400 line-through'>
																Giá gốc: {formatNumber(priceSell)}đ
															</p>
															{/* <p>Thông tin về sách</p> */}
														</div>
													</div>
												</ModalBody>
												<ModalFooter></ModalFooter>
											</>
										)}
									</ModalContent>
								</Modal>
							</div>
							<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
								<FontAwesomeIcon icon={faHeart} />
								<p className='quick absolute -top-12 hidden  w-28 rounded bg-gray-400 p-1 text-center text-xs text-white'>
									Thêm danh sách yêu thích
								</p>
							</div>
							<div className='quick-view relative flex h-11 w-11 items-center justify-center rounded bg-white hover:bg-gray-400 hover:text-white'>
								<FontAwesomeIcon icon={faCartShopping} />
								<p className='quick absolute -top-12 hidden w-20 rounded bg-gray-400 p-1 text-center text-xs text-white'>
									Thêm giỏ hàng
								</p>
							</div>
						</div>
					</div>
					<Link href='/book'>
						<div className='mx-4 px-2 py-4'>
							<div>
								<p className='line-clamp-2 h-10 text-sm'>{name}</p>
							</div>
							{priceDiscount && (
								<p className='my-2 text-base font-bold text-red-500'>
									{formatNumber(priceDiscount)}đ
								</p>
							)}
							<p className='text-sm text-gray-300 line-through'>{formatNumber(priceSell)}đ</p>

							{/* <p className='my-2 text-base font-bold text-red-500'>{formatNumber(priceSell)}đ</p>
							{priceDiscount && (
								<p className='text-sm text-gray-300 line-through'>{formatNumber(priceDiscount)}đ</p>
							)} */}
						</div>
					</Link>
				</div>
				<div className=' absolute top-3  w-10 bg-blue text-center text-white'>
					<p className=' text-xs'>{percentSale}%</p>
					<div className='half-square'></div>
				</div>
			</div>
		);
	};
	return (
		<div>
			<Header activeHome />
			<div>
				{/* Banner */}
				<div className='my-10'>
					<Slider {...settingsSlider}>
						{slides.map((slide, index) => (
							<SlideItem key={index} imageUrl={slide} />
						))}
					</Slider>
				</div>
				{/* flash sale */}
				<AnimationComponents className='my-24'>
					<div className='my-6 flex items-center justify-between rounded-md bg-white px-2 py-4 '>
						<div className='flex items-center '>
							<img src='https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/flashsale/label-flashsale.svg?q=' />

							<p className=' mx-5'>Kết thúc sau</p>
							{/* <Countdown date={Date.now() + 10000} /> */}
						</div>
						<div className='flex items-center text-base hover:text-blue'>
							<Link href='/flashSale'> Xem tất cả</Link>
							<FontAwesomeIcon icon={faChevronRight} className='h-4 w-4 font-thin' />
						</div>
					</div>
					<div className='slider-container-item'>
						<Slider {...settings}>
							{products.map((product) => (
								<ProductCard key={product._id.$oid} product={product} />
							))}
						</Slider>
					</div>
				</AnimationComponents>
				{/* Category */}
				<AnimationComponents className='my-24'>
					<div className='my-6 flex items-center justify-between'>
						<h3 className=' text-2xl'>Danh mục sản phẩm</h3>
						<div className='flex items-center text-base hover:text-blue'>
							<Link href='#'>Xem tất cả</Link>
							<FontAwesomeIcon icon={faChevronRight} className='h-4 w-4 font-thin' />
						</div>
					</div>
					<div className='grid grid-cols-5 gap-6'>
						<CategoryLink href='#' icon={faBook} name='Văn học' colorC1 />
						<CategoryLink href='#' icon={faBrain} name='Tâm lý' colorC2 />
						<CategoryLink href='#' icon={faChild} name='Thiếu nhi' colorC3 />
						<CategoryLink href='#' icon={faDollarSign} name='Kinh tế' colorC4 />
						<CategoryLink href='#' icon={faEarthAsia} name='Ngoại ngữ' colorC5 />
					</div>
				</AnimationComponents>
				{/* Book Selling */}
				<AnimationComponents className='my-24'>
					<div className='my-6 flex items-center justify-between'>
						<h3 className=' text-2xl'>Sách bán chạy nhất</h3>
						<div className='flex items-center text-base hover:text-blue'>
							<Link href='#'>Xem tất cả</Link>
							<FontAwesomeIcon icon={faChevronRight} className='h-4 w-4 font-thin' />
						</div>
					</div>
					<div className='slider-container-item'>
						<Slider {...settings}>
							{flashProducts.map((product) => (
								<ProductCard key={product._id.$oid} product={product} />
							))}
						</Slider>
					</div>
				</AnimationComponents>
				{/* ... */}
				<AnimationComponents className='my-24'>
					<div className='my-6 flex items-center justify-between'>
						<h3 className=' text-2xl'>Kinh tế</h3>
						<div className='flex items-center text-base hover:text-blue'>
							<Link href='#'>Xem tất cả</Link>
							<FontAwesomeIcon icon={faChevronRight} className='h-4 w-4 font-thin' />
						</div>
					</div>
					<div className='slider-container-item'>
						<Slider {...settings}>
							{filteredProducts.map((product) => (
								<ProductCard key={product._id.$oid} product={product} />
							))}
						</Slider>
					</div>
				</AnimationComponents>
				{/* Thương hiệu nổi bật */}
				<AnimationComponents className='my-24'>
					<div className='my-6 flex items-center justify-between '>
						<h3 className=' text-2xl font-bold'>Thương hiệu nổi bật</h3>
					</div>

					<Tabs
						activeLinkStyle={{
							color: '#009FE5',
							borderBottom: '1px solid #009FE5',
							transition: 'background-color 0.3s ease',
							paddingBottom: '8px',
						}}
					>
						<TabLink to='tab1' className=' hover:text-blue'>
							Minh Long
						</TabLink>
						<TabLink to='tab2' className='mx-10 hover:text-blue'>
							Tân việt
						</TabLink>
						<TabLink to='tab3' className=' hover:text-blue'>
							Zenbooks
						</TabLink>

						<TabContent for='tab1' className='mt-10'>
							<div className='slider-container-item'>
								<Slider {...settings}>
									{products.map((product) => (
										<ProductCard key={product._id.$oid} product={product} />
									))}
								</Slider>
							</div>
							<div className=' my-10 flex items-center justify-center '>
								<Link
									href='#'
									className=' rounded-md border border-blue px-4 py-1 font-bold text-blue hover:bg-blue hover:text-white '
								>
									Xem thêm
								</Link>
							</div>
						</TabContent>

						<TabContent for='tab2' className='mt-10'>
							<div className='slider-container-item'>
								<Slider {...settings}>
									{products.map((product) => (
										<ProductCard key={product._id.$oid} product={product} />
									))}
								</Slider>
							</div>
							<div className=' my-10 flex items-center justify-center '>
								<Link
									href='#'
									className=' rounded-md border border-blue px-4 py-1 font-bold text-blue hover:bg-blue hover:text-white '
								>
									Xem thêm
								</Link>
							</div>
						</TabContent>

						<TabContent for='tab3' className='mt-10'>
							<div className='slider-container-item'>
								<Slider {...settings}>
									{products.map((product) => (
										<ProductCard key={product._id.$oid} product={product} />
									))}
								</Slider>
							</div>
							<div className=' my-10 flex items-center justify-center '>
								<Link
									href='#'
									className=' rounded-md border border-blue px-4 py-1 font-bold text-blue hover:bg-blue hover:text-white '
								>
									Xem thêm
								</Link>
							</div>
						</TabContent>
					</Tabs>
				</AnimationComponents>
			</div>
			<FacebookMsg />
		</div>
	);
}

export default HomePage;
