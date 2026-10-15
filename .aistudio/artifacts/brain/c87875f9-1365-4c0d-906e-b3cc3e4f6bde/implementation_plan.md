# Multi-Platform Deployment & Vercel Hosting Fix

Enable seamless deployment and hosting of the Nashmia Operations Hub across Vercel, Node.js cloud hosts (Render/Railway/VPS), and the AI Studio development environment by fixing the hardcoded Nitro build preset, configuring the Vercel Build Output API v3, and adding a cross-platform build pipeline.

## User Review & Critical Decisions

> [!IMPORTANT]
> The primary reason `npm run build` failed on Vercel is that `NITRO_PRESET=node-server` was hardcoded in `package.json`, which prevented Nitro from auto-detecting Vercel and creating the required `.vercel/output` directory. Additionally, shell globbing (`cp -r .output/public/* dist/`) caused build failures in cross-platform CI environments.

- **Confirmed Decision (Hosting Platform)**: Vercel (with full compatibility preserved for Render, Railway, Docker, and AI Studio dev/preview).
- **Confirmed Decision (Architecture)**: Universal Full-Stack (Server with SSR, API routes `/api/*`, and client React hydration).
- **Confirmed Decision (Resolution)**: Smart environment-aware build orchestrator that automatically outputs `.vercel/output` when building on Vercel, and `.output/server` + `dist/` when building locally or for standard Node.js servers.

---

## 1. Overview & Core Concept

- **What It Does**: Resolves all hosting and build failures when deploying the repository to Vercel or other modern cloud hosting platforms. When connected to Vercel via GitHub or CLI, the build automatically compiles full-stack serverless functions and optimized static assets according to Vercel's Build Output API v3 specifications.
- **Target Audience / Persona**: Logistics operators, administrators, and developers deploying the Nashmia platform to production or staging domains on Vercel.
- **Key Value**: Zero-configuration, turnkey deployment on Vercel while retaining 100% backward compatibility with local Vite dev and the AI Studio preview container.

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. *Repository Connect*: Developer pushes to GitHub repository (`zzzaryabali109-lab/nashmia-project`) or imports to Vercel.
  2. *Build Execution*: Vercel runs `npm run build`. The build script detects the Vercel CI environment (`VERCEL=1`), automatically sets the Nitro preset to `vercel`, and emits `.vercel/output` without manual flags.
  3. *Zero-Downtime Deployment*: Vercel deploys serverless functions for TanStack Start SSR & `/api/*` endpoints, serving public assets directly via edge CDN with caching headers.
  4. *In-App Experience*: End users experience instant page loads, SSR hydration, real-time Supabase subscriptions, and Gmail/tracking integrations without 404 or hydration mismatches.
- **Visual Identity & Theme**:
  - The Liquid Glass aesthetic, typography (Inter), tone jewel badges, and dashboard layout remain completely untouched and preserved.
  - No visual regression or restyling.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Smart Build Orchestrator (`scripts/build.mjs`)**
  - *Chosen Approach*: Implement a light Node.js build runner (`scripts/build.mjs`) referenced by `"build": "node scripts/build.mjs"`.
  - *Why*: Direct inline shell scripts (`NITRO_PRESET=... && mkdir -p dist && cp ...`) fail on Windows, Vercel CI edge cases, or when environment variables differ. A pure Node script inspects `process.env.VERCEL`, `process.env.NETLIFY`, etc., builds with the optimal preset, and safely synchronizes distribution artifacts.
  - *Alternatives Considered*: Hardcoding `NITRO_PRESET=vercel` would break local Node.js server starts and AI Studio compilation.
- **Decision 2: Vercel Configuration (`vercel.json`)**
  - *Chosen Approach*: Add `vercel.json` configured for standard Build Output API v3 with clean routing fallback.
  - *Why*: Clarifies the build output directory and prevents Vercel from mistaking TanStack Start for a legacy static site.
- **Decision 3: Engine Specifications**
  - *Chosen Approach*: Add `"engines": { "node": ">=20.0.0" }` in `package.json`.
  - *Why*: Guarantees Vercel uses Node 20+ runtime rather than falling back to older Node runtimes that lack modern Web Streams and native fetch.

---

## 4. Technical Architecture & Data Strategy

### Deployment Build Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    Vercel CI / Local CLI                    │
│                     `npm run build`                         │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                   `scripts/build.mjs`                       │
│  Detects environment: VERCEL, NETLIFY, or Standard Node     │
└──────────────┬──────────────────────────────┬───────────────┘
               │                              │
     If VERCEL=1 is set              Default / Node Server
               │                              │
               ▼                              ▼
┌─────────────────────────────┐ ┌─────────────────────────────┐
│    NITRO_PRESET=vercel      │ │   NITRO_PRESET=node-server  │
│  Generates `.vercel/output` │ │  Generates `.output/`       │
│  - Static files in `/static`│ │  - Server in `/server`      │
│  - Functions in `/functions`│ │  - Safe copy to `dist/`     │
└──────────────┬──────────────┘ └─────────────┬───────────────┘
               │                              │
               ▼                              ▼
┌─────────────────────────────┐ ┌─────────────────────────────┐
│ Vercel Edge & Serverless CDN│ │ Node.js / Docker Container  │
│ SSR + API + Static Assets   │ │ `node .output/server/index` │
└─────────────────────────────┘ └─────────────────────────────┘
```

### File Changes Checklist

1. `scripts/build.mjs`: Create cross-platform build script that:
   - Detects `process.env.VERCEL` -> sets `NITRO_PRESET = "vercel"`
   - Detects `process.env.NETLIFY` -> sets `NITRO_PRESET = "netlify"`
   - Defaults to `node-server` if not running on serverless hosting
   - Safely manages `dist` directory creation without shell-specific `cp -r` commands
2. `package.json`:
   - Update `"build": "node scripts/build.mjs"`
   - Add `"engines": { "node": ">=20.0.0" }`
3. `vercel.json`:
   - Create root configuration for Vercel deployment
4. Verification:
   - Verify `npm run build` succeeds locally (producing `.output` & `dist`)
   - Verify `NITRO_PRESET=vercel node scripts/build.mjs` produces valid `.vercel/output`
   - Run `compile_applet` and `lint_applet` to ensure total workspace health
