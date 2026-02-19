import express from 'express';
const app = express();
app.listen(8080,()=> {
    console.log("Server running");
})

app.get("/", (req, res) => {
    console.log(req.headers);
    console.log(req.headers.authorization);
    res.send();
})

