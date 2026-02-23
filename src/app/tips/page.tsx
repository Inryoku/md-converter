import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Markdown（マークダウン）の書き方・基本記法一覧 | mdファイル変換",
  description:
    "初心者向け・ビジネス向けのMarkdown（マークダウン）記法一覧。見出し、リスト（箇条書き）、太字、リンク、表（テーブル）などの書き方を実例とプレビューで分かりやすく解説します。",
};

function ExampleRow({
  title,
  syntax,
  result,
}: {
  title: string;
  syntax: string;
  result: React.ReactNode;
}) {
  return (
    <div className="grid md:grid-cols-12 gap-6 border-b border-slate-200 dark:border-slate-800 py-8 last:border-0 items-start">
      <div className="md:col-span-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="md:col-span-4 bg-slate-100 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-800 dark:text-slate-300 overflow-x-auto border border-slate-200/50 dark:border-slate-800/50">
        <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
          書き方 (入力例)
        </div>
        <pre className="whitespace-pre-wrap">{syntax}</pre>
      </div>
      <div className="md:col-span-5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-4 text-slate-800 dark:text-slate-200 overflow-x-auto shadow-xs">
        <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
          実際の表示 (プレビュー)
        </div>
        <div>{result}</div>
      </div>
    </div>
  );
}

export default function TipsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
      <header className="mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
          Markdownの書き方
          <br className="sm:hidden" />
          <span className="text-blue-600 dark:text-blue-400">
            基本記法ガイド
          </span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Markdown（マークダウン）は、文章の見出しやリストなどを簡単にデザインするためのシンプルな書き方です。
          ここでは、よく使う基本の記法を分かりやすい実例とともに紹介します。
        </p>
      </header>

      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 sm:p-10 mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 border-b-2 border-slate-100 dark:border-slate-800 pb-4">
          基本の書き方一覧
        </h2>

        <div className="flex flex-col">
          <ExampleRow
            title="見出し（Heading）"
            syntax={`# 大見出し (H1)\n## 中見出し (H2)\n### 小見出し (H3)`}
            result={
              <div className="space-y-2">
                <h1 className="text-2xl font-bold border-b pb-1">
                  大見出し (H1)
                </h1>
                <h2 className="text-xl font-bold border-b pb-1">
                  中見出し (H2)
                </h2>
                <h3 className="text-lg font-bold">小見出し (H3)</h3>
              </div>
            }
          />

          <ExampleRow
            title="箇条書きリスト"
            syntax={`- りんご\n- みかん\n  - いよかん (行頭に半角スペース2つで階層化)\n- ばなな`}
            result={
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>りんご</li>
                <li>みかん</li>
                <ul className="list-[circle] list-inside ml-6 text-slate-600 dark:text-slate-400">
                  <li>いよかん</li>
                </ul>
                <li>ばなな</li>
              </ul>
            }
          />

          <ExampleRow
            title="番号付きリスト"
            syntax={`1. 企画書を作成する\n2. レビューを依頼する\n3. 修正して提出する`}
            result={
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>企画書を作成する</li>
                <li>レビューを依頼する</li>
                <li>修正して提出する</li>
              </ol>
            }
          />

          <ExampleRow
            title="太字・斜体"
            syntax={`ここは **太字** です。\nここは *斜体* です。`}
            result={
              <p>
                ここは <strong>太字</strong> です。
                <br />
                ここは <em className="italic">斜体</em> です。
              </p>
            }
          />

          <ExampleRow
            title="リンク（URL）"
            syntax={`[Googleはこちら](https://google.com)`}
            result={
              <a
                href="https://google.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Googleはこちら
              </a>
            }
          />

          <ExampleRow
            title="引用（ブロッククオート）"
            syntax={`> 吾輩は猫である。\n> 名前はまだ無い。`}
            result={
              <blockquote className="border-l-4 border-slate-300 dark:border-slate-700 pl-4 py-1 italic text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50">
                吾輩は猫である。
                <br />
                名前はまだ無い。
              </blockquote>
            }
          />

          <ExampleRow
            title="インラインコード"
            syntax={`テキストの中で \`コード\` を目立たせる`}
            result={
              <p>
                テキストの中で{" "}
                <code className="bg-slate-100 dark:bg-slate-800 text-pink-600 dark:text-pink-400 px-1.5 py-0.5 rounded text-sm font-mono">
                  コード
                </code>{" "}
                を目立たせる
              </p>
            }
          />

          <ExampleRow
            title="表（テーブル）"
            syntax={`| 商品名 | 価格 | 備考 |\n| :- | -: | :-: |\n| りんご | 100円 | おすすめ |\n| メロン | 1,000円 | 予約のみ |`}
            result={
              <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-slate-100 dark:bg-slate-900">
                  <tr>
                    <th className="border border-slate-300 dark:border-slate-700 px-3 py-2">
                      商品名
                    </th>
                    <th className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-right">
                      価格
                    </th>
                    <th className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-center">
                      備考
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-3 py-2">
                      りんご
                    </td>
                    <td className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-right">
                      100円
                    </td>
                    <td className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-center">
                      おすすめ
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 px-3 py-2">
                      メロン
                    </td>
                    <td className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-right">
                      1,000円
                    </td>
                    <td className="border border-slate-300 dark:border-slate-700 px-3 py-2 text-center">
                      予約のみ
                    </td>
                  </tr>
                </tbody>
              </table>
            }
          />
        </div>
      </div>

      <div className="text-center mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-900/50">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
          さっそくMarkdownを書いてみましょう！
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm max-w-lg mx-auto">
          書き方が分からなくなったら、いつでもこのページに戻ってきてください。トップページのエディタを使えば、書いたMarkdownがすぐにプレビュー表示されます。
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 w-full sm:w-auto"
        >
          トップページ（変換ツール）へ戻る
        </Link>
      </div>
    </div>
  );
}
