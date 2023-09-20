const mongoose = require("mongoose");

const { Schema } = mongoose;

const user = new Schema({
    name: {
        type: String,
        unique: [true, 'Name already exists']
      },
    
  email:  {type: String,unique:true},
  password: {type:String,minLength:6},
  token:String
});

const userdb = mongoose.model("userdata", user);
module.exports = userdb;
