import { Deposit } from "./entities/Deposit.js";
import { Loan } from "./entities/Loan.js"
import { Transfer } from "./entities/Transfer.js"

const firstLoan = new Loan(1000, '26/09/2023', 12)
firstLoan.getvalueOfLoan()
