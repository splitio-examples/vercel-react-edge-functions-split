# React at the Edge with Split

[`sveltekit-on-the-edge`](https://sveltekit-on-the-edge.vercel.app/) but on top of React. It uses `esbuild` for bundling and [Vercel Edge Functions](https://vercel.com/edge) for SSR.

This example is for framework builders and advanced usage of the low-level Vercel [Build Output API](https://vercel.com/docs/build-output-api/v3). If you're looking to develop a React application with dynamic Edge capabilities, we recommend [Next.js Middleware](https://nextjs.org/docs/advanced-features/middleware) and [Vercel Edge Functions](https://vercel.com/edge).

## Split

This example builds on the [`react-on-the-edge`](https://react-on-the-edge.vercel.app/) template to demonstrate consuming Split feature flags (1) during SSR and (2) from API endpoints. Both (1) and (2) run at the edge. Parallel examples demonstrate pulling Split information from (A) Edge Config and (B) Split Cloud (the Split CDN) and display the time duration of each flag calculation. Example (A) requires the [Split Integration for Vercel](https://www.vercel.com/integrations/split) to be added to the Vercel project.

## How to use

Run `pnpm i` then:

- To build: `pnpm build`
- To run a local server: `pnpm start`

To build this demo with streaming (`renderToStream`) instead of `renderToString` run `USE_STREAMS=1 pnpm build`.
After building, `.vercel/output` will be created which you can deploy via `vc --prebuilt`.

## Architecture

- `util/build.mjs` implements the build process on top of `esbuild` that bundles `src/app` into an Edge Function.
- `util/start.mjs` implements a local server using the `edge-runtime` package that can locally run the build outputs.

## Developing

Due to the absence of a dev server, [`watchexec`](https://github.com/watchexec/watchexec) can be used as a replacement. Use `brew install watchexec` to install.

```bash
watchexec -c -r --no-meta 'node util/build.mjs; node util/start.mjs'
```
