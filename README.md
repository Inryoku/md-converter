# md-converter

<h3 align="center">Secure, zero-server Markdown conversion right in your browser.</h3>

<div align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-14-black" alt="Next.js" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC" alt="Tailwind CSS" /></a>
  <a href="https://ui.shadcn.com/"><img src="https://img.shields.io/badge/shadcn%2Fui-black" alt="shadcn/ui" /></a>
  <a href="https://github.com/turndown/turndown"><img src="https://img.shields.io/badge/Turndown-blue" alt="Turndown" /></a>
</div>

---

## 🌟 Project Overview

**md-converter** is a web-based client-side application that instantly converts HTML, text, and CSV data into correctly formatted Markdown (`.md`) files.

Built with a strict **"zero-server data transmission"** philosophy, all text processing happens entirely within the local browser memory. This guarantees absolute privacy and security, making it perfectly safe for converting highly confidential business documents, meeting minutes, or files containing personal information. It is engineered as a purely Static Site Generation (SSG) app using Next.js App Router to achieve maximum Core Web Vitals scores and SEO ranking.

## ✨ Key Features

- 🔒 **100% Local Processing**: Everything runs client-side via JavaScript. Zero backend API calls, zero data retention, zero risk of data leaks.
- ⚡ **Instant Real-time Conversion**: See your Markdown code and rendered visual preview update instantly as you type or paste.
- 📂 **Drag & Drop Support**: Toss your `.html`, `.csv`, or `.txt` files directly into the browser to read and convert them automatically using the HTML5 File API.
- 🤖 **Optimized for Generative AI**: Instantly clean up messy web text into semantic Markdown arrays—the ideal format for feeding high-quality context into LLMs like ChatGPT or Claude.
- 💡 **Built-in Beginner Linter**: Features a real-time, non-intrusive regex checker that detects common Markdown syntax errors (like missing spaces after a heading `#`) and gently suggests corrections.
- 📱 **Responsive & Dark Mode**: Fully responsive UI powered by Tailwind CSS with automatic system dark mode detection out of the box.

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Icons**: Lucide React
- **Markdown Conversion**: Turndown
- **Preview Render**: React Markdown
- **Deployment**: Ready for Vercel/Edge CDN

## 🚀 Getting Started

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/YourUsername/md-converter.git

# Navigate into the directory
cd md-converter

# Install dependencies
npm install

# Start the development server (localhost:3000)
npm run dev
```

## 📈 SEO & Architecture Highlights

This project implements advanced on-page SEO techniques to capture high-intent search traffic for keyword conversions:

- **Static HTML Output (SSG)**: Zero API routes mean search engine crawlers can instantly index pre-rendered DOMs.
- **Semantic Markup**: Proper utilization of `<article>`, `<section>`, and hierarchical `<h1-3>` tags.
- **JSON-LD Structured Data**: Injects Schema.org metadata into the FAQ sections to dominate Google's "Rich Results" panels.
- **Long-tail Content Strategy**: Includes a dedicated `/tips` route (Markdown Cheat Sheet) to capture adjacent beginner search queries.
- **Link Juice Sculpting**: Links to the mandatory Open Source OSS Licenses page exist _only_ in the footer. That page strictly implements `<meta name="robots" content="noindex">` to completely avoid duplicate content penalties and preserve domain authority.

## 📜 License

MIT License

This project is open-source. For more details, see [LICENSE](./LICENSE).

---

© 2026 md-converter
