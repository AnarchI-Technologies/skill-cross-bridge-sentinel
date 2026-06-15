# cross-bridge-sentinel

Read-only CROSS bridge health and stale-transfer sentinel skill.

Use it to validate configured bridge routes, ping public bridge status endpoints, and detect stale or mismatched transfer records before agents rely on bridged funds.

## Commands

```bash
node skills/cross-bridge-sentinel/scripts/config.mjs
node skills/cross-bridge-sentinel/scripts/check.mjs
node skills/cross-bridge-sentinel/scripts/transfers.mjs --demo
node skills/cross-bridge-sentinel/scripts/transfers.mjs --file transfers.json --stale-minutes=60
```
