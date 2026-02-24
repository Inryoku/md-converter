"use client";

import Link from "next/link";
import { FileCode } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    // もしすでにトップページにいる場合は、リロードして状態（入力文字）をクリアする
    if (pathname === "/") {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <header className="border-b bg-white dark:bg-slate-900 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="bg-blue-600/10 dark:bg-blue-400/10 p-1.5 rounded-md group-hover:bg-blue-600/20 dark:group-hover:bg-blue-400/20 transition-colors">
            <FileCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            mdファイル変換
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
