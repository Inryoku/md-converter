import { MarkdownEditor } from "@/components/features/editor/MarkdownEditor";
import { GuideSection } from "@/components/features/seo/GuideSection";
import { FaqSection } from "@/components/features/seo/FaqSection";

export default function Home() {
  return (
    <>
      {/* Editor MVP Section - Above the fold */}
      <section className="bg-linear-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 pt-12 pb-16 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              瞬時に
              <span className="text-blue-600 dark:text-blue-400">
                mdファイル
              </span>
              へ変換
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              HTML、テキスト、CSVをブラウザ上で安全＆超高速にMarkdown化。
              <br />
              <span className="font-semibold text-blue-700 dark:text-blue-400">
                【社外秘データでも安心】
              </span>
              一切のデータが外部へ送信されない「完全ローカル処理」のため、機密情報を含む業務利用にも最適です。
            </p>
          </div>

          <MarkdownEditor />
        </div>
      </section>

      {/* SEO Content Section - Below the fold */}
      <section className="bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto py-12">
          <GuideSection />
          <FaqSection />
        </div>
      </section>
    </>
  );
}
