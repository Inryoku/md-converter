import React from "react";
import {
  UploadCloud,
  Zap,
  Download,
  Check,
  FileCode2,
  FileText,
  Sheet,
  ShieldCheck,
} from "lucide-react";

export function GuideSection() {
  return (
    <article className="mt-8 max-w-5xl mx-auto space-y-24 mb-16">
      {/* How to Use Vertical Cards */}
      <section>
        <div className="text-center mb-12">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wider uppercase mb-2 block">
            ご利用の流れ
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            mdファイルへの変換方法
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center group">
            <div className="size-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <UploadCloud className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
              1. 文字を入れる・ファイルを選ぶ
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              左側の枠に文字を直接貼り付けるか、変換したいファイルをドラッグ＆ドロップしてください。
            </p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="size-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
              2. 待ち時間ゼロで自動変換
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              文字を入れた瞬間、自動できれいに整理された「Markdown（マークダウン）形式」へ変換されます。
            </p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="size-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <Download className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
              3. コピーしてすぐ使える
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              右側に変換された結果が出ます。「コピー」ボタンを押すか、ファイルとしてダウンロードしてお使いください。
            </p>
          </div>
        </div>
      </section>

      {/* Supported Formats & Benefits Grid */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        {/* Decorative graphic box */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800/50 aspect-4/3 border border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Window Mockup */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-xl max-w-xs w-full transform rotate-2 hover:rotate-0 transition-transform duration-500 border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="size-8 rounded bg-orange-100 text-orange-600 flex items-center justify-center dark:bg-orange-500/20 dark:text-orange-400">
                  <FileCode2 className="w-5 h-5" />
                </div>
                <div className="font-mono text-sm text-slate-600 dark:text-slate-300">
                  markdown.md
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded w-3/4"></div>
                <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded w-full"></div>
                <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded w-5/6"></div>
              </div>
              <div className="mt-6 flex justify-center">
                <Download className="w-5 h-5 text-slate-400 animate-bounce" />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits text */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Markdown（マークダウン）って何がいいの？
          </h2>
          <ul className="space-y-6">
            <li className="flex gap-4 items-start">
              <div className="mt-1 size-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 dark:bg-green-900/30 dark:text-green-400">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">
                  生成AI（ChatGPT等）が高精度に読み取れる
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Markdownは構造化されたテキストデータのため、ChatGPTやGeminiなどのAIに読み込ませる（プロンプトに組み込む）際、AI側が「どこが見出しか」「どこが表か」を完璧に理解でき、要約や分析の精度が劇的に向上します。
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="mt-1 size-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 dark:bg-blue-900/30 dark:text-blue-400">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">
                  どこでもそのまま使える
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Notion、GitHub、Qiita、Zenn、はてなブログなど、今の主流なサービスやブログシステムなら、どこに貼り付けてもデザインが崩れず綺麗に表示されます。
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="mt-1 size-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 dark:bg-indigo-900/30 dark:text-indigo-400">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">
                  文字だけのファイルだから超軽量
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Wordファイルのように複雑なデータを含まない「ただの文字データ」なので、パソコンの容量を圧迫せず、開くのも一瞬です。
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
              対応フォーマット
            </h3>
            <div className="flex gap-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium dark:bg-slate-800 dark:text-slate-300">
                <FileCode2 className="w-4 h-4" /> HTML
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium dark:bg-slate-800 dark:text-slate-300">
                <FileText className="w-4 h-4" /> TXT
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium dark:bg-slate-800 dark:text-slate-300">
                <Sheet className="w-4 h-4" /> CSV
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Security Guarantee Section */}
      <section className="bg-blue-50 dark:bg-blue-950/30 rounded-2xl p-6 sm:p-8 border border-blue-100 dark:border-blue-900 mt-16">
        <div className="flex items-start gap-4">
          <div className="mt-1 size-10 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              【重要】社外秘データも安全・確実に変換できます
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              当ツールの最大の強みは
              <strong>
                「完全ローカル（お使いのブラウザ内）での変換処理」
              </strong>
              であることです。
              <br className="hidden sm:block" />
              入力されたテキスト内容や、アップロードされたファイルが、外部のサーバーへ送信・保存されることは一切ありません。
              <br className="hidden sm:block" />
              会議の議事録や個人情報を含む業務データであっても、情報漏洩のリスクゼロで安全にお使いいただけます。
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
