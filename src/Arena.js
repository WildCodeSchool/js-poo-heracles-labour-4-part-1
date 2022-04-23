class Arena {
  constructor(hero, monsters, size = 10) {
    this.hero = hero
    this.monsters = monsters
    this.size = size
    this.message = ""
  }

  getDistance(fighter1, fighter2) {
    return Math.sqrt(Math.pow(fighter2.x - fighter1.x, 2) + Math.pow(fighter2.y - fighter1.y, 2)).toFixed(2)
  }

  isTouchable(attacker, defender) {
    return this.getDistance(attacker, defender) <= attacker.getRange()
  }


  // Gestion du déplacement du héros
  move(direction) {
    let oldPosition = {
      x: this.hero.x,
      y: this.hero.y
    };

    let isValidMove = true;

    this.message = "";

    const directions = {
      N: {x:-1, y:0},
      E: {x:0 , y:1},
      S: {x:1 , y:0},
      W: {x:0 , y:-1}
    }

    const expectedTile = {
      x: this.hero.x + directions[direction].x,
      y: this.hero.y + directions[direction].y
    }

    if (!this.isInsideMap(expectedTile)) {
      this.message = "Déplacement hors de la carte impossible"
      isValidMove = false
    }

    if (this.isOccupied(expectedTile)) {
      this.message = "Déplacement sur une case déjà occupée impossible"
      isValidMove = false
    }

    if (isValidMove) {
      this.hero.x = expectedTile.x
      this.hero.y = expectedTile.y
    }

    document.getElementById("error").innerText = this.message

    return oldPosition;
  }

  // Permet de déterminer si une case est dans l'arêne
  isInsideMap(expectedTile) {
    return expectedTile.x >= 0 &&
      expectedTile.x < this.size &&
      expectedTile.y >= 0 &&
      expectedTile.y < this.size
  }


  // Permet de déterminer si une case est déjà occupée par un monstre
  isOccupied(expectedTile) {
    let occupied = false

    this.monsters.forEach(monster => {
      occupied = occupied ||
        monster.x === expectedTile.x &&
        monster.y === expectedTile.y
    });

    return occupied
  }
}
