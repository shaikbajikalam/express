 const express=require("express")
 const app=express()
 const port=2000
 const cors=require("cors")
 const employee={id:24,name:"react",position:"frontends"}
 const students=require("./student.js")
app.use(cors())
 app.get("/",(req,res)=>{
 	res.send("starting route")
 })
 
 app.get("/demo",(req,res)=>{
 	res.send("njoy with no limits")
 })
 app.get("/emp",(req,res)=>{
 	res.send(employee)
 })
 app.get("/students",(req,res)=>{
 	res.json(students)
 })
 app.listen(port,()=>console.log("nice to meet you 2000"))
