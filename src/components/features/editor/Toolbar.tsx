"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Download, Check } from "lucide-react";

interface ToolbarProps {
  markdown: string;
  filename?: string;
}

export function Toolbar({ markdown, filename = "converted.md" }: ToolbarProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!markdown) return;
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const handleDownload = () => {
    if (!markdown) return;
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-2 justify-end mb-4">
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopy}
        disabled={!markdown}
        className="flex items-center gap-2"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
        {copied ? "コピー完了!" : "コピー"}
      </Button>
      <Button
        variant="default"
        size="sm"
        onClick={handleDownload}
        disabled={!markdown}
        className="flex items-center gap-2"
      >
        <Download className="w-4 h-4" />
        ダウンロード (.md)
      </Button>
    </div>
  );
}
