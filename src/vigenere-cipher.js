const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(reverse) {
    if(reverse===false) this.reverse = false;
    else this.reverse=true 
  }

  encrypt(str, key) {
    if(key===undefined || str===undefined) throw new Error()
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    let localStr = str.toUpperCase().split("")
    let key2 = key.toUpperCase()
    let localKey = []
    var i = 0
    localStr = localStr.map((item)=>{
      if(i>key.length-1) i=0
      if( alphabet.indexOf(item)===-1) {
        localKey.push(false)
        return item
      }
      else {
        localKey.push(alphabet.indexOf(key2[i]));
        i++;
        return alphabet.indexOf(item)
      }
    })
    localStr = localStr.map((item,index)=>{
      if(typeof(item)==="number"){
       return alphabet[(item+localKey[index]) % alphabet.length]
      }
      else return item
    })
    return this.reverse ? localStr.join(""):localStr.reverse().join("");
  }    
  decrypt(str, key) {
    if(key===undefined || str===undefined) throw new Error()
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    let localStr = str.toUpperCase().split("")
    let key2 = key.toUpperCase();
    let localKey = []
    var i = 0;
    localStr = localStr.map((item)=>{
      if(i>key.length-1) i=0
      if( alphabet.indexOf(item)===-1) {
        localKey.push(false)
        return item
      }
      else {
        localKey.push(alphabet.indexOf(key2[i]));
        i++;
        return alphabet.indexOf(item)
      }
    })
    localStr = localStr.map((item,index)=>{
      if(typeof(item)==="number"){
       return alphabet[(item+ alphabet.length -localKey[index]) % alphabet.length]
      }
      else return item
    })
    return this.reverse ? localStr.join(""):localStr.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
