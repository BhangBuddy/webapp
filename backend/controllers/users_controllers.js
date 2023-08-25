const User = require("../models/user");
const bcrypt=require('bcrypt');
const nodemailer = require("../config/nodemailer")


const jwt = require("jsonwebtoken");
//changes left

// const User = require('../models/user'); // Assuming you have a User model


// Function to send the verification code to the user's email
function sendVerificationCode(email, code) {

  try {

     
    nodemailer.transporter.sendMail({
      from:'thantran211@gmail.com',
      to:email,
      subject:"Verify Email",
      text:code
     },function (error, info) {
      if (error) {
        console.error('Error sending verification code email:', error);
      } else {
        console.log('Verification code email sent:', info.response);
        return res.send({status:true, message: "Verification code email sent:" ,emails:email})
      }
    })
    
  } catch (error) {
    return res.status(503).send({
     status:true,
      message:"Error in sending mail"
    })
  }
};


function generateVerificationCode() {
  const code = Math.floor(100000 + Math.random() * 900000); // Generates a random 6-digit number
  return code.toString();
}

module.exports.create = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;

    // Check if the user already exists
    var existingUser = await User.findOne({ email });
    
    if (existingUser ) {
      if(existingUser.isVerified === false){
        await User.deleteOne({email:email})
        existingUser = await User.findOne({ email });
      }
      else{
        return res.send({ status: false, message: 'User already exists.' });
      }
    }

    if (password !== confirmPassword) {
      return res.send({ status: false, message: "Passwords do not match." });
    }

    // Generate a verification code
    const verificationCode = generateVerificationCode();
    // Create a new user instance
    const salt = await bcrypt.genSalt(10);
    sendVerificationCode(email, verificationCode);
    const hashedPassword = await bcrypt.hash(password, salt);
    // const verificationCode = generateVerificationCode();
    // Send verification code to user's email


    
    const newUser = new User({
      email:email.toLowerCase(),
      password: hashedPassword,
      verificationCode:verificationCode, // Store the generated verification code
      isVerified: false,
    });
    await newUser.save();
    let htmlstring=nodemailer.renderTemplate({user:newUser},'/otp.ejs')

    res.send({ status: true, message: 'Verification code sent. Please check your email.' });
  } catch (error) {
    console.error('Error in creating account:', error);
    res.status(500).send({ status: false, message: 'Error occurred while signing up.' });
  }
};

module.exports.verify= async (req, res) => {
  try {
    const { email, verificationCode } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    // Compare the entered verification code with the stored code
    if (user.verificationCode !== verificationCode) {
      console.log(user)
      return res.send({ status: false, message: 'Invalid verification code.' });
    }

    // Hash the password
 
    const token = jwt.sign(
      { email: user.email.toLowerCase(), id: user._id },
      process.env.JWT,
      { expiresIn: "1h" }
    );
    // Update user data
  
     user.isVerified=true;
     user.save();
    // Save the user to the database
    // Save the updated user data

    res.send({ status: true, message: 'User verified and account created successfully.',token });
  } catch (error) {
    console.error('Error in verifying user:', error);
    res.status(500).send({ status: false, message: 'Error occurred while verifying user.' });
  }
}

module.exports.createSession = async function (req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(401)
        .send({ status: false, message: "Invalid email or password." });
    }
    if(user.isVerified === false){
      return res
        .status(401)
        .send({ status: false, message: "First you need to verify  and create account" });
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    // Compare hashed passwords
    if (!match) {
      return res
        .status(401)
        .send({ status: false, message: "Invalid email or password." });
    }
    const token = jwt.sign(
      { email: user.email.toLowerCase(), id: user._id },
      process.env.JWT,
      { expiresIn: "1h" }
    );
    // Log in the user
    // You can use a session management library or JWT here
    console.log("success");
    return res.send({
      status: true,
      message: "Logged in successfully.",
      token,
    });
  } catch (error) {
    console.error("Error in login:", error);
    return res
      .status(500)
      .send({ status: false, message: "Error occurred while logging in." });
  }
};

module.exports.authentication = function (req, res) {
  if (!req.userId) {
    return res.send({ status: false });
  }
  return res.send({ status: true });
};


module.exports.destroySession = function (req, res) {
  req.logout();
  console.log("sure");
  return res.redirect("http://localhost:3000/");
};
