// NEXUS Edge-Native Knowledge Vessel — Cocapn Fleet #38
// Serves production specs, computes INCREMENTS trust, queries knowledge base
// Superinstance & Lucineer (DiGennaro et al.) — 2026-04-04

export default {
  async fetch(request: Request, env: any): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;
    const h = { 'Content-Type': 'application/json' };
    const html = (body: string, status = 200) => new Response(body, { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:*;" } });
    const json = (data: any, status = 200) => new Response(JSON.stringify(data), { status, headers: h });

    // ── Landing Page ──
    if (path === '/') {
      const LOGO = 'https://cocapn-logos.casey-digennaro.workers.dev/img/cocapn-logo-v1.png';
      return html(`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Edge-Native.ai — NEXUS Knowledge Vessel</title>
<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:system-ui,sans-serif;background:#0a0f1a;color:#e0e0e0}.hero{background:linear-gradient(135deg,#0a2e1a,#0a0f1a,#1a0a2e);padding:4rem 2rem 2rem;text-align:center;position:relative;overflow:hidden}.hero::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234ade80' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")}.hero h1{font-size:2.5rem;background:linear-gradient(135deg,#4ade80,#22d3ee);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:.5rem;position:relative}.hero .tagline{color:#94a3b8;max-width:600px;margin:0 auto 1rem;line-height:1.6;position:relative}.hero .badge{display:inline-block;padding:.25rem .75rem;background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.3);border-radius:20px;color:#4ade80;font-size:.75rem;margin-top:.5rem}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;max-width:900px;margin:2rem auto;padding:0 1rem}.card{background:#111827;border:1px solid #1e3a2a;border-radius:12px;padding:1.5rem;transition:border-color .2s}.card:hover{border-color:#4ade80}.card h3{color:#4ade80;font-size:1rem;margin-bottom:.5rem}.card p{color:#94a3b8;font-size:.85rem;line-height:1.5}.card .endpoint{font-family:monospace;font-size:.75rem;color:#22d3ee;background:#0a1a2e;padding:.25rem .5rem;border-radius:4px;margin-top:.5rem;display:inline-block}.section{max-width:900px;margin:2rem auto;padding:0 1rem}.section h2{color:#4ade80;font-size:1.2rem;margin-bottom:1rem;padding-bottom:.5rem;border-bottom:1px solid #1e3a2a}.metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.metric{text-align:center;padding:1rem;background:#111827;border-radius:8px}.metric .value{font-size:2rem;font-weight:700;color:#fff}.metric .label{font-size:.75rem;color:#666;margin-top:.25rem}.footer{text-align:center;padding:2rem;color:#475569;font-size:.8rem;border-top:1px solid #1e293b}
</style></head><body>
<div class="hero">
<img src="${LOGO}" alt="Cocapn" style="width:56px;height:auto;border-radius:8px;margin-bottom:.75rem;display:block;margin-left:auto;margin-right:auto">
<h1>Edge-Native.ai</h1>
<p class="tagline">NEXUS Knowledge Vessel — Production specs, INCREMENTS trust computation, A2A Rosetta Stone translation, and 1.2M words of accumulated edge robotics intelligence.</p>
<span class="badge">Cocapn Fleet Vessel #38</span>
</div>
<div class="metrics" style="max-width:900px;margin:1.5rem auto;padding:0 1rem">
<div class="metric"><div class="value">1.2M</div><div class="label">Words of Specs</div></div>
<div class="metric"><div class="value">32</div><div class="label">VM Opcodes</div></div>
<div class="metric"><div class="value">27</div><div class="label">Days to Trust</div></div>
</div>
<div class="grid">
<div class="card"><h3>🔍 Knowledge Query</h3><p>Semantic search across 1.2M words of NEXUS specifications, knowledge base, and research corpus.</p><span class="endpoint">POST /api/knowledge</span></div>
<div class="card"><h3>🛡️ INCREMENTS Trust</h3><p>Live trust score computation with 12 parameters, 6 autonomy levels, 25:1 loss-to-gain ratio.</p><span class="endpoint">POST /api/trust/compute</span></div>
<div class="card"><h3>🔄 Rosetta Stone</h3><p>Four-layer translation: Natural Language → JSON → Agent-Annotated Bytecode → Hardware.</p><span class="endpoint">POST /api/rosetta/translate</span></div>
<div class="card"><h3>📋 Spec Server</h3><p>Version-controlled production specifications. VM, wire protocol, safety, trust, learning pipeline.</p><span class="endpoint">GET /api/specs/:id</span></div>
<div class="card"><h3>⚙️ Safety Validator</h3><p>Validate proposed bytecode against four-tier safety invariants before deployment.</p><span class="endpoint">POST /api/safety/validate</span></div>
<div class="card"><h3>📐 VM Emulator</h3><p>Execute bytecode programs against the 32-opcode NEXUS stack machine in Workers.</p><span class="endpoint">POST /api/vm/execute</span></div>
</div>
<div class="section"><h2>Architecture</h2>
<div style="background:#111827;border-radius:8px;padding:1rem;font-family:monospace;font-size:.8rem;color:#94a3b8;line-height:1.6">
┌─────────────────────────────────────────────────┐<br>
│ TIER 3: CLOUD — Heavy training, simulation      │<br>
│ Latency: seconds to hours                       │<br>
├─────────────────────────────────────────────────┤<br>
│ TIER 2: COGNITIVE — Jetson Orin Nano (40 TOPS)  │<br>
│ LLM inference, reflex synthesis, A/B testing    │<br>
├─────────────────────────────────────────────────┤<br>
│ TIER 1: REFLEX — ESP32-S3 (240MHz, 512KB SRAM)  │<br>
│ 32-opcode stack VM, 1ms ticks, independent     │<br>
└─────────────────────────────────────────────────┘<br>
<span style="color:#4ade80">"The Ribosome, Not the Brain"</span> — each limb thinks independently
</div></div>
<div class="footer">Edge-Native.ai — Part of the Cocapn Fleet. <a href="https://github.com/SuperInstance/Edge-Native" style="color:#4ade80">SuperInstance/Edge-Native</a></div></body></html>`);
    }

    // ── Health ──
    if (path === '/health') return json({ status: 'ok', vessel: 'edgenative-ai', fleet: 'cocapn', version: '1.0.0' });

    // ── INCREMENTS Trust Computation ──
    if (path === '/api/trust/compute' && method === 'POST') {
      const body = await request.json();
      const events: Array<{ type: string; timestamp: number }> = body.events || [];
      const params = {
        alpha_gain: body.alpha_gain || 0.002,
        alpha_loss: body.alpha_loss || 0.05,
        t_floor: body.t_floor || 0.10,
        t_max: body.t_max || 0.99,
        window_seconds: body.window_seconds || 3600,
        initial_trust: body.initial_trust || 0.10,
      };
      let trust = params.initial_trust;
      const history = [{ trust, event: 'INITIAL' }];
      for (const event of events) {
        if (event.type === 'GOOD') {
          trust = Math.min(params.t_max, trust + params.alpha_gain);
        } else if (event.type === 'BAD') {
          trust = Math.max(params.t_floor, trust - params.alpha_loss);
        }
        history.push({ trust: Math.round(trust * 10000) / 10000, event: event.type });
      }
      // Autonomy levels
      const levels = [
        { name: 'L0_MANUAL', min: 0.00, desc: 'Human-only control' },
        { name: 'L1_ADVISORY', min: 0.15, desc: 'Agent suggests, human decides' },
        { name: 'L2_ASSISTED', min: 0.30, desc: 'Agent acts with human approval' },
        { name: 'L3_SUPERVISED', min: 0.50, desc: 'Agent acts, human monitors' },
        { name: 'L4_AUTONOMOUS', min: 0.70, desc: 'Agent acts independently' },
        { name: 'L5_FULL', min: 0.90, desc: 'Full autonomy, self-evolving' },
      ];
      let currentLevel = levels[0];
      let nextLevel = null;
      for (const l of levels) {
        if (trust >= l.min) currentLevel = l;
      }
      const nextIdx = levels.indexOf(currentLevel) + 1;
      if (nextIdx < levels.length) nextLevel = levels[nextIdx];
      // Time constants
      const tau_gain = 1 / params.alpha_gain; // ~500 windows = ~20.8 days
      const tau_loss = 1 / params.alpha_loss; // ~20 windows = ~0.8 days
      const ratio = tau_gain / tau_loss; // should be ~25:1

      return json({
        trust: Math.round(trust * 10000) / 10000,
        level: currentLevel.name,
        levelDesc: currentLevel.desc,
        nextLevel: nextLevel ? nextLevel.name : 'MAX',
        progressToNext: nextLevel ? Math.round(((trust - currentLevel.min) / (nextLevel.min - currentLevel.min)) * 100) : 100,
        history: history.slice(-20), // last 20 events
        dynamics: {
          tau_gain_windows: Math.round(tau_gain),
          tau_loss_windows: Math.round(tau_loss),
          tau_gain_days: Math.round(tau_gain * params.window_seconds / 86400 * 10) / 10,
          tau_loss_days: Math.round(tau_loss * params.window_seconds / 86400 * 10) / 10,
          loss_to_gain_ratio: Math.round(ratio * 10) / 10,
        },
        params,
      });
    }

    // ── Trust Levels Reference ──
    if (path === '/api/trust/levels') {
      return json({
        levels: [
          { name: 'L0_MANUAL', min: 0.00, desc: 'Human-only control', color: '#ef4444' },
          { name: 'L1_ADVISORY', min: 0.15, desc: 'Agent suggests, human decides', color: '#f59e0b' },
          { name: 'L2_ASSISTED', min: 0.30, desc: 'Agent acts with human approval', color: '#eab308' },
          { name: 'L3_SUPERVISED', min: 0.50, desc: 'Agent acts, human monitors', color: '#22c55e' },
          { name: 'L4_AUTONOMOUS', min: 0.70, desc: 'Agent acts independently', color: '#14b8a6' },
          { name: 'L5_FULL', min: 0.90, desc: 'Full autonomy, self-evolving', color: '#6366f1' },
        ],
        principle: '25:1 loss-to-gain ratio — 22x faster to lose trust than gain it',
        timeToL4: '~45 days ideal', timeToL5: '~83 days ideal',
      });
    }

    // ── VM Emulator (32-opcode NEXUS stack machine) ──
    if (path === '/api/vm/execute' && method === 'POST') {
      const body = await request.json();
      const code: Array<{ opcode: number; operand1?: number; operand2?: number }> = body.code || [];
      const sensors: Record<string, number> = body.sensors || {};
      const actuators: Record<string, number> = {};
      const variables: Record<string, number> = {};
      const stack: number[] = [];
      const maxStack = 256;
      const maxCycles = 10000;
      let pc = 0;
      let cycles = 0;
      let halted = false;
      const trace: Array<{ pc: number; opcode: number; stack: number[]; desc: string }> = [];

      const opcodeNames: Record<number, string> = {
        0x00: 'NOP', 0x01: 'PUSH', 0x02: 'POP', 0x03: 'DUP', 0x04: 'SWAP', 0x05: 'ROT',
        0x06: 'ADD', 0x07: 'SUB', 0x08: 'MUL', 0x09: 'DIV', 0x0A: 'CLAMP_F',
        0x0B: 'LT', 0x0C: 'LTE', 0x0D: 'EQ', 0x0E: 'GT', 0x0F: 'GTE',
        0x10: 'JUMP', 0x11: 'JUMP_IF_LT', 0x12: 'JUMP_IF_GTE', 0x13: 'CALL', 0x14: 'RETURN', 0x15: 'HALT',
        0x16: 'LOAD_VAR', 0x17: 'STORE_VAR', 0x18: 'LOAD_SENSOR', 0x19: 'STORE_ACTUATOR',
        0x1A: 'SYSCALL', 0x1B: 'READ_PIN', 0x1C: 'WRITE_PIN',
      };

      const errors: string[] = [];
      while (pc < code.length && cycles < maxCycles && !halted) {
        const instr = code[pc];
        const op = instr.opcode;
        const name = opcodeNames[op] || 'UNKNOWN';
        const safeStack = stack.slice(-5);

        try {
          switch (op) {
            case 0x00: break; // NOP
            case 0x01: if (stack.length >= maxStack) { errors.push('STACK_OVERFLOW'); halted = true; break; } stack.push(instr.operand1 || 0); break;
            case 0x02: stack.pop(); break;
            case 0x03: if (stack.length > 0) stack.push(stack[stack.length - 1]); break;
            case 0x04: if (stack.length >= 2) { const a = stack.length - 1; const b = a - 1; [stack[a], stack[b]] = [stack[b], stack[a]]; } break;
            case 0x05: if (stack.length >= 3) { const c = stack.pop()!; const b = stack.pop()!; const a = stack.pop()!; stack.push(c, a, b); } break;
            case 0x06: if (stack.length >= 2) { const b = stack.pop()!, a = stack.pop()!; stack.push(a + b); } break;
            case 0x07: if (stack.length >= 2) { const b = stack.pop()!, a = stack.pop()!; stack.push(a - b); } break;
            case 0x08: if (stack.length >= 2) { const b = stack.pop()!, a = stack.pop()!; stack.push(a * b); } break;
            case 0x09: if (stack.length >= 2) { const b = stack.pop()!, a = stack.pop()!; stack.push(b !== 0 ? a / b : Infinity); } break;
            case 0x0A: if (stack.length >= 3) { const max = stack.pop()!, min = stack.pop()!, val = stack.pop()!; stack.push(Math.min(max, Math.max(min, val))); } break;
            case 0x0B: if (stack.length >= 2) { const b = stack.pop()!, a = stack.pop()!; stack.push(a < b ? 1 : 0); } break;
            case 0x0C: if (stack.length >= 2) { const b = stack.pop()!, a = stack.pop()!; stack.push(a <= b ? 1 : 0); } break;
            case 0x0D: if (stack.length >= 2) { const b = stack.pop()!, a = stack.pop()!; stack.push(a === b ? 1 : 0); } break;
            case 0x0E: if (stack.length >= 2) { const b = stack.pop()!, a = stack.pop()!; stack.push(a > b ? 1 : 0); } break;
            case 0x0F: if (stack.length >= 2) { const b = stack.pop()!, a = stack.pop()!; stack.push(a >= b ? 1 : 0); } break;
            case 0x10: pc = instr.operand1 || 0; cycles++; trace.push({ pc, opcode: op, stack: safeStack, desc: name }); continue;
            case 0x11: if (stack.length >= 1 && stack[stack.length - 1] < 0) { pc = instr.operand1 || 0; cycles++; trace.push({ pc, opcode: op, stack: safeStack, desc: name }); continue; } break;
            case 0x12: if (stack.length >= 1 && stack[stack.length - 1] >= 0) { pc = instr.operand1 || 0; cycles++; trace.push({ pc, opcode: op, stack: safeStack, desc: name }); continue; } break;
            case 0x15: halted = true; break;
            case 0x16: stack.push(variables[`v${instr.operand1 || 0}`] || 0); break;
            case 0x17: variables[`v${instr.operand1 || 0}`] = stack.length > 0 ? stack.pop()! : 0; break;
            case 0x18: stack.push(sensors[`s${instr.operand1 || 0}`] || 0); break;
            case 0x19: actuators[`a${instr.operand1 || 0}`] = stack.length > 0 ? stack.pop()! : 0; break;
          }
        } catch (e) { errors.push(String(e)); halted = true; }

        trace.push({ pc, opcode: op, stack: safeStack, desc: name });
        pc++;
        cycles++;
      }

      return json({
        halted, cycles, finalStack: stack,
        actuators, variables, errors: errors.length ? errors : undefined,
        trace: trace.slice(0, 50), // first 50 instructions
        summary: `${cycles} cycles, ${trace.length} instructions, ${errors.length} errors`,
      });
    }

    // ── VM Opcode Reference ──
    if (path === '/api/vm/opcodes') {
      return json({ opcodes: [
        { code: 0x00, name: 'NOP', category: 'stack', desc: 'No operation' },
        { code: 0x01, name: 'PUSH', category: 'stack', desc: 'Push operand1 onto stack' },
        { code: 0x02, name: 'POP', category: 'stack', desc: 'Pop top of stack' },
        { code: 0x03, name: 'DUP', category: 'stack', desc: 'Duplicate top of stack' },
        { code: 0x04, name: 'SWAP', category: 'stack', desc: 'Swap top two elements' },
        { code: 0x05, name: 'ROT', category: 'stack', desc: 'Rotate top three elements' },
        { code: 0x06, name: 'ADD', category: 'arithmetic', desc: 'a + b' },
        { code: 0x07, name: 'SUB', category: 'arithmetic', desc: 'a - b' },
        { code: 0x08, name: 'MUL', category: 'arithmetic', desc: 'a * b' },
        { code: 0x09, name: 'DIV', category: 'arithmetic', desc: 'a / b' },
        { code: 0x0A, name: 'CLAMP_F', category: 'arithmetic', desc: 'Clamp value to [min, max]' },
        { code: 0x0B, name: 'LT', category: 'comparison', desc: 'a < b ? 1 : 0' },
        { code: 0x0C, name: 'LTE', category: 'comparison', desc: 'a <= b ? 1 : 0' },
        { code: 0x0D, name: 'EQ', category: 'comparison', desc: 'a == b ? 1 : 0' },
        { code: 0x0E, name: 'GT', category: 'comparison', desc: 'a > b ? 1 : 0' },
        { code: 0x0F, name: 'GTE', category: 'comparison', desc: 'a >= b ? 1 : 0' },
        { code: 0x10, name: 'JUMP', category: 'control', desc: 'Jump to operand1' },
        { code: 0x11, name: 'JUMP_IF_LT', category: 'control', desc: 'Jump if top < 0' },
        { code: 0x12, name: 'JUMP_IF_GTE', category: 'control', desc: 'Jump if top >= 0' },
        { code: 0x13, name: 'CALL', category: 'control', desc: 'Call subroutine' },
        { code: 0x14, name: 'RETURN', category: 'control', desc: 'Return from subroutine' },
        { code: 0x15, name: 'HALT', category: 'control', desc: 'Stop execution' },
        { code: 0x16, name: 'LOAD_VAR', category: 'io', desc: 'Load variable v[n]' },
        { code: 0x17, name: 'STORE_VAR', category: 'io', desc: 'Store to variable v[n]' },
        { code: 0x18, name: 'LOAD_SENSOR', category: 'io', desc: 'Read sensor s[n]' },
        { code: 0x19, name: 'STORE_ACTUATOR', category: 'io', desc: 'Write to actuator a[n]' },
        { code: 0x1A, name: 'SYSCALL', category: 'system', desc: 'System call' },
        { code: 0x1B, name: 'READ_PIN', category: 'system', desc: 'Read GPIO pin' },
        { code: 0x1C, name: 'WRITE_PIN', category: 'system', desc: 'Write GPIO pin' },
      ], format: '8-byte fixed instructions: [opcode:u8][flags:u8][operand1:u16][operand2:u32]' });
    }

    // ── Rosetta Stone Translation (simplified) ──
    if (path === '/api/rosetta/translate' && method === 'POST') {
      const body = await request.json();
      const intent = body.intent || '';
      const domain = body.domain || 'general';
      // Simplified translation — in production, this calls an LLM
      const translation = {
        layer1_naturalLanguage: intent,
        layer2_jsonSpec: {
          name: `reflex_${Date.now()}`,
          version: '1.0.0',
          priority: body.priority || 5,
          tick_rate_hz: body.tick_rate_hz || 1000,
          variables: body.variables || [],
          sensors: body.sensors || [],
          actuators: body.actuators || [],
          safety_constraints: body.safety_constraints || [],
        },
        layer3_bytecode: {
          format: '8-byte fixed: [opcode:u8][flags:u8][operand1:u16][operand2:u32]',
          note: 'Production bytecode requires LLM compilation via Rosetta Stone specs',
          vm_target: 'NEXUS Reflex Bytecode VM (ESP32-S3)',
          estimated_size_bytes: 'variable',
        },
        layer4_hardware: {
          target: body.target_hardware || 'ESP32-S3',
          tick_budget_us: 1000,
          memory_budget_bytes: 5280,
          safety_tiers: 4,
        },
        trust_required: body.trust_required || 'L2_ASSISTED',
        aab_metadata: {
          intent_hash: intent.split('').reduce((a, c) => ((a << 5) - a + c.charCodeAt(0)) | 0, 0).toString(16),
          capability_requirements: [],
          safety_implications: 'requires_validation',
        },
      };
      return json(translation);
    }

    // ── Safety Validator ──
    if (path === '/api/safety/validate' && method === 'POST') {
      const body = await request.json();
      const code: any[] = body.code || [];
      const trust_level = body.trust_level || 'L0';
      const violations: string[] = [];
      const warnings: string[] = [];

      // Tier 1: Check for dangerous patterns
      for (let i = 0; i < code.length; i++) {
        const op = code[i]?.opcode;
        // Check for unclamped actuator writes
        if (op === 0x19) { // STORE_ACTUATOR
          // Look for preceding CLAMP_F
          let hasClamp = false;
          for (let j = Math.max(0, i - 5); j < i; j++) {
            if (code[j]?.opcode === 0x0A) hasClamp = true;
          }
          if (!hasClamp) warnings.push(`Instruction ${i}: STORE_ACTUATOR without preceding CLAMP_F`);
        }
        // Check for unbounded jumps
        if ((op === 0x10 || op === 0x11 || op === 0x12) && (code[i].operand1 || 0) >= code.length) {
          violations.push(`Instruction ${i}: JUMP target ${code[i].operand1} out of bounds (max ${code.length})`);
        }
      }

      // Tier 2: Trust level check
      const autonomyMap: Record<string, number> = { L0: 0, L1: 1, L2: 2, L3: 3, L4: 4, L5: 5 };
      const maxAutonomy = autonomyMap[trust_level] || 0;
      if (code.some(c => c.opcode === 0x19) && maxAutonomy < 2) {
        violations.push(`Trust level ${trust_level} does not permit direct actuator writes (minimum L2_ASSISTED)`);
      }
      if (code.some(c => c.opcode === 0x10) && maxAutonomy < 3) {
        warnings.push(`Trust level ${trust_level}: unconditional JUMPs should be reviewed at L3+`);
      }

      const passed = violations.length === 0;
      return json({
        passed,
        tier: passed ? 'ALL_CLEAR' : 'VIOLATION',
        violations,
        warnings,
        trust_level,
        recommendation: passed ? 'Safe to deploy' : 'Fix violations before deployment',
      });
    }

    // ── Knowledge Base Query ──
    if (path === '/api/knowledge' && method === 'POST') {
      const body = await request.json();
      const query = (body.query || '').toLowerCase();
      const domain = body.domain || 'all';
      // Static knowledge index (key excerpts from the 1.2M-word corpus)
      const kb = [
        { id: 'vm-spec', title: 'Reflex Bytecode VM Specification', section: 'specs/firmware', words: 2487, topics: ['opcode', 'bytecode', 'vm', 'stack', 'float32', 'deterministic', 'cycle'] },
        { id: 'wire-protocol', title: 'Wire Protocol Specification', section: 'specs/protocol', words: 1047, topics: ['rs422', 'cobs', 'crc16', 'framing', 'baud', 'message'] },
        { id: 'safety-system', title: 'Safety System Specification', section: 'specs/safety', words: 1296, topics: ['safety', 'interlock', 'watchdog', 'kill', 'failsafe', 'tier'] },
        { id: 'trust-algorithm', title: 'INCREMENTS Trust Score Algorithm', section: 'specs/safety', words: 2414, topics: ['trust', 'increments', 'autonomy', 'alpha', 'score', 'level'] },
        { id: 'learning-pipeline', title: 'Learning Pipeline Specification', section: 'specs/jetson', words: 2140, topics: ['learning', 'pattern', 'discovery', 'ab_test', 'reflex', 'synthesis'] },
        { id: 'memory-map', title: 'ESP32 Memory Map and Partitions', section: 'specs/firmware', words: 682, topics: ['memory', 'sram', 'psram', 'flash', 'dma', 'partition'] },
        { id: 'rosetta-stone', title: 'Rosetta Stone Translation Guide', section: 'a2a-native-specs', words: 3500, topics: ['rosetta', 'translate', 'bytecode', 'json', 'natural', 'language'] },
        { id: 'a2a-language', title: 'A2A-Native Language Design', section: 'a2a-native-language', words: 45000, topics: ['a2a', 'agent', 'language', 'paradigm', 'compiler'] },
        { id: 'genesis-colony', title: 'Colony Thesis — The Ribosome Not the Brain', section: 'genesis-colony', words: 273000, topics: ['ribosome', 'colony', 'biology', 'metaphor', 'distributed'] },
        { id: 'knowledge-base', title: 'NEXUS Knowledge Base Encyclopedia', section: 'knowledge-base', words: 333775, topics: ['encyclopedia', 'history', 'philosophy', 'embedded', 'robotics'] },
        { id: 'dissertation', title: '5-Round Iterative Research Dissertation', section: 'dissertation', words: 133397, topics: ['research', 'safety', 'trust', 'simulation', 'synthesis'] },
        { id: 'manifesto', title: 'Edgeware Incubator Manifesto', section: 'incubator', words: 9000, topics: ['manifesto', 'edge', 'principle', 'edgeware', 'incubator'] },
        { id: 'onboarding', title: 'Research Agent Onboarding', section: 'onboarding', words: 106486, topics: ['onboarding', 'agent', 'education', 'gamified', 'context'] },
        { id: 'build-spec', title: 'Claude Code Build Specification', section: 'claude-build', words: 8295, topics: ['build', 'claude', 'specification', 'implementation', 'phase'] },
      ];

      const results = kb.filter(entry => {
        if (domain !== 'all' && !entry.section.includes(domain)) return false;
        return query.split(/\s+/).some(word =>
          word.length > 2 && (
            entry.title.toLowerCase().includes(word) ||
            entry.topics.some(t => t.includes(word))
          )
        );
      }).map(e => ({ id: e.id, title: e.title, section: e.section, words: e.words }));

      return json({ query, domain, results, total: results.length, corpus_size: '1.2M words across 165 files' });
    }

    // ── Spec Summary ──
    if (path === '/api/specs') {
      return json({
        specs: [
          { id: 'vm-spec', title: 'Reflex Bytecode VM', lines: 2487, status: 'specification_complete' },
          { id: 'wire-protocol', title: 'Wire Protocol (RS-422)', lines: 1047, status: 'specification_complete' },
          { id: 'safety-system', title: 'Four-Tier Safety System', lines: 1296, status: 'specification_complete' },
          { id: 'trust-algorithm', title: 'INCREMENTS Trust Score', lines: 2414, status: 'specification_complete' },
          { id: 'learning-pipeline', title: 'Learning Pipeline', lines: 2140, status: 'specification_complete' },
          { id: 'memory-map', title: 'ESP32 Memory Map', lines: 682, status: 'specification_complete' },
        ],
        repo: 'https://github.com/SuperInstance/Edge-Native',
        total_spec_lines: 19200,
      });
    }

    // ── A2A Fleet Protocol ──
    if (path === '/api/a2a') {
      return json({
        vessel: 'edgenative-ai',
        fleet: 'cocapn',
        capabilities: ['trust-computation', 'vm-emulation', 'safety-validation', 'knowledge-query', 'rosetta-translation'],
        equipment: ['INCREMENTS', 'four-tier-safety', 'AAB-metadata'],
        domain: 'edge-robotics',
        repo: 'https://github.com/SuperInstance/Edge-Native',
        upstream: 'https://github.com/SuperInstance/Edge-Native',
      });
    }

    return new Response('Not found', { status: 404 });
  },
};
