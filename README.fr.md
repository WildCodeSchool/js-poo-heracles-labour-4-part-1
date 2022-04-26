# Travaux d'Héraclès #4 : 🐴 les juments de Diomède

Prérequis : cloner ce *repository*.

Le travail continue pour Héraclès. Il doit maintenant venir à bout des juments carnivores du roi Diomède.

Pour ce nouvel atelier, tu reprends là encore où tu t'étais arrêté à l'étape précédente. Tu as un héros qui possède des coordonnées et une gestion de la portée pour tes attaques.

## Monsters, Hero and Fighters

Dans l'atelier précédent, tu as créé les classes `Hero` et `Monster` qui étendent toutes deux de `Fighter`.


## Un peu de déplacement

### Ce que l'on va faire

Les `Fighter` peuvent déjà se déplacer sur la carte en manipulant les propriétés x et y. Mais cela n'est pas très pratique à manipuler et ne propose pas un déplacement réaliste puisqu'il est possible de "téléporter" le combattant n'importe où.

Tu vas donc créer une fonction `move()` qui permettra de déplacer un `Hero` d'une case à la fois, dans une direction donnée (nord, sud, est ou ouest).

Le paramètre `direction` prendra une des quatre valeurs `"N", "S", "W" ou "E"`. En fonction de la "lettre" récupérée, les coordonnées du héros devront être modifiées en conséquence.

> Pour tester le déplacement, tu utiliseras les touches de ton clavier. Le JS pour détecter les touches est déjà en place. Le paramètre direction est automatiquement passé à la fonction move()

Il faudra également faire en sorte qu'il soit impossible de sortir de la carte, mais également impossible de se déplacer sur une case déjà occupée par un `Monster`.



### On passe à l'action !
Pour construire tout ça, procède de la sorte :

- Créé cette méthode `move(direction)` dans la classe `Arena`.
- En premier, récupère les coordonnées actuelles du `Hero` de l'arène sous la forme d'un objet

```
{
	x: this.hero.x,
	y: this.hero.y
}
```

- Ensuite, en fonction de la direction ("N", "S", "W" ou "E"), calcule les coordonnées où le personnage *souhaite* se déplacer (**mais ne le déplace pas encore**).

> On considera qu'un mouvement vers le sud incrémente `y`, un mouvement vers l'ouest décrémente `x`, etc.

- Vérifie que ces coordonnées de destination correspondent à une case accessible, c'est à dire qu'elle est dans la carte et qu'elle est libre avant de pouvoir le déplacer. Pour cela il faudra créer 2 fonctions :

	- Une pour vérifier que la case où le `Hero` veut se déplacer est bien dans la carte
	- Une autre pour vérifier si la case où le `Hero` veut se déplacer n'est pas déjà occupée

- Si le déplacement n'est pas autorisé, il faut afficher un message différent pour une case occupée ou une sortie de carte. Pour cela ajoute une propriété "message" dans *Arena.js*. Le message d'erreur (de déplacement ou d'occupation) devra s'afficher dans un élément ayant l'id 'error' dans la page HTML. Cet élément existe déjà. Il suffit de le cibler avec un `getElementById('error')` et de modifier son `innerText`. Le message s'affichera dans un bloc d'erreur en haut à droite de la page.

- Si le déplacement est valide, modifie les coordonnées du `Hero` pour qu'il se déplace à sa destination.

- La fonction `move()` doit __nécessairement__ retourner les anciennes coordonnées du `Hero`, c'est à dire les coordonnées du `Hero` avant qu'il ne se déplace, récupérées au tout début de la fonction.

Teste le déplacement avec les touches de ton clavier. Ton personnage se déplace, bravo ! Normalement, la notion de portée (en fonction de l'arme que le héros porte) est toujours fonctionnelle et les monstres doivent se griser ou non en fonction de la distance. Tu peux t'amuser à changer l'arme d'Héraclès si tu veux.
