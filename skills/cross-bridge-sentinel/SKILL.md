---
name: cross-bridge-sentinel
description: Read-only CROSS bridge health and stale-transfer sentinel skill. Use when the user or an agent needs to check bridge route availability, configured bridge endpoints, stale transfers, pending bridge records, mismatched source/destination chains, fee spike notes, route availability, or whether bridged funds are safe to rely on before CROSS Mainnet actions.
---

# cross-bridge-sentinel

Use this skill to monitor configured bridge routes and transfer records. It does not bridge funds.

## Commands

```bash
node scripts/config.mjs
node scripts/check.mjs
node scripts/transfers.mjs --file transfers.json --stale-minutes=60
```

Use `--demo` for deterministic example data.

## Rules

- Do not execute bridge transfers.
- Treat stale pending transfers as blockers for downstream spending.
- Treat route chain mismatches as blockers.
- Keep bridge-specific assumptions in configured route data.
