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
  navigateur bloquera l'accès au micro. Pour lever cette limite il faudrait déployer l'app derrière
  HTTPS (par exemple Vercel ou Netlify) — pas fait ici, à envisager plus tard si besoin.

## Stack

Vite + React 19 + react-router-dom, CSS simple (pas de framework UI), JavaScript, `oxlint`. Même
convention que les apps sœurs `dgfip-concours-c`, `classe-virtuelle` et `media-downloader`.
