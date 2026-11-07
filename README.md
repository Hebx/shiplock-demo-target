# shiplock-demo-target

Disposable demo target for **ShipLock** (SHA-guarded, human-approved merges). **Safe to delete.**

## What this repo is

A tiny TypeScript project used only to demonstrate ShipLock end to end. It contains no real
secrets, no credentials, and nothing of value.

## How PRs here are merged

Pull requests in this repo are merged **only by ShipLock**, and only when all of the following
are bound to the PR's exact current head SHA:

1. An independent, paid (x402) review of the bytes at that SHA with no blocking findings.
2. A one-time human approval via World ID for that exact merge action.

ShipLock then calls GitHub's merge API with the expected head SHA, so any new push after
approval (a changed SHA) makes the merge fail closed.

## Demo PRs

- `demo/clean-change` — happy path: benign change, expected to pass review.
- `demo/risky-change` — block path: intentionally risky patterns; must never be merged.

## Local use

```bash
npm install
npm run typecheck
```
