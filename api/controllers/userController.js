import User from '../models/User.js'
export const createUser = async (req, res, next) => {
    const newUser = new User(req.body)
    try {

        const saveUser = await newUser.save()
        res.status(200).json(saveUser)


    } catch (error) {
        next(error)
    }

}
export const updateUser = async (req, res, next) => {
    try {
    
        const updateUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateUser)


    } catch (error) {
        res.status(500).json(error)
    }
}

    export const deleteUser = async (req, res, next) => {
        try {
    
            await User.findByIdAndDelete(req.params.id)
             res.status(200).json("User has been deleted")
     
     
         } catch (error) {
             res.status(500).json(error)
         }
        }
        export const getUser = async (req, res, next) => {
            try {
    
                const user =await User.findById(req.params.id)
                 res.status(200).json(user)
         
         
             } catch (error) {
                 res.status(500).json(error)
             }
         }
            export const getAllUser = async (req, res, next) => {
                try {
                    const users=await User.find()
                     res.status(200).json(users)
             
             
                 } catch (error) {
                     next(error)
                 }
                }         