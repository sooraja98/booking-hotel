import Room from '../models/Room.js'
import Hotel from '../models/Hotel.js'
 import {createError} from '../utils/error.js'



 export const createRoom=async (req,res,next)=>{

    const hotelId=req.params.hotelId;
    const newRoom =new Room(req.body)
    try {
        const saveRoom=await newRoom.save()
        try {
             await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:saveRoom._id}})
        } catch (error) {
           next(error) 
        }
        res.status(200).json(saveRoom)
    } catch (error) {
        next(error)
    }
 }

 export const updateRoom = async (req, res, next) => {
    try {
    
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedRoom)


    } catch (error) {
        res.status(500).json(err)
    }
}

    export const deleteRoom = async (req, res, next) => {
        try {
    
            await Room.findByIdAndDelete(req.params.id)
             res.status(200).json("Room has been deleted")
     
     
         } catch (error) {
             res.status(500).json(err)
         }
        }
        export const getRoom = async (req, res, next) => {
            try {
    
                const room =await Room.findById(req.params.id)
                 res.status(200).json(room)
         
         
             } catch (error) {
                 res.status(500).json(err)
             }
         }
            export const getAllRoom = async (req, res, next) => {
                try {
                    const rooms=await Room.find()
                     res.status(200).json(rooms)
             
             
                 } catch (error) {
                     next(error)
                 }
                }         