# Learnings

## L-001 · 2026-07-10 — Define needed a manual substitute

**Evidence:** The scaffolded feature ledger has no F-008, while WO-000 manually carries the missing `PRODUCT.md` and `DECISIONS.md` Define work.
**Candidate factory improvement:** Add an explicit, generated Define work order when a scaffold has no feature reserved for Define artifacts. This is a candidate, not an approved change.

## L-002 · 2026-07-10 — The first PR couples definition and toolchain

**Evidence:** The scaffolded `lint`, `typecheck`, and `test` scripts intentionally fail, so approved Define artifacts cannot pass CI in a docs-only first PR and must ride with F-000.
**Candidate factory improvement:** Either formalize this bootstrap coupling in the scaffold playbook or provide a narrowly scoped pre-toolchain docs gate. This is a candidate, not an approved change.

## L-003 · 2026-07-10 — Review status shares the factory credential

**Evidence:** WO-000 requires a real PR but provides no separate reviewer identity or credential boundary, so automated review status is posted through the configured factory credential.
**Candidate factory improvement:** Provision a distinct reviewer credential and enforce author/reviewer actor separation. This is a candidate, not an approved change.

## L-004 · 2026-07-10 — Scaffolds have no factory version or sync path

**Evidence:** The product contains copied `.mfactory` runtime artifacts but no manifest of the source mfactory revision and no command or documented path to sync later factory fixes.
**Candidate factory improvement:** Stamp scaffolds with a source revision and add an explicit, reviewable sync mechanism. This is a candidate, not an approved change.

## L-005 · 2026-07-10 — Crashed workers recover only from the worktree

**Evidence:** The first F-000 worker crashed after leaving usable uncommitted changes on `feat/000-toolchain`, but mfactory supplied no automatic timeout, heartbeat, or restart mechanism; recovery required a newly assigned worker to inspect the dirty worktree.
**Candidate factory improvement:** Add worker timeouts and heartbeats plus an automatic restart path that preserves and reports recoverable worktree state. These are candidates, not approved changes.

## L-006 · 2026-07-10 — Green bootstrap gates hid scope and build gaps

**Evidence:** The mechanical coverage ratchet trusted a product-controlled include scope that measured only `page.tsx`, while CI omitted a production build that rewrote tracked TypeScript configuration; isolated review found the resulting green gate misleading.
**Candidate factory improvement:** Add a scaffold-owned coverage-scope assertion and a production build/idempotence gate. These are candidates, not approved changes.

## L-007 · 2026-07-10 — Pre-merge state went stale after squash merge

**Evidence:** Builder-authored pre-merge `STATE.md` became stale immediately after squash merge, and the copied Mora playbook has no post-merge reconciliation step.
**Candidate factory improvement:** Add a Foreman-owned post-merge truth check plus scaffold sync. This is a candidate, not an approved product change.
