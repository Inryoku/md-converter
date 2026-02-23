import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ライセンス・利用規約 | mdファイル変換ツール",
  description:
    "本ツールで使用しているオープンソースソフトウェアのライセンス情報です。",
  // SEO対策: 重複コンテンツによるペナルティ防止と、クロールバジェットの浪費を防ぐため、noindexを設定
  robots: {
    index: false,
    follow: true,
  },
};

export default function LicensesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:py-20 text-slate-800 dark:text-slate-200">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 border-b pb-4 border-slate-200 dark:border-slate-800">
        オープンソースライセンス
      </h1>
      <p className="mb-10 text-slate-600 dark:text-slate-400">
        「mdファイル変換ツール」は、以下の素晴らしいオープンソースプロジェクトを活用して構築されています。各プロジェクトの作者とコミュニティに深く感謝いたします。
      </p>

      <section className="space-y-12">
        {/* React & Next.js */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold bg-slate-100 dark:bg-slate-800 inline-block px-3 py-1 rounded-md mb-4 text-slate-900 dark:text-white">
            React / Next.js
          </h2>
          <p className="text-sm font-mono whitespace-pre-wrap text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto">
            {`MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.
Copyright (c) Vercel, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
          </p>
        </div>

        {/* Turndown */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold bg-slate-100 dark:bg-slate-800 inline-block px-3 py-1 rounded-md mb-4 text-slate-900 dark:text-white">
            Turndown
          </h2>
          <p className="mb-4 text-sm">HTML to Markdown converter.</p>
          <p className="text-sm font-mono whitespace-pre-wrap text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto">
            {`MIT License

Copyright (c) 2017 Dom Christie

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.`}
          </p>
        </div>

        {/* Tailwind CSS & Lucide Icons */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-bold bg-slate-100 dark:bg-slate-800 inline-block px-3 py-1 rounded-md mb-4 text-slate-900 dark:text-white">
            Tailwind CSS & Lucide Icons
          </h2>
          <p className="text-sm font-mono whitespace-pre-wrap text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 p-4 rounded-lg border border-slate-100 dark:border-slate-800 overflow-x-auto">
            {`MIT License

Copyright (c) Tailwind Labs, Inc.
Copyright (c) Lucide Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
...
(Includes standard MIT license wording)`}
          </p>
        </div>
      </section>
    </div>
  );
}
