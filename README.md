# SunThru Web

The official website for [SunThru](https://sunthru.co) — a manufacturing company enabling widespread commercialization of aerogels for high-performance window products.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **CMS:** Sanity v4 (embedded Studio at `/studio`)
- **Hosting:** Vercel

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, video, who we are |
| `/about` | About — technology overview |
| `/team` | Team members + partner organizations |
| `/news` | Press coverage (managed via Sanity) |
| `/contact` | Contact (mailto link) |
| `/studio` | Sanity CMS admin UI |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.
Open [http://localhost:3000/studio](http://localhost:3000/studio) to manage news articles.

## Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## Project Structure

```
app/
  page.tsx              # Home
  about/page.tsx        # About
  team/page.tsx         # Team
  news/page.tsx         # News
  contact/page.tsx      # Contact
  studio/[[...tool]]/   # Sanity Studio
components/
  NavBar.tsx            # Responsive navbar with mobile drawer
  Footer.tsx            # Site footer
  AutoplayVideo.tsx     # Scroll-triggered autoplay video
public/
  team/                 # Team member photos
  partners/             # Partner organization logos
sanity/
  schemaTypes/          # Sanity content schemas
  client.ts             # Sanity API client
  queries.ts            # GROQ queries
```

## Deployment

```bash
npx vercel
```

Add `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` to your Vercel project environment variables.
