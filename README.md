# MahaVISTAAR call analytics (frontend)

Next.js dashboard UI. All call sync and metrics run on [Raya-MahaVISTAAR-Backend](https://github.com/adisingh-ai/Raya-MahaVISTAAR-Backend).

## Local dev

Terminal 1 — backend repo on port 3001.

Terminal 2:

```bash
npm install
cp .env.example .env.local
# set NEXT_PUBLIC_API_BASE=http://localhost:3001
npm run dev
```

## Deploy on Vercel

1. Import this repository.
2. Set **one** env var: `NEXT_PUBLIC_API_BASE` = your backend tunnel URL (no trailing slash, no quotes).
3. Do **not** add `RAYA_API_KEY` or `RAYA_AGENT_ID`.
4. Redeploy after changing env vars.

Keep the backend and tunnel running on your machine.
