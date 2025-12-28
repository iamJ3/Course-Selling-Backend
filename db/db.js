const mongoose = require('mongoose');

const { Schema, Types } = mongoose;
console.log("connected");

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstname: String,
    lastName: String,
});

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstname: String,
    lastName: String,
});

const courseSchema = new Schema({
    title: String,
    desc: String,
    price: Number,
    imageUrl: String,
    creatorId: Types.ObjectId,
});

const purchaseSchema = new Schema({
    userId: Types.ObjectId,
    courseId: Types.ObjectId,
});

const userModel = mongoose.model('User', userSchema);
const adminModel = mongoose.model('Admin', adminSchema);
const courseModel = mongoose.model('Course', courseSchema);
const purchaseModel = mongoose.model('Purchase', purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel,
};