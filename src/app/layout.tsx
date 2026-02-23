import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "【登録不要・安全】mdファイル変換ツール | ブラウザ上で即座にMarkdown化",
  description:
    "テキストやHTMLなどを瞬時にMarkdown（mdファイル）へ変換する無料ツールです。入力したデータは外部サーバーに送信されず、お使いの端末内だけで安全に処理されるため、社外秘データや個人情報でも情報漏洩の心配なく安心してお使いいただけます。会員登録・インストール不要です。",
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
    canonical: "https://md-converter.example.com", // In reality, this would be the production domain
  },
  openGraph: {
    title:
      "【登録不要・安全】mdファイル変換ツール | ブラウザ上で即座にMarkdown化",
    description:
      "テキストやHTMLなどを瞬時にMarkdown（mdファイル）へ変換。データは外部サーバーに送信されず端末内で完結するため、情報漏洩の心配なく安全にお使いいただけます。",
    url: "https://md-converter.example.com",
    siteName: "mdファイル変換ツール",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.className} bg-slate-50 text-slate-900 antialiased selection:bg-blue-200`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="grow pb-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
