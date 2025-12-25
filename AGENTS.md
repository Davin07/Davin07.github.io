# AGENTS.md

## Build/Lint/Test Commands
- **Dev server**: `npm run dev`
- **Build**: `npm run build`
- **Preview**: `npm run preview`
- **No linting configured** - add ESLint if needed
- **No testing configured** - add Jest/Vitest if needed

## Code Style Guidelines

### Imports & Dependencies
- Use ES6 named imports: `import React, { useState } from 'react'`
- Group imports: React/React DOM, then third-party libraries, then local components
- Use path aliases: `@/` for root directory imports

### Components
- Use functional components with TypeScript: `const Component: React.FC = () => {}`
- Destructure props in function parameters
- Export components as default: `export default Component`
- PascalCase naming for component files and functions

### TypeScript
- Define interfaces for complex props and data structures
- Use enums for categorized constants
- Explicitly type component props and state

### Styling
- Use Tailwind CSS utility classes exclusively
- Follow "Deep Void" theme: dark backgrounds (#020617), cyan (#38bdf8) primary, purple (#818cf8) secondary
- Use `font-mono` for code/technical elements, `font-bold` for emphasis

### Error Handling & Best Practices
- Minimal comments - code should be self-documenting
- Use descriptive variable names following camelCase
- Prefer const over let, avoid var
- Handle loading/error states appropriately in components</content>
<parameter name="filePath">D:\Hmmm\Projects\Vibe\portfolio\Davin07.github.io\AGENTS.md