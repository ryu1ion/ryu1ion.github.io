# Tianhao Chen Homepage

A static academic homepage for Tianhao Chen, combining a readable research portfolio with an original anime-inspired cyber/HUD visual language.

Production URL: <https://ryu1ion.github.io/homepage/>

## Stack

- [Astro](https://astro.build/) + TypeScript
- Static HTML with a small amount of framework-free browser JavaScript
- Astro image optimization for responsive WebP output
- GitHub Actions + GitHub Pages

The project uses the `/homepage/` base path required by the `ryu1ion/homepage` Project Pages URL. Site metadata and the base path are configured in `astro.config.mjs`.

## Local development

Requirements: Node.js 24 or newer and npm.

```bash
npm ci
npm run dev
```

Open <http://localhost:4321/homepage/>. Astro includes the configured project base path in local development.

Useful commands:

```bash
npm run check    # TypeScript and Astro diagnostics
npm run build    # Production build to dist/
npm run preview  # Preview the production build
npm run og       # Regenerate public/og-card.png
```

## Project structure

```text
.
├── .github/workflows/deploy.yml  # GitHub Pages CI/CD
├── public/
│   ├── cv.pdf                    # Public CV opened from the Hero
│   ├── favicon.svg
│   └── og-card.png               # Social sharing image
├── scripts/generate-og.mjs       # Reproducible OG-image generator
├── src/
│   ├── assets/                   # Local avatar, logos, fonts, illustration
│   ├── components/               # Page sections and reusable UI
│   ├── data/                     # Maintainable academic content
│   ├── layouts/BaseLayout.astro  # SEO, metadata, structured data
│   ├── pages/index.astro
│   └── styles/global.css
├── astro.config.mjs
└── package.json
```

## Updating content

The site deliberately separates academic facts from presentation.

### Add news

Edit `src/data/news.ts` and add the newest item at the beginning of the `news` array:

```ts
{
  date: '2026.10',
  title: 'A concise factual headline',
  detail: 'One or two sentences with only verified information.',
  featured: true,
}
```

### Add a publication

Edit `src/data/publications.ts`. Each record contains title, ordered authors, venue/status, a concise description, keywords, and one of the built-in abstract visual motifs. Mark Tianhao's author record with `self: true`.

Only add a `links` array when the paper, project, code, or dataset URL is confirmed:

```ts
links: [
  { label: 'Paper', href: 'https://arxiv.org/abs/...' },
  { label: 'Code', href: 'https://github.com/...' },
]
```

Education, experience, profile, highlights, and awards are maintained in their corresponding files under `src/data/`.

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`. The official Astro Pages action installs dependencies, runs the build, uploads `dist/`, and the official GitHub Pages action publishes it.

For a new repository, perform this one-time GitHub setting:

1. Open **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` or run **Deploy to GitHub Pages** manually from the Actions tab.

The deployed URL is <https://ryu1ion.github.io/homepage/>.

## Content provenance

Personal and academic information is derived from the latest CV source in `cv/cv.typ` and `cv/cv.pdf`. The site intentionally omits publication buttons where the CV does not provide a confirmed URL. The original `avatar.HEIC` is preserved; the build uses a web-ready conversion and emits responsive WebP variants.

## Credits and asset sources

- Original AI navigator illustration: generated for this site with OpenAI's built-in image generation tool; no existing anime character or franchise was referenced. The final prompt requested an isolated, transparent, anime-inspired holographic fox-like research companion in indigo/cyan/violet, with no text, logos, watermark, weapons, or copyrighted characters.
- KAIST logo: [Wikimedia Commons — KAIST logo.svg](https://commons.wikimedia.org/wiki/File:KAIST_logo.svg), sourced there from KAIST and marked public-domain simple geometry/text; trademark restrictions may still apply.
- Waseda University logo: [Wikimedia Commons — Waseda university logo.svg](https://commons.wikimedia.org/wiki/File:Waseda_university_logo.svg), sourced from Waseda University and marked public domain; trademark restrictions may still apply.
- Shanghai University logo: cached from the [official Shanghai University website](https://www.shu.edu.cn/images/logo.svg).
- XiangCai Securities logo: cached from the [official XiangCai Securities website](https://www.xcsc.com/front/images/logo.png).
- Manrope and Space Grotesk: [Google Fonts](https://fonts.google.com/), distributed under the SIL Open Font License 1.1 and self-hosted here for performance and privacy.
- Interface icon shapes follow [Lucide](https://lucide.dev/), ISC License.

Design research included the MIT-licensed [academic-homepage Astro project](https://github.com/siruizou2005/academic-homepage) and [Astro Scholar](https://astro.build/themes/details/astro-scholar/) for academic information architecture and static-site accessibility patterns. No template code was copied; the visual system and components in this repository are original.

## License

Site code is released under the MIT License. Personal content, the avatar, CV, and institutional/company marks are excluded from that grant and remain subject to their respective owners' rights.
