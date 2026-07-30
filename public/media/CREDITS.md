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
| `hero-boardroom.jpg` | `photo-1573164574572-cb89e39749b4` | Panneau visuel du hero (page d'accueil) |
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

## Vidéos — Pexels

Licence Pexels : usage commercial gratuit, sans attribution obligatoire.
La redistribution des fichiers en tant que tels sur une plateforme de stock est
interdite ; l'usage comme habillage de site est autorisé.
<https://www.pexels.com/license/>

| Fichier | Source | Auteur | Usage |
| --- | --- | --- | --- |
| `hero-loop.mp4` | [pexels.com/video/1085656](https://www.pexels.com/video/blue-colored-cables-1085656/) | Dima Krivoy | Boucle du hero (960×540) |
| `data-loop.mp4` | [pexels.com/video/3141208](https://www.pexels.com/video/data-center-3141208/) | Pressmaster | Fond de la bande « Notre impact » (960×540) |

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
