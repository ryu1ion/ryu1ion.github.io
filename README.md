# Tianhao Chen Homepage

Academic homepage for Tianhao Chen, an M.S. student in the School of Computing at KAIST.

Production URL: <https://ryu1ion.github.io/>

## Stack

- React 19 + Vite
- Component-scoped CSS and data modules
- GitHub Actions + GitHub Pages

The site is deployed from the `ryu1ion/ryu1ion.github.io` User Pages repository and therefore uses the domain root (`/`) as its Vite base path.

## Local development

Requirements: Node.js 24 or newer and npm.

```bash
npm ci
npm run dev
```

Open <http://localhost:5173/>.

Validation commands:

```bash
npm run lint
npm run build
npm run preview
```

## Updating academic content

Verified profile information is kept separate from the React components:

```text
src/data/profile.js       # Identity, bio, interests, navigation, links
src/data/news.js          # News, newest first
src/data/publications.js  # Papers, authors, status, topics, links
src/data/experience.js    # Experience shown on the site
src/data/education.js     # Degrees and exchange study
src/data/awards.js        # Awards and honors
```

Only add publication buttons to the `links` array when a public paper, project, code, or dataset URL has been confirmed.

The public CV is stored at `public/cv.pdf`. The original sources remain in `cv/`, and the original `avatar.HEIC` is preserved alongside the web-ready conversion.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which installs dependencies, lints the source, builds the Vite site, uploads `dist/`, and deploys it with the official GitHub Pages actions.

In **Settings → Pages**, the deployment source must be set to **GitHub Actions**.

## Template provenance

The page structure, light pink visual language, fixed profile column, section styling, and responsive navigation are adapted from [LucyLing24/longling](https://github.com/LucyLing24/longling) at upstream commit `49274d3d465ab3ff1c9af4f0ca3c571e136a2dd9`. All personal information, images, CV content, institution/company marks, publication visuals, metadata, and deployment configuration in this repository were replaced for Tianhao Chen.

No license file was present in the upstream repository at that commit. Public availability alone does not grant a reuse license; obtain the upstream author's permission before treating the adapted template code as redistributable.

## Asset notes

- Personal and academic facts come from the latest `cv/cv.typ`, `cv/cv.pdf`, and Tianhao Chen's direct updates.
- The profile image is a web-ready conversion of the repository's original `avatar.HEIC`.
- Publication thumbnails are original, code-native SVG abstractions created for the three listed works; they do not reuse unrelated paper figures.
- KAIST and Waseda marks are locally cached from Wikimedia Commons; the Shanghai University and XiangCai Securities marks are locally cached from their official sites. Institutional marks remain subject to their owners' rights.
