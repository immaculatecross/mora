# Features — mora

Single source of truth for what gets built. Statuses: `backlog` → `building` → `built` → `verified`. Proposals enter as `unapproved` (max 5 open) and become `backlog` only on Mattia's approval. Every feature needs acceptance criteria before it is buildable.

| ID | Status | Feature | Acceptance criteria |
|---|---|---|---|
| F-000 | built | Toolchain | Stack chosen in Define; `lint`, `typecheck`, `test` are real commands (the scaffolded placeholders fail on purpose); coverage ratchet armed. |
| F-001 | backlog | Shell and settings | Accessible application shell exposes target-language and daily-goal settings, persists them locally, and restores them after reload. |
| F-002 | backlog | Resilient 30-minute recorder | Learners can record, pause, resume, and stop up to 30 minutes of audio; interruption and retry states preserve a recoverable local copy. |
| F-003 | backlog | Native-audio analysis | Browser audio reaches `gpt-realtime-2.1` through ephemeral credentials, returns structured grammar and vocabulary findings, and neither creates a transcript nor stores server-side audio. |
| F-004 | backlog | Findings inbox and daily release | Learners can accept or dismiss findings; the daily release creates at most 20 new cards with a 10 grammar/10 vocabulary target and cross-category backfill. |
| F-005 | backlog | FSRS review | Due contextual productive-recall cards can be answered and graded, and `ts-fsrs` persists the resulting schedule locally. |
| F-006 | backlog | Mini-lessons | Accepted findings can open short contextual lessons whose completion returns the learner to the originating correction or review. |
| F-007 | backlog | Privacy, QA, and deploy | Automated checks cover retention and credential boundaries, accessibility and supported-browser flows pass, and the production deployment passes a documented smoke test. |
