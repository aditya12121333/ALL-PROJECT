const fs = require('fs');

// fs.writeFileSync('bio.txt', "hello thapa");


// fs.appendFileSync('bio.txt', "I accepted you challenge");

// fs.appendFileSync('bio.txt', "helo i am learning node js");
 

const buf_data = fs.readFileSync("bio.txt");
 
// console.log(buf_data )


// new_data = buf_data .toString();
 
// console.log(new_data)
   
fs.renameSync( 'bio.txt' , 'mybio.txt')