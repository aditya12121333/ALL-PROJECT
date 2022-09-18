const fs = require("fs");

// fs.writeFile("file.txt" , "today is AWSOME day)" ,  (err) => {

//  console.log("File is Created");
//  console.log(err)

// });

// fs.appendFile("file.txt","hlo Aditya this Month is Awsome )", (err) => {
//     console.log("this is created");
// });
// fs.appendFile("file.txt","hlo Aditya this week is so AWSOME)\n", (err) => {
//     console.log("this is the way to create new node file");
// });


// fs.readFile("file.txt",(err,data)=>{
//     console.log(data);
// })

fs.readFile("file.txt", "UTF-8", (err, data) => {
    console.log(data);
    console.log(err);
})