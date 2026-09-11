import express from 'express';
import serverless from 'serverless-http';
import { createNestApp } from '../src/app.factory';

let cachedHandler: ReturnType<typeof serverless> | undefined;

async function getHandler() {
  if (cachedHandler) {
    return cachedHandler;
  }

  const expressApp = express();
  const nestApp = await createNestApp(expressApp);
  await nestApp.init();

  cachedHandler = serverless(expressApp);
  return cachedHandler;
}

export default async function handler(req: unknown, res: unknown) {
  const resolvedHandler = await getHandler();
  return resolvedHandler(req as never, res as never);
}