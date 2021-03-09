const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
  let comands = ["--discard-prev","--double-prev","--double-next","--discard-next"]
  if (!Array.isArray(array)) throw new Error()
  let arr = [...array];
  let bufferArray = []
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]===undefined) continue;
    if( arr[i]==="--discard-prev" && arr[i - 1] !== undefined && !comands.includes(arr[i - 1])) bufferArray.pop();
    else if( arr[i]==="--double-prev" && (arr[i - 1] !== undefined && !comands.includes(arr[i - 1]))) bufferArray.push(arr[i-1]); 
    else if( arr[i]==="--double-next" && (arr[i + 1] !== undefined && !comands.includes(arr[i - 1]))) bufferArray.push(arr[i+1]); 
    else if( arr[i]=== "--discard-next"&& (arr[i + 1] !== undefined && !comands.includes(arr[i - 1]))) arr[i+1]=undefined; 
    else if(!comands.includes(arr[i])) bufferArray.push(arr[i])
  }
  return bufferArray;
  throw new CustomError('Not implemented');
};
