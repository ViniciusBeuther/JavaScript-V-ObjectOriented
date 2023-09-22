import { Character } from "./Character.js";

export class Thief extends Character {
    constructor(name, life, attack, defence){
        super(name, life, attack, defence);
    }

    attack( target ){
        if (this.attk > target.def){
            let afterAttk = this.attk - target.def
            target.hp = target.hp - 2 * afterAttk
        }
    }
}