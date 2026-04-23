# 🏅 Olympic Dashboard (Angular)

## 📌 Description

Application Angular permettant de visualiser les médailles olympiques par pays.

Fonctionnalités :
- Dashboard avec graphique des médailles
- Page détail par pays avec évolution
- Navigation dynamique
- Gestion des erreurs (page 404)

---

## 🚀 Installation

### Prérequis

- Node.js (>= 18)
- Angular CLI

```bash
npm install -g @angular/cli
Lancer le projet
npm install
ng serve

👉 Accéder à :

http://localhost:4200
🏗️ Architecture
src/app/
  ├── components/     # composants réutilisables
  ├── pages/          # pages (home, country, not-found)
  ├── services/       # accès aux données
  ├── models/         # interfaces TypeScript
📊 Fonctionnalités
🏠 Dashboard
Pie chart des médailles
Navigation au clic
🌍 Page détail
Statistiques du pays
Graphique d’évolution
🚨 Gestion des erreurs
URL invalide → redirection 404
données manquantes → redirection
📱 Responsive

L’application est compatible :

Desktop 💻
Mobile 📱
📸 Captures d’écran
<img width="1166" height="818" alt="deskotop_home" src="https://github.com/user-attachments/assets/00e1b247-ec40-42f9-b599-8605c597a3fb" />
<img width="1197" height="973" alt="detail_deskotop" src="https://github.com/user-attachments/assets/4aae7a89-24b4-4b6f-b998-00db867b9c88" />

<img width="518" height="941" alt="mobile" src="https://github.com/user-attachments/assets/24c97ab8-5bb7-4d9d-9362-2fab4de1adbd" />

<img width="491" height="918" alt="image" src="https://github.com/user-attachments/assets/58e76e7b-37a8-4fac-949b-7fefa065cf68" />


🧠 Choix techniques
Angular (architecture modulaire)
TypeScript (typage strict)
Chart.js (visualisation)
RxJS (gestion async)
🚀 Améliorations possibles
ajout d’un backend API
animations avancées
design UI amélioré
caching des données
