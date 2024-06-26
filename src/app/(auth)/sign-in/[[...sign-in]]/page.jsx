import { SignIn } from '@clerk/nextjs';

export default function Page() {
	return (
		<div className='mx-auto flex max-w-[1200px] items-center justify-between py-4'>
			<div className='mx-auto flex text-center'>
				<p className='p-4 text-4xl font-bold text-red-500'>
					Hãy đăng nhập để có thể đặt ngay cho mình những cuốn sách yêu thích.
				</p>
			</div>
			<div>
				<SignIn />
			</div>
		</div>
	);
}
