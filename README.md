# Edge-Native.ai — NEXUS Knowledge Vessel

Cocapn Fleet Vessel #38 — Production specs, INCREMENTS trust computation, A2A Rosetta Stone translation, and 1.2M words of accumulated edge robotics intelligence.

## Endpoints

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Landing page |
| `/health` | GET | Health check |
| `/api/trust/compute` | POST | Live INCREMENTS trust score computation |
| `/api/trust/levels` | GET | Autonomy level reference |
| `/api/vm/execute` | POST | Execute bytecode on 32-opcode NEXUS stack VM |
| `/api/vm/opcodes` | GET | VM opcode reference |
| `/api/rosetta/translate` | POST | Four-layer intent translation |
| `/api/safety/validate` | POST | Validate bytecode against safety invariants |
| `/api/knowledge` | POST | Query 1.2M-word NEXUS knowledge base |
| `/api/specs` | GET | Production spec inventory |
| `/api/a2a` | GET | A2A fleet protocol metadata |

## INCREMENTS Trust Example

```bash
curl -X POST https://edgenative-ai.casey-digennaro.workers.dev/api/trust/compute \
  -H 'Content-Type: application/json' \
  -d '{"events":[{"type":"GOOD"},{"type":"GOOD"},{"type":"BAD"}]}'
```

6 autonomy levels (L0→L5), 25:1 loss-to-gain ratio, ~27 days to full autonomy.

## Upstream

[SuperInstance/Edge-Native](https://github.com/SuperInstance/Edge-Native) — Production specification corpus

## License

Superinstance & Lucineer (DiGennaro et al.) — 2026
