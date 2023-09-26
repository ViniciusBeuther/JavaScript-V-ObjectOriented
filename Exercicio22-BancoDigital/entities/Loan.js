export class Loan{
    constructor(valueOfLoan, date, numberOfInstallment){
        this.valueOfLoan = valueOfLoan;
        this.date = date;
        this.numberOfInstallment = numberOfInstallment;

        let percent = (Loan.interestRate / 100)
        this.installmentPrice = ((this.valueOfLoan * percent) + this.valueOfLoan) / this.numberOfInstallment;
    }

    getvalueOfLoan () {
        return console.log(this.valueOfLoan) 
    }
    static interestRate = 100;
}