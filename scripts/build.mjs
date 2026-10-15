#!/usr/bin/env node
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

// 1. Determine the appropriate Nitro preset based on deployment platform
let preset = process.env.NITRO_PRESET;

if (!preset) {
  if (process.env.VERCEL || process.env.NOW_BUILDER) {
    preset = "vercel";
  } else if (process.env.NETLIFY) {
    preset = "netlify";
  } else if (
    process.env.CF_PAGES ||
    process.env.CLOUDFLARE_PAGES ||
    process.env.CF_PAGES_BRANCH ||
    process.env.CF_PAGES_URL
  ) {
    preset = "cloudflare-pages";
  } else {
    preset = "node-server";
  }
}

console.log(`[Build] Target deployment preset: ${preset}`);

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");

// 2. Clean dist directory before Cloudflare build to avoid leftover file collisions
if (preset === "cloudflare-pages") {
  try {
    if (fs.existsSync(distDir)) {
      fs.rmSync(distDir, { recursive: true, force: true });
      console.log(`[Build] Cleaned prior dist/ directory for fresh Cloudflare bundle.`);
    }
  } catch (cleanErr) {
    console.warn(`[Build] Notice: Clean directory skipped:`, cleanErr.message);
  }
}

// 3. Prepare environment with selected preset
const env = {
  ...process.env,
  NITRO_PRESET: preset,
};

// 4. Execute vite build via child process
const viteProcess = spawn("vite", ["build"], {
  stdio: "inherit",
  shell: true,
  env,
});

viteProcess.on("close", (code) => {
  if (code !== 0) {
    console.error(`[Build] Vite build failed with exit code ${code}`);
    process.exit(code ?? 1);
  }

  // 5. Safely handle output directories for cross-platform compatibility
  try {
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }

    if (preset === "vercel") {
      // For Vercel Build Output API v3, .vercel/output is the primary deploy target.
      // Also copy static assets to dist for static tooling compatibility.
      const vercelStaticDir = path.join(rootDir, ".vercel", "output", "static");
      if (fs.existsSync(vercelStaticDir)) {
        fs.cpSync(vercelStaticDir, distDir, { recursive: true, force: true });
        console.log(`[Build] Synchronized static assets from .vercel/output/static to dist/`);
      }
      console.log(`[Build] Successfully generated Vercel Build Output API v3 bundle (.vercel/output)`);
    } else if (preset === "cloudflare-pages") {
      // Cloudflare Pages preset outputs directly into dist/ (_worker.js, _routes.json, and static assets)
      console.log(`[Build] Cloudflare Pages bundle generated directly in dist/`);
      const workerPath = path.join(distDir, "_worker.js");
      if (fs.existsSync(workerPath)) {
        console.log(`[Build] Verified Cloudflare Pages _worker.js edge bundle.`);
      }
    } else {
      // For Node server / local builds, sync .output/public to dist
      const publicOutput = path.join(rootDir, ".output", "public");
      if (fs.existsSync(publicOutput)) {
        fs.cpSync(publicOutput, distDir, { recursive: true, force: true });
        console.log(`[Build] Synchronized assets from .output/public to dist/`);
      }
    }
  } catch (err) {
    console.warn(`[Build] Warning: Non-critical asset sync error:`, err.message);
  }

  console.log(`[Build] Completed successfully for target preset: ${preset}`);
  process.exit(0);
});
