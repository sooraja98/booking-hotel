import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import { createError } from "../utils/error.js"
import jwt from 'jsonwebtoken'
export const register = async (req, res, next) => {
    try {
      const email = req.body.email;
  
      // Check if the user with the given email already exists
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        // If user already exists, return a 409 Conflict error
        return next(createError(409, "User already exists"));
      }
  
      // If the user does not exist, proceed with registration
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
      });
  
      await newUser.save()
      res.status(200).send("User has been created");
    } catch (error) {
      next(error);
    }
  };
export const login = async (req, res, next) => {
    try {
        const user=await User.findOne({email:req.body.email})
        if(!user){
            return next(createError(404,"user not found"))
        }
        else{
            const isPasswordCorrect= await bcrypt.compare(req.body.password,user.password)    
                if(!isPasswordCorrect){
                    return next(createError(404,"password is incorrect"))
                }
                else{
                    const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SECRET)
                    const {passowrd,isAdmin,...otherDetails}=user._doc
                    res.cookie("access_token",token,{httpOnly:true}).status(200).json({...otherDetails})
                }
        }

    } catch (error) {
        next(error)
    }
}
