const express = require('express');
const router = express.Router();
const passport = require('passport');
const forget = require("../controllers/forget_controller")
const auth2 = require('../config/jwt-middelware')
const auth=require('../controllers/users_controllers');
const jwt = require('jsonwebtoken');

function generateToken(user) {
  const payload = { id: user.id, email: user.email };
  const token = jwt.sign(payload, process.env.JWT, { expiresIn: '1h' });
  return token;
}

router.get('/profile',auth2.auth,auth.profile);
router.get('/',auth2.auth,auth.home);
router.put('/update/:id',auth2.auth,auth.uploadProfile)
router.put('/updateProfile/:id',auth2.auth,auth.updateContent)
router.post("/forget-password",forget.forgetPassword);
router.post("/reset_password/:id/:token",forget.resetPassword);
router.post('/create', auth.create);
router.post("/verify",auth.verify);
router.post('/create-session', auth.createSession);
router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/'}),
(req, res) => {
    const token = generateToken(req.user);
    const username=req.user.username
    const encodedToken = encodeURIComponent(token);
const redirectURL = `http://localhost:3000/auth/success?token=${encodedToken}&username=${username}`;

    // res.json({ token }); // Send the JWT token in the response
    res.redirect(redirectURL);
  } );

  // router.get('/auth/success', (req, res) => {
  //   res.send("data")
  //   // res.json({ token: req.query.token });
  //   // res.redirect("http://localhost:3000/")
  //   // res.json("hehhhh")
  // });

module.exports=router;