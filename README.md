# Davin S Thomas, software engineer

A one-page portfolio: a backend engineer's record, set as a technical sheet. The hero draws the one number the page is about, a 15-minute API run against its 18-second rewrite, and the sections below name the systems behind it.

Built with React 19, TypeScript and Vite. No CSS framework: `tokens.css` holds the palette and scale, `base.css` the resets and shared rules, and `index.css` the page itself, opening with its Hallmark stamp.

## Sections

- Hero, `components/Hero.tsx`: the claim, two actions, the run drawn to scale.
- Work, `components/Projects.tsx`: three systems. The case opens its SQL, the log volume is drawn as a field of characters (`components/Field.tsx`), the batch engine is one figure.
- Record, `components/Experience.tsx`: what four years at Mercedes-Benz R&D changed, row by row, then the degree.
- Stack, `components/Skills.tsx`: languages, technologies, tools.
- Contact, `components/TerminalContact.tsx`: a three-line console that hands the message to the visitor's mail client.

## Design system

- Cobalt: cool near-white paper, blue-grey ink, one electric cobalt signal.
- Familjen Grotesk for display and figures, IBM Plex Sans for text, JetBrains Mono for code and measurements.
- Keycap controls, cut corners on the console, hairline rules, tabular figures.
- Accent footprint stays a signal: the primary action, the run's after bar, links on hover.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build in dist/
npm run preview  # serve the build
```
