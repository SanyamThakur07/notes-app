# NoteFlow 🔥

A modern, developer-focused note-taking application built with Next.js. NoteFlow is designed to help developers capture, organize, and link their notes, code snippets, and technical insights with a lightning-fast, keyboard-first UX.

## ✨ Features

### 🚀 Core Features
- **Lightning-Fast Input**: Capture ideas instantly with keyboard-first UX
- **Developer-Friendly**: Built specifically for developers' workflow
- **Customizable Interface**: Fully customizable to fit your preferences
- **Smart Organization**: Organize notes, code snippets, and technical insights
- **Responsive Design**: Works seamlessly across all devices
- **Dark/Light Mode**: Built-in theme switching capability

### 🔧 Developer-Centric Features
- **Markdown Support**: Full markdown support for rich text formatting
- **Code Block Integration**: Syntax highlighting for code snippets
- **CLI-Style Shortcuts**: Command-line inspired keyboard shortcuts
- **Git-Style Versioning**: Version control for your notes (planned)
- **Local-First Architecture**: Your data stays on your device
- **End-to-End Encryption**: Optional encryption for sensitive notes (planned)

### 🎨 UI/UX Features
- **Modern Design**: Clean, minimalist interface with beautiful animations
- **Smooth Animations**: Powered by Framer Motion for fluid interactions
- **Text Effects**: Advanced text animations and effects
- **Component Library**: Custom UI components built with Radix UI
- **Accessible**: Built with accessibility in mind

## 🛠️ Tech Stack

### Frontend Framework
- **[Next.js 15.4.5](https://nextjs.org)** - React framework with App Router
- **[React 19.1.0](https://react.dev)** - UI library
- **[TypeScript 5.x](https://www.typescriptlang.org)** - Type-safe JavaScript

### Styling & UI
- **[Tailwind CSS 4.x](https://tailwindcss.com)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com)** - Headless UI components
- **[Lucide React](https://lucide.dev)** - Beautiful icons
- **[Class Variance Authority](https://cva.style/docs)** - Component variant management

### Animations & Effects
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **[TW Animate CSS](https://www.npmjs.com/package/tw-animate-css)** - Tailwind animation utilities

### Theme Management
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Theme switching

### Development Tools
- **[ESLint](https://eslint.org)** - Code linting
- **[Turbopack](https://turbo.build/pack)** - Fast bundler for development

## 📦 Libraries & Dependencies

### Production Dependencies
```json
{
  "@radix-ui/react-dropdown-menu": "^2.1.15",
  "@radix-ui/react-slot": "^1.2.3",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "lucide-react": "^0.536.0",
  "motion": "^12.23.12",
  "next": "15.4.5",
  "next-themes": "^0.4.6",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "tailwind-merge": "^3.3.1"
}
```

### Development Dependencies
```json
{
  "@eslint/eslintrc": "^3",
  "@tailwindcss/postcss": "^4",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "eslint": "^9",
  "eslint-config-next": "15.4.5",
  "tailwindcss": "^4",
  "tw-animate-css": "^1.3.6",
  "typescript": "^5"
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd notes-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
notes-app/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── animated-group.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── text-effect.tsx
│   ├── call-to-action.tsx
│   ├── features.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero-section.tsx
│   ├── logo.tsx
│   ├── mode-toggle.tsx
│   └── theme-provider.tsx
├── lib/                   # Utility functions
│   └── utils.ts
├── public/               # Static assets
└── package.json
```

## 🎨 Customization

The application is built with customization in mind:

- **Themes**: Toggle between light and dark modes
- **Components**: Modular component system built with Radix UI
- **Styling**: Easily customizable with Tailwind CSS
- **Animations**: Smooth animations powered by Framer Motion

## 🔮 Future Features

- **Note Creation & Editing**: Full CRUD operations for notes
- **Markdown Editor**: Rich markdown editing experience
- **Search Functionality**: Fast, fuzzy search across all notes
- **Tags & Categories**: Organize notes with tags and categories
- **Keyboard Shortcuts**: Extensive keyboard shortcuts for power users
- **Export/Import**: Support for various file formats
- **Collaboration**: Share and collaborate on notes
- **Plugin System**: Extensible plugin architecture

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- **Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **React Documentation**: [https://react.dev](https://react.dev)
- **Tailwind CSS**: [https://tailwindcss.com](https://tailwindcss.com)
- **Radix UI**: [https://www.radix-ui.com](https://www.radix-ui.com)

---

**Built with ❤️ for developers by developers**
