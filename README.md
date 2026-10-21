# Shlok Agrawal — Portfolio

A white portfolio with two tabs — Home (one scrolling page) and Resume (web resume + PDF) — built with Next.js and deployed on Vercel.

## Editing

All content (bio, highlights, experience, projects, achievements, skills) lives in `src/lib/content.ts`; wrap text in `**…**` to bold it.
Home is `src/app/page.tsx`, the Resume tab is `src/app/resume/page.tsx`, styling is `src/app/globals.css`. Replace `public/resume.pdf` to update the download.

The former /about, /experience and /projects URLs redirect to /.
Project links point to verified GitHub source repositories; no live demo is claimed.
Beltech experience is summarized from the updated resume.

## Develop

```sh
npm ci
npm run dev
npm run build
```

Design references: https://brittanychiang.com (sticky sidebar + section nav), https://leerob.com, https://paco.me/ and https://emilkowal.ski/.
