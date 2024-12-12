import { response } from "express"
import { asyncHandler } from "../utils/asyncHandler"

const registerUser = asyncHandler( async (req, res) => {
    console.log("Request body: ", req.body);
    
     res.status(200).json({
        message: "ok"
    })
})
export { registerUser }