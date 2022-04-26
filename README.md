# Works of Heracles #4: 🐴 the mares of Diomedes

Prerequisite: clone this *repository*.

The work continues for Heracles. He must now overcome the carnivorous mares of King Diomedes.

For this new episode, you pick up where you left off in the previous step. You have a hero with coordinates and range management for your attacks.

## Monsters, Heroes and Fighters
In the previous workshop you created the `Hero` and `Monster` classes, both of them extends from `Fighter`.

## A little bit of movement

### What we are going to do
The `Fighter` can already move around the map by manipulating the x and y properties. But this is not very convenient to manipulate and does not offer a realistic movement since it's possible to "teleport" the fighter anywhere.

So you will create a `move()` function that will move a `Hero` one square at a time, in a given direction (north, south, east or west).

The `direction` parameter will take one of four values `"N", "S", "W" or "E"`. Depending on the "letter" retrieved, the hero's coordinates will have to be modified accordingly.

> To test the move, you will use the keys of your keyboard. The JS to detect the keys is already in place. The direction parameter is automatically passed to the move() function

You will also have to make it impossible to leave the map, but also impossible to move on a square already occupied by a `Monster`.


### Let's do it!
To build all this, proceed as follows:

- Create this `move(direction)` method in the `Arena` class.
- First, get the current coordinates of the `Hero` of the arena in the form of a

```
{
	x: this.hero.x,
	y: this.hero.y
}
```
- Then, depending on the direction ("N", "S", "W" or "E"), calculate the coordinates where the character *wants* to move (**but doesn't yet**).

> We'll assume that a move to the south increments `y`, a move to the west decrements `x`, etc.

- Check that these destination coordinates correspond to an accessible cell, i.e. is in the map and that is free before you can move it. To do this, 2 functions must be created:

	- One to check that the square where the `Hero` wants to move is in the map
	- Another one to check if the square where the `Hero` wants to move is not already occupied

- If the move is not allowed, a different message must be displayed for an occupied square or a map exit. To do this add a "message" property to *Arena.js*. The error message (of displacement or occupation) will have to be displayed in an element having the id 'error' in the HTML page. This element already exists. You just have to target it with a `getElementById('error')` and modify its `innerText`. The message will be displayed in an error block at the top right of the page.

- If the move is valid, change the coordinates of the `Hero` so that it moves to its destination.

- The `move()` function must __necessarily__ return the old coordinates of the `Hero`, i.e. the coordinates of the `Hero` before it moved, retrieved at the very beginning of the function.

Test the movement with the keys of your keyboard. Your character is moving, well done! Normally, the notion of range (depending on the weapon the hero is carrying) is always functional and the monsters should grey out or not depending on the distance. You can have fun changing the weapon of Heracles if you want.