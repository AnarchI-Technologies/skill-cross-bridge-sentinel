#!/usr/bin/env node
import { handleMain, out } from './_json.mjs';
import { routes } from './_config.mjs';

async function ping(route) {
  if (!route.statusUrl) return { ...route, ok: null, note: 'no statusUrl configured' };
  try {
    const started = Date.now();
    const res = await fetch(route.statusUrl, { method: 'GET' });
    return { ...route, ok: res.ok, status: res.status, latencyMs: Date.now() - started };
  } catch (err) {
    return { ...route, ok: false, error: err.message };
  }
}

async function main() {
  const configured = routes();
  const checks = await Promise.all(configured.map(ping));
  const blocked = checks.filter((c) => c.ok === false).map((c) => `${c.name || c.statusUrl}: unavailable`);
  out({
    ok: blocked.length === 0,
    skill: 'cross-bridge-sentinel',
    command: 'check',
    routeCount: configured.length,
    checks,
    blocked,
    warnings: configured.length ? [] : ['no bridge routes configured'],
  });
}

handleMain(main());
