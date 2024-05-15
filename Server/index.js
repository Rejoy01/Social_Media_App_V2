import  express  from    "express";
import  mongoose from    "mongoose"

import bodyParser from "body-parser";


const app = express()

//to use middleware on server 


app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));

const PORT = 3000

mongoose.connect("mongodb+srv://rejowilson:RejoyWilSon@cluster0.harjfus.mongodb.net/SocialMediaV2?retryWrites=true&w=majority").
then(()=>app.listen(PORT,()=> console.log("Listening")))


