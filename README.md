# angelolandiza.com — Personal Website

Minimal, professional portfolio site for Angelo Francis Landiza. Built with
Next.js (App Router), Tailwind CSS v4, and TypeScript. Dark/light theme with
system-preference default, smooth scroll reveals, and zero runtime
dependencies beyond React.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

All site content lives in **`lib/site.ts`** — contact links, hero copy,
experience bullets, projects, skills, education. Edit that one file and the
whole site updates; no component changes needed.

The resume served at `/Angelo-Landiza-Resume.pdf` is `public/Angelo-Landiza-Resume.pdf`.
Replace that file to update it (the copy on the site intentionally omits the
phone number).

## Deploying to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Import this repository. Vercel auto-detects Next.js — no configuration
   needed. Click **Deploy**.
3. Every push to the production branch redeploys automatically; other
   branches get preview URLs.

### Custom domain

1. Buy the domain (Vercel sells domains under **Project → Settings →
   Domains**, or use Namecheap/Cloudflare/Porkbun).
2. In the Vercel project: **Settings → Domains → Add**, enter the domain.
3. If bought elsewhere, add the DNS records Vercel shows you (an `A` record
   to `76.76.21.21`, or a `CNAME` to `cname.vercel-dns.com` for `www`).
   HTTPS is provisioned automatically.
4. Update `url` in `lib/site.ts` to the final domain so SEO metadata,
   `sitemap.xml`, and `robots.txt` point at the right place.

## Structure

```
app/            layout, page, global styles, OG image, sitemap, robots
components/     nav, theme toggle, scroll reveal, section components
lib/site.ts     all site content
public/         resume PDF
```
