var read = require("readline-sync");

console.log("pincode is atleast 6 digit or postoffice numbering used by indian post ")
const re = RegExp("^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$");
var pin=read.question("enter the pin :");
let result = re.test(pin);
console.log(result);








