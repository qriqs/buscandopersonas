# BuscandoPersonas.org

Spanish-language website for BuscandoPersonas.org Sin Fronteras, a Lima-based
private investigation agency specializing in family searches. Astro generates
the static pages and uses Vite to bundle styles and scripts.

## Run locally

Use Node.js 24 LTS. From the repository root, install dependencies and start
the development server.

```sh
npm ci
npm run dev
```

Build and serve the production output locally to verify the compiled pages.

```sh
npm run build
npm run preview
```

Firebase Hosting serves the build from `dist/`, which includes a custom
`404.html`. The `context/` research files stay outside the published site.

## Update the site

Update contact details, service descriptions and FAQ answers in
`src/business.ts`. The homepage contact links open the existing Jotform,
WhatsApp conversation, telephone dialer or email app.

The original organization supplied the globe mark and the photo of the
directors. The archive images are illustrative stock photography from Pexels.

- Hero image by [Berna](https://www.pexels.com/photo/33305508/).
- Process image by [1 fish socks](https://www.pexels.com/photo/34384404/).
- [Pexels license](https://www.pexels.com/license/).
