import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    tasks: [{ task: String, deadline: String }],
    background: String
})

const User = mongoose.model('Users', userSchema);

export default User;