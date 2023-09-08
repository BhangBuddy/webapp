const express = require('express');
const router = express.Router();
const passport = require('passport');

router.use('/',require('./user'));
router.use('/',require('./product'));
router.use('/',require('./contactus'));

module.exports=router;