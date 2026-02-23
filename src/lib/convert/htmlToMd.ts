import TurndownService from "turndown";

export function htmlToMd(html: string): string {
  // Initialize turndown service
  const turndownService = new TurndownService({
    headingStyle: "atx",
    hr: "---",
    bulletListMarker: "-",
    codeBlockStyle: "fenced",
  });

  // Convert HTML to Markdown
  try {
    return turndownService.turndown(html);
  } catch (error) {
    console.error("Error converting HTML to Markdown:", error);
    return "Error converting HTML. Please try again or check the format.";
  }
}
