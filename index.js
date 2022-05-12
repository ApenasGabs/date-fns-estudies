const dat = require("date-fns")

const newDate2 = new Date()
const newDate = dat.addMonths(new Date(), 3);
const newoldDate = dat.subMonths(new Date(), 3);
console.log(newoldDate);
console.log(newDate);