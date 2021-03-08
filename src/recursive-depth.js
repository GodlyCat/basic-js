const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr, flat=1) {
    let curFlat = flat;
    let maxFlat = 1;
    if(flat>maxFlat) maxFlat=flat;
    for(let i=0;i<arr.length;i++){
      if(Array.isArray(arr[i]))  flat = this.calculateDepth(arr[i],curFlat+1)
      if(flat>maxFlat) maxFlat=flat;
    }
    return maxFlat;
  }
};

