# Project Name

A clean, professional, framework-free starting point for HTML/CSS/JS projects on GitHub. No build step, no dependencies — clone it, open it, and it works.

[![License: MIT](https://img.shields.io/badge/License-MIT-2f6f62.svg)](./LICENSE)
[![Made with HTML5](https://img.shields.io/badge/HTML-5-e34c26.svg)](https://developer.mozilla.org/docs/Web/HTML)
[![Made with CSS3](https://img.shields.io/badge/CSS-3-264de4.svg)](https://developer.mozilla.org/docs/Web/CSS)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-c08a3e.svg)](./CONTRIBUTING.md)

**[View demo](#) · [Report a bug](../../issues) · [Request a feature](../../issues)**

---

## Table of contents

- [About](#about)
- [Features](#features)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running locally](#running-locally)
- [Project structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Browser support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About

Replace this paragraph with a short, plain-language description of what the project actually does, who it's for, and why it exists. Two or three sentences is usually enough — link out to `docs/` for anything longer.

### Screenshot

> Add a screenshot or GIF of the running project here once it exists:
> `![Screenshot](docs/screenshot.png)`

## Features

- **Zero build step** — plain HTML, CSS, and JavaScript; open `index.html` directly or serve it
- **Accessible by default** — semantic landmarks, visible keyboard focus, reduced-motion support
- **Light/dark aware** — colors are CSS custom properties that follow the visitor's system theme
- **Responsive** — fluid type scale and a layout that collapses cleanly to mobile
- **CI-ready** — a GitHub Actions workflow for HTML validation and link-checking is included
- **Documented** — this README, a `CONTRIBUTING.md`, and a `docs/` folder for anything longer

## Getting started

### Prerequisites

You only need a way to serve static files. Any one of these works:

- [Node.js](https://nodejs.org/) (for `npx serve`)
- Python 3 (for `python3 -m http.server`)
- Any other static file server, or simply opening `index.html` in a browser

### Installation

```bash
git clone https://github.com/you/project-name.git
cd project-name
```

There are no dependencies to install for the base template.

### Running locally

```bash
# option 1 — Node
npx serve .

# option 2 — Python
python3 -m http.server 8000

# option 3 — just open it
open index.html   # macOS
start index.html  # Windows
```

Then visit `http://localhost:3000` (or whichever port your server reports).

## Project structure

```
project-name/
├── index.html               # entry point / demo page
├── assets/
│   ├── css/
│   │   └── style.css        # design tokens + all styles
│   ├── js/
│   │   └── main.js          # page behavior, no dependencies
│   └── img/                 # images, icons, screenshots
├── docs/                    # longer-form documentation
├── .github/
│   └── workflows/
│       └── ci.yml           # HTML validation + link check
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

## Customization

- **Colors, type, spacing** — all defined as CSS custom properties at the top of `assets/css/style.css` under `:root`. Change a token once and it updates everywhere.
- **Content** — edit `index.html` directly; sections are commented and self-contained.
- **Behavior** — `assets/js/main.js` is intentionally small; extend it or replace it entirely.
- **Fonts** — the template loads `Fraunces` and `Inter` from Google Fonts. Swap the `<link>` tags in `index.html` and the `--serif` / `--sans` variables in the CSS to change them.

## Deployment

Because this is a static site, it can be hosted anywhere that serves files:

| Host | Notes |
|---|---|
| [GitHub Pages](https://pages.github.com/) | Settings → Pages → deploy from branch |
| [Netlify](https://www.netlify.com/) | Drag-and-drop or connect the repo |
| [Vercel](https://vercel.com/) | Import the repo, no build command needed |
| Any static host / S3 / Nginx | Upload the repository contents as-is |

## Browser support

Tested against the current and previous major version of Chrome, Firefox, Safari, and Edge. The design degrades gracefully in older browsers — layout and color features fall back rather than break.

## Contributing

Contributions are welcome. Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the workflow, coding conventions, and how to submit a pull request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for the full text.

## Acknowledgements

- [Fraunces](https://fonts.google.com/specimen/Fraunces) and [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- [Shields.io](https://shields.io/) for README badges
