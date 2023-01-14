const Express=require("express")
const Mongoose=require("mongoose")
const Cors=require("cors")
const Bodyparser=require("body-parser")


var recipie=Express()


recipie.post("/",(req,res)=>{
    res.send("recipies")
})

recipie.post("/add",(req,res)=>{
    res.send("add recipies")
})

recipie.get("/viewall",(req,res)=>{
    res.send("viewall recipies")
})

recipie.post("/edit",(req,res)=>{
    res.send("edit recipies")
})

recipie.listen(3000)