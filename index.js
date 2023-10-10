const math = require('./math')

const expression = " 576 / 4 "

const result = math.calculate(expression)

console.log('the result of the expression' + expression + 'is;')
console.log(result) 

const ListOfnumbers = [1,2,3,4,5]
const Listlength = ListOfnumbers.length 

for (let i = 0; i < Listlength; i++) {
    console.log(ListOfnumbers[i])
}
