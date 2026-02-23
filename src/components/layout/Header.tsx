import Link from "next/link";

export function Header() {
  return (
    <header className="border-b bg-white dark:bg-slate-900 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            mdファイル化
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/tips"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
          >
            Markdownの書き方
          </Link>
        </nav>
      </div>
    </header>
  );
}
