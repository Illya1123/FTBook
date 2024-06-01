import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import AnimationComponents from '../_components/AnimationComponents';
import Header from '../_components/Header';

const Contact = () => {
	const data = [
		{
			name: 'FT BOOK Hà Nội',
			address:
				'Tầng 5, Tòa nhà A, Khu đô thị Vinhomes Times City, 458 Minh Khai, Hai Bà Trưng, Hà Nội',
			email: 'nshanoi@ftbook.com.vn',
			phone: '024-12345678',
		},
		{
			name: 'FT BOOK Hồ Chí Minh',
			address: 'Tầng 2, TTTM Saigon Centre, 65 Lê Lợi, Quận 1, TP.HCM',
			email: 'nshcm@ftbook.com.vn',
			phone: '028-98765432',
		},
		{
			name: 'FT BOOK Đà Nẵng',
			address: '112 Nguyễn Chí Thanh, Hải Châu, Đà Nẵng',
			email: 'nsdanang@ftbook.com.vn',
			phone: '0236-87654321',
		},
		{
			name: 'FT BOOK Hải Phòng',
			address: '789 Lạch Tray, Ngô Quyền, Hải Phòng',
			email: 'nshaiphong@ftbook.com.vn',
			phone: '0225-98765432',
		},
		{
			name: 'FT BOOK Cần Thơ',
			address: '456 Đường 30/4, Ninh Kiều, Cần Thơ',
			email: 'nscantho@ftbook.com.vn',
			phone: '0292-12345678',
		},
		{
			name: 'FT BOOK Nha Trang',
			address: '789 Trần Phú, Lộc Thọ, Nha Trang',
			email: 'nsnhatrang@ftbook.com.vn',
			phone: '0258-98765432',
		},
		{
			name: 'FT BOOK Bình Dương',
			address: '123 Đại lộ Bình Dương, Phú Hoà, TP. Thủ Dầu Một, Bình Dương',
			email: 'nsbinhduong@ftbook.com.vn',
			phone: '0274-12345678',
		},
		{
			name: 'FT BOOK Đồng Nai',
			address: '456 Quốc lộ 1, P. Tân Biên, TP. Biên Hòa, Đồng Nai',
			email: 'nsdongnai@ftbook.com.vn',
			phone: '0251-98765432',
		},
		{
			name: 'FT BOOK Huế',
			address: '789 Đường Lê Lợi, TP. Huế',
			email: 'nshue@ftbook.com.vn',
			phone: '0234-12345678',
		},
		{
			name: 'FT BOOK Vũng Tàu',
			address: '456 Nguyễn An Ninh, P. Thắng Tam, TP. Vũng Tàu',
			email: 'nsvungtau@ftbook.com.vn',
			phone: '0254-98765432',
		},
		{
			name: 'FT BOOK Thanh Hóa',
			address: '123 Lê Hồng Phong, P. Điện Biên, TP. Thanh Hóa',
			email: 'nsthanhhoa@ftbook.com.vn',
			phone: '0237-12345678',
		},
		{
			name: 'FT BOOK Bắc Giang',
			address: '789 Đại lộ Hùng Vương, P. Hoàng Văn Thụ, TP. Bắc Giang',
			email: 'nsbacgiang@ftbook.com.vn',
			phone: '0204-98765432',
		},
		{
			name: 'FT BOOK Quảng Ninh',
			address: '456 Đường Hạ Long, P. Bãi Cháy, TP. Hạ Long, Quảng Ninh',
			email: 'nsquangninh@ftbook.com.vn',
			phone: '0203-12345678',
		},
		{
			name: 'FT BOOK Phú Yên',
			address: '123 Trần Hưng Đạo, P. 5, TP. Tuy Hòa, Phú Yên',
			email: 'nsphuyen@ftbook.com.vn',
			phone: '0257-98765432',
		},
		{
			name: 'FT BOOK Bình Định',
			address: '456 Ngô Mây, P. Trần Phú, TP. Quy Nhơn, Bình Định',
			email: 'nsbinhdinh@ftbook.com.vn',
			phone: '0256-12345678',
		},
		{
			name: 'FT BOOK Long An',
			address: '789 Đại lộ Võ Văn Kiệt, P. 5, TP. Tân An, Long An',
			email: 'nslongan@ftbook.com.vn',
			phone: '0272-98765432',
		},
		{
			name: 'FT BOOK Đắk Lắk',
			address: '456 Nguyễn Chí Thanh, P. Tân An, TP. Buôn Ma Thuột, Đắk Lắk',
			email: 'nsdaklak@ftbook.com.vn',
			phone: '0262-12345678',
		},
		{
			name: 'FT BOOK Kiên Giang',
			address: '123 Đường Nguyễn Trung Trực, P. Vĩnh Lạc, TP. Rạch Giá, Kiên Giang',
			email: 'nskiengiang@ftbook.com.vn',
			phone: '0297-98765432',
		},
		{
			name: 'FT BOOK Ninh Bình',
			address: '789 Đường Trần Hưng Đạo, P. Trung Sơn, TP. Ninh Bình',
			email: 'nsninhbinh@ftbook.com.vn',
			phone: '0229-12345678',
		},
		{
			name: 'FT BOOK Thái Bình',
			address: '456 Đường Lý Thường Kiệt, P. Trần Hưng Đạo, TP. Thái Bình',
			email: 'nsthaibinh@ftbook.com.vn',
			phone: '0227-98765432',
		},
		{
			name: 'FT BOOK Quảng Bình',
			address: '123 Đường Trường Phước, P. Đồng Phú, TP. Đồng Hới, Quảng Bình',
			email: 'nsquangbinh@ftbook.com.vn',
			phone: '0232-12345678',
		},
		{
			name: 'FT BOOK Bà Rịa - Vũng Tàu',
			address: '789 Đường Phạm Hùng, P. Long Thành Trung, TP. Bà Rịa, Bà Rịa - Vũng Tàu',
			email: 'nsbariavungtau@ftbook.com.vn',
			phone: '0254-98765432',
		},
		{
			name: 'FT BOOK An Giang',
			address: '456 Đường Nguyễn Huệ, P. Mỹ Thới, TP. Long Xuyên, An Giang',
			email: 'nsangiang@ftbook.com.vn',
			phone: '0296-12345678',
		},
		{
			name: 'FT BOOK Hà Nam',
			address: '123 Đường Trần Phú, P. Phủ Lý, TP. Phủ Lý, Hà Nam',
			email: 'nshnam@ftbook.com.vn',
			phone: '0226-98765432',
		},
		{
			name: 'FT BOOK Yên Bái',
			address: '789 Đường Trần Hưng Đạo, P. Lâm Thao, TP. Yên Bái',
			email: 'nsyenbai@ftbook.com.vn',
			phone: '0216-12345678',
		},
	];

	return (
		<div>
			<Header activeContact />
			<title>Hệ thống trung tâm - nhà sách</title>
			<div className='my-5 flex items-center'>
				<Link href='/' className='hover:text-blue'>
					Trang chủ
				</Link>
				<FontAwesomeIcon icon={faChevronRight} className='mx-2 h-2 w-2 ' />
				<p className=' text-orange'>Hệ thống trung tâm - nhà sách</p>
			</div>
			<div className='my-5'>
				<table className='min-w-full border bg-white'>
					<thead>
						<tr className='text-sm'>
							<th className='border border-gray-300 bg-gray-100 px-6 py-3 text-left text-sm font-semibold uppercase text-gray-600'>
								Tên
							</th>
							<th className='border border-gray-300 bg-gray-100 px-6 py-3 text-left text-sm font-semibold uppercase text-gray-600'>
								Địa chỉ
							</th>
							<th className='border border-gray-300 bg-gray-100 px-6 py-3 text-left text-sm font-semibold uppercase text-gray-600'>
								Email
							</th>
							<th className='border border-gray-300 bg-gray-100 px-6 py-3 text-left text-sm font-semibold uppercase text-gray-600'>
								Điện thoại
							</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item, index) => (
							<tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}>
								<td className='border border-gray-300 px-6 py-4'>{item.name}</td>
								<td className='border border-gray-300 px-6 py-4'>{item.address}</td>
								<td className='border border-gray-300 px-6 py-4'>{item.email}</td>
								<td className='border border-gray-300 px-6 py-4'>{item.phone}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Contact;
