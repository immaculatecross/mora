# WO-CONTRACT-001 - Pin the learner settings contract

Feature: Define repair before F-001 - Branch: `docs/settings-contract` - Diff cap: 400 lines

## Objective

Pin the learner settings surface before F-001 distributes it across UI, IndexedDB, recording, and native-audio analysis. This is an Owner-approved artifact work unit, not product implementation.

## Acceptance criteria

1. Append D-008 to `DECISIONS.md`: Mora v1 supports English, Italian, Spanish, French, German, and Portuguese; settings default to native Italian, target English, CEFR B1, and 20 new cards/day. The defaults are onboarding conveniences, not inferred user facts.
2. Add `CONTRACTS/settings.md` defining version 1 exactly: singleton key `learner-settings`; `nativeLanguage` and `targetLanguage` use `en|it|es|fr|de|pt` and must differ; `proficiency` uses `A1|A2|B1|B2|C1|C2`; `dailyCardLimit` uses `5|10|15|20`; `updatedAt` is an ISO-8601 UTC string; unknown fields are rejected at the persistence boundary.
3. The contract names ownership: F-001 UI validates and persists it in IndexedDB; F-002 reads it but never mutates it; F-003 uses it to configure analysis but never sends the native language as audio or stores a transcript. Contract changes require a superseding decision.
4. Correct `STATE.md` to current post-merge truth: F-000 is on `master`, PR #1 passed CI plus isolated review after one repair, and F-001 is ready once this contract merges.
5. Append `LOG.md` with the contract-pinning cycle. Add L-007 to `learnings.md`: builder-authored pre-merge STATE became stale immediately after squash merge and the copied Mora playbook has no post-merge reconciliation step; candidate improvement is a Foreman-owned post-merge truth check plus scaffold sync, not an approved product change.
6. No feature status, source, dependency, toolchain, workflow, or `.mfactory` runtime files change beyond this completed work order. All committed gates and `git diff --check` pass.

## Contracts that apply

This work order creates the initial `CONTRACTS/settings.md` under approved D-008.

## Files that matter

- `DECISIONS.md`
- `CONTRACTS/settings.md`
- `STATE.md`
- `LOG.md`
- `learnings.md`
- `.mfactory/work-orders/WO-CONTRACT-001.md`

## Decisions that apply

- D-001: Next.js with strict TypeScript.
- D-003: product data is local-first in IndexedDB.
- D-005: at most 20 new cards per day.

## Out of scope

- Implementing settings UI, storage code, routes, recording, or analysis.
- Moving F-001 from backlog.
- Syncing newer mfactory runtime files into Mora.
- Expanding the supported-language catalog.

## Exit report

The builder appends the required result here.

RESULT: done
Branch/PR: `docs/settings-contract`
Changed:   Recorded D-008 and added the exact version 1 learner settings contract.
Changed:   Corrected post-merge state and recorded the contract cycle and reconciliation lesson.
Verified:  `npm run lint`, `npm run typecheck`, `npm run test`, contract assertions, scope assertions, and `git diff --check`.
Risks:     none identified
