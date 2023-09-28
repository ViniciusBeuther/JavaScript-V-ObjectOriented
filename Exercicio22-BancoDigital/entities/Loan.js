const Installment = require("./Installment")

module.exports = class Loan {

    static #fee = 1.05

    constructor(value, numberOfInstallment){
        this.value = value
        this.numberOfInstallment = numberOfInstallment
        this.installment = new Installment(value, numberOfInstallment, Loan.fee)
    }


    static set fee(percent){
        this.#fee = 1 + (percent / 100)
    }

    static get fee(){
        return this.#fee
    }
}