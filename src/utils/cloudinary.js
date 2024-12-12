import { v2 as cloudinary } from 'cloudinary';
import { log } from 'console';
import fs from "fs";

cloudinary.config({
     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
     api_key: process.env.CLOUDINARY_API_KEY,
     api_secrets: process.env.CLOUDINARY_API_SECRET,
})

//localFilePath - path of the file on the local machine
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath){
            return null;
        }// check if the file path is valid

        //upload file on cloudinary
       const response =  await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto" //automatically detect the file type(image, video, etc.)
        })

        //file has been uploaded successfully
        console.log(response.url);//log the URL of uploaded file
        console.log("file is uploaded on cloudinary");
        return response // return the  cloudinary response(e.g, URL, public_id)
        
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;//return null to indicate failure
    }
}

export { uploadOnCloudinary }