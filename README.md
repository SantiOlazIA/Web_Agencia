# Agency Core Starter

> **The Zero-Bug Master Template for Agency Client Deployments**

This repository contains the pre-verified, stress-tested baseline React/Vite template used to "one-shot" future client projects. It guarantees:
1. Zero CSS absolute intersection artifacts.
2. Safe hover mechanics (`hover:brightness`, NO `scale-x-0`).
3. Strict TS parsing.
4. Pre-built 5-component luxury structure:
   - `Navbar` (Absolute top, perfectly collision-safe)
   - `Hero` (h-screen, `pt-safe` padding)
   - `About` (Framer motion scroll storytelling)
   - `Catalog` (Masonry responsive grids)
   - `OrderForm` (Pre-verified WhatsApp multi-product calculator)
   - `Footer`

## Scaffolding a New Client
Do **NOT** use `npm create vite`. 
Instead, clone this repo:
```bash
gh repo clone SantiOlazIA/agency-core-starter new-client-name
cd new-client-name
rm -rf .git
git init
npm install
```

## The "Local Asset" Mandate
Before running the local server, generate premium AI product/hero images and save them directly to `/public/images`. Do **not** use `images.unsplash.com` links in this template to avoid eventual 404/CORS degradation.
