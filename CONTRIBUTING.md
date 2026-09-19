# Contributing

Thanks for considering a contribution. This project stays deliberately small — please keep that in mind for the size and scope of pull requests.

## Workflow

1. Open an issue first for anything beyond a small fix, so the approach can be agreed before you spend time on it.
2. Fork the repo and create a branch off `main`: `git checkout -b feature/short-description`.
3. Make your changes, keeping commits focused and messages descriptive.
4. Test locally by serving the site (see the README's [Running locally](./README.md#running-locally) section) and checking it in at least one desktop and one mobile-width browser.
5. Open a pull request against `main` with a clear description of what changed and why.

## Coding conventions

- **HTML** — semantic elements over generic `<div>`s where one exists; keep sections self-contained and commented.
- **CSS** — add new colors, spacing, or type values as tokens in `:root` in `assets/css/style.css` rather than hardcoding values inline.
- **JavaScript** — no build step and no new dependencies without discussion first; keep `assets/js/main.js` readable without a framework.
- **Accessibility** — maintain visible keyboard focus states, sufficient color contrast, and respect for `prefers-reduced-motion`.

## Reporting bugs

Open an issue with:
- What you expected to happen
- What actually happened
- Steps to reproduce
- Browser/OS, if relevant

## Code of conduct

Be respectful and constructive. Disagreements about approach are fine; personal attacks are not.
