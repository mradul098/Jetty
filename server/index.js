require('dotenv').config();
const express = require("express")
const app=express()
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
const cors= require('cors');
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const projectRoutes = require("./routes/projects")


mongoose.connect(process.env.URL)
app.use(express.json()); //any request that involves body can be done using this
app.use(cors()); //useful to connect this backend to our react frontend

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/projects",projectRoutes);

app.get("/getUsers",(req,res)=>{
    UserModel.find({},(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
})

app.post("/createUsers", async(req,res)=>{
    const user=req.body;
    const newUser=new UserModel(user);
    await newUser.save();

    res.json(user);
});

if(process.env.NODE_ENV=="production"){
    // app.get("*", function (request, response) {
    //     response.sendFile(path.resolve(__dirname, "client/build", "index.html"));
    //   });
    app.use(express.static("client/build"));
    const path=require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

app.listen(process.env.PORT || 3001, (e)=>{
    console.log("server running on PORT");
});