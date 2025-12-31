# Documentation Index

This directory contains all core documentation for the calculator-i18n project.

## Core Documentation

### [README.md](./README.md)
**Main project README** - Overview of the calculator-i18n project
- Project features and tech stack
- Getting started guide
- Project structure overview
- Language support information
- Quick links to detailed documentation

### [CLAUDE.md](./CLAUDE.md)
**AI Assistant Guide** - Instructions for Claude Code when working with this repository
- Complete project architecture
- Development commands and workflows
- Internationalization (i18n) system details
- Calculator implementation patterns
- SEO implementation strategy
- Supported languages and URL structures
- Step-by-step guide for adding new calculators

## Implementation Guides

### [ADDING_CALCULATORS.md](./ADDING_CALCULATORS.md)
**Calculator Development Guide** - How to add new calculators to the project
- Dynamic routing system explanation
- Step-by-step calculator creation process
- Adding new languages to existing calculators
- MDX content structure and best practices
- Translation file organization
- File structure summary
- Migration guide from old system

### [CALCULATOR_OPTIMIZATION_GUIDE.md](./CALCULATOR_OPTIMIZATION_GUIDE.md)
**SEO & UX Optimization Methodology** - Complete guide for optimizing calculators
- Research methodology (analyzing top 3-5 results per language)
- Competitive analysis patterns
- MDX file structure and templates
- SEO optimization (titles, meta descriptions, keywords)
- Calculator positioning strategy
- Preventing duplication issues
- Mobile-first behavior
- Language-specific content guidelines
- Step-by-step process (30-45 min research per language)
- Quality checklist and troubleshooting

### [url-localization-rules.md](./url-localization-rules.md)
**URL Localization Rules** - Critical rules for multilingual URL structure
- Complete URL localization requirements
- Language-specific folder naming conventions
- Route mapping configuration
- Examples for all 12 supported languages
- Common mistakes to avoid

## Testing Documentation

### [PLAYWRIGHT_TESTING.md](./PLAYWRIGHT_TESTING.md)
**Testing Guide** - Playwright automated testing documentation
- Test structure and coverage
- Running tests (all, specific files, UI mode)
- Adding new languages to tests
- Adding new calculators to tests
- Test maintenance and synchronization
- CI/CD configuration
- Common test failures and solutions

## Quick Reference

### When to Use Each Document

**Starting the project?**
→ Start with [README.md](./README.md)

**Working with Claude Code?**
→ Reference [CLAUDE.md](./CLAUDE.md)

**Adding a new calculator?**
→ Follow [ADDING_CALCULATORS.md](./ADDING_CALCULATORS.md)
→ Then optimize with [CALCULATOR_OPTIMIZATION_GUIDE.md](./CALCULATOR_OPTIMIZATION_GUIDE.md)

**Adding a new language?**
→ Follow [ADDING_CALCULATORS.md](./ADDING_CALCULATORS.md) section "Adding a New Language"
→ Review [url-localization-rules.md](./url-localization-rules.md)

**Need to verify URL structure?**
→ Check [url-localization-rules.md](./url-localization-rules.md)

**Optimizing calculator content?**
→ Use [CALCULATOR_OPTIMIZATION_GUIDE.md](./CALCULATOR_OPTIMIZATION_GUIDE.md) methodology

**Running or updating tests?**
→ See [PLAYWRIGHT_TESTING.md](./PLAYWRIGHT_TESTING.md)

## Document Maintenance

All documentation in this directory is:
- ✅ **Version controlled** - Committed to git
- ✅ **Actively maintained** - Updated with project changes
- ✅ **Essential** - Required for project development and understanding
- ✅ **Language-agnostic** - Applies to all supported languages

## Related Files Outside This Directory

### Configuration Files
- `astro-i18next.config.mjs` - i18n configuration
- `src/config/calculators.ts` - Calculator IDs and list
- `src/config/languages.ts` - Language configurations
- `src/config/routes.ts` - URL slug mappings per language
- `tsconfig.json` - TypeScript and path aliases

### Content Files
- `src/content/calculators/{lang}/{calculator}.mdx` - Calculator content files
- `public/locales/{lang}/` - Translation JSON files

## Support

For questions or issues:
1. Check the relevant documentation file above
2. Review the specific configuration file
3. Consult the inline code comments
4. Check git commit history for context

---

**Last Updated:** December 2025
**Total Documents:** 6
**Languages Covered:** 12 (es, en, pt, fr, de, it, pl, nl, hi, tr, sv, ru)
**Calculators Documented:** Complete workflow from creation to optimization
