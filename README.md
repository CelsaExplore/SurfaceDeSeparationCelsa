https://www.lequipe.fr/explore/hr11-destins-meles
# Prix Explore. 

Ce dossier contient un code source modèle pour la création d'un Explore. 

Il nécessite un minimum de connaissance en ligne de commande et en développement.

En dernier recours, vous pouvez contacter Raphaël Dardeau (rdardeau@lequipe.fr), lead développeur à l'Équipe.

## Installation

Dans un terminal de commande, se placer dans le dossier : 

`cd prix-explore`

Puis installer les dépendances :

`npm install` (ou `sudo npm install` s'il y a des problèmes d'écriture)

Lancer le serveur avec la commande :

`npm start`

Ouvrez votre navigateur sur l'URL :
 
`http://localhost:3000/`.

Chaque mise à jour de fichier entraîne une mise à jour de cette fenêtre.

## Description de l'arborecence


### public/index.html

Fichier d'index contenant les métas


### public/datas/prix-explore/content.json

Fichier contenant les textes


### public/img/share.jpg

Images de partage


### src/components

Dossiers contenants les composants


## Description des composants

### Board

C'est le composant principal qui orchestre les autres composants. Le board est découpé en slide qui peux éventuellement être une slide double. Voir les exemples dans le code.

### Element

Composant permettant d'ajouter un élément dans une slide du board.

Attributs : 
- name : nom du fichier
- index : définit la profondeur de l'élément et donc sa vitesse de défilement par rapport au défilement par défaut (m1 pour -1, m2 pour -2, p1 pour +1, p2 pour +2)
- left : décalage de l'élément

### StaticElement

Composant permettant d'ajouter un élément qui occupe toute une slide du board.

Attributs : 
- name : nom du fichier en 1er plan
- bg : nom du fichier en arrière plan
- size : double ou simple selon le nombre de slide que l'on souhaite couvrir

### Edito

Composant permettant d'ajouter une zone de texte dans une slide du board.

Attributs : 
- content : texte (sous forme de référence définit dans content.json)
- top : décalage de l'élément
- bottom : décalage de l'élément

### Vidéo

Composant permettant d'embeder une vidéo Dailymotion dans une slide du board.

Attributs :
- id : id de la vidéo
- positionTop : positionnement de l'élément
- positionBottom : positionnement de l'élément
- ratio : ratio de la vidéo

### Skew

Composant biseauté pour l'ouverture des chapitres.

Attributs :
- name : nom du fichier en 1er plan
- bg : nom du fichier en arrière plan
- position : positionnement du biseau


### Masthead

Composant permettant de configurer l'ours en fin d'Explore.


## Finalisation du projet

- compresser vos images sur TinyPNG `https://tinypng.com/`
- s'assurer que les balises metas sont bien renseignées pour le partage
- buildez le projet pour l'environnement de production `npm run build`
- héberger votre projet sur une page Github `https://pages.github.com/`
