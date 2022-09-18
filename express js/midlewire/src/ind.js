const path = require('path');
const express = require('express');
const app = express();
// const port = 8000;
//  console.log(path.join(__dirname,"../public"));

const staticpath = path.join(__dirname, "../public");
const viewspath = path.join(__dirname,"../views")

//built in middleware
  app.use(express.static(staticpath ));
     app.use(express.static(viewspath));
 // to set the view engine 
 app.set("view engine", "hbs")

 app.get("/", (req,res) => {
    res.render("index")
 })
app.get("/", (req,res)=>{
    res.send('hello from the server')
})



app.listen(3090,()=>{
    console.log("port is running 8050")
})