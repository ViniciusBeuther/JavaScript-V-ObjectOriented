const Loan = require("./Loan")

const parcela = new Loan(1000, 10)
console.log(parcela.installment)
Loan.fee = 10
console.log(parcela.installment)
