const express = require('express');
const router = express.Router();

const contact =require('../controllers/contactus_controller');

router.post('/contactus',contact.sendContactUS);


module.exports=router;