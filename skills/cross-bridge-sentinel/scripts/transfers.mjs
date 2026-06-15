#!/usr/bin/env node
import { parseArgs } from './_args.mjs';
import { loadTransfers } from './_config.mjs';
import { handleMain, out } from './_json.mjs';

function ageMinutes(createdAt) {
  const t = Date.parse(createdAt);
  if (!Number.isFinite(t)) return null;
  return (Date.now() - t) / 60_000;
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const staleMinutes = Number(opts['stale-minutes'] || process.env.DEFAULT_STALE_MINUTES || 60);
  const transfers = loadTransfers(opts);
  const rows = transfers.map((t) => {
    const age = ageMinutes(t.createdAt);
    const pending = ['pending', 'submitted', 'inflight'].includes(String(t.status || '').toLowerCase());
    return {
      ...t,
      ageMinutes: age == null ? null : Number(age.toFixed(2)),
      stale: pending && age != null && age > staleMinutes,
      chainMismatch: Number(t.toChain) !== 612055 && t.direction === 'to-cross',
    };
  });
  const blocked = rows
    .filter((r) => r.stale || r.chainMismatch)
    .map((r) => `${r.id}: ${r.stale ? 'stale pending transfer' : 'chain mismatch'}`);
  out({
    ok: blocked.length === 0,
    skill: 'cross-bridge-sentinel',
    command: 'transfers',
    staleMinutes,
    count: rows.length,
    transfers: rows,
    blocked,
  });
}

handleMain(main());
