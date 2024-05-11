import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        required: true,
        type: String,
    },
    lastName: {
        required: true,
        type: String,
    },
    username: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    img: {
        required: false,
        type: String,
    },
    fullName: {
        required: false,
        type: String,
    },
    phone: {
        required: false,
        type: Number,
    },
    birthday: {
        required: false,
        type: Date,
    },
    gender: {
        required: false,
        type: String,
    },

    addresses: {
        phoneNumber: String,
        ward: String,
        district: String,
        province: String,
    },
    pointCoin: {
        required: false,
        type: Number,
    },
    isReview: {
        required: false,
        type: Boolean,
        default: false,
    },
    isBan: {
        required: false,
        type: Boolean,
        default: false,
    },
    categoryDetail: [
        {
            categoryDetailId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'categoryDetail',
                required: false,
            },
            count: {
                type: Number,
                default: 0,
                required: false,
            },
        },
    ],
    role: {
        required: false,
        type: String,
        default: 'user',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;