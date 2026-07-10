# Log

Append-only. One entry per session/cycle: what happened, what changed, what's next.

---

## 2026-07-10 — Scaffolded

Repo created by `mfactory-new` with artifacts, armed hooks, and CI gates. Placeholder `lint`/`typecheck`/`test` scripts fail deliberately until F-000 (toolchain) makes them real.

## 2026-07-10 — Built F-000 toolchain

Recorded the approved Mora definition and backlog, bootstrapped a minimal Next.js 16 application, and replaced placeholder gates with ESLint, strict TypeScript, Vitest, Testing Library, jsdom, and V8 coverage. Verified with all committed gates, the coverage ratchet, and `git diff --check`. The bootstrap necessarily couples Define artifacts to F-000 because the placeholder gates prevent an earlier docs-only PR. A second builder recovered the first builder's dirty worktree after an unexpected termination; mfactory provided no automatic timeout, heartbeat, or restart.

## 2026-07-10 — Repaired F-000 review findings

Expanded coverage from one page to all TypeScript product source, tested the root layout's metadata and language semantics, and committed Next's stable generated TypeScript configuration. Verified with all committed gates and two consecutive production builds; the second build left tracked files unchanged. The factory still has no scaffold-owned coverage-scope assertion or build/idempotence gate.
