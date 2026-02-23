# md-converter (mdファイル変換ツール)

<div align="center">
  <img src="./public/window.svg" alt="md-converter logo" width="120" />
</div>

<h3 align="center">社外秘データでも安心。ブラウザで完結する完全無料のMarkdown変換ツール</h3>

<div align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-14-black" alt="Next.js" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC" alt="Tailwind CSS" /></a>
  <a href="https://ui.shadcn.com/"><img src="https://img.shields.io/badge/shadcn%2Fui-black" alt="shadcn/ui" /></a>
  <a href="https://github.com/turndown/turndown"><img src="https://img.shields.io/badge/Turndown-blue" alt="Turndown" /></a>
</div>

---

## 🌟 プロジェクトの概要

**md-converter** は、HTML、テキスト、CSVデータを即座にMarkdown（`.md`ファイル）フォーマットに変換するWebアプリケーションです。

「**サーバーへのデータ送信不要（完全クライアントサイド処理）**」を最大の設計思想とし、個人情報や業務上の機密データ（議事録など）を含む文章であっても、ローカルのブラウザメモリ上だけで安全・瞬時に変換を完結させることができます。SEO（`mdファイル変換` キーワード）とCore Web Vitalsのスコアを極限まで高めるため、Next.jsのApp Routerを用いた完全な静的サイト（Static Site Generation）として構築されています。

## ✨ 主な機能

- 🔒 **完全ローカル処理**: クライアントサイドのJavaScriptのみで完結。データが外部へ送信されるログやリスクはゼロです。
- ⚡ **超高速リアルタイム変換**: 入力と同時にMarkdownコードとプレビューが表示されます。
- 📂 **ドラッグ＆ドロップ対応**: `.html`, `.csv`, `.txt` ファイルを画面にドロップするだけで即座に読み込み＆自動変換します。
- 🤖 **生成AI（プロンプト）向け最適化**: ChatGPTやClaudeといったLLMへ情報を渡す際の、最適なフォーマットへの整理（構造化）に役立ちます。
- 💡 **ビギナー向けLint機能搭載**: 初心者が間違えやすいMarkdown構文（見出しのスペース抜け等）をリアルタイムで検知し、優しくサジェストします。
- 📱 **レスポンシブ＆ダークモード対応**: スマホからでも快適に操作可能。OSの設定に合わせたダークモードをデフォルトでサポートします（Tailwind CSS）。

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 16.1 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS, shadcn/ui
- **アイコン**: Lucide React
- **マークダウン変換**: Turndown
- **プレビュー描画**: React Markdown
- **インフラ**: Vercel (Edge CDN) ※想定

## 🚀 ローカル環境での動かし方

このリポジトリを手元にクローンし、開発サーバーを立ち上げる手順です。

```bash
# リポジトリのクローン
git clone https://github.com/あなたのユーザー名/md-converter.git

# ディレクトリへ移動
cd md-converter

# パッケージのインストール
npm install

# 開発サーバーの起動 (localhost:3000)
npm run dev
```

## 📈 SEOアーキテクチャの特徴

当プロジェクトは、技術ブログやツールサイトの知見に基づき、徹底したSEO対策（内部対策）が施されています。

- **静的なHTML出力 (SSG)**: クローラーが即座にコンテンツを読み取れるよう、ゼロAPIルートでビルド。
- **セマンティックなマークアップ**: 正確な`<article>`, `<section>`, `<h1-3>` タグの定義。
- **JSON-LD (構造化データ)**: FAQセクションに Schema.org 仕様の構造化データを埋め込み、Googleの「リッチリザルト（よくある質問）」面をハックします。
- **ロングテールキーワード戦略**: `/tips`（Markdownの書き方チートシート）ページを別ルートで切り出し、「Markdown 書き方」などの関連クエリからの流入を狙います。
- **リンクジュースの最適化**: OSSライセンスページへのリンクをフッター最下部にのみ配置し、ツール本体へのページランク（評価）の分散を防ぎ、さらに `noindex` を設定することでカニバリゼーションと重複コンテンツペナルティを回避しています。

## 📜 ライセンス

MIT License

このプロジェクトはOSSとして公開されています。詳細については [LICENSE](./LICENSE) をご覧ください。

---

© {new Date().getFullYear()} mdファイル変換ツール
