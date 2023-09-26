// São valor estaticos que ficam atribuidos a classe e tem valores q podem ser alterados dinamicamente

class Reservation{
    constructor(guests, room, days){
        this.guests = guests;
        this.room = room;
        this.days = days;
        this.total = days * Reservation.baseFee // Static fica atribuido à classe, entao para acessar usamos Class.atributo/metodo
    }

    static baseFee = 150;

    static showBaseFee(){
        console.log(`Base fee is ${Reservation.baseFee}`)
    }

    static get PremiumFee(){ // Quando usamos o get methodName () não há necessidade de quando chamar o metodo usar ()
        return Reservation.baseFee * 1.25;
    }
}

const r1 = new Reservation(3, '202', 5)
console.log(r1);

const r2 = new Reservation(2, '302', 2)
console.log(r2);

Reservation.baseFee = 300

console.log(r1)