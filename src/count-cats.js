const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catCount = 0;
  matrix.map((row)=>{
    row.map((item)=>item==='^^'? catCount++:0)
  })
  return catCount
};
