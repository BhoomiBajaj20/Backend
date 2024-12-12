import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/temp")//saves the file to ./public/temp directory
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)//uses original file name
    },
})

export const upload = multer({storage: storage})

//multer is a middleware for handling multipart/form-data, which is used for file uploads in Node.js

/* 
configures how and where files are stored locally before  being uploaded to Clouudinary.
*destination: specifies the directory where the files are temporarily stored/saved.
filename: specifies the name of the saved file. In this case , it uses the original file name.
*/