# BlitzzQuiz

BlitzzQuiz est une application de quiz gamifiés qui rend l’apprentissage plus interactif pour les élèves tout en simplifiant le suivi des résultats pour les enseignants. Les enseignants créent des questionnaires, les étudiants y répondent sur le web ou mobile et obtiennent un feedback immédiat ainsi qu’un classement motivant.

## 🎯 Objectif du projet

Concevoir et développer une plateforme de quiz en ligne conviviale qui prend en charge la création de quiz, la réponse aux questions, le calcul automatique des scores et l’affichage de statistiques de résultats pour les élèves et les enseignants.

## 👥 Utilisateurs cibles

- **Étudiants (9–30 ans)** : répondent aux quiz depuis mobile ou ordinateur, consultent leurs scores et historique.
- **Enseignants** : créent, modifient et publient des quiz, gèrent des groupes, consultent les résultats.
- **Administrateurs** : gèrent les comptes, mots de passe et ont une vue globale sur la plateforme.

## ✨ Fonctionnalités principales (MVP)

- Inscription / connexion (étudiants, enseignants, admin) avec validation de sécurité (force du mot de passe).
- Gestion des rôles et permissions (Étudiant, Enseignant, Admin, Super User).
- Création, modification et suppression de quiz (QCM, questions avec 4 choix et une bonne réponse).
- Gestion des groupes (création de groupes, codes d’invitation, groupes publics/privés).
- Accès aux quiz (liste de quiz, accès par code de quiz, quiz publics/privés).
- Calcul automatique des scores et sauvegarde des résultats en base de données.
- Page de résultats avec score, nombre de bonnes réponses et classement (leaderboard).
- Historique des tentatives pour les étudiants.

Fonctionnalités hors MVP (futures évolutions) : multijoueur temps réel (WebSocket), système de succès/badges, abonnement payant, anti‑cheat avancé.

## 🧱 Architecture & Stack technique

BlitzzQuiz est un projet multiplateforme organisé en trois environnements : frontend web, backend API, et application mobile.

- **Frontend Web**
  - Framework : Vue 3 + Vite
  - State management : Pinia
  - Routing : Vue Router
  - UI : Vuetify
  - Autres : Axios (appels API), Lottie-Vue (animations gamifiées)

- **Backend**
  - Langage / Framework : PHP + Laravel (API REST)
  - Authentification : JWT
  - Validation : Laravel Form Requests
  - ORM : Eloquent ORM

- **Mobile**
  - Framework : React Native (code partagé iOS / Android en JS/TS)

- **Base de données**
  - SGBD : PostgreSQL (données relationnelles : Users, Quizzes, Questions, Results, Groups, Assignments)
  - Propriétés : intégrité ACID, bonnes performances pour statistiques et classements (JOIN, agrégations, index).

- **Déploiement (prévu)**
  - Frontend : Vercel ou hébergement Docker + Nginx
  - Backend : Docker sur serveur Linux
  - Base de données : PostgreSQL sous Docker
  - Médias : service type Cloudinary ou S3 (à confirmer)

## 📂 Structure du dépôt

Le dépôt est organisé par environnement, chacun avec son propre `README.md` détaillé.

```txt
/.
├── README.md                 
├── backend/
│   └── README.md
├── frontend/
│   └── README.md
└── mobile/
    └── README.md
