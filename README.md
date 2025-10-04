# 🔥 NoteForge - Smart Notes & Code Snippets App

A modern, full-stack notes application built with Next.js 15, featuring rich text editing, notebook organization, and seamless user authentication. Perfect for developers, students, and professionals who need to capture, organize, and link technical insights.

## ✨ Features

### 🎯 Core Features
- **Rich Text Editor**: Powered by TipTap with full formatting capabilities
- **Notebook Organization**: Create and manage multiple notebooks
- **Real-time Auto-save**: Content automatically saves as you type
- **Manual Save**: Explicit save functionality with visual feedback
- **User Authentication**: Secure login/signup with email verification
- **Password Reset**: Email-based password recovery
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Dark/Light Mode**: Theme switching with system preference detection

### 📝 Rich Text Editing
- **Formatting**: Bold, italic, strikethrough, code, underline
- **Headings**: H1, H2, H3 with dropdown selection
- **Lists**: Bullet and ordered lists
- **Alignment**: Left, center, right, justify
- **Undo/Redo**: Full history support
- **Auto-save**: Content saves automatically on changes
- **Manual Save**: Plus button for explicit saving

### 🗂️ Organization
- **Notebooks**: Create and manage multiple notebooks
- **Notes**: Rich text notes within notebooks
- **Breadcrumb Navigation**: Easy navigation between levels
- **Search**: Find notes and notebooks quickly
- **Card-based UI**: Clean, modern interface

### 🔐 Authentication & Security
- **Email/Password**: Traditional authentication
- **Email Verification**: Required for account activation
- **Password Reset**: Secure password recovery
- **Session Management**: Secure session handling
- **Protected Routes**: Middleware-based route protection

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **TipTap** - Rich text editor framework
- **Framer Motion** - Smooth animations
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### Backend & Database
- **Better Auth** - Modern authentication library
- **Drizzle ORM** - Type-safe database operations
- **PostgreSQL** - Robust relational database
- **Neon Database** - Serverless PostgreSQL hosting
- **Server Actions** - Next.js server-side functions

### Email & Communication
- **Resend** - Email delivery service
- **React Email** - Email template components

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Drizzle Kit** - Database migrations
- **PNPM** - Fast package manager

## 📁 Project Structure

```
notes-app/
├── app/                          # Next.js App Router
│   ├── api/auth/[...all]/       # Authentication API routes
│   ├── dashboard/               # Protected dashboard area
│   │   ├── layout.tsx           # Dashboard layout with sidebar
│   │   ├── page.tsx             # Dashboard home
│   │   └── notebook/            # Notebook pages
│   │       └── [notebookId]/    # Dynamic notebook routes
│   │           ├── page.tsx     # Notebook details
│   │           └── note/        # Note pages
│   │               └── [noteId]/ # Dynamic note routes
│   │                   └── page.tsx # Note editor
│   ├── login/                   # Authentication pages
│   ├── signup/
│   ├── forgot-password/
│   ├── reset-password/
│   └── verify/                   # Email verification
├── components/                   # Reusable UI components
│   ├── ui/                      # Base UI components (Radix UI)
│   ├── forms/                   # Form components
│   ├── emails/                  # Email templates
│   ├── rich-text-editor.tsx     # Main editor component
│   ├── note-card.tsx            # Note display component
│   ├── notebook-card.tsx        # Notebook display component
│   └── page-wrapper.tsx         # Layout wrapper
├── db/                          # Database configuration
│   ├── db.ts                    # Database connection
│   └── schema.ts                # Database schema
├── lib/                         # Utility libraries
│   ├── auth.ts                  # Authentication configuration
│   ├── auth-client.ts           # Client-side auth
│   └── utils.ts                 # Utility functions
├── server/                      # Server-side functions
│   ├── notes.ts                 # Note operations
│   ├── notebook.ts              # Notebook operations
│   └── user.ts                  # User operations
├── hooks/                       # Custom React hooks
├── middleware.ts                # Next.js middleware
└── public/                      # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PNPM (recommended) or NPM
- PostgreSQL database (or Neon account)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd notes-app
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file:
   ```env
   # Database
   DATABASE_URL="your-postgresql-connection-string"
   
   # Authentication
   BETTER_AUTH_SECRET="your-secret-key"
   BETTER_AUTH_URL="http://localhost:3000"
   
   # Email (Resend)
   RESEND_API_KEY="your-resend-api-key"
   ```

4. **Database Setup**
   ```bash
   # Generate migration files
   pnpm drizzle-kit generate
   
   # Run migrations
   pnpm drizzle-kit push
   ```

5. **Start Development Server**
   ```bash
   pnpm dev
   ```

6. **Open in Browser**
   Navigate to `http://localhost:3000`

## 🎨 Key Components

### Rich Text Editor (`components/rich-text-editor.tsx`)
- **TipTap Integration**: Full-featured rich text editing
- **Auto-save**: Content saves automatically on changes
- **Manual Save**: Plus button for explicit saving
- **Formatting Tools**: Bold, italic, headings, lists, alignment
- **Real-time State**: Live editor state management

### Authentication System
- **Better Auth**: Modern authentication with email verification
- **Protected Routes**: Middleware-based route protection
- **Session Management**: Secure session handling
- **Password Reset**: Email-based recovery

### Database Schema
- **Users**: User accounts with email verification
- **Sessions**: Secure session management
- **Notebooks**: User-owned notebook containers
- **Notes**: Rich text content with JSON storage
- **Relations**: Proper foreign key relationships

## 🔧 Development

### Available Scripts
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Database Operations
```bash
pnpm drizzle-kit generate    # Generate migrations
pnpm drizzle-kit push        # Push schema changes
pnpm drizzle-kit studio      # Open Drizzle Studio
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main

### Environment Variables for Production
```env
DATABASE_URL="your-production-database-url"
BETTER_AUTH_SECRET="your-production-secret"
BETTER_AUTH_URL="https://your-domain.com"
RESEND_API_KEY="your-resend-api-key"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **TipTap** - Amazing rich text editor framework
- **Better Auth** - Modern authentication solution
- **Radix UI** - Accessible component primitives
- **Next.js Team** - Excellent React framework
- **Tailwind CSS** - Utility-first CSS framework

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies.**
