import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 text-center">
      <p className="text-sm font-semibold text-zinc-500">404</p>
      <h1 className="mt-2 text-4xl font-bold">Page introuvable</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <Link href="/" className="mt-8 inline-block underline">
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}
