# Project Master Plan

## Delivery Strategy

Build one phase at a time, starting with Phase 0 Foundation. Each phase must include schema, APIs, UI, permissions, validation, audit logs, tests, seeds, and documentation before the next phase begins.

## Deployment Decisions

- Managed database: Neon PostgreSQL
- Web deployment target: Vercel
- Backend implication: either adapt NestJS for Vercel serverless execution or keep NestJS on a dedicated Node host while still deploying the frontend to Vercel

## Phase Order

1. Phase 0 Foundation
2. Phase 1 Product Engineering
3. Phase 2 Inventory
4. Phase 3 Procurement
5. Phase 4 Sales
6. Phase 5 Planning
7. Phase 6 MES Execution
8. Phase 7 Quality
9. Phase 8 Maintenance
10. Phase 9 Traceability
11. Phase 10 Dashboards
12. Phase 11 Advanced Features

## Immediate Next Build Items

1. Stabilize frontend and backend workspace bootstrap
2. Introduce Neon database connection and migration tooling in the backend
3. Decide whether the NestJS backend will be refactored for Vercel serverless deployment
4. Implement Company and Factory modules first
5. Add user, role, and permission infrastructure next