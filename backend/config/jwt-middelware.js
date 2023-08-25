const jwt = require("jsonwebtoken");

module.exports.auth = async function (req, res, next) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const isCustomAuth = token.length < 500;
    let decodedData;

    if (isCustomAuth) {
      try {
        decodedData = jwt.verify(token, process.env.JWT);
        req.userId = decodedData?.id;
        next();
      } catch (error) {
        if (error.name === 'TokenExpiredError') {
          return res.status(401).json({ message: "Token has expired" });
        } else {
          return res.status(403).json({ message: "Token is invalid" });
        }
      }
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
}
