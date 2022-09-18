
const express = require('express');
const app = express();

app.get("/about", (req,res) =>{
    res.send("Hello from aditya you are from about page):")
})

app.get("/" ,(req,res) => {
    res.send("hello from express");
});

app.listen(9000, () => {
     console.log("listing the port in 9000")
})

