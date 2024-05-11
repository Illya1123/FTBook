import user from '../models/User';
import { connectToDB } from '../mongodb/mongoose';

export const createOrUpdateUser = async (id, first_name, last_name, image_url, email_addresses) => {
    try{
        await connectToDB();

        const user = await user.findOneAndUpdate(
            { clerkId: id },
            {
                $set: {
                    firstName: first_name,
                    lastName: last_name,
                    img: image_url,
                    email: email_addresses[0].email_address,
                }
            },
            { upsert: true ,new: true } // if not found, create a new one

        );

        await user.save();
        return user

    }catch(error){
        console.log('Error createOrUpdateUser:', error);
    }
};

export const deleteUser = async (id) => {
    try{
        await connectToDB();
        await user.findOneAndDelete({ clerkId: id });
    } catch(error){
        console.error('Error deleteUser:', error);
    }
}
