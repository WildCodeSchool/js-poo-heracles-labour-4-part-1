# Works of Heracles #4: 🐴 the mares of Diomedes

Prerequisite: clone this *repository*.

The work continues for Heracles. He must now overcome the carnivorous mares of King Diomedes.

For this new episode, you pick up where you left off in the previous step. You have a hero with coordinates and range management for your attacks.

## Monsters, Heroes and Fighters
In the previous workshop you created the `Hero` and `Monster` classes, both of them extends from `Fighter`.

## A little bit of movement
A `Fighter` can already move around the map by manipulating the x and y properties. But this is not very convenient to manipulate and does not provide realistic movement since it is possible to "teleport" the fighter anywhere.

So you are going to create a `move()` function that will allow you to move a `Hero` one square at a time, in a given direction (north, south, east or west).

Create this `move(direction)` method in the `Arena` class.

The `direction` parameter will necessarily take one of the four values "N", "S", "E" or "W". Depending on the "letter" retrieved, the hero's coordinates will have to be modified accordingly.

> For example, a move to the south will increase y, a move to the west will decrease x, etc.

Be careful, you must make it impossible to move off the map, but also impossible to move to a square already occupied by a `Monster`. To help you build this method, proceed as follows:

- First, get the current coordinates of the Hero in the arena

- Based on the direction, calculate the coordinates where the character *wants* to move to (but does not yet move).

- Check that these coordinates of destination correspond to an accessible square, i.e. that it is in the map and that it is free before being able to move it.

  - To do this, you need to create 2 functions: 1 to check that the square where the `Hero` wants to move is in the map
  - Another to check if the square where the `Hero` wants to move is not already occupied

- If the move is not authorized, an appropriate message must be displayed for an occupied square or a map exit. To do this you add a "message" property to *Arena.js*. The error message (for moving or occupying) should be displayed in an element with the id 'error' in the HTML page. This element already exists. You just have to target it with a getElementById('error'). The message will be displayed in an error block at the top right of the page.

- If the move is valid, change the coordinates of the `Hero` so that it moves to its destination.

- The `move()` function **must** return the old coordinates of the `Hero`, i.e. the coordinates of the `Hero` before it moved

> To "test" the move, you can simply use the keys on your keyboard. The JS to detect the keys is already in place.

Your character is moving, that's good! Normally, the concept of range (depending on the weapon the hero is carrying) is still functional and the monsters should grey out or not depending on the distance. You can have fun changing Heracles' weapon if you want.