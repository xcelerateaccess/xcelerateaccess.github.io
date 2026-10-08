# Company website starter

An Astro and Tailwind CSS starter for a company brochure site. The sample brand is **Northstar Studio**; replace the copy, colours, email address, and projects with your own.

## Run locally

```bash
npm install
npm run dev
```

## Publish with GitHub Pages

1. Create a **public** GitHub repository and push this project to its `main` branch.
2. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Update `site` in `astro.config.mjs` to your own GitHub Pages URL.
4. Push to `main`. The Actions workflow builds and publishes the site. It automatically supports both a project repository and a `YOUR_GITHUB_USERNAME.github.io` repository.
5. For a custom domain, create an Actions variable named `ASTRO_BASE_PATH` in **Settings → Secrets and variables → Actions → Variables** and give it the value `/`. Then add the custom domain under **Settings → Pages**.

## Edit the site

- Main page and sample content: `src/pages/index.astro`
- Brand colours and base styles: `src/styles/global.css`
- Navigation: `src/components/Header.astro`
- SEO title and description: `src/layouts/BaseLayout.astro`

The starter uses an email link for enquiries, so it needs no server or form provider.
