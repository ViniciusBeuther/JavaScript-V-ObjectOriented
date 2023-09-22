import { Character } from "./Character.js";

export class Mage extends Character{
    constructor(name, life, attack, defence, magic){
        super(name, life, attack, defence)
        this.magic = magic
    }

    attack( target ){
        if (target.def < (this.attk + this.magic)){
            let afterAttk = (this.attk + this.magic) - target.def;
            target.hp -= afterAttk 
        }
    }

    heal( target )
    {
        target.hp += (2 * this.magic)
    }

    }
