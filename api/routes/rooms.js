import  express from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router=express.Router();

// create
router.post('/:hotelId',verifyAdmin ,createRoom)
// update
router.put('/:id',verifyAdmin,updateRoom)
// delete
router.delete('/:id/:hotelId',verifyAdmin,deleteRoom)
// get
router.get('/:id', getRoom)
// getall
router.get('/', getAllRoom)


export default router