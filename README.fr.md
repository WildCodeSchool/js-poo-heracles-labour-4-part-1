# Travaux d'Héraclès #4 : 🐴 les juments de Diomède

Prérequis : cloner ce *repository*.

Le travail continue pour Héraclès. Il doit maintenant venir à bout des juments carnivores du roi Diomède.

Pour ce nouvel atelier, tu reprends là encore où tu t'étais arrêté à l'étape précédente. Tu as un héros qui possède des coordonnées et une gestion de la portée pour tes attaques.

## Monsters, Hero and Fighters

Dans l'atelier précédent, tu as créé les classes `Hero` et `Monster` qui étendent toutes deux de `Fighter`.


## Un peu de déplacement

Les `Fighter` peuvent déjà se déplacer sur la carte en manipulant les propriétés x et y. Mais cela n'est pas très pratique à manipuler et ne propose pas un déplacement réaliste puisqu'il est possible de "téléporter" le combattant n'importe où.

Tu vas donc créer une fonction `move()` qui permettra de déplacer un `Hero` d'une case à la fois, dans une direction donnée (nord, sud, est ou ouest).

Créé cette méthode `move(direction)` dans la classe `Arena`.

Le paramètre `direction` prendra obligatoirement une des quatre valeurs `"N", "S", "W" ou "E"`. En fonction de la "lettre" récupérée, les coordonnées du héros devront être modifiées en conséquence.

> Par exemple, un mouvement vers le sud incrémente `y`, un mouvement vers l'ouest décrémente `x`, etc.


Attention, il faudra faire en sorte qu'il soit impossible de sortir de la carte, mais également impossible de se déplacer sur une case déjà occupée par un `Monster`. Pour t'aider à construire cette méthode, procède de la sorte :

- En premier, récupère les coordonnées actuelles du `Hero` de l'arène

- En fonction de la direction, calcule les coordonnées où le personnage *souhaite* se déplacer (mais ne le déplace pas encore).

- Vérifie que ces coordonnées de destination correspondent à une case accessible, c'est à dire qu'elle est dans la carte et qu'elle est libre avant de pouvoir le déplacer.

	- Pour cela il faudra créer 2 fonctions : 1 pour vérifier que la case où le `Hero` veut se déplacer est bien dans la carte
	- Une autre pour vérifier si la case où le `Hero` veut se déplacer n'est pas déjà occupée

- Si le déplacement n'est pas autorisé, il faut afficher un message approprié pour une case occupée ou une sortie de carte. Pour cela ajoute une propriété "message" dans *Arena.js*. Le message d'erreur (de déplacement ou d'occupation) devra s'afficher dans un élément ayant l'id 'error' dans la page HTML. Cet élément existe déjà. Il suffit de le cibler avec un getElementById('error'). Le message s'affichera dans un bloc d'erreur en haut à droite de la page.

- Si le déplacement est valide, modifie les coordonnées du `Hero` pour qu'il se déplace à sa destination.

- La fonction move() doit __nécessairement__ retourner les anciennes coordonnées du `Hero`, c'est à dire les coordonnées du `Hero` avant qu'il ne se déplace


> Pour "tester" le déplacement, tu peux simplement utiliser les touches de ton clavier. Le JS pour détecter les touches est déjà en place.


Ton personnage se déplace, c'est bien ! Normalement, la notion de portée (en fonction de l'arme que le héros porte) est toujours fonctionnelle et les monstres doivent se griser ou non en fonction de la distance. Tu peux t'amuser à changer l'arme d'Héraclès si tu veux.
