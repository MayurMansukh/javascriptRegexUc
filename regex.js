var read = require("readline-sync");

console.log("pincode is atleast 6 digit and take one alphabetand or special character at biginning  ")
const re = RegExp("^[A-Z!@#\$%\^\&*\]{1}[0-9]{2}[\\s]?[0-9]{3}$");
var pin=read.question("enter the pin :");
let result = re.test(pin);
console.log(result);





