# Pridhvinath Chowdary - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design with dark/light theme support and smooth animations.

## 🚀 Features

- **Responsive Design** - Optimized for all device sizes
- **Dark/Light Theme** - Toggle between themes with system preference detection
- **Smooth Animations** - Powered by Framer Motion
- **Modern UI** - Clean and professional design
- **Fast Performance** - Optimized React components
- **TypeScript** - Type-safe development
- **SEO Friendly** - Proper meta tags and structure

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm/yarn

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/prudhvi2297/portfolio.git
```

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── Home/
│   │   ├── ContactCTA.tsx
│   │   └── ...
│   └── ui/
│       └── Button.tsx
├── context/
│   └── ThemeContext.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── styles/
│   └── globals.css
└── App.tsx
```

## 🎨 Customization

### Theme Configuration

The theme system automatically detects user preferences and persists the selection:

```typescript
// Theme is managed in src/context/ThemeContext.tsx
const { theme, toggleTheme } = useTheme();
```

### Styling

Tailwind CSS classes are used throughout the project. Key color scheme:
- Primary: `primary-600`, `primary-400`
- Background: `gray-50`, `gray-900`
- Text: `gray-700`, `gray-300`

### Adding New Sections

1. Create a new component in the appropriate directory
2. Add routing in `App.tsx` if needed
3. Update navigation in `Header.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

```bash
npm run build
```

Then drag and drop the `dist` folder to Netlify, or connect your GitHub repository for automatic deployments.

### Deploy to Vercel

```bash
npm run build
```

Connect your GitHub repository to Vercel for automatic deployments.

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 🔧 Environment Variables

Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_APP_TITLE=Pridhvinath Chowdary Portfolio
VITE_CONTACT_EMAIL=your.email@example.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI Library
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [Lucide React](https://lucide.dev/) - Icon Library

---

Made with ❤️ by Pridhvinath Chowdary
