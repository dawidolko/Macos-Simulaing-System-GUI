# macOS Desktop Portfolio

> 🍏 **The dock, the launchpad and the animations** — macOS rebuilt in TypeScript and React, with a markdown editor running inside it

A macOS desktop in the browser: the dock with its magnification, launchpad, draggable windows, and an appearance that follows the system light/dark preference.

It is the most heavily typed of these four — TypeScript throughout, Zustand for state, Framer Motion for the animations — and it carries a real application rather than a mock-up: Milkdown, a proper WYSIWYG markdown editor, runs in one of its windows.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-build-646CFF?logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-0055FF?logo=framer&logoColor=white)
![Milkdown](https://img.shields.io/badge/Milkdown-editor-6B4FBB)
![License](https://img.shields.io/badge/License-MIT-green)

**Live:** [macos.dawidolko.pl](https://macos.dawidolko.pl)

---

## 🎯 Key Features

- **A dock that magnifies** — the animation macOS is recognised by, driven by Framer Motion rather than CSS transitions.
- **Launchpad and window management** — open, focus, drag and close, with the state held in Zustand so any component can read it.
- **A real markdown editor** — Milkdown with the CommonMark and GFM presets, history and a listener plugin, running inside a window.
- **Appearance follows the system** — light and dark switch with the OS preference rather than only by a toggle.
- **TypeScript throughout** — the window model, the app registry and the stores are typed, which is what keeps a desktop of many small apps manageable.
- **Linted and hooked** — ESLint with husky, so the checks run before a commit, not after.

---

## 🛠️ Technology Stack

| Technology | Version | Role |
| --- | --- | --- |
| **React** | 18 | The desktop and its applications. |
| **TypeScript** | 5 | Types across windows, apps and stores. |
| **Vite** | — | Dev server and build. |
| **Zustand** | — | Window and application state. |
| **Framer Motion** | 11 | Dock magnification and window animation. |
| **Milkdown** | 7.3 | The markdown editor app. |
| **UnoCSS** | — | Atomic styling. |
| **date-fns** | 3 | Clock and calendar. |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### 1. Clone the repository

```bash
git clone https://github.com/dawidolko/Macos-Simulaing-System-GUI.git
cd Macos-Simulaing-System-GUI
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run

```bash
npm run dev     # development server
npm run build   # production build
npm run serve   # preview the build
npm run lint    # ESLint over .js, .ts and .tsx
```

---

## 📁 Project Structure

```
Macos-Simulaing-System-GUI/
└── src/
    ├── index.tsx        # entry point
    ├── components/      # dock, launchpad, window chrome, apps
    ├── pages/           # desktop and login screens
    ├── stores/          # Zustand state
    ├── hooks/           # shared behaviour
    ├── configs/         # the application registry
    ├── types/           # shared types
    └── styles/
```

---

## 🖥️ The Family

This is one of four desktop-simulator portfolios, each built on a different stack:

| Desktop | Stack | Live |
| ------- | ----- | ---- |
| Windows 10 | React + Fluent UI | [windows.dawidolko.pl](https://windows.dawidolko.pl) |
| Ubuntu 20.04 | Next.js + Tailwind CSS | [ubuntu.dawidolko.pl](https://ubuntu.dawidolko.pl) |
| macOS | React + TypeScript + Vite | [macos.dawidolko.pl](https://macos.dawidolko.pl) |
| Deepin Linux | Vue 2 + Vuetify | [linux.dawidolko.pl](https://linux.dawidolko.pl) |

---

## 📄 License

MIT © [Dawid Olko](https://dawidolko.pl)
