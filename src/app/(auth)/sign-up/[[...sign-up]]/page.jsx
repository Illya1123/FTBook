import { SignUp, useUser } from '@clerk/nextjs';
import GlobalApi from '@/app/_utils/GlobalApi';

const { user } = useUser();
	useEffect(() => {
		user && createUserProfile();
	}, [user]);

const createUserProfile = () => {
	const data = {
		fullName: user.fullName,
		email: user.primaryEmailAddress.emailAddress,
	};
	GlobalApi.createUser(data).then((res) => {
		console.log(res.data);
		localStorage.setItem('isLogin', true);
	});
};

export default function Page() {
	return (
		<div className='mx-auto flex max-w-[1200px] items-center justify-between py-4'>
      <div className='mx-auto flex text-center'>
        <p className='p-4 text-4xl font-bold text-red-500'>Hãy đăng ký để trở thành thành viên của FT BOOK</p>
      </div>
			<div><SignUp /></div>
		</div>
	);
}
