# Feature Requests

Capabilities requested by user that don't currently exist.

---

## [FEAT-20260321-001] link_fetching

**Logged**: 2026-03-21T16:20:00+08:00
**Priority**: medium
**Status**: pending
**Area**: tools

### Requested Capability
Be able to fetch content from X/Twitter links and Substack links without requiring API keys or special authentication.

### User Context
User sent links to https://t.co/ZUiSgGEq7p?ssr=true (X/Twitter) and https://open.substack.com/pub/ianxie/p/master-class-in-student-stacking?r=2jtjxg&utm_medium=ios, but web_fetch and curl either failed or required auth.

### Complexity Estimate
medium

### Suggested Implementation
- Use browser tooling (like Playwright/Puppeteer) or find a way to fetch publicly available content from these platforms without API keys
- Maybe use the browser tool from OpenClaw's toolbox

### Metadata
- Frequency: first_time
- Related Features: web_fetch

