---
theme: default
title: "Agentic Coding : quand ton terminal devient ton co-développeur"
info: |
  Galsen DEV — Live Koor 2026
  Présentation sur l'Agentic Coding avec OpenCode
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: "Inter"
  mono: "Fira Code"
layout: cover
background: "#101113"
class: "text-left"
---

<div class="h-full flex flex-col justify-center pl-2">
  <div class="text-xs tracking-widest mb-4" style="color:#8B949E">GALSEN DEV · LIVE KOOR · 2026</div>

  <h1 class="text-6xl font-black leading-tight mb-4" style="color:#fff">
    Agentic<br><span style="color:#2E9E7E">Coding</span>
  </h1>

  <p class="text-xl italic mb-8" style="color:#8B949E">
    Quand ton terminal devient ton co-développeur.
  </p>

  <div class="text-sm" style="color:#8B949E">
    🧱 &nbsp;Agentic · OpenCode · Claude Code · Demo · Coding
  </div>
</div>

---
layout: default
background: "#101113"
---

<div class="h-full flex items-center gap-12">
  <div class="flex flex-col items-center gap-4 shrink-0">
    <img src="/assets/daooda.jpg" style="width:110px;height:110px;border-radius:50%;border:3px solid #2E9E7E;object-fit:cover" />
    <div class="text-sm accent font-bold">@daoodaba975</div>
  </div>
  <div>
    <h1 class="text-4xl font-black text-white mb-1">Daouda BA</h1>
    <p class="accent font-semibold mb-1">FullStack Developer & Open Source Enthusiast</p>
    <p class="text-sm muted mb-6">Founder & Lead of <a href="https://galsen.dev" target="_blank" class="accent" style="text-decoration:none">Galsen DEV</a></p>
    <div class="flex flex-col gap-2">
      <a href="https://github.com/daoodaba975" target="_blank" class="flex items-center gap-3 card" style="padding:0.6rem 1rem;border-color:rgba(46,158,126,0.3);text-decoration:none;width:fit-content">
        <svg height="20" width="20" viewBox="0 0 16 16" fill="#2E9E7E"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
        <span class="text-sm text-white">github.com/daoodaba975</span>
      </a>
    </div>
  </div>
</div>

---
layout: default
background: "#101113"
---

# <span class="accent">Au programme</span>

<div class="grid grid-cols-1 gap-3 mt-6">
  <div class="card flex items-center justify-between">
    <div class="flex items-center gap-3">
      <span class="step-num">1</span>
      <span class="font-semibold text-white">C'est quoi l'Agentic Coding ?</span>
    </div>
    <span class="accent text-sm">15 min</span>
  </div>
  <div class="card flex items-center justify-between">
    <div class="flex items-center gap-3">
      <span class="step-num">2</span>
      <span class="font-semibold text-white">Demo avec OpenCode</span>
    </div>
    <span class="accent text-sm">25 min</span>
  </div>
  <div class="card flex items-center justify-between">
    <div class="flex items-center gap-3">
      <span class="step-num">3</span>
      <span class="font-semibold text-white">Ce que l'agent fait bien… et mal</span>
    </div>
    <span class="accent text-sm">10 min</span>
  </div>
  <div class="card flex items-center justify-between">
    <div class="flex items-center gap-3">
      <span class="step-num">4</span>
      <span class="font-semibold text-white">Q&A</span>
    </div>
    <span class="accent text-sm">15 min</span>
  </div>
</div>

---
layout: default
background: "#101113"
---

# <span class="accent">Agentic Coding</span> - Définition

<div class="card mt-6" style="border-color:rgba(46,158,126,0.4)">
  <p class="text-lg text-white leading-relaxed">
    L'<span class="accent font-bold">Agentic Coding</span> est une approche où un <span class="accent font-bold">agent IA</span> ne se contente pas de suggérer du code.<br>
    Il <span class="accent font-bold">planifie</span>, <span class="accent font-bold">exécute</span> et <span class="accent font-bold">itère</span> de manière autonome pour accomplir une tâche complexe.
  </p>
</div>

<div class="grid grid-cols-3 gap-4 mt-6">
  <div class="card text-center">
    <div class="text-2xl mb-2">🧠</div>
    <div class="font-bold accent mb-1">Planifie</div>
    <div class="text-sm muted">Comprend le contexte et définit un plan d'action</div>
  </div>
  <div class="card text-center">
    <div class="text-2xl mb-2">⚙️</div>
    <div class="font-bold accent mb-1">Exécute</div>
    <div class="text-sm muted">Lit, écrit et modifie le code de façon autonome</div>
  </div>
  <div class="card text-center">
    <div class="text-2xl mb-2">🔁</div>
    <div class="font-bold accent mb-1">Itère</div>
    <div class="text-sm muted">Corrige ses erreurs en lisant les retours</div>
  </div>
</div>

---
layout: default
background: "#101113"
---

# <span class="accent">Completion</span> vs <span class="accent">Agentic</span>

<div class="grid grid-cols-2 gap-5 mt-6">
  <div class="card" style="border-color: rgba(139,148,158,0.3)">
    <div class="font-bold text-center mb-4 py-1 rounded" style="background:#8B949E;color:#101113">
      Completion (Copilot-style)
    </div>
    <ul class="space-y-2 text-sm" style="color:#cdd9e5">
      <li>→ Suggère la ligne suivante</li>
      <li>→ Réagit à ton contexte immédiat</li>
      <li>→ Tu restes au volant en permanence</li>
      <li>→ Outil <strong>passif</strong></li>
    </ul>
  </div>
  <div class="card" style="border-color: rgba(0,212,170,0.5)">
    <div class="font-bold text-center mb-4 py-1 rounded" style="background:#2E9E7E;color:#101113">
      Agentic Coding ✦
    </div>
    <ul class="space-y-2 text-sm accent">
      <li>→ Planifie → exécute → vérifie</li>
      <li>→ Lit ton codebase en entier</li>
      <li>→ Prend des décisions autonomes</li>
      <li>→ Tu guides, l'agent <strong>construit</strong></li>
    </ul>
  </div>
</div>

---
layout: default
background: "#101113"
---

# L'analogie de la <span class="accent">voiture</span>

<div class="grid grid-cols-2 gap-6 mt-8">
  <div class="card text-center" style="border-color:rgba(139,148,158,0.3)">
    <div style="font-size:4rem;margin-bottom:1rem">🚗</div>
    <div class="font-bold text-lg mb-2" style="color:#8B949E">Completion</div>
    <div class="text-sm muted mb-4">Voiture avec GPS et assistances</div>
    <div class="text-sm text-white leading-relaxed">
      Le GPS suggère, le radar alerte, l'ABS corrige…<br>
      Mais <strong style="color:#8B949E">tu conduis chaque kilomètre.</strong>
    </div>
  </div>
  <div class="card text-center" style="border-color:rgba(46,158,126,0.5)">
    <div style="font-size:4rem;margin-bottom:1rem">🤖</div>
    <div class="font-bold text-lg accent mb-2">Agentic</div>
    <div class="text-sm muted mb-4">Tesla en Full Self-Driving</div>
    <div class="text-sm text-white leading-relaxed">
      Tu dis <em>"va au bureau"</em>, tu poses les mains…<br>
      <strong class="accent">Il gère le trajet.</strong>
    </div>
  </div>
</div>

---
layout: default
background: "#101113"
---

# <span class="accent">OpenCode</span>

### _L'agent open-source dans ton terminal_

<div class="grid grid-cols-3 gap-4 mt-6">
  <div class="card text-center">
    <div class="text-3xl mb-3">⟨/⟩</div>
    <div class="font-bold accent mb-2">Open Source</div>
    <div class="text-sm muted">Code accessible, pas de black box. Tu vois ce que l'agent fait.</div>
  </div>
  <div class="card text-center">
    <div class="text-3xl mb-3">⚡</div>
    <div class="font-bold accent mb-2">Terminal-first</div>
    <div class="text-sm muted">Léger, rapide. Tourne sur n'importe quelle machine.</div>
  </div>
  <div class="card text-center">
    <div class="text-3xl mb-3">🌐</div>
    <div class="font-bold accent mb-2">Multi-modèles</div>
    <div class="text-sm muted">Fonctionne avec Claude, GPT-4, Gemini et d'autres.</div>
  </div>
</div>

<div class="mt-6 rounded-lg px-4 py-3 font-mono text-sm flex items-center justify-between" style="background:#000;border:1px solid #2E9E7E">
  <div>
    <span class="accent">$</span> <span style="color:#fff">npm install -g opencode-ai</span>
  </div>
  <button
    onclick="navigator.clipboard.writeText('npm install -g opencode-ai').then(() => { this.textContent = '✓ Copié'; setTimeout(() => this.textContent = 'Copier', 2000) })"
    style="background:#2E9E7E;color:#000;border:none;border-radius:6px;padding:2px 12px;font-size:0.8em;font-weight:700;cursor:pointer">
    Copier
  </button>
</div>

---
layout: default
background: "#101113"
---

# <span class="accent">Demo Time</span>

<div class="grid grid-cols-1 gap-2 mt-3">
  <div class="card flex items-center gap-3" style="padding:0.7rem 1rem">
    <span class="step-num shrink-0" style="width:1.6rem;height:1.6rem;font-size:0.8rem">01</span>
    <div>
      <div class="font-bold accent text-sm">Init du projet</div>
      <div class="text-xs muted">Repo vide + README, on part de zéro</div>
    </div>
  </div>
  <div class="card flex items-center gap-3" style="padding:0.7rem 1rem">
    <span class="step-num shrink-0" style="width:1.6rem;height:1.6rem;font-size:0.8rem">02</span>
    <div>
      <div class="font-bold accent text-sm">L'agent planifie</div>
      <div class="text-xs muted">Il lit le contexte et propose un plan avant de coder</div>
    </div>
  </div>
  <div class="card flex items-center gap-3" style="padding:0.7rem 1rem">
    <span class="step-num shrink-0" style="width:1.6rem;height:1.6rem;font-size:0.8rem">03</span>
    <div>
      <div class="font-bold accent text-sm">L'agent exécute</div>
      <div class="text-xs muted">Il crée fichiers, écrit le code, installe les dépendances</div>
    </div>
  </div>
  <div class="card flex items-center gap-3" style="padding:0.7rem 1rem">
    <span class="step-num shrink-0" style="width:1.6rem;height:1.6rem;font-size:0.8rem">04</span>
    <div>
      <div class="font-bold accent text-sm">Il se corrige</div>
      <div class="text-xs muted">Erreur → l'agent lit les logs et réessaie seul</div>
    </div>
  </div>
  <div class="card flex items-center gap-3" style="padding:0.7rem 1rem">
    <span class="step-num shrink-0" style="width:1.6rem;height:1.6rem;font-size:0.8rem">05</span>
    <div>
      <div class="font-bold accent text-sm">Notre rôle</div>
      <div class="text-xs muted">Guider, valider, recadrer - pas écrire</div>
    </div>
  </div>
</div>

---
layout: default
background: "#101113"
---

<div class="grid grid-cols-2 gap-6 h-full items-center">
  <div>
    <h2 class="text-2xl font-bold mb-4">Ce que l'agent fait <span class="accent">bien</span>…</h2>
    <div class="card" style="border-color:rgba(46,158,126,0.4)">
      <ul class="space-y-3 text-sm text-white">
        <li>Boilerplate & scaffolding</li>
        <li>Refactoring à grande échelle</li>
        <li>Debugger des erreurs connues</li>
        <li>Générer des tests unitaires</li>
        <li>Lire et comprendre du legacy code</li>
      </ul>
    </div>
  </div>
  <div>
    <h2 class="text-2xl font-bold mb-4">… et <span class="danger">mal</span></h2>
    <div class="card" style="border-color:rgba(248,113,113,0.4)">
      <ul class="space-y-3 text-sm text-white">
        <li>Logique métier complexe</li>
        <li>Contexte > fenêtre = perd le fil</li>
        <li>Peut boucler sur ses erreurs</li>
        <li>Architecture haut niveau</li>
        <li>Besoin de supervision humaine</li>
      </ul>
    </div>
  </div>
</div>

---
layout: cover
background: "#101113"
---

<div class="h-full flex flex-col justify-center">
  <h1 class="text-7xl font-black mb-6" style="color:#fff">
    Questions &<br><span class="accent">Échanges</span>
  </h1>
  <p class="text-lg italic muted">
    Posez vos questions et partagez vos expériences !
  </p>
</div>

---
layout: cover
background: "#101113"
---

<div class="h-full flex flex-col justify-center items-center text-center">
  <div class="text-5xl font-black mb-8" style="color:#cdd9e5">
    Jajeuf
  </div>
  <div class="card" style="max-width:600px;border-color:rgba(46,158,126,0.4)">
    <p class="text-lg italic" style="color:#cdd9e5">
      "L'IA peut écrire mille lignes en quelques secondes.<br>Mais sans le développeur pour poser les fondations, elle construit sur du sable."
    </p>
  </div>
  <div class="text-sm muted mt-8"><a href="https://daooda.dev" target="_blank" class="accent" style="text-decoration:none">daooda.dev</a></div>
</div>
