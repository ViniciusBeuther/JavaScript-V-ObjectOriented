import { Installment } from "./Installment.js";

export class Loan {
    static #loanRate = 0;
    
    constructor(valueOfLoan, date, numberOfInstallment){
    this.totalLoan = valueOfLoan;
    this.date = date;
    this.paymentsRemaining = numberOfInstallment;
    this.createInstallment()
    }

    static get loanRate(){
    return this.#loanRate;
    }

    static set loanRate( newRate ){
    Loan.#loanRate = newRate;
    }

    calculateRate(rate){
    let newRate = rate / 100 + 1;
    return newRate;
    }

    createInstallment() {
        return new Installment(this.totalLoan, this.date, this.paymentsRemaining);
    }
}
