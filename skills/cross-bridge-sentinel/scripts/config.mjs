#!/usr/bin/env node
import { handleMain, out } from './_json.mjs';
import { routes } from './_config.mjs';

async function main() {
  out({
    ok: true,
    skill: 'cross-bridge-sentinel',
    command: 'config',
    routes: routes(),
    defaultStaleMinutes: Number(process.env.DEFAULT_STALE_MINUTES || 60),
  });
}

handleMain(main());
