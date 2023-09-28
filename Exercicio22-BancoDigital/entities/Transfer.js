module.exports = class Transfer {

    constructor(sentBy, receivedBy, value){
        this.sentBy = sentBy;
        this.receivedBy = receivedBy;
        this.value = value;
        this.date = new Date();
    }
}