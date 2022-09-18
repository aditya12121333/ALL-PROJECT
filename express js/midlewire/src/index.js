const path = require("path");
const express = require('express');
const app = express();
const port = 7090;


//relative Path
// console.log(__dirname);
const staticpath = path.join(__dirname, '../public')
//builtin middleware
app.use(express.static(staticpath));
app.listen(port ,()=> {
    console.log(`App is running 7020 port ${port}`)
})