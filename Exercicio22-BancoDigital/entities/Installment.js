const Loan = require("./Loan")

module.exports = class Installment {
    constructor(value, numberOfInstallments, fee){
        this.value = value
        this.numberOfInstallments = numberOfInstallments
        this.installment = []
        this.status = 'pending'
        this.generateInstallment(value, numberOfInstallments, fee)
    }

    getInstallmentList(){
        return this.installment
    }

    generateInstallment(value, numberOfInstallments, fee){
        for(let i = 1; i <= numberOfInstallments; i++){
            const installmentValue = (value * fee) / numberOfInstallments;
            const installmentInfo = [installmentValue, i, this.status];
            this.installment.push(installmentInfo);
        }
    }
}