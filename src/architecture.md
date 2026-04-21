# 🏗️ Architecture du projet Angular

## 📌 Introduction

Ce projet Angular a été restructuré afin de respecter les bonnes pratiques de développement front-end :

- séparation des responsabilités
- code maintenable et scalable
- préparation à une future connexion avec une API back-end

---

## 📁 1. Arborescence du projet


src/app/
├── pages/
│ ├── home/
│ └── country/
│
├── components/
│ └── chart/
│
├── services/
│ └── olympic.service.ts
│
├── models/
│ ├── olympic.model.ts
│ └── country.model.ts


---

## 🧩 2. Description des composants

### 🏠 HomeComponent (`pages/home`)

Rôle :
- Page principale de l’application
- Récupère les données via le service
- Passe les données au composant graphique

Responsabilité :
- Orchestration des données
- Aucune logique métier lourde

---

### 🌍 CountryComponent (`pages/country`)

Rôle :
- Affiche les détails d’un pays
- Filtre les données selon le pays sélectionné

Responsabilité :
- Interaction avec la route (`ActivatedRoute`)
- Transformation simple des données

---

### 📊 ChartComponent (`components/chart`)

Rôle :
- Composant réutilisable pour afficher les graphiques
- Utilise Chart.js pour le rendu

Responsabilité :
- Affichage uniquement
- Reçoit les données via `@Input()`
- Ne contient pas de logique métier

---

## 🔌 3. Service Angular

### 📄 OlympicService (`services/olympic.service.ts`)

Rôle :
- Centraliser l’accès aux données
- Effectuer les appels HTTP

Fonction principale :

```ts
getOlympics(): Observable<Olympic[]>

Responsabilités :

Récupérer les données depuis assets/mock/olympic.json
Fournir les données aux composants sous forme d’Observable
🧾 4. Modèles (Models)
📄 Olympic

Décrit la structure des données d’un pays :

id
country
participations
📄 Country

Utilisé pour manipuler ou afficher les données de manière simplifiée.

🔄 5. Flux de données
Le HomeComponent appelle OlympicService
Le service récupère les données (JSON / API)
Les données sont envoyées au ChartComponent
Le ChartComponent affiche le graphique
🧠 6. Choix d’architecture
✅ Separation of Concerns
Composants = affichage
Services = logique + données

➡️ Avantage :

Code plus lisible
Maintenance facilitée
✅ Utilisation des Observables (RxJS)
Communication asynchrone via Observable
Utilisation du async pipe

➡️ Avantage :

Gestion propre de l’asynchrone
Moins de bugs (unsubscribe automatique)
✅ Service Singleton
providedIn: 'root'

➡️ Une seule instance partagée dans toute l’application

🔗 7. Préparation à un futur back-end

Actuellement :

assets/mock/olympic.json

Demain (API) :

https://api.mon-backend.com/olympics

➡️ Aucun changement côté composants

👉 Le service devient le point central de communication avec l’API.

🚀 8. Avantages de cette architecture

✔️ Code structuré et clair
✔️ Réutilisation des composants
✔️ Testabilité améliorée
✔️ Scalabilité du projet
✔️ Intégration backend facilitée

📌 Conclusion

Cette architecture respecte les bonnes pratiques Angular :

séparation component/service
typage avec models
gestion propre des données

Elle permet à un nouveau développeur de comprendre rapidement le projet et de le faire évoluer facilement.