const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const AVATAR_PATH = path.join('/uploads/users/avatars');

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
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
        type:String,
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
    avatar:{
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
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..', AVATAR_PATH));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now());
    }
  });

userSchema.statics.uploadedAvatar = multer({storage:  storage}).single('avatar');
userSchema.statics.avatarPath = AVATAR_PATH;

const User = mongoose.model('User', userSchema);

module.exports = User;