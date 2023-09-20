const userdb = require('../model/user')
const Userdb = require('../model/user')
const jwt = require("jsonwebtoken")
exports.getuser = (req,res)=>{
res.status(200).json({success:'inside controler'})
}
exports.createuser =async (req,res)=>{


    const userresponce = req.body
    if(userresponce.name && userresponce.email){
        console.log(req.body)
        try {
            const user = await Userdb.create(userresponce);
            console.log(user)
            var tokenn = jwt.sign({email:req.body.email}, 'shhhhh');
            user.token = tokenn
            user.save().then((res)=>console.log(res)).catch((err)=>console.log("err"))
         return res.status(200).json({responce:user})
        } catch (error) {
            console.log('jj')
        }
       
    } 
    
   
    res.status(200).json({msg:'create'})
   
}