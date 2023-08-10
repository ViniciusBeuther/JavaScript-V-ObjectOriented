const Address = require("./Address")
const Person = require('./Person')

const addr = new Address('Iracema', 440, 'Cruzeiro', 'São Bento do Sul', 'SC')
const vinicius = new Person('Vinicius Beuther', addr)

console.log(vinicius)
console.log(vinicius.address.getFullAddress())