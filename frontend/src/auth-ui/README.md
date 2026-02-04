# BlitzzQuiz - Auth UI Components

Ce projet contient tous les composants et pages d'authentification pour l'application BlitzzQuiz, créés à partir des designs Figma.

## Structure du Projet

```
auth-ui/
├── components/          # Composants réutilisables
│   ├── BlackBlitzzQuiz.vue
│   ├── BlackBlitzzQuiz.css
│   ├── InputCourriel.vue
│   ├── InputCourriel.css
│   ├── InputMotDePasse.vue
│   ├── InputMotDePasse.css
│   ├── InputNomUtilisateur.vue
│   ├── InputNomUtilisateur.css
│   ├── InputConfirmerMotDePasse.vue
│   ├── InputConfirmerMotDePasse.css
│   ├── DropdownNiveauEtude.vue
│   ├── DropdownNiveauEtude.css
│   ├── BoutonSuivant.vue
│   ├── BoutonSuivant.css
│   ├── BoutonConfirmer.vue
│   ├── BoutonConfirmer.css
│   ├── BoutonConnexion.vue
│   ├── BoutonConnexion.css
│   ├── BoutonCreerUnCompte.vue
│   ├── BoutonCreerUnCompte.css
│   ├── BoutonGoogle.vue
│   ├── BoutonGoogle.css
│   ├── BoutonDeconnexion.vue
│   ├── BoutonDeconnexion.css
│   ├── BoutonRetour.vue
│   ├── BoutonRetour.css
│   ├── BoutonMdpOublie.vue
│   ├── BoutonMdpOublie.css
│   ├── Diviseur.vue
│   └── Diviseur.css
│
└── pages/              # Pages complètes
    ├── DesktopInscriptionPage2.vue
    ├── DesktopInscriptionPage2.css
    ├── DesktopInscriptionPage1.vue
    ├── DesktopInscriptionPage1.css
    ├── DesktopCourriel.vue
    ├── DesktopCourriel.css
    ├── DesktopConnexion.vue
    ├── DesktopConnexion.css
    ├── DesktopValidation.vue
    ├── DesktopValidation.css
    ├── DesktopResetMotDePasse.vue
    ├── DesktopResetMotDePasse.css
    ├── DesktopSucces.vue
    └── DesktopSucces.css
```

## Composants

### Logo
- **BlackBlitzzQuiz**: Logo principal de l'application BlitzzQuiz

### Champs de saisie
- **InputCourriel**: Champ de saisie pour l'adresse courriel
- **InputMotDePasse**: Champ de saisie pour le mot de passe (avec icône show/hide)
- **InputNomUtilisateur**: Champ de saisie pour le nom d'utilisateur
- **InputConfirmerMotDePasse**: Champ de confirmation de mot de passe
- **DropdownNiveauEtude**: Menu déroulant pour la sélection du niveau d'études

### Boutons
- **BoutonSuivant**: Bouton "Suivant" (style sombre)
- **BoutonConfirmer**: Bouton "Confirmer" (style sombre)
- **BoutonConnexion**: Bouton "Connexion" (style primaire bleu)
- **BoutonCreerUnCompte**: Bouton "Créer un compte" (style sombre)
- **BoutonGoogle**: Bouton "Inscription avec Google" (avec icône Google)
- **BoutonDeconnexion**: Bouton "Déconnexion" (style primaire bleu)
- **BoutonRetour**: Lien "Retour" (style texte)
- **BoutonMdpOublie**: Lien "Mot de passe oublié ?" (style texte)

### Autres
- **Diviseur**: Diviseur avec texte "ou" et lignes de séparation

## Pages

### 1. DesktopInscriptionPage2
Page de création de compte avec tous les champs:
- Courriel (personnel ou scolaire)
- Nom d'utilisateur
- Mot de passe
- Confirmer mot de passe

### 2. DesktopInscriptionPage1
Page de sélection du niveau d'étude:
- Menu déroulant avec options (Universitaire, Collégial, Secondaire, Primaire)

### 3. DesktopCourriel
Page de saisie du courriel pour la réinitialisation du mot de passe

### 4. DesktopConnexion
Page de connexion complète avec:
- Nom d'utilisateur
- Mot de passe
- Lien "Mot de passe oublié"
- Bouton de connexion
- Options de création de compte et inscription avec Google

### 5. DesktopValidation
Page de validation par courriel avec icône d'enveloppe

### 6. DesktopResetMotDePasse
Page de réinitialisation du mot de passe avec:
- Nouveau mot de passe
- Confirmer le nouveau mot de passe

### 7. DesktopSucces
Page de succès avec message "SUCCÈS" et bouton de déconnexion

## Palette de Couleurs

- **Primaire**: #50CAFF (bleu clair)
- **Fond obscure**: #24201D (noir foncé)
- **Texte secondaire**: #9F9F9F (gris)
- **Fond textes**: #F6FEFF (blanc cassé)
- **Bouton**: #0039F4 (bleu)
- **Tertiaire**: #F0991F (orange)

## Typographie

- **Verdana Bold**: Logo et titres principaux
- **Inter Semi-Bold**: Titres de pages (42px)
- **Inter Medium**: Boutons (16px)
- **Inter Regular**: Champs de saisie et liens (12px, 14px)

## Notes Techniques

- Format: **Responsive** - Desktop, Tablette, Mobile
- Framework: Vue.js 3
- Styles: CSS séparé pour chaque composant/page
- Images: Servies depuis localhost:3845
- Vidéo de fond: Animation avec autoplay et loop
- Animations: Non implémentées pour l'instant
- **Responsive Design**: 
  - Breakpoints: Desktop (>1024px), Tablette (768-1024px), Mobile (<768px)
  - Unités flexibles: `clamp()`, `vw`, `%`, `max-width`
  - Layout adaptatif: Panneau fixe → Plein écran
  - Testable dans l'inspecteur navigateur (F12 → Device Toolbar)

## Utilisation

Chaque page importe les composants nécessaires depuis le dossier `components/`. Les styles sont séparés dans des fichiers `.css` pour une meilleure maintenabilité.

Exemple d'importation:
```javascript
import BlackBlitzzQuiz from '../components/BlackBlitzzQuiz.vue'
import InputCourriel from '../components/InputCourriel.vue'
```
