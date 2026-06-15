# cross-bridge-sentinel

AnarchI Technologies (TM) CROSS bridge health and stale-transfer sentinel skill.

Hardcoding freedom into the systems of tomorrow.

## Purpose

Checks configured bridge route status URLs and evaluates transfer records for stale pending state or chain mismatches before agents rely on bridged funds. It is read-only and does not initiate bridge transfers.

## Use Cases

- Track configured bridge route availability.
- Detect stale pending transfers.
- Detect destination-chain mismatches for records intended for CROSS Mainnet.
- Block downstream spending assumptions when bridge state is uncertain.
- Feed observability reports with bridge health status.

## Setup

~~~bash
git clone https://github.com/AnarchI-Technologies/skill-cross-bridge-sentinel.git
cd skill-cross-bridge-sentinel
./install.sh
~~~

The installer symlinks skills/cross-bridge-sentinel into ~/.claude/skills/cross-bridge-sentinel and installs the package dependencies.

## Common Commands

~~~bash
cd skills/cross-bridge-sentinel
node scripts/config.mjs
node scripts/check.mjs
node scripts/transfers.mjs --demo
node scripts/transfers.mjs --file transfers.json --stale-minutes=60
~~~

## Configuration

- BRIDGE_ROUTES_JSON: JSON array of configured bridge routes.
- DEFAULT_STALE_MINUTES: default pending-transfer age threshold.

## Alternative Configurations

- Route-only mode: configure BRIDGE_ROUTES_JSON and run check.mjs.
- Transfer-ledger mode: pass transfer JSON into transfers.mjs.
- CI mode: use --demo to prove stale-transfer blockers.
- Agent preflight mode: run before strategies that depend on bridged funds.

## Validation

~~~bash
npm run check
npm run smoke:read
~~~

Run the skill validator after documentation or frontmatter changes:

~~~bash
python C:\Users\Administrator\.codex\skills\.system\skill-creator\scripts\quick_validate.py C:\Users\Administrator\Desktop\cross-skills\skill-cross-bridge-sentinel\skills\cross-bridge-sentinel
~~~

## Trademark Notice

AnarchI Technologies (TM) and the phrase "Hardcoding freedom into the systems of tomorrow" are used as source-identifying marks of AnarchI Technologies. This project is not an official to-nexus package unless and until the upstream team adopts it.

## License

Apache License 2.0. See LICENSE and NOTICE.md.
