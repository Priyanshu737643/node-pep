import express from "express";
const app = express();
app.listen(8080, () => {
    console.log("server running");
})

app.get("/home", (req, res) => {
    res.send("response from server for /home")
})