const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let optionsBase = { repeatTimes: 0, separator: '+', addition: "", additionRepeatTimes: 0, additionSeparator: '|' }
  let substr = []
  let mainstr = []
  if (options.additionRepeatTimes) {
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      if(options.addition===undefined) substr.push(options.addition)
      else substr.push(`${options.addition}`)
    }
    if (options.additionSeparator) substr = substr.join(options.additionSeparator)
    else substr = substr.join('|')
  }
  else{
    for (let j = 0; j < 1; j++) {
      if(options.addition===undefined) substr.push(options.addition)
      else substr.push(`${options.addition}`)
    }
    if (options.additionSeparator) substr = substr.join(options.additionSeparator)
    else substr = substr.join('|')
  }
  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      mainstr.push(str + substr)
    }
    if (options.separator) mainstr = mainstr.join(options.separator)
    else mainstr = mainstr.join('+')
    return mainstr
  }
  else{
    for (let i = 0; i < 1; i++) {
      mainstr.push(str + substr)
    }
    if (options.separator) mainstr = mainstr.join(options.separator)
    else mainstr = mainstr.join('+')
    return mainstr
  }
}
