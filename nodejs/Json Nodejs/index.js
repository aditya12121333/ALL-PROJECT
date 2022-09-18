const fs = require("fs")
const bioData = {
    name : "Aditya",
    age : 20,
    address: "U.p",
    Number : 7355159936
}
 
//    console.log(bioData.Number);
//    console.log(bioData.name)

//    const jsonData = JSON.stringify(bioData);
//    const objData  =JSON.parse(jsonData);

//    console.log(objData);

//converted to json
const jsonData = JSON.stringify(bioData);
console.log(jsonData)
//add a new file


fs.writeFile("json1.json",jsonData , (err,data) => {
    
    console.log("Done");
});
fs.readFile("json1.json","utf-8",(err, data) =>{
    //converting json to object
    const newData = JSON.parse(jsonData);
      console.log(data);
      console.log(newData);
})
