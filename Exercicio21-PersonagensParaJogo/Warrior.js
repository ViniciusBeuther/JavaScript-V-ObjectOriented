import { Character } from "./Character.js";

export class Warrior extends Character{
    constructor(name, life, attack, defence, shield, position){
        super(name, life, attack, defence);
        this.shield = shield;
        this.position = position;

        if (this.position === 'defence'){
            this.def += this.shield;
        }
        else{
            this.def = defence;
        }
    }

    attack( target ){
        if (this.position === 'attack'){
            if(target.def < this.attk){
                let afterAttk = this.attk - target.def;
                target.hp -= afterAttk;
            }
        }

        else{
            return(console.log('You are in defence position, you can not attack. Please change to attack mode!'))
        }
    }

    changePosition(){
        if (this.position === 'attack'){
            this.position = 'defence';
            this.def += this.shield;
        }
        else{
            this.position = 'attack';
            this.def -= this.shield;
        }
    }
}