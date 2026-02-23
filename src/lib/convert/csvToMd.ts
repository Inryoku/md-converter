export function csvToMd(csv: string): string {
  if (!csv || csv.trim() === "") return "";

  const lines = csv.split(/\r?\n/).filter((line) => line.trim() !== "");
  if (lines.length === 0) return "";

  const headers = lines[0].split(",").map((h) => h.trim());

  // Format the header row
  let md = `| ${headers.join(" | ")} |\n`;

  // Format the separator row
  md += `| ${headers.map(() => "---").join(" | ")} |\n`;

  // Format the data rows
  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(",").map((cell) => cell.trim());
    md += `| ${row.join(" | ")} |\n`;
  }

  return md;
}
