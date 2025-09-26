Metaarth Capital — AIF Cat III website (Next.js + Tailwind + Framer Motion + Express API)

## Getting Started

- Install dependencies: `npm install`
- Copy `.env.example` to `.env` and fill SMTP settings
- Run development servers: `npm run dev`

Open `http://localhost:3000` for the site. API runs at `http://localhost:4000`.

## Scripts

- `npm run dev` — Next + API concurrently with auto-reloads
- `npm run dev:next` — Next dev server only
- `npm run dev:server` — Express API with nodemon

## API Endpoints

- `POST /api/contact` — receives form and sends email
- `GET /api/brochure` — downloads brochure from `public/docs/brochure.pdf`
