# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Important:** This project uses Next.js 16 with the App Router. APIs and conventions may differ from training data. Read `node_modules/next/dist/docs/01-app/` before writing new routing or data-fetching code. Heed deprecation notices.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint

npx prisma migrate dev   # Run DB migrations in development
npx prisma db seed       # Seed admin user
npx prisma studio        # Browse DB in browser
```

## Architecture

**Stack:** Next.js 16 App Router · TypeScript · PostgreSQL via Prisma 7 (PrismaPg adapter) · NextAuth v5 beta · Resend (email) · TailwindCSS v4 (CSS variables only — no utility classes)

**Key env vars:** `DATABASE_URL`, `PHARMACY_EMAIL`, `RESEND_API_KEY`, `AUTH_SECRET`

### Adding a new public feature (e.g. a form page)

Every feature follows this identical pattern:

1. **Prisma model** → `prisma/schema.prisma` → `npx prisma migrate dev`
2. **API route** → `app/api/<feature>/route.ts` — POST creates record + sends email; GET/PATCH are auth-guarded for admin
3. **Email helper** → `lib/email.ts` — add a `send<Feature>Notification()` via Resend
4. **Form component** → `components/<Feature>Form.tsx` — `'use client'`, form state object, status `'idle'|'loading'|'success'|'error'`, phone formatter `val.replace(/\D/g,'').slice(0,10)`
5. **Page** → `app/<route>/page.tsx` — wraps Nav + component + Footer + back-to-top button + ScrollSetup
6. **Admin tab** → `app/admin/dashboard/page.tsx` — add tab + fetch endpoint + status table with dropdown

### CSS / design system

All styles live in `app/globals.css`. Never use Tailwind utility classes — use the CSS variables and named classes defined there.

- Colors: `--red` (#C8352A), `--cream`, `--cream-mid`, `--ink`, `--ink-soft`, `--slate`, `--white`
- Layout: `.container` (1180px max), `section` (96px padding), `.reveal` (scroll fade-in with `.d1`–`.d4` delay classes)
- Buttons: `.btn.btn-primary`, `.btn.btn-outline`, `.btn.btn-submit` (full-width)
- Forms: `.form-grid` (2-col), `.fg` (form group), `.fg.span2` (full-width field)
- Headings: `.eyebrow`, `.h1`, `.h2` (Playfair Display serif)
- Fonts: Inter (body), Playfair Display (headings), Dancing Script (logo accent only)
- Section backgrounds alternate: cream → white → cream → red gradient (`.refill` pattern)

### Auth / Admin

- `middleware.ts` protects all `/admin/*` routes via NextAuth JWT; `/admin/login` is the public exception
- Admin API routes guard with: `const session = await auth(); if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })`
- Auth config is split: `lib/auth.config.ts` (edge-safe, used in middleware) and `lib/auth.ts` (full config, used in API routes)

### Prisma

- Client generated to `app/generated/prisma/` — always import the client from there, not `@prisma/client`
- Singleton in `lib/prisma.ts` — always import `prisma` from there
- Uses `PrismaPg` adapter (required for edge/serverless compatibility)
