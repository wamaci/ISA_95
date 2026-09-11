# Nam Long ERP/MES

This repository bootstraps the Nam Long ERP/MES platform described in [master_prompt.md](master_prompt.md). The initial implementation focus is Phase 0 Foundation: master data, access control, and audit-ready platform services.

## Workspace

- `frontend`: Next.js 14 application shell with a manufacturing dashboard landing page
- `backend`: NestJS 10 API shell with a Phase 0 status endpoint
- `master_prompt.md`: source brief and phase roadmap
- `docker-compose.yml`: optional local infrastructure bootstrap for frontend, backend, and a local PostgreSQL fallback

## Current API

- `GET /api/v1/status`: returns current bootstrap status and planned Phase 0 modules

## Deployment Targets

- Database: Neon PostgreSQL
- Frontend: Vercel
- Backend: NestJS API adapted for Vercel serverless deployment

## Vercel Deployment Layout

Deploy this monorepo as two Vercel projects:

1. Frontend project with root directory set to `frontend`
2. Backend project with root directory set to `backend`

The backend now includes a Vercel function entrypoint at `backend/api/index.ts` that boots NestJS on top of an Express adapter.

## Local Development

1. Copy `.env.example` to `.env` and replace the Neon connection placeholders.
2. Install frontend dependencies with `npm install --prefix frontend`.
3. Install backend dependencies with `npm install --prefix backend`.
4. Start the backend with `npm run start:dev --prefix backend`.
5. Start the frontend with `npm run dev --prefix frontend`.

## Recommended Hosting Pattern

1. Use Vercel for the Next.js frontend.
2. Use Neon for the PostgreSQL database.
3. Use a separate Vercel project for the NestJS backend serverless entrypoint.

## Phase 0 Modules

- Company
- Factory
- Department
- User
- Role
- Permission
- Employee
- Shift
- Customer
- Supplier
- Work Center
- Machine
- UOM
- Currency
- Audit Log