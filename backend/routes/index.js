const express = require('express');
const router = express.Router();
const passport = require('passport');

router.use('/',require('./user'));

module.exports=router;