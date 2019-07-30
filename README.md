# API rest pour Epitech Nice

API Rest permettant la création de d'utilisateurs, les fonctions CRUD (Create, Read, Update et Delete) sur des notes avec rédaction de commentaires

Il faut une base de données MongoDB ainsi qu'un logiciel client tel que Studio3T ou MongoDB Compass Community

Url de la base de données : mongodb://localhost:27017/REST_API
## Utilisation

1. Installer les dépendances

```bash
npm install
```

2. Run Server

```bash
node server.js
```

API accessible sur <http://localhost:8080>

## Tutoriel
On utilise Postman ou Fiddler pour effectuer des appels à  l'API
on interpretera les résultats via le corps des réponses


Créer un user : 


Une effectue une requête POST sur <http://localhost:8080/register>
avec en header Content-type : application/json

et avec le body 

```bash
{
    "username":"login",
    "password":"mot_de_passe"
}
```

Créer une note : 


Une effectue une requête POST sur <http://localhost:8080/notes>
avec en header Content-type : application/json

et avec le body 

```bash
{
    "title":"titre_de_la_note",
    "content":"son_contenu"
}
```

Récupérer toutes les notes : 


Une effectue une requête GET sur <http://localhost:8080/notes>


Récupérer une note précise : 


Une effectue une requête GET sur <http://localhost:8080/notes/:idDeLaNote>


Modifier une note : 


Une effectue une requête PUT sur <http://localhost:8080/notes>
avec en header Content-type : application/json

et avec le body 

```bash
{
    "title":"titre_de_la_note_modifié",
    "content":"son_contenu_modifié"
}
```

Supprimer une note  : 


Une effectue une requête DELETE sur <http://localhost:8080/notes/:idDeLaNote>


Rédiger un commentaire : 


Une effectue une requête POST sur <http://localhost:8080/notes/:idDeLaNote/comment>

et avec le body 

```bash
{
    "content":"contenu_du_commentaire"
}
```
Récupérer les commentaires d'une note : 


Une effectue une requête GET sur <http://localhost:8080/notes/:idDeLaNote/comment>

## Bilan

Reste à faire : 

Par manque de temps n'ai pas réussi à implanter la gestion des sessions pour l'utilisateur, de ce fait le système de droits ne fonctionne pas

Pour cela, il aurait fallut utiliser le npm passport qui permet une gestion complète des sessions. Ce NPM fonctionnait nativement avec Mongodb.

Je n'ai pas non plus réussi à déployer l'api sur Docker à cause notamment de la connectivité à la base de données Mongo que je n'arrivais pas à paramétrer. (la commande docker-compose up --build tombe en erreur)


Enfin, il aurait été interessant de hasher les mots de passe lors de la création d'un user de manière à ce qu'ils ne soient pas stockés en clair dans la bdd.
