export function txtToMd(txt: string): string {
  // Pure text just returns the text itself safely.
  // We can add simple heuristics here if we want (e.g., auto-detecting paragraphs or lists),
  // but for raw text to markdown, returning raw is the most non-destructive approach.
  return txt;
}
