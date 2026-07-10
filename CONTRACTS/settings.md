# Learner settings contract

Contract version: 1

Learner settings are one IndexedDB record stored under the singleton key `learner-settings`. The record has exactly these fields:

| Field | Allowed value |
| --- | --- |
| `nativeLanguage` | String: `en`, `it`, `es`, `fr`, `de`, or `pt` |
| `targetLanguage` | String: `en`, `it`, `es`, `fr`, `de`, or `pt` |
| `proficiency` | String: `A1`, `A2`, `B1`, `B2`, `C1`, or `C2` |
| `dailyCardLimit` | Integer: `5`, `10`, `15`, or `20` |
| `updatedAt` | ISO-8601 UTC string |

`nativeLanguage` and `targetLanguage` must differ. The persistence boundary rejects records with missing or unknown fields, invalid values, or equal native and target languages.

The initial defaults are:

- `nativeLanguage`: `it`
- `targetLanguage`: `en`
- `proficiency`: `B1`
- `dailyCardLimit`: `20`

These defaults are onboarding conveniences, not inferred user facts. `updatedAt` is set to the current ISO-8601 UTC timestamp when F-001 first persists the defaults or a learner changes a setting.

## Ownership

- F-001 owns the settings UI. It validates the complete record and persists it in IndexedDB.
- F-002 reads settings but never mutates them.
- F-003 uses settings to configure analysis but never sends the native language as audio or stores a transcript.

Contract changes require a superseding decision in `DECISIONS.md`.
