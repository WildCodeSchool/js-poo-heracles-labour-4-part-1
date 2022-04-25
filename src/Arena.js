class Arena {
  constructor(hero, monsters, size = 10) {
    this.hero = hero
    this.monsters = monsters
    this.size = size
  }

  getDistance(fighter1, fighter2) {
    return Math.sqrt(Math.pow(fighter2.x - fighter1.x, 2) + Math.pow(fighter2.y - fighter1.y, 2)).toFixed(2)
  }

  isTouchable(attacker, defender) {
    return this.getDistance(attacker, defender) <= attacker.getRange()
  }

  // Hero movement managment
  // Gestion du déplacement du héros
  move(direction) {
    /* Your code goes here */ 
  
    return oldPosition;
  }
}
