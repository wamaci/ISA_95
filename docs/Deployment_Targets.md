# Deployment Targets

## Confirmed Choices

- Database: Neon PostgreSQL
- Frontend hosting: Vercel
- Backend stack: NestJS on Node.js

## Practical Interpretation

The frontend can deploy to Vercel immediately once environment variables are configured. The backend is now structured to deploy to Vercel too:

1. `src/main.ts` keeps local development as a normal Nest server.
2. `api/index.ts` boots the same Nest app as a Vercel serverless function.

## Recommendation

For the shortest path to a stable ERP/MES product on Vercel:

1. Deploy the Next.js frontend to Vercel from the `frontend` directory.
2. Deploy the NestJS backend to a separate Vercel project from the `backend` directory.
3. Use Neon for PostgreSQL.
4. Review file upload, timeout, and long-running workflow constraints before implementing later MES-heavy phases.