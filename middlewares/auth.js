// check token

const middleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  } else {
    //? token provided in postman
    const token = authHeader.split(" ")[1];
  }
  try {
    //? verify token and save details in user
    const user = jwt.verify(token, secretKey);
    console.log("middleware executed");
    //? update user with token details
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// check role

const authorize = (...roles) => {
  return (req, res, next) => {
    //? check if role matches
    if (roles.includes(req.user.role)) {
      next();
    } else {
      res.status(403).json({ message: "Access denied" });
    }
  };
};

export { middleware, authorize };
