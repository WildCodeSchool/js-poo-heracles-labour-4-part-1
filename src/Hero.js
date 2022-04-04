class Hero extends Fighter {
  constructor(name, strength, dexterity, image) {
      super(name, strength, dexterity, image)
      this.weapon = null;
      this.shield = null;
  }


  // Calculate the total attack capacity of the fighter
  // Calcule la capacité d'attaque totale du combattant
  getDamage() {
    return this.weapon ?
      this.strength + this.weapon.damage :
      this.strength
  }


  // Calculate the total defense capacity of the fighter
  // Calcule la capacité de défense totale du combattant
  getDefense() {
    return this.shield ?
      this.dexterity + this.shield.protection :
      this.dexterity
  }
}
