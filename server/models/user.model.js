import mongoose from "mongoose";

const userModel = mongoose.Schema({
	username: { type: String, trim: true, required: true, min: 3, max: 30 },
	email: { type: String, trim: true, required: true, unique: true, max: 50 },
	masterPassword: { type: String, trim: true, required: true },
});

export default mongoose.model("User", userModel);
