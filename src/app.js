import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
//url encoder
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import router from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/users", router)

// app.use((req, res, next) => {
//     res.status(404).json({ error: "Not Found" });
// });

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ error: "Internal Server Error" });
// });

// app.listen(8000, () => {
//     console.log("Server is  runi ng on http://localhost:8000");
    
// })

export { app }