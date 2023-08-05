import jwt from 'jsonwebtoken';
import {createError} from './error.js'



export const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token;
    if(!token){
        return next(createError(404,"your not authenticated"))    
    }
    jwt.verify(token,process.env.JWT_SECRET,(error,user)=>{
        if(error) return next(createError(403,"Token is not verified"))
        req.user=user
        next()
    })
}


export const verifyUser=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
         if(req.user.id===req.params.id || req.user.isAadmin){
            next()
         }
         else{
            if(error){
                return next(createError(403,"you re not authorised"))
            }
         }
    })
}


export const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id===req.params.id && req.user.isAadmin){
           next()
        }
        else{
           if(error){
               return next(createError(403,"you re not authorised"))
           }
        }
   })
}