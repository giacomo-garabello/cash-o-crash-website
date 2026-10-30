# Cash o Crash — sito

Pagina web e privacy policy di [Cash o Crash](https://github.com/giacomo-garabello/cash-o-crash), il gioco di finanza personale in stile roguelike.

- `index.html` — pagina del gioco
- `privacy.html` — informativa sulla privacy (l'indirizzo da dare a Google Play)
- `css/site.css` — grafica «Adesivi», con gli stessi colori del gioco
- `img/` — icona e favicon, ricavate da `assets/icon-only.png` del gioco
- `tools/build.js` — prepara la cartella `_site/` con i caratteri tipografici

## Indirizzi

Una volta attivo GitHub Pages:

- sito: `https://giacomo-garabello.github.io/cash-o-crash-website/`
- privacy policy: `https://giacomo-garabello.github.io/cash-o-crash-website/privacy.html`

## Pubblicazione

Il sito si pubblica da solo a ogni push su `main` (`.github/workflows/pages.yml`).

**Solo la prima volta:** nel repository apri *Settings › Pages* e in *Build and deployment › Source* scegli **GitHub Actions**. Poi rilancia il workflow dalla scheda *Actions* (o fai un push qualsiasi).

## Provarlo sul computer

Serve Node.js 18 o successivo.

```
npm install
npm run build
```

Poi apri `_site/index.html` nel browser. Aprendo direttamente `index.html` dalla cartella principale il sito funziona lo stesso, ma con i caratteri di sistema.

## Caratteri tipografici

Il sito non usa Google Fonts: Atkinson Hyperlegible e Bricolage Grotesque vengono dai pacchetti `@fontsource` e sono ospitati sul sito stesso. Così la privacy policy può dire, senza eccezioni, che il sito non carica nulla da servizi esterni.

## Da aggiornare quando...

- **l'app esce su Google Play:** in `index.html` sostituisci il pulsante «In arrivo su Android» con il link allo store (c'è un commento pronto).
- **il gioco cambia** (nuove funzioni online, statistiche, pubblicità, account, nuovi permessi Android): aggiorna `privacy.html` *prima* di pubblicare la nuova versione, e cambia la data in alto.
- **cambiano le regole** in `data/config.js` del gioco (traguardi, soldi di partenza, eventi al mese): aggiorna i numeri nella sezione «Per la scuola» e «Come si vince».
