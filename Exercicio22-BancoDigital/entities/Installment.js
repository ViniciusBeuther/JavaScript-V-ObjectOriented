import { Loan } from "./Loan.js";

export class Installment extends Loan {
    constructor(valueOfLoan, date, numberOfInstallment) {
        super(valueOfLoan, date, numberOfInstallment);

        this.installmentList = [];
        const installmentPrice = this.calculateInstallment();
        for (let i = 1; i <= this.numberOfPaymentsRemaining; i++) {
        this.installmentList.push({ installmentPrice, i });
        }
}

    calculateInstallment() {
        let price = (this.calculateRate(Loan.loanRate) * this.totalLoan) / this.numberOfPaymentsRemaining;
        return price;
}
    getInstallmentList(){
        return this.installmentList;
    }

}
