# thomas-decloedt.be

Personal portfolio site—Astro, Tailwind, deployed on Vercel.

## Setup

```sh
npm install
npm run dev
```

Open [localhost:4321](http://localhost:4321).

## Commands

| Command           | Action                           |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start dev server                 |
| `npm run build`   | Build for production             |
| `npm run preview` | Preview production build locally |
| `npm run deploy`  | Deploy to Vercel (production)    |

## Structure

```
src/
├── components/     # Header, Hero, About, Experience, Projects, Contact
├── data/          # experience.ts, projects.ts
├── layouts/       # BaseLayout.astro
├── pages/         # index.astro
└── styles/        # global.css (Tailwind)
```

## Stack

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel](https://vercel.com)
