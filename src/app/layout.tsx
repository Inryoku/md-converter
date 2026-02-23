import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "【登録不要・安全】mdファイル化ツール | テキストやCSVを一瞬で.mdにして保存",
  description:
    "テキストやHTML、CSVなどを瞬時に.mdファイル（Markdown）へ変換してダウンロードできる無料ツールです。入力したデータは外部サーバーに送信されず、お使いの端末内だけで安全に処理されるため、社外秘データや個人情報でも情報漏洩の心配なく安心してお使いいただけます。会員登録・インストール不要です。",
  keywords: [
    "mdファイル変換",
    "Markdown",
    "マークダウン",
    "HTML",
    "CSV",
    "変換",
    "ツール",
    "無料",
    "ローカル",
  ],
  authors: [{ name: "mdファイル変換ツール" }],
  alternates: {
    canonical: "https://md-converter-eta.vercel.app",
  },
  openGraph: {
    title:
      "【登録不要・安全】mdファイル化ツール | テキストやCSVを一瞬で.mdにして保存",
    description:
      "テキストやHTMLなどを瞬時に.mdファイルへ変換。データは外部サーバーに送信されず端末内で完結するため、情報漏洩の心配なく安全にダウンロードいただけます。",
    url: "https://md-converter-eta.vercel.app",
    siteName: "mdファイル化ツール",
    locale: "ja_JP",
    type: "website",
  },
  verification: {
    google: "5p8z9zO-MEm0HZx3rEmdUefQcLV9Aq4I-zZFr68lgoQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-sans bg-slate-50 text-slate-900 antialiased selection:bg-blue-200">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="grow pb-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
