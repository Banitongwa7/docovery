# Crédits médias

Tous les visuels de ce dossier sont libres de droits pour un usage commercial.
Ils sont **auto-hébergés** (aucune dépendance à un CDN externe) et servis via
`next/image` pour les images.

## Photographies — Unsplash

Licence Unsplash : usage commercial et non commercial autorisé, sans permission
préalable, attribution appréciée mais non obligatoire.
<https://unsplash.com/license>

| Fichier | Identifiant source | Usage |
| --- | --- | --- |
| `about-team.jpg` | `photo-1522071820081-009f0129c71c` | Page À Propos |
| `services-cloud.jpg` | `photo-1695668548342-c0c1ad479aee` | Poster de la vidéo « métriques » |
| `case-payments.jpg` | `photo-1635950340810-2fb374521a7b` | Cas — plateforme de paiement mobile |
| `case-treasury.jpg` | `photo-1454165804606-c3d57bc86b40` | Cas — SaaS gestion de trésorerie |
| `case-portal.jpg` | `photo-1557804506-669a67965ba0` | Cas — portail institution financière |
| `case-automation.jpg` | `photo-1674027444485-cec3da58eef4` | Cas — automatisation documentaire IA |
| `blog-web-trends.jpg` | `photo-1542831371-29b0f74f9713` | Article — tendances web 2025 |
| `blog-stack.jpg` | `photo-1555066931-4365d14bab8c` | Article — choisir sa stack |
| `blog-ai.jpg` | `photo-1674027215016-0a4abfdbf1cc` | Article — IA en entreprise |
| `blog-security.jpg` | `photo-1614064641938-3bbee52942c7` | Article — sécurité web |
| `blog-microservices.jpg` | `photo-1584169417032-d34e8d805e8b` | Article — microservices |
| `blog-mobile.jpg` | `photo-1551650975-87deedd944c3` | Article — mobile-first |

URL source complète : `https://images.unsplash.com/<identifiant>`

### Visuels V2 (`media/v2/`) — sans personnes

Même licence Unsplash. Sélection abstraite / code / matériel Apple utilisée par
la refonte V2 (maquette : `design/maquette-docovery/`).

| Fichier | Identifiant source | Usage |
| --- | --- | --- |
| `abstrait-sarcelle-hero.jpg` | `photo-1669295384050-a1d4357bd1d7` | Hero de l'accueil |
| `macbook-code-sombre.jpg` | `photo-1555066931-4365d14bab8c` | Collage « Notre impact » |
| `macbook-iphone-airpods.jpg` | `photo-1651761648226-333ab304b2cc` | Collage « Notre impact » |
| `telephone-vague-verte.jpg` | `photo-1693822845595-862bacc31cf9` | Collage « Notre impact » |
| `macbook-sarcelle.jpg` | `photo-1514826786317-59744fe2a548` | Photo centrale des services |
| `iphone-ecran-accueil.jpg` | `photo-1596558450268-9c27524ba856` | Cas — paiement mobile |
| `dashboard-sombre.jpg` | `photo-1551288049-bebda4e38f71` | Cas — SaaS trésorerie |
| `laptop-dashboard.jpg` | `photo-1460925895917-afdab827c52f` | Cas — portail institution financière |
| `circuit-sombre.jpg` | `photo-1592659762303-90081d34b277` | Cas — automatisation documentaire |
| `abstrait-vert-courbe.jpg` | `photo-1690321607822-669326f4e3cc` | Bannière Services |
| `abstrait-vert-soie.jpg` | `photo-1707430393809-784967fe6fee` | Bannière Réalisations |
| `abstrait-noir-vert.jpg` | `photo-1685871286419-58e4fc0de8e1` | Bannière À propos |
| `code-html-sombre.jpg` | `photo-1461749280684-dccba630e2f6` | Bannière Blog |
| `spirale-sarcelle.jpg` | `photo-1650943574955-ac02c65cfc71` | Page Contact |
| `abstrait-vert-couches.jpg` | `photo-1689443111287-5c2e129ec756` | Page 404, pages légales |
| `ruban-vert.jpg` | `photo-1677611998429-1baa4371456b` | Fenêtre « Démarrer un projet » |
| `code-react.jpg` | `photo-1619410283995-43d9134e7656` | Service — développement web |
| `iphone-maquette.jpg` | `photo-1695973056905-73ac6275b2f7` | Service — applications mobiles |
| `salle-serveurs.jpg` | `photo-1564457461758-8ff96e439e83` | Service — bases de données |
| `serveurs-voyants.jpg` | `photo-1762163516269-3c143e04175c` | Service — solutions cloud |
| `code-sql.jpg` | `photo-1627398242454-45a1465c2479` | Service — sécurité et conformité |
| `vague-particules.jpg` | `photo-1757466762489-52fea38071ad` | Service — IA et machine learning |
| `datacenter-blanc.jpg` | `photo-1784652852605-6945598f2af3` | Service — maintenance |
| `bureau-macbook-clavier.jpg` | `photo-1531935015902-64b87c1f4da5` | Service — formation IT |

## Vidéos — Pexels

Licence Pexels : usage commercial gratuit, sans attribution obligatoire.
La redistribution des fichiers en tant que tels sur une plateforme de stock est
interdite ; l'usage comme habillage de site est autorisé.
<https://www.pexels.com/license/>

| Fichier | Source | Auteur | Usage |
| --- | --- | --- | --- |
| `hero-loop.mp4` | [pexels.com/video/7693468](https://www.pexels.com/video/colleagues-brainstorming-7693468/) | MART PRODUCTION | Boucle du hero — équipe en revue de projet (960×540) |
| `data-loop.mp4` | [pexels.com/video/3141208](https://www.pexels.com/video/data-center-3141208/) | Pressmaster | Fond de la bande « Notre impact » (960×540) |

`hero-meeting.jpg` est l'image de poster de `hero-loop.mp4`, extraite de la même
séquence (source : `images.pexels.com/videos/7693468/`) — la vidéo prend donc le
relais du poster sans saut visuel.

## Notes techniques

- Les vidéos sont chargées par `components/ui/BackgroundVideo.tsx`, qui ne
  télécharge le fichier que sur écran ≥ 768 px, hors `prefers-reduced-motion`,
  hors connexion limitée (`saveData` / 2G) et uniquement à l'entrée dans le
  viewport. Le poster reste affiché dans tous les autres cas.
- Aucun outil d'encodage (ffmpeg) n'était disponible : les vidéos sont servies
  telles que fournies par Pexels en 960×540 (~3,8 Mo chacune). Un ré-encodage
  en WebM/AV1 réduirait sensiblement leur poids si besoin.

## Assets conservés de la version précédente

`david.png`, `omari.jpg` (photos réelles des fondateurs), `docovery_logo.svg`,
`docovery_logo_white.svg` (identité de marque) et `ms49235473.txt`
(vérification de propriété Microsoft) n'ont volontairement pas été remplacés.
