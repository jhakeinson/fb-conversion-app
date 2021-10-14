import mongoose, { Schema } from "mongoose";

const userSchema: Schema = new Schema({
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
});

const User = mongoose.model('user', userSchema);

export default User;
