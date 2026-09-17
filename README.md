# Éloquence

Coach personnel d'art oratoire : un parcours en 8 semaines et des exercices quotidiens pour mieux
articuler et s'exprimer plus clairement en français (respiration, échauffement vocal, virelangues,
lecture chronométrée, intonation, structuration du discours, improvisation, auto-enregistrement).

Application 100% locale : aucune donnée n'est envoyée à un serveur. La progression est stockée dans
le `localStorage` du navigateur.

## Lancer l'app

Dans VS Code, ouvre un terminal intégré puis :

```bash
npm install
npm run dev
```

L'app s'ouvre sur `http://localhost:5176`.

Depuis `dgfip-concours-c`, tu peux aussi la lancer via la configuration `eloquence-coach` de
`.claude/launch.json` (même mécanisme que pour `classe-virtuelle` et `media-downloader`).

## Accès depuis le mobile

Le serveur de développement écoute sur le réseau local (`server.host: true` dans `vite.config.js`).
Une fois `npm run dev` lancé, le terminal affiche une adresse du type `http://192.168.x.x:5176` —
ouvre cette adresse depuis le navigateur du téléphone, à condition que le téléphone soit connecté au
**même réseau Wi-Fi** que le PC.

**Limite à connaître** : la page *Enregistrement* utilise le micro du navigateur (`getUserMedia`),
que les navigateurs n'autorisent qu'en contexte sécurisé (`localhost` ou HTTPS). Donc :
- Sur le PC (`localhost:5176`) : l'enregistrement fonctionne normalement.
- Sur le mobile via l'IP du réseau local (`http://192.168.x.x:5176`) : le reste de l'app fonctionne
  très bien (parcours, virelangues, lectures chronométrées, minuteurs, progression), mais le
  navigateur bloquera l'accès au micro tant que l'app n'est pas servie en HTTPS.
- Une fois déployée sur GitHub Pages (voir plus bas), l'app est servie en HTTPS et le micro
  fonctionne aussi depuis le mobile, sur l'URL publique.

## Déploiement GitHub Pages

Un workflow (`.github/workflows/deploy.yml`) build et déploie automatiquement à chaque push sur
`main`. Étape unique à faire une fois, manuellement, dans les paramètres du repo GitHub :
**Settings → Pages → Build and deployment → Source : "GitHub Actions"**.

Le repo est privé — publier un site Pages depuis un repo privé nécessite un compte GitHub payant
(Pro ou plus) ; sur un compte gratuit, l'option Pages n'apparaîtra pas tant que le repo reste privé.
Le site publié une fois Pages activé (`https://elhabibibaline.github.io/elo-coach/`) est en général
accessible publiquement à qui a le lien, même si le code source du repo reste privé — sans gravité
ici puisque l'app ne contient aucune donnée personnelle (la progression reste dans le `localStorage`
de chaque appareil, jamais sur le serveur).

## Stack

Vite + React 19 + react-router-dom, CSS simple (pas de framework UI), JavaScript, `oxlint`. Même
convention que les apps sœurs `dgfip-concours-c`, `classe-virtuelle` et `media-downloader`.
