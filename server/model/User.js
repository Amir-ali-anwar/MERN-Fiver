import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import {BadRequestError} from '../errors/index.js'
const UserSchema= new mongoose.Schema({
    username:{
    type:String,
    required:true
    },
    email: {
        type: String,
        required: true,
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