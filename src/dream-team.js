const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false
  return members.map((item)=>{
    if (typeof(item)==='string') return item.trimStart()[0].toUpperCase()
  }).sort().join("")
  // remove line with error and write your code here
}
