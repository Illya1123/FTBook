'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

const HeaderContext = createContext();

function ThemeProvider({ children }) {
	const [isHeader, setIsHeader] = useState(true);
	const [roleUser, setRoleUser] = useState('user');
	console.log('roleUser:', roleUser);
	const { user } = useUser();
	const [userId, setUserId] = useState(user?.id);
	console.log('userId:', userId);
	const [isFocusSearch, setIsFocusSearch] = useState(false);

	useEffect(() => {
		const fetchUserRole = async () => {
			try {
				const response = await fetch(`http://localhost:5000/user/user/${user?.id}`);
				const userData = await response.json();
				console.log('userData:', userData);
				if (userData && userData.length > 0) {
					setUserId(userData[0]?._id);
					setRoleUser(userData[0]?.role);
				} else {
					setRoleUser('user');
				}
			} catch (error) {
				console.error('Error fetching user role:', error);
			}
		};

		fetchUserRole();
	}, [user?.id]);

	const [dataCheckout, setDataCheckout] = useState([
		{
			_id: '662e1402382f8696bd2fa764',
			name: 'Nghệ Thuật Bán Hàng Bằng Câu Chuyện',
			quantity: 100,
			categoryAllId: '661949cc343796e299686dc7',
			categoryDetailId: '66194f95343796e299686ddc',
			categorySupplierId: '66198823243a328164578cc1',
			categoryPublishId: '66198b74c9f3ef21a7378d89',
			categoryYearId: '66198bd0c9f3ef21a7378d94',
			image: [
				'https://cdn0.fahasa.com/media/wysiwyg/hieu_kd/Frame_mgg_ncc_1080x1080-01.png',
				'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/nghe_thuat_ban_hang_bang_cau_chuyen_tai_ban_2023/2023_03_21_10_28_39_1-390x510.jpg?_gl=1*1wuvo8a*_ga*MjM5MDM3ODcxLjE3MTMzNjIxMzU.*_ga_460L9JMC2G*MTcxMzcwNzM4Mi44LjEuMTcxMzcwNzYwMC42MC4wLjE0MTk5MzY0Mjc.*_gcl_au*MzUxNzI2NTczLjE3MTMzNjIxMzQ.',
				'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/nghe_thuat_ban_hang_bang_cau_chuyen_tai_ban_2023/2023_03_21_10_28_39_2-390x510.jpg',
				'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/nghe_thuat_ban_hang_bang_cau_chuyen_tai_ban_2023/2023_03_21_10_28_39_3-390x510.jpg',
				'https://cdn0.fahasa.com/media/flashmagazine/images/page_images/nghe_thuat_ban_hang_bang_cau_chuyen_tai_ban_2023/2023_03_21_10_28_39_4-390x510.jpg',
			],
			priceImport: 120000,
			priceSell: 188000,
			priceDiscount: 146000,
			author: 'Paul Smith',
			form: 'Bìa Mềm',
			language: 'Tiếng Việt',
			yearOfManufacture: 2023,
			size: '20.5 x 13 x 1 cm',
			pageQuantity: 200,
			description:
				'âu chuyện là vũ khí bán hàng quan trọng nhất của người bán hàng. Tuy nhiên rất nhiều nhân viên quản lý kinh doanh và nhân viên bán hàng thường kể chuyện rất dở. Rất dở! Các câu chuyện của họ nhàm chán, lộn xộn, thường vô nghĩa, và hầu hết luôn hướng về bản thân.',
			rate: 4,
			ratingPoint: 100,
			numberOfVisit: 5,
			createdAt: '2024-04-30T13:53:24.821Z',
			updatedAt: '2024-05-10T08:19:06.601Z',
			quantityPurchased: 1,
		},
		{
			_id: '663376f4e7f9fda487047237',
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
			createAt: '2024-04-30T13:53:24.821Z',
			createdAt: '2024-05-10T08:19:06.601Z',
			updatedAt: '2024-05-10T08:19:06.601Z',
			quantityPurchased: 1,
		},
	]);
	const [valueSearch, setValueSearch] = useState();
	const [totalPriceCheckout, setTotalPriceCheckout] = useState(300000);
	const [purchasedProduct, setPurchasedProduct] = useState([]);
	const [codeOrder, setCodeOrder] = useState();
	const [isOnBoarding, setIsOnBoarding] = useState(false);
	const [reLoadFavorites, setReLoadFavorites] = useState(0);
	return (
		<HeaderContext.Provider
			value={{
				isHeader,
				setIsHeader,
				roleUser,
				setRoleUser,
				setDataCheckout,
				dataCheckout,
				setTotalPriceCheckout,
				totalPriceCheckout,
				purchasedProduct,
				setPurchasedProduct,
				userId,
				setUserId,
				codeOrder,
				setCodeOrder,
				isOnBoarding,
				setIsOnBoarding,
				valueSearch,
				setValueSearch,
				reLoadFavorites,
				setReLoadFavorites,
			}}
		>
			{children}
		</HeaderContext.Provider>
	);
}

export default ThemeProvider;

export const useTheme = () => useContext(HeaderContext);
