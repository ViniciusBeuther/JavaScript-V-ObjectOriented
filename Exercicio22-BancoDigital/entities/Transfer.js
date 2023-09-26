export class Transfer {
    sentBy
    receivedBy

    constructor(sentBy, receivedBy, amount, date){
        this.sentBy = sentBy;
        this.receivedBy = receivedBy;
        this.amount = amount;
        this.date = date;
    }
}