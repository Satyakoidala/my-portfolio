# Code Quality & Architecture Audit — my-website (source)

## Summary

This document lists code-style, architectural, accessibility, and potential logical issues discovered across the repository. Each item includes:

-   Short description
-   Files / locations affected (where applicable)
-   Severity (Critical/High/Medium/Low)
-   Why it's an issue
-   Recommended remediation and code examples when appropriate

Use this as a prioritized checklist — fixing `Critical` and `High` items first will reduce bugs, improve maintainability and make the codebase safer.

---

## 1) Excessive reliance on global state: `window.bootstrap` and other `window.*` usage

Files: many throughout `src/` (examples: `src/assets/bootstrap.js`, `src/pages/*`, `src/components/*`)
Severity: High

Why it's an issue

-   Using a global `window.bootstrap` across components couples components to a global variable and makes the app harder to test, harder to re-use, and not SSR-friendly.
-   Code implicitly expects `window.bootstrap` to be present and shaped correctly — if not, the app may provide subtle runtime errors.

Recommendations

-   Replace direct `window.bootstrap` reads with one of these approaches:
    -   Create a `BootstrapContext` React Context provider that initializes once (e.g., in `index.js` or `App`) and make data available via `useContext`.
    -   Or load the bootstrap JSON once in top-level code (e.g., in `App` or a store) and pass data as props to pages/components.
    -   Provide safe fallbacks where appropriate and validate the shape of data (PropTypes / TypeScript / runtime checks).

Example fix

-   Create a `BootstrapProvider` and use `const { sections } = useBootstrap();` inside components instead of `window.bootstrap.sections...`.

---

## 2) Use of `dangerouslySetInnerHTML` without sanitization

Files: `src/utils/index.js` (innerHTML helper), multiple components (e.g., `src/pages/home/index.js`, `src/pages/about/component.js`)
Severity: Critical

Why it's an issue

-   `dangerouslySetInnerHTML` is intrinsically an XSS risk if its content comes from external, untrusted sources.
-   The `innerHTML` helper returns raw HTML and components use it with `window.bootstrap` payloads which may change or be replaced.

Recommendations

-   Sanitize input before rendering with `dangerouslySetInnerHTML`. Use a robust sanitizer like DOMPurify.
-   If data is authored by the developer and guaranteed safe, add comments and tests asserting that; otherwise sanitize.

Example

-   Wrap the content at ingestion or render points with DOMPurify or a similar library:
    const clean = DOMPurify.sanitize(rawHtml);
    <div dangerouslySetInnerHTML={{ __html: clean }} />

---

## 3) Unreliable/fragile list keys (use of `index` as `key` in lists)

Files: many occurrences — `src/components/common/*` (Carousel, Timeline), `src/pages/about/component.js`, `src/pages/work/project.js`, etc.
Severity: High

Why it's an issue

-   Using array index as React `key` yields UI stability problems when lists mutate (add/remove/reorder). It can cause state to be reused between items incorrectly and cause unexpected re-renders and bugs.

Recommendations

-   Use stable unique identifiers for `key` (id, slug, uuid). If items do not have an id, generate one at build time or while normalizing data.

Example

-   key={item.id} or if safe: key={`${item.slug}-${index}`} — but prefer a stable id.

---

## 4) Unsafe default exports (anonymous arrow functions)

Files: `src/pages/layout/footer.js`, `src/pages/about/profile-summary.js` (and a few others)
Severity: Low / Medium

Why it's an issue

-   Anonymous default exports make debugging stack traces harder and tooling (like hot reloading, ESLint) less helpful.

Recommendation

-   Always name your components when exporting:
    export default function Footer() { ... }
    This helps debugging and code clarity.

---

## 5) Direct DOM manipulation and creation (imperative usage)

Files: `src/pages/contact/index.js` (creates an `<a>` to trigger mailto), `src/pages/contact/index.js` (uses `document.body.appendChild`/remove), `src/pages/home/index.js` (console.log), and other places
Severity: Medium

Why it's an issue

-   Direct DOM manipulations bypass React lifecycle and can cause mismatch if server-side rendering or tests rely on React DOM tree.
-   For mailto, creating DOM nodes is unnecessary; can use `window.location.href = "mailto:..."` or use a real anchor element rendered in JSX.

Recommendation

-   Use declarative DOM in React or clean up imperative operations and guard them behind `useEffect` and client-only checks.
-   Replace temp link trick with simpler trigger: window.location.href = mailtoLink or render an anchor.

---

## 6) Using global browser objects during module initialization (SSR risk)

Files: `src/utils/index.js` (isMobile uses window.matchMedia), many components call `isMobile()` at top-level rendering (e.g., `src/pages/layout/navbar.js`) — this accesses `window` synchronously
Severity: High

Why it's an issue

-   Calling browser globals during module evaluation or render without guarding causes server-side rendering failures (window is undefined in Node). This also makes testing complex.

Recommendation

-   Use feature detection inside a `useEffect` or custom hook that runs on the client:
    -   `useIsMobile` hook using `useEffect` and state. Or ensure `isMobile` checks for `typeof window !== 'undefined'`.
-   Avoid throwing runtime exceptions on first render.

---

## 7) Bug-prone useEffect dependency patterns

Files: `src/pages/layout/navbar.js` — effect depends on `window.location.pathname`.
Severity: Medium

Why it's an issue

-   `window.location.pathname` is not a reactive dependency for React. Using it in dependency arrays wont react to route changes by itself.

Recommendation

-   Use `useLocation()` from `react-router` and depend on `location.pathname` in the effect array.

Example
useEffect(() => {
setIsMenuOpen(false);
}, [location.pathname]);

---

## 8) Accessibility issues and miscellaneous aria problems

Files: `src/pages/contact/index.js`, `src/components/common/carousel.js`, `src/pages/layout/navbar.js`
Severity: Medium

Findings

-   Good ARIA effort (roles provided), but minor issues remain:
    -   `target="_blank"` links missing `rel="noopener noreferrer"` in some places.
    -   Scrollbars are hidden with CSS `display: none;` which harms discoverability for keyboard and assistive tech users; e.g., `styles/app.scss` hides scrollbars globally.
    -   Labels: `/* eslint-disable jsx-a11y/label-has-associated-control */` in Contact — better to ensure labels are correctly associated with inputs and to avoid disabling the rule.

Recommendations

-   Add `rel="noopener noreferrer"` to all `target="_blank"` anchors.
-   Reconsider hiding scrollbars globally — keep scrollbars available and style them for clarity and ARIA-friendly behavior.
-   Replace eslint-ignore by fixing label structure: ensure `<label htmlFor>` and `<input id>` pairs or wrap inputs inside labels.

---

## 9) Multiple `eslint-disable` comments and suppressed rules

Files: various — `src/pages/contact/index.js`, `src/components/error-boundary/index.js`, `babel.config.js` (disables all linting)
Severity: Medium

Why it's an issue

-   Repeated rule disabling hides real problems from the linter and encourages technical debt.

Recommendation

-   Remove `eslint-disable` statements and fix the underlying issues. Where the rule is invalid, consider adding targeted rule ignores with inline justification.

---

## 10) Use of `index` or other non-stable keys in many components

Files: `src/components/common/carousel.js`, `src/components/common/index.js`, `src/pages/about/component.js`, `src/pages/work/project.js`, etc.
Severity: High

Why it's an issue

-   Reusing `index` or non-unique keys can cause strange UI bugs and inefficiencies.

Recommendation

-   Replace with stable unique keys from data (id, slug) or generate stable IDs once when data is created.

---

## 11) Non-semantic or missing `alt` attributes and image optimizations

Files: `src/pages/about/index.js` (commented out alt values, some `img` alt empty), many images have `alt` but others are missing or empty
Severity: Medium

Why it's an issue

-   Missing `alt` attributes harm accessibility and SEO. Image optimization (lazy loading) is missing for large images.

Recommendations

-   Ensure all `<img>` tags have meaningful `alt` or `role="presentation"` if decorative.
-   Use `loading="lazy"` for non-critical images.

---

## 12) Styling anti-patterns: frequent `!important`, hiding scrollbars, vendor-prefixed code

Files: `src/styles/app.scss`, `src/components/core/style.scss`, `src/components/common/carousel.scss` (and others)
Severity: Medium

Why it's an issue

-   `!important` should be avoided because it makes future maintenance harder; it indicates overly-specific CSS or selector mismatches.
-   Hiding scrollbars is bad UX for many users.
-   Vendor prefixes should be handled by Autoprefixer; duplicating them makes CSS verbose.

Recommendations

-   Refactor CSS to increase specificity rather than rely on `!important`.
-   Restore scrollbars for accessibility or use CSS that supports both discoverability and visual preferences.
-   Remove manual vendor prefixes in favor of build tooling.

---

## 13) Hard-coded / brittle values in UI logic

Files: `src/components/common/carousel.js` (fixed slideWidth = 280, gap = 24)
Severity: Medium

Why it's an issue

-   Coupling JS to hard-coded CSS values is brittle and causes maintenance friction.

Recommendation

-   Read dynamic measurements via `getBoundingClientRect()` or expose the size via CSS custom properties and compute from JS.

---

## 14) Missing / limited input validation and sanitization for contact form

Files: `src/pages/contact/index.js`
Severity: Medium

Why it's an issue

-   The current form triggers a mailto with inputs that are not validated or sanitized.
-   No server-side verification or proper UX for form failures; mailto may be blocked / not supported on some clients.

Recommendations

-   Add client-side validation (email pattern validation, length checks), and ideally a server-side endpoint or third-party email provider for reliability.
-   Avoid `mailto` for production forms unless the intent is to rely on user email clients.

---

## 15) Repeated/commented / dead code and console logging

Files: many (e.g., `src/pages/home/index.js` has commented code and console.log)
Severity: Low

Why it's an issue

-   Dead code and console statements add noise and hide important logs.

Recommendation

-   Remove commented-out blocks or keep them behind feature flags in development branches; remove console.log calls and prefer structured logging or proper debug toggles.

---

## 16) Testing and type coverage

Files: repo-wide
Severity: Medium

Why it's an issue

-   The repo lacks unit / integration tests and lacks static typing (TypeScript) or PropTypes to validate component contracts.

Recommendations

-   Add unit tests (Jest + React Testing Library) and some end-to-end tests (Cypress / Playwright).
-   Consider introducing TypeScript or at least PropTypes for components and data shape validation.

---

## 17) Security: links and target attributes

Files: `src/pages/work/blog.js`, `src/pages/work/project.js` and others
Severity: Medium

Why it's an issue

-   External links opened with `target="_blank"` must include `rel="noopener noreferrer"` to prevent window.opener vulnerabilities.

Recommendation

-   Ensure `rel="noopener noreferrer"` is added to all blank-target external anchors.

---

## 18) Miscellaneous recommended improvements

Severity: Low/Medium

-   Use a centralized data loader and a clear API surface for content instead of sprinkling `window.bootstrap` everywhere.
-   Avoid disabling lint entirely in `babel.config.js`. Limit disables to files or lines with clear rationale.
-   Add `loading="lazy"` to large images to improve performance.
-   Consider splitting large pages into smaller components to improve readability and testability.
-   Add `aria-label` on interactive elements (like button icons) where necessary so they are accessible to assistive tech.
-   Replace magic numbers and inline px with SASS tokens (you already started that) and use variables for sizes.

---

## Next steps (recommended prioritized order)

1. Fix critical security items:
    - Sanitize or remove `dangerouslySetInnerHTML` usage until content is validated (Critical)
2. Replace `window.bootstrap` with a React context or inject data via props (High)
3. Replace many `index` keys with stable keys in lists (High)
4. Fix SSR/runtime issues: guard `window.*` usage and adjust `isMobile` detection (High)
5. Clean up lint disables and console logs (Medium)
6. Improve accessibility (labels, alt attributes, scrollbars) (Medium)
7. Replace brittle values in JS/CSS coupling (Medium)
8. Add tests and static typing (Medium)

---

If you'd like, I can now implement a prioritized subset of these fixes (sanitization + bootstrap -> context + replace index keys in the top-priority places). Tell me which items you want me to start with and I'll prepare a step-by-step patchset and tests.

_Generated by automated code audit + manual review._
