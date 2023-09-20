const express = require("express")
const app = express()
const port = 2000
const user = require('./routs')
const jwt = require('jsonwebtoken')
const errorpage = require('./errorpage')
app.use(express.json())

app.use((req,res,next)=>{
    const g = req.get('Authorization').split('Bearer ')[1]
    console.log(g)
    var decoded = jwt.verify(g, 'shhhhh');
    console.log(decoded)
   

})

app.use('/',user)
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/jwtauth').then(()=>console.log('Data-base connected is connected')).catch((err)=>console.log(err))
app.get('/test',(req,res)=>{
   res.status(200).json({success:true})
})


app.use(errorpage)
app.listen(port,()=>console.log(`Server is running on port no ${port}`))