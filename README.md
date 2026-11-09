# Agentic Coding : quand ton terminal devient ton co-développeur

Supports du talk **« Agentic Coding : quand ton terminal devient ton co-développeur »**, présenté au Galsen DEV Live Koor 2026.

Ce dépôt contient la démo et les slides :

| Dossier | Contenu |
|---------|---------|
| [`demo/`](./demo) | **Quote Dev API**, une petite API REST (Node.js + Express) de citations pour développeurs, construite en live avec un agent de code. Son README sert de cahier des charges. |
| [`slide/`](./slide) | Les slides de la présentation, faites avec [Slidev](https://sli.dev). |

## Lancer la démo

Prérequis : Node.js 18 ou plus récent.

```bash
git clone https://github.com/daoodaba975/agentic.coding.meetup.git
cd agentic.coding.meetup/demo
npm install
npm start
```

L'API tourne sur http://localhost:3000 :

| Méthode | Route     | Description                     |
| ------- | --------- | ------------------------------- |
| GET     | `/quote`  | Retourne une citation aléatoire |
| GET     | `/quotes` | Liste toutes les citations      |
| POST    | `/quotes` | Ajoute une nouvelle citation    |

Détails dans [demo/README.md](./demo/README.md).

## À toi de jouer

Le fichier [demo/README.md](./demo/README.md) est le cahier des charges donné à l'agent pendant la démo.
Essaie de reconstruire le projet toi-même avec un agent de code (OpenCode, Claude Code...) :

1. Crée un dossier vide et copie-y seulement `README.md`.
2. Demande à l'agent de construire l'API à partir de ce README.
3. Relis le code produit, puis vérifie chaque critère de succès.

## Voir les slides en local

```bash
cd slide
pnpm install
pnpm dev
```
