const express = require('express');
const app = express();
const path = require('path')
const publicPath = path.resolve(__dirname,'./public')
app.use(express.static(publicPath))

app.get('/',(req,res)=>{
res.sendFile(path.resolve(__dirname,'./views/home.html'))    
})

app.listen(3000,()=>{
    console.log('el servidor esta en marcha')
})
app.get('/login', (req, res)=> {
    res.sendFile(path.resolve(__dirname,'views/login.html'))
 })
 app.get('/registro', (req, res)=> {
    res.sendFile(path.resolve(__dirname,'views/register.html'))
 })