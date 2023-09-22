
export class Character{
    constructor(name, life, attack, defence){
        this.name = name;
        this.hp = life;
        this.attk = attack;
        this.def = defence;
    }

    attack(target){

        if (target.def >= this.attk){
            target.hp = target.hp
        }
        else{
            let tempHp = target.def + target.hp - this.attk;
            target.hp = tempHp;
        }
        
        // damage = target def points + target HP - this attack points 
    }
}