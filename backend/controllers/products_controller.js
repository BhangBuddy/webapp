const Product = require("../models/product");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
module.exports.createProduct = async function (req, res) {
  try {
    Product.uploadedImages(req, res, async function (err) {
      console.log(req.body);
      const cat = req.body.categroy;
      const categories = cat.split(",");
      const arr = categories.map((e) => {
        return e;
      });
      const product = new Product({
      id: crypto.randomBytes(20).toString("hex"),
        title: req.body.title,
        price: req.body.price,
        category: arr,
        description: req.body.description,
      });

      if (err) {
        console.log(err);
        return res
          .status(400)
          .send({ status: false, message: "Error uploading image" });
      }

      if (req.files) {
        console.log(req.files[0]);
        // Convert the uploaded image to base64

        for (let i = 0; i < req.files.length; i++) {
          const imageBuffer = fs.readFileSync(req.files[i].path);
          const base64Image = imageBuffer.toString("base64");
          product.images.push({
            url: base64Image,
          });
        }

        //should be store in array using push

        // Save the products's updated information
      }

      await product.save();

      return res
        .status(200)
        .send({
          status: true,
          message: "Upload file succesfully",
          id: product.id,
        });
    });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ status: true, message: "Error in uploads products data" });
  }
};

module.exports.uploadVideoHandler = async function (req, res) {
 
  try {
    Product.uploadedVideos(req, res, async function (err) {

      console.log(req.body.id)
      const product = await Product.findOne({ id: req.body.id });
      console.log(product.category);
      if (err) {
        console.log(err);
        return res
          .status(400)
          .send({ status: false, message: "Error uploading videos" });
      }
        console.log(req.files)
      if (req.files) {
        //Convert the uploaded image to base64

        for (let i = 0; i < req.files.length; i++) {
          const videoBuffer = fs.readFileSync(req.files[i].path);
          const base64Video = videoBuffer.toString("base64");
          product.videos.push({
            url: base64Video,
          });
        }

        // should be store in array using push

        // Save the products's updated information
      }

      await product.save();
      return res
        .status(200)
        .send({
          status: true,
          message: "Upload file succesfully",
        });

    });
  } catch (error) {


  }
};
