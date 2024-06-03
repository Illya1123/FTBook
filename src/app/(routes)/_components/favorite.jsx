import axios from 'axios';
import { Heart, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { useTheme } from './ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@nextui-org/react';

function Favorite() {
	const { userId, reLoadFavorites } = useTheme();

	const [isShow, setIsShow] = useState(false);
	const [dataFavorite, setDataFavorite] = useState([]);
	const [dataProduct, setDataProduct] = useState([]);
	const [dataFilter, setDataFilter] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isLoadingFavorites, setIsLoadingFavorites] = useState(false);
	const [reLoad, setReLoad] = useState(0);
	const ref = useRef();
	const handleChangeShowFavorite = () => {
		setIsShow(!isShow);
	};
	useEffect(() => {
		axios
			.get('http://localhost:5000/product')
			.then((response) => {
				setDataProduct(response.data);
				setIsLoading(true);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setIsShow(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
	useEffect(() => {
		if (userId) {
			axios
				.get(`http://localhost:5000/favorite/user/${userId}`)
				.then((response) => {
					setDataFavorite(response.data);
					setIsLoadingFavorites(true);
				})
				.catch((error) => {
					console.error('Error fetching data:', error);
				});
		}
	}, [userId]);
	useEffect(() => {
		if (reLoad > 0 || reLoadFavorites > 0) {
			axios
				.get(`http://localhost:5000/favorite/user/${userId}`)
				.then((response) => {
					setDataFavorite(response.data);
				})
				.catch((error) => {
					console.error('Error fetching data:', error);
				});
		}
	}, [reLoad, reLoadFavorites]);
	useEffect(() => {
		if (isLoading || isLoadingFavorites) {
			if (dataFavorite.length > 0 && dataProduct) {
				const filteredFavorite = dataProduct.filter((book) => {
					return dataFavorite[0].productId.some((favorite) => {
						return favorite === book._id;
					});
				});
				setDataFilter(filteredFavorite);
			}
		}
		// console.log('dataFavorite', dataFilter);
	}, [dataFavorite, dataProduct, isLoading, isLoadingFavorites]); //
	const FavoriteItem = ({ src, name, _id, onclick, onBlur, onCancel }) => {
		return (
			<div className='relative h-44  rounded-md border px-1 py-2'>
				<Link className='  ' key={_id} href={`/book/${_id}`} onBlur={onBlur}>
					<div onClick={onclick} className='cursor-pointer'>
						<div className='flex  items-center justify-center'>
							<img src={src} alt={`book${_id}`} className='h-28 w-28 ' />
						</div>
						<p className=' my-2 line-clamp-2 text-sm'>{name}</p>
					</div>
				</Link>
				<div
					className=' absolute right-0 top-0 h-8 w-8  cursor-pointer text-center '
					onClick={onCancel}
				>
					<FontAwesomeIcon
						icon={faXmark}
						className='text-2xl text-red-500 hover:text-3xl hover:text-red-400'
					/>
				</div>
			</div>
		);
	};
	const handleCancel = (value) => {
		// console.log(value);
		axios
			.patch(`http://localhost:5000/favorite/user/${userId}`, {
				productId: [value],
			})
			.then((res) => {
				console.log(res.data);
				setReLoad(reLoad + 1);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className=' fixed right-0 top-[74px] z-[99] flex '>
			<div
				className=' h-12  cursor-pointer rounded-l-md bg-gray-500 p-3 hover:bg-gray-400'
				onClick={handleChangeShowFavorite}
			>
				<Heart style={{ color: 'white' }} />
			</div>
			{isShow && (
				<div ref={ref} className=' h-96 w-96 bg-white  shadow-md'>
					<p className='border-b py-2 text-center'>Danh sách yêu thích</p>
					{userId ? (
						<div className='grid h-[332px]  grid-cols-2 gap-4 overflow-auto p-4 px-2'>
							{dataFilter.length > 0 &&
								dataFilter.map((data) => (
									<FavoriteItem
										src={data.image[0]}
										_id={data._id}
										name={data.name}
										onclick={() => setIsShow(!isShow)}
										onCancel={() => handleCancel(data._id)}
									/>
								))}
						</div>
					) : (
						<div className='flex h-[300px] flex-col items-center justify-center px-2 text-center text-black'>
							<p className=' my-2 text-sm'>
								Hãy đăng nhập để có thể lưu được những cuốn sách yêu thích
							</p>
							<Button color='primary'>Đăng nhập</Button>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default Favorite;
