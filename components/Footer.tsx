export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-6 text-center text-sm text-zinc-500 dark:border-white/10">
      © {new Date().getFullYear()} POPolitics
    </footer>
  );
}
