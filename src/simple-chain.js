const CustomError = require("../extensions/custom-error");

const chainMaker = {
  'chain': new Array(),
  
  getLength() {
    return this.chain.length();
    // remove line with error and write your code here
  },
  addLink(value) {
    if(value!==undefined) this.chain.push(`( ${value} )`)
    else this.chain.push(`( )`)
    return this;
  },
  removeLink(position) {
    if(Number.isInteger(position) && position<this.chain.length) this.chain.splice(position-1,1)
    else { this.chain=[];
      throw new Error();}
    return this;
  },
  reverseChain() {
    this.chain=this.chain.reverse();
    return this;
  },
  finishChain() {
    let chainSub = this.chain.join('~~');
    this.chain=[]
    return chainSub
  }
};

module.exports = chainMaker;
