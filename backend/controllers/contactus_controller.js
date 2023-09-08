const Contact = require("../models/contact");
const nodemailer = require("../config/nodemailer");

module.exports.sendContactUS = async function (req, res) {
  try {
    const contact = new Contact({
      email: req.body.email,
      name: req.body.name,
      phone: req.body.phone,
      subject: req.body.subject,
      message: req.body.message,
    });
     await contact.save();


    let con = {
      email: req.body.email,
      name: req.body.name,
      phone: req.body.phone,
      subject: req.body.subject,
      message: req.body.message,
    };
    console.log(con)
    let htmlString1 = nodemailer.renderTemplate({ con }, "/feedback.ejs");
    let htmlString2 = nodemailer.renderTemplate({ con }, "/community.ejs");

    nodemailer.transporter.sendMail({
      from: "thantran211@gmail.com",
      to: con.email,
      subject: "Thanks For Feedback",
      html: htmlString1,
    });
    nodemailer.transporter.sendMail({
      from: "thantran211@gmail.com",
      to: "thantran211@gmail.com",
      subject: "Feedback From User",
      html: htmlString2,
    });

    return res
      .status(200)
      .send({ status: true, message: "Your message send Successfully" });
  } catch (error) {
    console.log(error);
    return res.send({ status: false, message: "Your message is not send" });
  }
};
