# Portfolio — Kylle Vryann Manacio

A dark-themed developer portfolio built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS v4**.

## Tech Stack

- **React 19** + TypeScript
- **Vite 7** — blazing fast dev & build
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite`
- **Google Fonts** — Inter, JetBrains Mono
- **Material Symbols** — icon set

## Project Structure

```
src/
├── components/       # UI components (Hero, Header, Skills, etc.)
├── data/
│   ├── portfolio.json   # ← All site content lives here
│   └── portfolio.ts     # Type-safe re-exports
├── App.tsx           # Root layout
└── index.css         # Tailwind theme & custom utilities
```

## Editing Content

All portfolio content is stored in **`src/data/portfolio.json`**. Update this single file to change:

| Key            | What it controls                        |
| -------------- | --------------------------------------- |
| `profile`      | Name, tagline, image, links, status     |
| `skills`       | Core Protocols skill cards              |
| `experience`   | Execution History timeline              |
| `projects`     | Featured Output project cards           |
| `education`    | Degree & school info                    |
| `awards`       | Awards & Certificates list              |
| `contactLinks` | Contact grid (email, GitHub, etc.)      |
| `footer`       | Copyright text & social links           |

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Docker Deployment

```bash
docker compose up -d --build
```

Serves on port `3000`. Point your reverse proxy (e.g. Nginx Proxy Manager) to `http://portfolio:3000`.

## License

MIT
