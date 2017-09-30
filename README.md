# Test du framework cucumber
Ce projet permet de tester le framework Cucumber-js.

## Installation :
### Installer Node
- Téléchargement direct : https://nodejs.org/en/download/
- Via les distributions repository (apt-get) : https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions

### Installer le projet
Cloner le dépot git puis : 
```
npm install
``` 

## Utilisation : 
Les fichiers *.features du dossier features sont les définitions des données de test.
Ils sont interprété par cucumber et relié avec les fichier *.step.js du même nom du dossier features/stepdefinitions.

### Exemple : 
 - addition.feature -> addition.setp.js

Cucumber va ensuite executer le code des fichiers step pour dérouler les test.
Il va executer les fonctions dans l'ordre suivant : 
- Given : préparation des variables nécessaire au test.
- When : Execution de la fonction à tester
- Then : Vérification de l'oracle

Cucumber va automatiquement extraire les variables des phrases écrites dans le fichier feature pour les injecter dans les fonctions Given, When et Then.


Pour executer les tests de l'exemple : 
```
npm test
``` 
