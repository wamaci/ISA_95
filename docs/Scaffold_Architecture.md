# Scaffold and Architecture

## Monorepo Layout

- `frontend`: Next.js application shell
- `backend`: NestJS API shell
- `docs`: planning and delivery documentation
- `docker-compose.yml`: local runtime dependencies

## Core Decisions

- Monorepo structure
- One database per company
- API versioning under `/api/v1`
- Neon PostgreSQL as the system of record
- Vercel as the target web deployment platform
- Frontend and backend communicate over HTTP in the first implementation slice

## Hosting Strategy

- Frontend deploys to Vercel as a standard Next.js application.
- Database runs on Neon with SSL-required connections.
- Backend deploys to a separate Vercel project using a NestJS serverless entrypoint backed by Express.

## Backend Constraint

The existing NestJS bootstrap still exists for local development through `src/main.ts`, but Vercel uses `api/index.ts`. Long-running jobs, heavy report generation, and large uploads should eventually be moved behind queue-based or storage-backed workflows because serverless execution time is limited.

## Implementation Sequence

1. Shared platform shell
2. Add Neon database connectivity and migration tooling
3. Harden the Vercel-compatible backend adapter
4. Phase 0 master data modules
5. Authentication and RBAC
6. Audit logging
7. Phase-by-phase business modules