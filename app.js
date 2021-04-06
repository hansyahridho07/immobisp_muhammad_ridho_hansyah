const xlsx = require("xlsx");

const workBook = xlsx.readFile("example_data.xlsx", { cellDates: true });
const workSheet = workBook.Sheets["Sheet1"];
const data = xlsx.utils.sheet_to_json(workSheet);
console.log(data);
