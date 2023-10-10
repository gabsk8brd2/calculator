const mathjs = require('mathjs')
 
function calculate(expression) {
    return mathjs.evaluate(expression);
}
 
module.exports = {
    calculate: calculate
}