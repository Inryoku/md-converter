"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  HelpCircle,
  FileText,
  Eye,
  Code2,
  RefreshCw,
  SquareArrowRightEnter,
} from "lucide-react";
import Link from "next/link";
import { Dropzone } from "./Dropzone";
import { Toolbar } from "./Toolbar";

export function MarkdownEditor() {
  const [inputText, setInputText] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [originFilename, setOriginFilename] = useState<string | null>(null);
  const [syntaxIssues, setSyntaxIssues] = useState<string[]>([]);

  // Simple Markdown Linter for beginners
  const checkSyntax = (text: string) => {
    const issues: string[] = [];
    const lines = text.split("\n");

    lines.forEach((line) => {
      // Check for missing space after heading (e.g. "#Heading" instead of "# Heading")
      if (/^#{1,6}[^#\s]/.test(line)) {
        if (
          !issues.includes("見出し（#）の後は、半角スペースを空けてください。")
        ) {
          issues.push("見出し（#）の後は、半角スペースを空けてください。");
        }
      }
      // Check for missing space after unordered list item (e.g. "-Item" instead of "- Item")
      if (/^-[^\s-]/.test(line)) {
        if (
          !issues.includes("リスト（-）の後は、半角スペースを空けてください。")
        ) {
          issues.push("リスト（-）の後は、半角スペースを空けてください。");
        }
      }
    });

    setSyntaxIssues(issues);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInputText(text);

    if (!text) {
      setMarkdown("");
      setSyntaxIssues([]);
      setOriginFilename(null); // ルール4: 全消しされたら元のファイル記憶をリセット
      return;
    }

    // The textarea now acts purely as a raw Markdown editor.
    // It no longer attempts to auto-convert HTML, preserving user-intended inline tags.
    setMarkdown(text);
    checkSyntax(text);
  };

  const handleConvertedFromDropzone = (md: string, filename?: string) => {
    setMarkdown(md);
    setInputText(md); // show the md in the input as well so they can edit it
    if (filename) setOriginFilename(filename);
    checkSyntax(md);
  };

  const getDownloadFilename = () => {
    // ルール1 & 3: ドロップされたファイル由来の場合はその名前の拡張子を変えるだけ
    if (originFilename) {
      const nameWithoutExt = originFilename.includes(".")
        ? originFilename.substring(0, originFilename.lastIndexOf("."))
        : originFilename;
      return `${nameWithoutExt}.md`;
    }

    // ルール2 & 4: テキスト直打ち、または全消し後
    if (!inputText.trim()) {
      const d = new Date();
      const formattedDate = `${d.getFullYear()}${(d.getMonth() + 1).toString().padStart(2, "0")}${d.getDate().toString().padStart(2, "0")}`;
      return `markdown_${formattedDate}.md`;
    }

    const lines = inputText
      .split("\n")
      .filter((line) => line.trim().length > 0);
    if (lines.length > 0) {
      let firstLine = lines[0].replace(/^#+\s*/, "").trim(); // 見出し記号を削除
      if (firstLine) {
        firstLine = firstLine.replace(/[\/\\?%*:|"<>]/g, "-"); // Web安全なファイル名に変換
        if (firstLine.length > 15) {
          firstLine = firstLine.substring(0, 15).trim(); // 最初の15文字までに制限
        }
        return `${firstLine}.md`;
      }
    }

    // fallback
    const d = new Date();
    const formattedDate = `${d.getFullYear()}${(d.getMonth() + 1).toString().padStart(2, "0")}${d.getDate().toString().padStart(2, "0")}`;
    return `markdown_${formattedDate}.md`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
      {/* Top section: Upload or Paste */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <SquareArrowRightEnter className="w-5 h-5 text-blue-500" />
            1. テキスト入力 / ファイルアップロード
          </h2>
          <Dropzone onConvert={handleConvertedFromDropzone} />
          <div className="relative mt-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200 dark:border-slate-800" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-background px-2 text-muted-foreground">
                またはMarkdown（テキスト）を直接記述 / 編集
              </span>
            </div>
          </div>
          <div className="relative">
            <Textarea
              placeholder="ここにMarkdownやテキストを入力して編集できます..."
              className="min-h-[300px] mt-2 font-mono text-sm resize-y"
              value={inputText}
              onChange={handleInputChange}
            />
            <div className="absolute -bottom-6 right-0">
              <Link
                href="/tips"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                Markdownの書き方
              </Link>
            </div>
          </div>
        </div>

        {/* Right section: Result / Preview */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-end">
            <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <FileText className="w-5 h-5 text-indigo-500" />
              2. 変換結果 (Markdown)
            </h2>
            <Toolbar markdown={markdown} filename={getDownloadFilename()} />
          </div>

          {syntaxIssues.length > 0 && (
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-md p-3 flex flex-col gap-1">
              {syntaxIssues.map((issue, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-amber-800 dark:text-amber-400 text-sm"
                >
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <p>
                    <strong>💡 ヒント:</strong> {issue}
                  </p>
                </div>
              ))}
            </div>
          )}

          <Tabs
            defaultValue="preview"
            className="w-full grow flex flex-col mt-2"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="preview"
                className="flex flex-row items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                プレビュー
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="flex flex-row items-center gap-2"
              >
                <Code2 className="w-4 h-4" />
                Markdownソース
              </TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="grow">
              <div className="border rounded-md p-4 min-h-[500px] h-full overflow-y-auto bg-slate-50 dark:bg-slate-900/50 prose prose-slate dark:prose-invert max-w-none prose-table:border-collapse prose-th:border prose-th:border-slate-300 prose-td:border prose-td:border-slate-300 dark:prose-th:border-slate-700 dark:prose-td:border-slate-700 prose-th:bg-slate-100 dark:prose-th:bg-slate-800 prose-th:p-3 prose-td:p-3">
                {markdown ? (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[
                      rehypeRaw,
                      [
                        rehypeSanitize,
                        {
                          ...defaultSchema,
                          attributes: {
                            ...defaultSchema.attributes,
                            span: [
                              ...(defaultSchema.attributes?.span || []),
                              "style",
                            ],
                            div: [
                              ...(defaultSchema.attributes?.div || []),
                              "style",
                            ],
                          },
                        },
                      ],
                    ]}
                  >
                    {markdown}
                  </ReactMarkdown>
                ) : (
                  <span className="text-slate-400 italic">
                    変換結果のプレビューがここに表示されます...
                  </span>
                )}
              </div>
            </TabsContent>

            <TabsContent value="code" className="grow">
              <Textarea
                value={markdown}
                onChange={(e) => {
                  const newMd = e.target.value;
                  setMarkdown(newMd);
                  checkSyntax(newMd);
                }}
                className="min-h-[500px] h-full font-mono text-sm bg-slate-900 text-slate-100 p-4 border-none focus-visible:ring-1"
                placeholder="Markdownソースコードがここに表示されます..."
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
