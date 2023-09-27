import { Deposit } from "./entities/Deposit.js";
import { Loan } from "./entities/Loan.js"
import { Transfer } from "./entities/Transfer.js"
import { Installment } from "./entities/Installment.js";

const firstLoan = new Loan(1000, '26/09/2023', 10)
console.log(firstLoan)

firstLoan.loanRate = 10
console.log(firstLoan)

firstLoan.loanRate = 2
console.log(firstLoan)
console.log(firstLoan)
