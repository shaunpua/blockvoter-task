const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity")

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    firstname: {
        type: String,
        required: true
    },
    middlename: {
        type: String,
        required: false
    },
    lastname: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    mobilenumber: {
        type: Number,
        required: true
    },
    photo:{
        type: String,
        required:true
    },
    streetaddress:{
        type: String,
        required:true
    },
    region:{
        type: String,
        required:true
    },
    province:{
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    // useraddresses: {
    //     type: [AddressSchema],
    //     required: true
    // }
    
    
})

// const AddressSchema = new mongoose.Schema({
//     streetaddress:{
//         type: String,
//         required:true
//     },
//     region:{
//         type: String,
//         required:true
//     },
//     province:{
//         type: String,
//         required:true
//     },
//     city:{
//         type: String,
//         required:true
//     },

// }) 






UserSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
}
const User = mongoose.model("users", UserSchema)

// const validate = (data) => {
// 	const schema = Joi.object({
// 		firstname: Joi.string().required().label("First Name"),
//         middlename: Joi.string().label("Middle Name"),
// 		lastname: Joi.string().required().label("Last Name"),
// 		email: Joi.string().email().required().label("Email"),
// 		password: passwordComplexity().required().label("Password"),
//         birthday: Joi.string().required().label("First Name"),
//         photo: Joi.string().required().label("First Name"),
//         firstname: Joi.string().required().label("First Name"),
// 	});
// 	return schema.validate(data);
// };


module.exports = User;

