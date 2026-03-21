# Learnings Log

Captured learnings, corrections, and discoveries. Review before major tasks.

---

## [LRN-20260321-001] best_practice

**Logged**: 2026-03-21T16:17:00+08:00
**Priority**: medium
**Status**: pending
**Area**: docs

### Summary
When updating blog post colors, only apply category colors (blue for Reflections, teal for Dev Log) to titles/headers (h1, h2, h3), not to body text or prose divs.

### Details
- Initially accidentally applied category color to the entire prose div, making all body text blue/teal
- Prose div should always use var(--text-primary) as its color
- Only titles/headers use category-specific colors

### Suggested Action
Remember this pattern for all future blog post edits: only titles/headers have category colors; body text stays default.

### Metadata
- Source: user_feedback
- Related Files: src/app/posts/*/page.tsx, src/app/page.tsx
- Tags: blog, colors, styling

---

## [LRN-20260321-002] correction

**Logged**: 2026-03-21T16:18:00+08:00
**Priority**: high
**Status**: pending
**Area**: workflow

### Summary
NEVER push to production GitHub without explicit user approval! Always stage changes and show a diff for review first!

### Details
- User created a RULES.md file and updated AGENTS.md to specify "never push to production GitHub unless Ian explicitly says 'push' or 'yes'"
- Before this, was pushing automatically after making changes
- Now, always stage changes, show git diff, and ask user for approval before pushing

### Suggested Action
Always follow the GitHub push rule in RULES.md!

### Metadata
- Source: user_feedback
- Related Files: AGENTS.md, RULES.md
- Tags: git, deployment, workflow

