import User from '../models/User';
import { connectToDB } from '../mongodb/mongoose';
import { useUser } from '@clerk/nextjs';

const {UserClerk} = useUser();

export const createOrUpdateUser = async (
    id,
    first_name, 
    last_name,
    phone_numbers, 
    image_url, 
    email_addresses
) => {
    try{
        await connectToDB();

        const userData = {
            firstName: first_name,
            lastName: last_name,
            img: image_url,
            email: email_addresses[0].email_address,
            phone: phone_numbers.length > 0 ? phone_numbers[0].phoneNumber : '',
        };

        const user = await User.findOneAndUpdate(
            { clerkId: id },
            { $set: userData },
            { upsert: true, new: true }
        );

        await user.save();
        return user;

    }catch(error){
        console.log('Error createOrUpdateUser:', error);
    }
};

export const deleteUser = async (id) => {
    try{
        await connectToDB();
        await User.findOneAndDelete({ clerkId: id });
    } catch(error){
        console.error('Error deleteUser:', error);
    }
}
