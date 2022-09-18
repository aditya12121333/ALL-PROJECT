// const chalk = require("chalk");

// console.log(chalk.blue("hello duniya!"));

const validator = require('validator');

const res = validator.isEmail("abc@gmail.com");

// console.log(res?chalk.green.inverse(res):chalk.supportsColorStderr.inverse(res));
console.log(res);