import { readFileSync } from 'node:fs';

export function routes() {
  try {
    return JSON.parse(process.env.BRIDGE_ROUTES_JSON || '[]');
  } catch {
    return [];
  }
}

export function demoTransfers() {
  return [
    {
      id: 'demo-complete',
      fromChain: 1,
      toChain: 612055,
      status: 'complete',
      createdAt: new Date(Date.now() - 10 * 60_000).toISOString(),
    },
    {
      id: 'demo-stale-pending',
      fromChain: 1,
      toChain: 612055,
      status: 'pending',
      createdAt: new Date(Date.now() - 120 * 60_000).toISOString(),
    },
  ];
}

export function loadTransfers(opts) {
  if (opts.demo === 'true' || opts.demo === true) return demoTransfers();
  if (!opts.file) return [];
  return JSON.parse(readFileSync(opts.file, 'utf8'));
}
