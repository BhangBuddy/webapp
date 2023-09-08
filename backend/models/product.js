const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const PRODUCT_PATH= path.join('/uploads/products');
const productSchema= new mongoose.Schema({
    id:{
        type:String,
    },
    title:{
        type:String,
    },
    images:{
        type:Array,
        default:[],
    },
    videos:{
        type:Array,
        default:[],
    },
    rating:{
        type:Number,
    },
    category:{
        type:Array
    },
    description:{
        type:String,
    },
    meta_desc:{
        type:String,
    },
    price:{
        type:Number,
    },
    discount:{
        type:Number,
    },
    tax:{
        type:Number,
    },
    status:{
        type:Boolean,
    },
    stock:{
        type:Number,
    },
    keywords:{
        type:String
    },

},{
    timestamps:true
})
const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', PRODUCT_PATH));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
})
const videoStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', PRODUCT_PATH));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});
productSchema.statics.uploadedImages = multer({ storage: imageStorage }).array('images', 10);
productSchema.statics.uploadedVideos = multer({ storage: videoStorage }).array('videos', 1); // Adjust the limits as needed
productSchema.statics.uploadPath = PRODUCT_PATH;
const Product = mongoose.model('Product', productSchema);

module.exports = Product;