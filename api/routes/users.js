import express from "express";
import {createUser, deleteUser, getAllUser, getUser, updateUser} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();
router.get('/verify',verifyToken,(req,res)=>{
    res.send("heloow user")
})
// create
router.post('/',verifyUser,createUser)
// update
router.put('/:id',verifyUser, updateUser)
// delete
router.delete('/:id',verifyUser,deleteUser)
// get
router.get('/:id',verifyUser,getUser)
// getall
router.get('/',verifyAdmin,getAllUser)


export default router
