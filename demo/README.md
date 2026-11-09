# Quote Dev API

Une API REST minimaliste qui génère des citations pour les développeurs.

## Objectif

Construire une API simple avec Node.js et Express qui permet de :

- Récupérer une citation aléatoire
- Lister toutes les citations
- Ajouter une nouvelle citation

## Stack

- **Runtime :** Node.js
- **Framework :** Express
- **Stockage :** Fichier JSON local (`quotes.json`)

## Endpoints attendus

| Méthode | Route     | Description                     |
| ------- | --------- | ------------------------------- |
| GET     | `/quote`  | Retourne une citation aléatoire |
| GET     | `/quotes` | Liste toutes les citations      |
| POST    | `/quotes` | Ajoute une nouvelle citation    |

## Format d'une citation

```json
{
  "id": 1,
  "text": "Le meilleur code est celui que tu comprends encore 6 mois après.",
  "author": "Anonyme"
}
```

## Lancement attendu

```bash
npm install
npm start
```

L'API doit tourner sur `http://localhost:3000`.

## Critères de succès

- [ ] Le serveur démarre sans erreur
- [ ] `GET /quote` retourne une citation aléatoire en JSON
- [ ] `GET /quotes` retourne toutes les citations
- [ ] `POST /quotes` ajoute une citation et la persiste dans le fichier JSON
- [ ] Le fichier `quotes.json` contient au moins 5 citations sur le code
