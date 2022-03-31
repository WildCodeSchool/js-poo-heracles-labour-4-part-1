const MAX_LIFE = 100

class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
        this.weapon = null;
        this.shield = null;
    }


    // Lance un combat
    fight(defender) {
        let attackPoints = this.getRandomInt(this.getDamage());

        let damages = Math.max(attackPoints - this.getDefense(defender), 0);

        defender.life = Math.max(defender.life - damages, 0);
    }


    // Calcule la capacité d'attaque totale du combattant
    getDamage() {
        return this.weapon ?
            this.strength :
            this.strength + this.weapon.damage
    }


    // Calcule la capacité de défense totale du combattant
    getDefense(defender) {
        return defender.shield ?
            defender.dexterity :
            defender.dexterity + defender.shield.protection
    }


    // Génère une valeur aléatoire entre 1 et max
    getRandomInt(max) {
        return 1 + Math.floor(Math.random() * max);
    }


    // Permet de déterminer si un combattant est encore en vie
    isAlive() {
        return this.life > 0
    }
}
