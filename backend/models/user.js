const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username:{
       type:String,
     },
     email:{
        type:String,
        required:true,
        unique: true
    
     },
     verificationCode:{
        type:String,
     },
    first_name:{
        type: String,
       
    },
    last_name: {
        type: String,
       
    },
    password: {
        type: String,
        required:true
      
    },
    Phone:{
        type:Number,
        //required:true
    } ,
    ship_addr: {
        type: String
    },
    billing_adr:{
        type:String,
    },
    gstin:{
        type:String,
    },
    profile_pic:{
        type:String,
    },
    role:{
        type:String,
    },
    link:{
        type:String
    },
    isVerified:{
        type:Boolean,
    }

}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;