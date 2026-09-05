# Tianhao Chen Homepage

Academic homepage for Tianhao Chen, an M.S. student in the School of Computing at KAIST.

Production URL: <https://ryu1ion.github.io/>

## Stack

- React 19 + Vite
- Original Long Ling template styling with Tianhao Chen's content
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
src/data/profile.js       # Identity, research interests, and links
src/data/news.js          # News, newest first
src/data/publications.js  # Papers, authors, status, topics, links
src/data/experience.js    # Experience shown on the site
src/data/education.js     # Degrees and exchange study
src/data/awards.js        # Awards and honors
```

Only add publication buttons to the `links` array when a public paper, project, code, or dataset URL has been confirmed.

The public CV is stored at `public/cv.pdf`. The original sources remain in `cv/`, and the original `avatar.HEIC` is preserved alongside the web-ready conversion.

## Deployment

The repository currently has GitHub's automatic branch-based Pages build enabled. After that automatic workflow finishes, `.github/workflows/deploy.yml` installs dependencies, lints the source, builds the Vite site, uploads `dist/`, and deploys the production artifact with the official GitHub Pages actions. This ordering prevents the automatic source deployment from overwriting the Vite build.

## Template provenance

The page structure and appearance come from [LucyLing24/longling](https://github.com/LucyLing24/longling) at upstream commit `49274d3d465ab3ff1c9af4f0ca3c571e136a2dd9`. The upstream `App.css`, `index.css`, `All.css`, `Header.css`, `Hero.css`, `Internship.css`, and `Publications.css` files are copied byte-for-byte without visual changes. Personal information, images, CV content, publication visuals, metadata, and deployment configuration were replaced for Tianhao Chen.

The upstream Google Analytics tag is retained as requested; its ID still belongs to the upstream template. The MapMyVisitors component uses Tianhao Chen's supplied `mapmyvisitors` tracking script.

No license file was present in the upstream repository at that commit. Public availability alone does not grant a reuse license; obtain the upstream author's permission before treating the adapted template code as redistributable.

## Asset notes

- Personal and academic facts come from the latest `cv/cv.typ`, `cv/cv.pdf`, and Tianhao Chen's direct updates.
- The profile image is a web-ready conversion of the repository's original `avatar.HEIC`; the header and browser-tab icon use the supplied `logo.jpeg`.
- Publication thumbnails are rasterized from representative figures in each paper's official arXiv source package.
- The XiangCai Securities mark uses the supplied `xiangcai.jpg`. KAIST and Waseda marks are locally cached from Wikimedia Commons, and the Shanghai University mark is locally cached from its official site. Institutional marks remain subject to their owners' rights.
