const express = require('express')
const app = express()

const path = require("path")

//const publicPath = path.resolve(__dirname, "./public")
const puerto = 3001
app.listen(puerto, ()=>{
    console.log("servidor corriendo en "+puerto)
})

app.use(express.static('public'))

app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.post("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})


app.get("/login", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})

app.get("/register", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})
