import React from "react";

export function FaqSection() {
  const faqs = [
    {
      question: "mdファイル変換ツールは無料で使えますか？",
      answer:
        "はい、完全無料でご利用いただけます。回数制限や会員登録も一切不要です。",
    },
    {
      question: "サーバーにファイルは送信されますか？",
      answer:
        "いいえ、ファイルの読み込みおよびMarkdownへの変換処理はすべてブラウザ（クライアントサイド）で完結します。データが外部サーバーに送信されることはないため、機密情報を含むテキストでも安全にご利用いただけます。",
    },
    {
      question: "どのようなファイル形式に対応していますか？",
      answer:
        "HTMLテキストの直接貼り付けのほか、.txt、.html、.csv形式のファイル読み込みに対応しています（※複雑な構造の表やデザイン装飾は正しく変換されない場合があります）。",
    },
  ];

  // Generate structured JSON-LD data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="mt-24 max-w-4xl mx-auto px-4 w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">
        mdファイル変換に関するよくある質問
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-100 dark:border-slate-700"
          >
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
              {faq.question}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
