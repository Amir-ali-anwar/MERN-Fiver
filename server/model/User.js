import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import {BadRequestError} from '../errors/index.js'
const UserSchema= new mongoose.Schema({
    username:{
    type:String,
    required:true
    },
    email: {
        type: String,
        required: [true, "Please enter your Name"],
        validate:{
          validator:validator.isEmail,
          message:'Please provide valid email'
      },
        minlength: 3,
        maxlength: 20,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: false,
      },
      country: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: false,
      },
      desc: {
        type: String,
        required: false,
      },
      isSeller: {
        type: Boolean,
        default:false
      },
},{timestamps:true})
UserSchema.pre('save',async function(){
  if(!this.isModified('password')) return 
  try {
    const salt= await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt); 
  } catch (error) {
    throw new BadRequestError(error)
  }
})
UserSchema.methods.CreateJWT= async function(){
  try {
    const payload = {
      UserID: this._id,
      Username: this.name,
    };
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_LIFETIME,
    }); 
    return token;
  } catch (error) {
    throw new BadRequestError(error)
  }
}
const User= mongoose.model('User',UserSchema)

export default User