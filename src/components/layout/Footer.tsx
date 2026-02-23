import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-900 py-8 text-center text-sm text-slate-500">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <p>
          © {new Date().getFullYear()} mdファイル変換ツール. All rights
          reserved.
        </p>
        <div className="mt-3 flex gap-4 text-xs justify-center items-center">
          <Link
            href="/tips"
            className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            Markdownの書き方（Tips）
          </Link>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <Link
            href="/licenses"
            className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
          >
            ライセンス
          </Link>
        </div>
        <p className="mt-4 text-xs text-slate-400 dark:text-slate-600 max-w-lg">
          このツールはすべてお使いのブラウザ上で動作します。入力されたテキストやファイルなどのデータが外部サーバーに送信されることは一切ありません。
        </p>
      </div>
    </footer>
  );
}
