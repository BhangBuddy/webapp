const jwt = require("jsonwebtoken");

module.exports.auth = async function (req, res, next) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    try {
      const decodedData = jwt.verify(token, process.env.JWT);
      req.userId = decodedData.id; // Assuming the ID is stored in the payload as 'id'
      next();
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        return res.status(401).json({ message: "Token has expired" });
      } else if (error instanceof jwt.JsonWebTokenError) {
        return res.status(403).json({ message: "Token is invalid" });
      } else {
        return res.status(500).json({ message: "Server error" });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
}