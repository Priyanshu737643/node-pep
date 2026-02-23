//! res.status()

/* 
200 - Ok
201 - Created
400 - Bad Request
401 - Unauthorized
404 - Not Found
500 - Internal Server Error
*/

import express from "express";
const app = express();
app.listen(8080, () => console.log("Server Started"));
app.get("/", (req, res) => {
    res.status(201).json({ message: "Hello World" });
    res.end();
});

