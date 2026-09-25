# Sharavathi Construction Products

Next.js site exported as static files for GitHub Pages at `sharavathi.co`.

## Development and checks

Use Node.js 22.

```sh
npm ci
npm run dev
```

Before release:

```sh
npm run lint
npm run typecheck
npm run build
npm run check:export
npm audit
```

The build downloads the configured Google font and writes the site to `out/`. `check:export` verifies pages, internal links, anchors, image files, metadata, structured data, sitemap, robots and custom domain.

## Preview

After building, `npm start` serves `out/` at `http://127.0.0.1:4173/`. Use `PORT=4174 npm start` if the default port is occupied. This is a local preview server, not a production application server.

## Deployment

The existing `.github/workflows/deploy.yml` installs from the lockfile, lints, builds, checks the export and deploys `out/` through GitHub Pages. A push to `main` or manual workflow dispatch triggers deployment. GitHub Pages uses GitHub Actions as its source. The custom domain is recorded in `public/CNAME`.

## Content

- Business details and metadata: `src/lib/site.ts`
- Supply-area content: `src/lib/locations.ts`
- Visual and copy preferences: `docs/content-guidelines.md`
- Photo provenance: `docs/photo-edits.md`
- Release review: `docs/pre-production-review.md`

The quote form prepares a WhatsApp message for customer review. It does not submit to a backend. Catalogue dimensions and delivery availability remain subject to sales confirmation.

Next.js 15 is retained. Its PostCSS dependency is overridden to the patched version used by the project; remove the override when a future compatible framework release includes that fix.
