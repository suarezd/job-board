# Job Board 🎯

Une plateforme moderne de tableau d'offres d'emploi tech construite avec TypeScript, Vite et Docker. L'application permet de rechercher et filtrer des offres d'emploi par titre, compétences, localisation et date de publication.

## ✨ Fonctionnalités

- 🔍 **Recherche en temps réel** par titre d'emploi ou compétences
- 📍 **Filtrage par localisation** (Paris, Bordeaux, Marseille)
- 📅 **Filtrage par date** (4 semaines, 1 mois, 3 mois, toutes)
- 💼 **12 offres d'emploi** dans le secteur tech
- 🎨 **Interface responsive** et moderne
- ⚡ **Performance optimale** avec Vite
- 🐳 **Conteneurisé** avec Docker

## 🛠️ Technologies utilisées

- **TypeScript** (5.6.2) - Langage principal
- **Vite** (6.0.5) - Build tool et dev server
- **date-fns** (4.1.0) - Manipulation des dates
- **Docker** - Conteneurisation
- **Node.js** (22-alpine) - Runtime

## 📁 Structure du projet

```
job-board/
├── src/
│   ├── main.ts          # Point d'entrée TypeScript
│   └── style.css        # Styles CSS
├── data/
│   └── data-job-offer.ts # Données des offres d'emploi
├── index.html           # Page HTML principale
├── package.json         # Dépendances npm
├── Dockerfile           # Configuration Docker
├── docker-compose.yml   # Orchestration Docker
├── Makefile             # Commandes d'automatisation
└── .gitignore          # Fichiers à ignorer
```

## 🚀 Installation et Démarrage

### Prérequis

- **Node.js** 22+ (ou Docker)
- **npm** ou **yarn**
- **Docker** et **Docker Compose** (optionnel)

### Option 1 : Installation locale

1. **Cloner le repository** :
```bash
git clone https://github.com/suarezd/job-board.git
cd job-board
```

2. **Installer les dépendances** :
```bash
npm install
```

3. **Lancer en mode développement** :
```bash
npm run dev
```

4. **Accéder à l'application** :
```
http://localhost:5173
```

### Option 2 : Avec Docker (recommandé)

1. **Construire et lancer avec Docker Compose** :
```bash
docker compose up --build
```

Ou utiliser le Makefile :
```bash
make up
```

2. **Accéder à l'application** :
```
http://localhost:5173
```

## 📝 Scripts disponibles

### Scripts npm

```bash
npm run dev      # Lancer le serveur de développement Vite
npm run build    # Construire pour la production
npm run preview  # Prévisualiser le build de production
```

### Commandes Makefile

```bash
make up          # Démarre les conteneurs Docker (avec build)
make down        # Arrête les conteneurs Docker
make build       # Construit les images Docker
make logs        # Affiche les logs en temps réel
make clean       # Nettoie les conteneurs, volumes et images
make start       # Alias pour 'make up'
```

## 🎨 Fonctionnement de l'application

L'application charge une liste de 12 offres d'emploi tech et permet de :

1. **Rechercher** par mots-clés dans les titres ou compétences
2. **Filtrer par ville** en cochant Paris, Bordeaux ou Marseille
3. **Filtrer par date** de publication (4 semaines à toutes les dates)
4. **Visualiser** le nombre d'offres correspondant aux critères

### Exemple de données

Chaque offre contient :
- Un titre (ex: "Product Owner Senior", "Tech Lead Fullstack")
- Des compétences techniques (ex: React, TypeScript, Kubernetes)
- Une localisation (Paris, Bordeaux ou Marseille)
- Une date de publication

## 🐳 Configuration Docker

### Dockerfile
- Image de base : `node:22-alpine`
- Port exposé : `5173`
- Hot-reload activé avec volumes montés

### docker-compose.yml
- Service : `job-board`
- Port mappé : `5173:5173`
- Volumes pour le hot-reload
- Variable d'environnement : `NODE_ENV=development`

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. **Forker** le projet
2. **Créer une branche** (`git checkout -b feature/NouvelleFonctionnalite`)
3. **Commiter** vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. **Pousser** vers la branche (`git push origin feature/NouvelleFonctionnalite`)
5. **Ouvrir une Pull Request**

### Idées d'amélioration

- 🔐 Ajouter un système d'authentification
- 💾 Connecter à une vraie base de données
- 🌐 Ajouter une API REST
- 📱 Améliorer le responsive mobile
- 🔔 Système de notifications pour les nouvelles offres
- ⭐ Système de favoris

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👤 Auteur

**suarezd**

- GitHub: [@suarezd](https://github.com/suarezd)
- Repository: [job-board](https://github.com/suarezd/job-board)

## 🐛 Signaler un bug

Vous avez trouvé un bug ? Merci d'ouvrir une [issue](https://github.com/suarezd/job-board/issues) avec :

- 📝 Une description claire du problème
- 🔄 Les étapes pour reproduire le bug
- ✅ Le comportement attendu
- 📸 Des captures d'écran si pertinent
- 💻 Votre environnement (OS, navigateur, version Node.js)

## ⭐ Support

Si ce projet vous a été utile, n'hésitez pas à lui donner une étoile sur GitHub !

---

Développé avec ❤️ par [@suarezd](https://github.com/suarezd)
