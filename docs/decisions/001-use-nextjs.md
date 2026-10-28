# 001: Use Next.js

**Status:** Accepted
**Context:** The site needs multiple pages, per-page SEO metadata, and a contact form that sends email without exposing an API key.
**Options considered:** Plain HTML/CSS/JS; Vite + React (client-side app); Next.js.
**Decision:** Next.js (App Router).
**Why:** File-based routing, per-page metadata and sitemap support for search visibility, and server-side route handlers that keep the email API key off the browser.
**Trade-offs:** More concepts and tooling than plain HTML. Framework versions change often. Server routes need a host that runs Node, not static-only hosting.
**Revisit if:** The site becomes purely static with no backend, where a simpler tool would do.