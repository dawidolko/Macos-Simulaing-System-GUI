# Welcome to macOS Desktop Simulator

<div align="center">

![macOS Simulator](https://img.shields.io/badge/macOS-Simulator-blue?style=for-the-badge&logo=apple)
[![Live Demo](https://img.shields.io/badge/Demo-macos.dawidolko.pl-success?style=for-the-badge)](https://macos.dawidolko.pl)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.0-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)

**A pixel-perfect macOS Big Sur → Sonoma desktop experience running entirely in your browser**

[🚀 Live Demo](https://macos.dawidolko.pl) · [📖 Documentation](#documentation) · [🐛 Report Bug](https://github.com/dawidolko/Macos-Simulaing-System-GUI/issues) · [✨ Request Feature](https://github.com/dawidolko/Macos-Simulaing-System-GUI/issues)

</div>

---

## 🎯 Overview

Welcome to the **macOS Desktop Simulator** wiki! This project recreates the authentic macOS desktop environment as a fully interactive web application. Built with modern web technologies, it delivers smooth animations, draggable windows, a functional dock, launchpad, spotlight search, and system-level controls—all without installing anything.

### 🌟 Key Features

| Feature | Description |
|---------|-------------|
| 🎨 **Authentic Design** | Pixel-perfect recreation of macOS Big Sur to Sonoma UI/UX |
| 🌓 **Light/Dark Mode** | Automatic theme switching based on system preferences |
| 🪟 **Window Management** | Fully draggable, resizable windows with minimize/maximize/close |
| 🚀 **Launchpad** | App launcher with smooth grid animations |
| 🔍 **Spotlight Search** | Quick search functionality (⌘+Space) |
| 🎵 **Music Player** | Functional music player with custom playlist |
| 📝 **Text Editor** | Markdown editor with live preview (Bear app) |
| 💻 **Terminal** | Interactive terminal emulator with custom commands |
| 🌐 **Safari Browser** | In-app web browser simulation |
| 📱 **FaceTime** | Webcam integration demo |
| 🎯 **Dock** | Animated dock with magnification effect |
| ⚙️ **Control Center** | System controls for WiFi, Bluetooth, brightness, volume |
| 🔋 **Battery Indicator** | Live battery status monitoring |
| 📱 **Responsive** | Optimized for various screen sizes |
| ⚡ **PWA Ready** | Install as a Progressive Web App |

---

## 📚 Documentation

### Getting Started
- **[Installation Guide](getting-started/installation)** - Set up your development environment
- **[Quick Start](getting-started/quick-start)** - Get running in 5 minutes
- **[Project Structure](getting-started/project-structure)** - Understand the codebase organization
- **[Configuration](getting-started/configuration)** - Customize the desktop experience

### Development
- **[Architecture](development/architecture)** - Technical architecture overview
- **[Components](development/components)** - React components documentation
- **[State Management](development/state-management)** - Zustand stores explained
- **[Styling](development/styling)** - UnoCSS and theming system
- **[Hooks](development/hooks)** - Custom React hooks reference
- **[Adding Apps](development/adding-apps)** - How to create new desktop applications

### Features
- **[Window System](features/window-system)** - Draggable and resizable windows
- **[Dock](features/dock)** - Customizable application dock
- **[Launchpad](features/launchpad)** - App launcher grid
- **[Spotlight](features/spotlight)** - Search functionality
- **[Menu Bar](features/menu-bar)** - Top menu bar and system controls
- **[Applications](features/applications)** - Built-in apps documentation

### Deployment
- **[Build & Deploy](deployment/build-deploy)** - Production build guide
- **[GitHub Pages](deployment/github-pages)** - Deploy to GitHub Pages
- **[Custom Domain](deployment/custom-domain)** - Set up your own domain

### Contributing
- **[Contribution Guidelines](contributing/guidelines)** - How to contribute
- **[Code Style](contributing/code-style)** - Coding standards
- **[Pull Request Process](contributing/pull-requests)** - PR workflow
- **[Roadmap](contributing/roadmap)** - Future plans and ideas

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ ([Download](https://nodejs.org))
- **pnpm** (recommended) or npm/yarn
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/dawidolko/Macos-Simulaing-System-GUI.git
cd Macos-Simulaing-System-GUI

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:5173 in your browser
```

### Production Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm serve
```

---

## 🏗️ Technology Stack

| Category | Technologies |
|----------|--------------|
| **Frontend Framework** | React 18, TypeScript 5 |
| **Build Tool** | Vite 5 |
| **State Management** | Zustand |
| **Styling** | UnoCSS, CSS Modules |
| **Animation** | Framer Motion |
| **Markdown** | React Markdown, Milkdown |
| **Code Highlighting** | React Syntax Highlighter |
| **Window Management** | react-rnd |
| **Icons** | Iconify |
| **Date/Time** | date-fns |
| **Testing** | Web Vitals |

---

## 🎨 Customization

The simulator is highly customizable. You can modify:

- **🖼️ Wallpapers** - Add custom backgrounds in `src/configs/wallpapers.ts`
- **📱 Apps** - Create new applications in `src/components/apps/`
- **🎯 Dock Items** - Configure dock in `src/stores/slices/dock.ts`
- **👤 User Profile** - Update user info in `src/configs/user.ts`
- **🎵 Music Playlist** - Add songs to `src/configs/music.ts`
- **🔗 Websites** - Customize Safari bookmarks in `src/configs/websites.ts`
- **💻 Terminal Commands** - Extend terminal in `src/configs/terminal.tsx`

---

## 📸 Screenshots

### Desktop - Light Mode
![Light Mode Desktop](screenshots/light-mode.png)

### Desktop - Dark Mode
![Dark Mode Desktop](screenshots/dark-mode.png)

### Launchpad
![Launchpad View](screenshots/launchpad.png)

### Applications
![Multiple Windows](screenshots/apps.png)

---

## 🤝 Contributing

We welcome contributions! Whether it's:

- 🐛 Bug fixes
- ✨ New features
- 📚 Documentation improvements
- 🎨 UI/UX enhancements
- 🌍 Translations

Please read our **[Contributing Guidelines](contributing/guidelines)** before submitting a pull request.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🗺️ Roadmap

- [ ] **iOS Safari Support** - Better mobile experience
- [ ] **More Applications** - Calendar, Notes, Photos, Mail
- [ ] **Mission Control** - Virtual desktops and window overview
- [ ] **Notification Center** - System notifications
- [ ] **Siri Integration** - Voice commands
- [ ] **Touch Bar Simulation** - Virtual MacBook Touch Bar
- [ ] **File System** - Virtual file system with drag & drop
- [ ] **App Store** - In-app application installer
- [ ] **Multi-language Support** - i18n implementation
- [ ] **Accessibility** - WCAG 2.1 compliance

---

## 📊 Project Stats

[![Star History Chart](https://api.star-history.com/svg?repos=dawidolko/Macos-Simulaing-System-GUI&type=Date)](https://star-history.com/#dawidolko/Macos-Simulaing-System-GUI&Date)

---

## 🔗 Useful Links

- **Live Demo:** [macos.dawidolko.pl](https://macos.dawidolko.pl)
- **GitHub Repository:** [Macos-Simulaing-System-GUI](https://github.com/dawidolko/Macos-Simulaing-System-GUI)
- **Issue Tracker:** [Report Issues](https://github.com/dawidolko/Macos-Simulaing-System-GUI/issues)
- **Discussions:** [GitHub Discussions](https://github.com/dawidolko/Macos-Simulaing-System-GUI/discussions)
- **Author:** [Dawid Olko](https://github.com/dawidolko)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 💖 Support

If you find this project useful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📢 Sharing with others
- ☕ [Buying me a coffee](https://github.com/dawidolko)

---

## 🙏 Acknowledgments

Special thanks to:

- The **React** and **TypeScript** communities
- **Apple Inc.** for the beautiful macOS design inspiration
- All **contributors** who helped improve this project
- The open-source community for amazing tools and libraries

---

<div align="center">

**[⬆ Back to Top](#welcome-to-macos-desktop-simulator)**

Made with ❤️ by [Dawid Olko](https://github.com/dawidolko)

</div>
