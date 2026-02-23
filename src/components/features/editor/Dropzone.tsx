"use client";

import React, { useState, useCallback } from "react";
import { UploadCloud } from "lucide-react";
import { htmlToMd } from "@/lib/convert/htmlToMd";
import { csvToMd } from "@/lib/convert/csvToMd";
import { txtToMd } from "@/lib/convert/txtToMd";

interface DropzoneProps {
  onConvert: (markdown: string, originalFilename?: string) => void;
}

export function Dropzone({ onConvert }: DropzoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const processFile = useCallback(
    (file: File) => {
      setError(null);
      const validTypes = [
        "text/plain",
        "text/html",
        "text/csv",
        "text/tab-separated-values",
        "text/markdown",
      ];
      const extension = file.name.split(".").pop()?.toLowerCase();

      // Check extension or mime type
      if (
        !validTypes.includes(file.type) &&
        !["txt", "html", "csv", "tsv", "md"].includes(extension || "")
      ) {
        setError(
          "サポートされていないファイル形式です。.txt, .html, .csv, .tsv, または.mdファイルをアップロードしてください。",
        );
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const text = e.target?.result as string;
          let markdown = "";

          if (file.type === "text/html" || extension === "html") {
            markdown = htmlToMd(text);
          } else if (file.type === "text/csv" || extension === "csv") {
            markdown = csvToMd(text, ",");
          } else if (
            file.type === "text/tab-separated-values" ||
            extension === "tsv"
          ) {
            markdown = csvToMd(text, "\t");
          } else if (extension === "md") {
            markdown = text; // directly output markdown
          } else {
            markdown = txtToMd(text);
          }

          onConvert(markdown, file.name);
        } catch (err) {
          setError("変換処理中にエラーが発生しました。");
          console.error(err);
        }
      };
      reader.onerror = () => {
        setError("ファイルの読み込み中にエラーが発生しました。");
      };
      reader.readAsText(file);
    },
    [onConvert],
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        processFile(e.dataTransfer.files[0]);
      }
    },
    [processFile],
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  return (
    <div className="w-full">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-upload")?.click()}
        className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer transition-colors duration-200
          ${isDragging ? "border-blue-500 bg-blue-50/50 dark:bg-blue-900/20" : "border-slate-300 hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-600"}
        `}
      >
        <UploadCloud
          className={`w-12 h-12 mb-4 ${isDragging ? "text-blue-500" : "text-slate-400"}`}
        />
        <p className="text-lg font-medium text-slate-700 dark:text-slate-200 mb-1">
          クリックしてアップロード、またはファイルをドラッグ＆ドロップ
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          対応形式: .txt, .html, .csv, .tsv, .md
        </p>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          accept=".txt,.html,.csv,.tsv,.md,text/plain,text/html,text/csv,text/tab-separated-values,text/markdown"
          onChange={handleFileInput}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
