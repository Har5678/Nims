import express from 'express';
import cors from 'cors';
import emailRouter from './Email/emailRouter.js';


const app = express();
const port= 4000;


//middlewares

app.use(cors());
app.use(express.json());

//api endpoints
app.use("/api", emailRouter)

app.get("/",(req,res)=>{
    res.send("Hello from Node.js server");
})

app.listen(port,()=>console.log("listening on port: " + port));