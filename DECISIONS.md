# Decisions

Append-only record of durable decisions (trade-offs decided with Mattia). Format per entry: `## D-NNN · date · status — title`, then **Why** and **Consequences**. Reversals get a new superseding entry — never edit history.

## D-001 · 2026-07-10 · accepted — Application stack

**Why:** Mora needs a supported full-stack web foundation with strong static checks.
**Consequences:** Use Next.js 16 with strict TypeScript.

## D-002 · 2026-07-10 · accepted — Native-audio analysis

**Why:** Speech nuance must reach the analysis model without a text bottleneck.
**Consequences:** Send browser WebRTC audio to `gpt-realtime-2.1`; do not use a transcription endpoint or store a transcript.

## D-003 · 2026-07-10 · accepted — Local-first persistence

**Why:** v1 does not need accounts or cloud sync.
**Consequences:** Persist product data in browser IndexedDB.

## D-004 · 2026-07-10 · accepted — API credential boundary

**Why:** A long-lived OpenAI API key must never reach the browser.
**Consequences:** Keep the API key server-only and issue ephemeral session credentials to the client.

## D-005 · 2026-07-10 · accepted — Daily correction budget

**Why:** A bounded queue keeps feedback useful instead of overwhelming.
**Consequences:** Release at most 20 new cards per day, targeting 10 grammar and 10 vocabulary cards; either category may backfill unused capacity from the other.

## D-006 · 2026-07-10 · accepted — Review model

**Why:** Corrections should preserve the context that made them relevant and require active production.
**Consequences:** Use contextual productive-recall cards scheduled by `ts-fsrs`.

## D-007 · 2026-07-10 · accepted — Recording retention

**Why:** Analysis should not create a server-side archive of learner speech.
**Consequences:** Do not store recordings server-side; delete the local retry copy after successful analysis.
