# POPolitics frontend

Interface web, Next.js (SSR/BFF).

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Lancement avec Docker

L'image est construite en mode [`standalone`](https://nextjs.org/docs/app/api-reference/config/next-config-js/output) (voir `next.config.ts`) : elle contient uniquement le serveur Next.js et ses dépendances de production.

```bash
docker build -t popolitics-frontend .
docker run --rm -p 3000:3000 popolitics-frontend
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

### Variables d'environnement

Les variables `NEXT_PUBLIC_*` sont intégrées au bundle **au moment du build**, pas au lancement du conteneur. Elles doivent donc être passées en `--build-arg` :

```bash
docker build \
  --build-arg NEXT_PUBLIC_API_URL=http://api.popolitics.local \
  -t popolitics-frontend .
```

Les variables lues uniquement côté serveur peuvent être passées au lancement avec `-e NOM=valeur`.



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

