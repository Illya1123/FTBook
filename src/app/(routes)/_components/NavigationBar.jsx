import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function NavigationBar({ title, title1, hrefTitle }) {
	return (
		<div className='my-5 flex items-center'>
			<Link href='/' className='hover:text-blue'>
				Trang chủ
			</Link>

			<FontAwesomeIcon icon={faChevronRight} className='mx-2 h-2 w-2 ' />
			{title1 ? (
				<Link href={hrefTitle} className='hover:text-blue'>
					{title}
				</Link>
			) : (
				<p className=' text-orange'>{title}</p>
			)}

			{title1 ? (
				<>
					<FontAwesomeIcon icon={faChevronRight} className='mx-2 h-2 w-2 ' />
					<p className=' text-orange'>{title1}</p>
				</>
			) : null}
		</div>
	);
}

export default NavigationBar;
