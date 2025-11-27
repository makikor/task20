export class Character {
    constructor(name, type){
        if(name.length < 2 ||  name.length > 10){                                         // имя война
            console.Error('Имя должно содержать от 2 до 10 символов');
        }else this.name = name;
        
        const warmans = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'] // массив войнов
        if(warmans.includes(type)){                                                       // тип война
            this.type = type;
        } else {console.Error('Неизвестное существо');
            }

        this.health = 100;                                                                // уровень жизни
        this.level = 1;                                                                   // уровнеь война
    }
}

