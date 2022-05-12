
console.log("Aktualna data to: 10-10-2010");

const moment = require("moment");
const currentDate = moment().format('MMMM D YYYY, H:mm:ss');
console.log("Aktualna data to: " + currentDate);
