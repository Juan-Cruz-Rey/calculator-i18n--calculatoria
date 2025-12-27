# Calculator i18n

A multilingual calculator web application built with Astro and full internationalization support.

## 🚀 Features

- **Full i18n Support**: Spanish and English translations for all content
- **SEO Optimized**: Meta tags, hreflang, Open Graph, and Twitter Cards
- **Responsive Design**: Works on all devices
- **Type-Safe**: Built with TypeScript in strict mode
- **Fast**: Powered by Astro for optimal performance

## 📊 Available Calculators

### Health & Fitness
- ✅ **BMI Calculator** - Calculate Body Mass Index with metric/imperial units

### Coming Soon
- ~175 more calculators across Health, Financial, Math, and Other categories

## 🛠️ Tech Stack

- [Astro 5.x](https://astro.build/) - Static Site Generator
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [astro-i18next](https://github.com/yassinedoghri/astro-i18next) - Internationalization
- Pure CSS - No framework overhead

## 🏃 Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:4321`

## 🌍 Language Support

- **Spanish (es)** - Default language
  - URLs: `/`, `/calculadoras/imc`
- **English (en)**
  - URLs: `/en`, `/en/calculators/bmi`

## 📁 Project Structure

```
├── public/
│   └── locales/          # Translation files (es/en)
├── src/
│   ├── components/
│   │   └── calculators/  # Calculator components
│   ├── layouts/          # Page layouts with SEO
│   ├── pages/            # Routes (Spanish + English)
│   └── utils/
│       └── calculators/  # Calculation logic
└── astro-i18next.config.mjs
```

## 📝 Adding New Calculators

See [CLAUDE.md](./CLAUDE.md) for detailed instructions on adding new calculators.

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
