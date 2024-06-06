'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { set } from 'mongoose';

const HeaderContext = createContext();

function ThemeProvider({ children }) {
	const [isHeader, setIsHeader] = useState(true);
	const [roleUser, setRoleUser] = useState('user');
	console.log('roleUser:', roleUser);
	const { user } = useUser();
	const [userId, setUserId] = useState(user?.id);
	const [userName, setUserName] = useState('');
	const [avatar, setAvatar] = useState('');
	console.log('userId:', userId);
	const [isFocusSearch, setIsFocusSearch] = useState(false);
	const [isFirstLogin, setIsFirstLogin] = useState(false);
	console.log('isFirstLogin:', isFirstLogin);
	const router = useRouter();
	const [userDataLoaded, setUserDataLoaded] = useState();
	const [dataCheckout, setDataCheckout] = useState([]);
	const [valueSearch, setValueSearch] = useState();
	const [totalPriceCheckout, setTotalPriceCheckout] = useState(300000);
	const [purchasedProduct, setPurchasedProduct] = useState([]);
	const [codeOrder, setCodeOrder] = useState();
	const [isOnBoarding, setIsOnBoarding] = useState(false);
	const [reLoadFavorites, setReLoadFavorites] = useState(0);

	useEffect(() => {
		const fetchUserRole = async () => {
			try {
				const response = await fetch(
					`https://backend-book-store-two.vercel.app/user/cleckUser/${user?.id}`,
				);
				const userData = await response.json();
				console.log('userData:', userData);
				if (userData && userData.length > 0) {
					setUserId(userData[0]?._id);
					setRoleUser(userData[0]?.role);
					setIsFirstLogin(userData[0]?.firstLogin);
					setUserName(userData[0]?.lastName + ' ' + userData[0]?.firstName);
					setAvatar(userData[0]?.img);
					setUserDataLoaded(userData[0]);

					await fetch(`https://backend-book-store-two.vercel.app/user/${userData[0]?._id}`, {
						method: 'PATCH',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							phone: user.phoneNumbers[0]?.phoneNumber || '',
						}),
					});
				} else {
					setRoleUser('user');
					// setUserId('');
				}
			} catch (error) {
				console.error('Error fetching user role:', error);
			}
		};

		fetchUserRole();
	}, [user?.id]);

	useEffect(() => {
		if (isFirstLogin) {
			setIsOnBoarding(true);
			router.push('/onboarding');
		}
	}, [isFirstLogin, router]);

	return (
		<HeaderContext.Provider
			value={{
				isHeader,
				setIsHeader,
				userDataLoaded,
				setUserDataLoaded,
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
				userName,
				setUserName,
				avatar,
				setAvatar,
				codeOrder,
				setCodeOrder,
				isOnBoarding,
				setIsOnBoarding,
				valueSearch,
				setValueSearch,
				reLoadFavorites,
				setReLoadFavorites,
				isFirstLogin,
				setIsFirstLogin,
			}}
		>
			{children}
		</HeaderContext.Provider>
	);
}

export default ThemeProvider;

export const useTheme = () => useContext(HeaderContext);
