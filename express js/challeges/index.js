const express = require ('express');
const app = express();
const port = 3100;
app.get('/' ,  (req,res) => {

res.send("hello aditya apka swagat hai ");
 
} );
app.get("/about", (req,res) =>{
    res.status(200).send("Hello from aditya you are from about page):")
})

app.listen(port ,()=> {
    console.log(`App is running 3200 port ${port}`)
})