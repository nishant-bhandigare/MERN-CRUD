import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>Hello Node</h1>");
});

app.listen(port, ()=>{
    console.log("Hello Express!");
    console.log(`Server running on port ${port}`);
});