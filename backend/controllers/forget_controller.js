const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const nodemailer = require("../config/nodemailer");



module.exports.resetPassword = (req, res) => {
  const { id, token } = req.params;
  const { password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.json({status:false, message: "Passwords do not match" });
  }

  jwt.verify(token, process.env.JWT, (err, decoded) => {
    if (err) {
      return res.status(401).send({status:false, message: "Error with token" });
    } else {
      bcrypt.hash(password, 10)
        .then(hash => {
          User.findByIdAndUpdate({ _id: id }, { password: hash })
            .then(u => res.send({ status:true,message:"password updated successfully"}))
            .catch(err => res.send({ status:false,message:"something went wrong try again" }));
        })
        .catch(err => res.send({ status:false,message:err}));
    }
  });
};

module.exports.forgetPassword = (req, res) => {
    // const {email}  = req.body
    User.findOne({ email: req.body.email }).then(user => {
      // console.log(email)
        if (!user) {
           res.send({status:false, message: "User not existed" })
        }else{
        const token = jwt.sign({ id: user._id }, process.env.JWT, { expiresIn: "1h" })
        
        var email=req.body.email;
        const link = `http://localhost:3000/reset_password/${user._id}/${token}`;
        user.link=link;
        user.save();
        let htmlstring=nodemailer.renderTemplate({user:user},'/email.ejs')
        nodemailer.transporter.sendMail({
          from:'thantran211@gmail.com',
          to:user.email,
          subject:"Reset Password Link",
          html:htmlstring
         },function (error, info) {
          if (error) {
            console.log(error);
          } else {
            return res.send({status:true, message: "Success" ,emails:email})
          }
        })} ;
  
      })
      }