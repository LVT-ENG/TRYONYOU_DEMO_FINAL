# TRYONYOU – Architecture Overview

Tech stack:
- React 18
- Vite 7.1.2
- react-router-dom v6
- @vitejs/plugin-react
- ES Modules only

Base structure (inside project root):

- package.json
- vite.config.js
- index.html
- src/
  - main.jsx
  - App.jsx
  - components/
  - pages/
  - layouts/
  - assets/
    - images/
    - styles/
  - hooks/
  - context/
  - utils/

SPA requirements:
- Single Page Application (SPA) with client-side routing.
- No orphan files (everything that exists must be used).
- No duplicate components or dead code.
- Clean imports, no relative hell (keep structure logical).
- All visible text in English.