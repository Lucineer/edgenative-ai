# Edge-Native AI — NEXUS Knowledge Vessel

You can run an agent without a datacenter.

---

## What it is
This is a minimal agent runtime for the edge, built as a single Cloudflare Worker. It's for devices and systems that need to operate with local logic and verifiable behavior.

**Live Instance:** https://edgenative-ai.casey-digennaro.workers.dev

## Why it's different
*   **One File.** The entire runtime logic is in a single, readable source file with zero external dependencies.
*   **Local Trust Computation.** It calculates a simple trust score for proposed actions before executing them.
*   **Edge-Only.** By default, no data is sent externally. It runs entirely on Cloudflare's free edge workers.
*   **VM Emulation.** Includes a basic stack-based VM to test instruction sequences that could run on microcontrollers.

## Quick Start
1.  Fork this repository.
2.  Deploy it to a Cloudflare Worker (it works on the free plan).
3.  Optionally, add your own API keys for enhanced natural language translation.

## What it does
*   **Trust Scoring:** Tracks a score for operational decisions, applying higher penalties for unsafe-sounding actions than rewards for safe ones.
*   **Intent Translation:** A structured pipeline that converts natural language into a sequence of annotated instructions.
*   **Specification Query:** Lets you semantically search a library of edge robotics and fleet protocol documents.
*   **Safety Pre-Check:** Validates proposed actions against a set of configurable rules before any emulated execution.
*   **VM Emulation:** Provides a 32-opcode virtual machine to model execution for hardware like the ESP32.

## A Current Limitation
Full natural language understanding requires external LLM API keys. The core trust and translation logic works locally, but translating novel, complex sentences needs a configured key. This is a deliberate trade-off for transparency and simplicity.

## Bring Your Own Keys (Optional)
For full NLU capabilities, set these environment variables in your Worker:
`DEEPSEEK_API_KEY`, `DEEPINFRA_API_KEY`, or `SILICONFLOW_API_KEY`.

## License
MIT License.

Attribution: Superinstance & Lucineer (DiGennaro et al.).

---
<div>
  <a href="https://the-fleet.casey-digennaro.workers.dev">The Fleet</a> • <a href="https://cocapn.ai">Cocapn</a>
</div>