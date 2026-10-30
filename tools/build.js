#!/usr/bin/env node
/*
 * Prepara il sito nella cartella _site/ (quella che GitHub Pages pubblica).
 * Copia le pagine, la grafica e le immagini, e aggiunge i caratteri tipografici
 * presi dai pacchetti @fontsource: così il sito non chiede nulla a Google Fonts.
 * Uso:  npm install && npm run build
 */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "_site");

// Pagine e cartelle da pubblicare. Se aggiungi una pagina, aggiungila qui.
const FILES = ["index.html", "privacy.html"];
const DIRS = ["css", "img"];

// Caratteri: [pacchetto @fontsource, pesi]. Devono corrispondere a css/site.css.
const FONTS = [
  ["atkinson-hyperlegible", [400, 700]],
  ["bricolage-grotesque", [700, 800]]
];

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, "fonts"), { recursive: true });

for (const f of FILES) fs.copyFileSync(path.join(ROOT, f), path.join(OUT, f));
for (const d of DIRS) fs.cpSync(path.join(ROOT, d), path.join(OUT, d), { recursive: true });

const missing = [];
for (const [pkg, weights] of FONTS) {
  for (const w of weights) {
    const file = `${pkg}-latin-${w}-normal.woff2`;
    const src = path.join(ROOT, "node_modules", "@fontsource", pkg, "files", file);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(OUT, "fonts", file));
    else missing.push(file);
  }
}

if (missing.length) {
  console.error("Caratteri non trovati: " + missing.join(", ") + ". Esegui prima «npm install».");
  process.exit(1);
}
console.log("Sito pronto in _site/");
