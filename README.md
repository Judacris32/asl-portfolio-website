# ASL Portfolio — Adebowale Samuel Lipede

## Stack
Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion

## Status: Scaffold complete
Project structure and core config are in place. Content sections build next.

## ⚠️ Outstanding: favicon / logo asset
The brief calls for a circular "ASL" logo (referenced as `image_9.png`) to be used
as the favicon and nav brand mark. That file wasn't included in the upload — only
the three portrait photos and award PDFs came through. `/public/icons/` is wired
up in `layout.tsx` to expect:
- `favicon.ico`
- `icon-32.png`
- `icon-192.png`
- `apple-touch-icon.png`

Drop the source logo in and I'll generate all four sizes. Until then the nav will
fall back to a text/monogram mark.

## Structure
```
asl-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # fonts, metadata, favicon config, theme init
│   │   ├── page.tsx          # homepage (stub — sections build next)
│   │   └── globals.css       # theme tokens, focus states, reduced-motion
│   ├── components/
│   │   └── ThemeProvider.tsx # persisted light/dark toggle, no-flash script
│   └── lib/                  # (utilities go here)
├── public/
│   ├── images/
│   │   ├── portraits/        # 3 professional portraits (from upload)
│   │   └── awards/           # award certificates/plaques (to be added)
│   └── icons/                # favicon set (pending logo asset)
├── tailwind.config.ts        # light-mode-default tokens, dark: class strategy
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## Design tokens (light default / dark opt-in)
- Light: `paper #FAFBFC`, `ink #0F172A`, `accent #1D4ED8`, `muted #64748B`
- Dark: `midnight #0B1220`, `midnight-surface #1E293B`, `accent-dark #3B82F6`
- Type: Fraunces (display) + Inter (body)

## Next steps
1. Get the ASL logo → generate favicon set
2. Build Hero section
3. Build About/Bio, Awards, Competencies, Projects, Contact sections
4. Wire up mobile drawer nav
