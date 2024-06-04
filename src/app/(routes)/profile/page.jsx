// components/Profile.js
'use client';
import { useState } from 'react';
import { AccountProfile } from './components/AccountProfile';
import { Orders } from './components/Orders';
const Profile = () => {
	const [activeTab, setActiveTab] = useState('account');

	return (
		<div className='my-5 flex  gap-6 '>
			<div className='w-1/4 rounded-md bg-white p-5 shadow-md'>
				<ul className='space-y-4'>
					<li
						className={`cursor-pointer rounded-lg p-3 transition-colors duration-300 ${
							activeTab === 'account'
								? 'bg-blue-600 border-blue-600 border  shadow-lg'
								: 'hover:bg-gray-200'
						}`}
						onClick={() => setActiveTab('account')}
					>
						Hồ Sơ Tài Khoản
					</li>
					<li
						className={`cursor-pointer rounded-lg p-3 transition-colors duration-300 ${
							activeTab === 'orders'
								? 'bg-blue-600 border-blue-600 border  shadow-lg'
								: 'hover:bg-gray-200'
						}`}
						onClick={() => setActiveTab('orders')}
					>
						Đơn Hàng
					</li>
				</ul>
			</div>
			<div
				className={` ${activeTab === 'orders' ? ` p-0` : `px-10 py-5`} w-3/4  rounded-md bg-white   shadow-md `}
			>
				{activeTab === 'account' && <AccountProfile />}
				{activeTab === 'orders' && <Orders />}
			</div>
		</div>
	);
};

export default Profile;
