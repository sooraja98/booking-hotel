import Hotel from '../models/Hotel.js'
export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {

        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)


    } catch (error) {
        next(error)
    }

}
export const updateHotel = async (req, res, next) => {
    try {
    
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedHotel)


    } catch (error) {
        res.status(500).json(err)
    }
}

    export const deleteHotel = async (req, res, next) => {
            const hotelId=req.params.hotelId    
            try {

                await Room.findByIdAndDelete(rq.params.id)
                try {
                    await Hotel.findByIdAndDelete(hotelId,{$pull:{rooms:req.params.id}})
                } catch (error) {
                        next(error)
                }
                res.status(200).json("room has been deleted")
            } catch (error) {
                next(error)
            }
        }
        export const getHotel = async (req, res, next) => {
            try {
    
                const hotel =await Hotel.findById(req.params.id)
                 res.status(200).json(hotel)
         
         
             } catch (error) {
                 res.status(500).json(err)
             }
         }
            export const getAllHotel = async (req, res, next) => {
                try {
                    const hotels=await Hotel.find()
                     res.status(200).json(hotels)
             
             
                 } catch (error) {
                     next(error)
                 }
                }         