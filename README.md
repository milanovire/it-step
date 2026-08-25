# IT ШАГ — Vitebsk Website

Responsive **Single Page Application (SPA)** for the IT STEP training center in Vitebsk, Belarus.

The application provides information about educational programs, news, vacancies, CT preparation courses, and application forms integrated with Bitrix24 CRM.

---

## Features

- Course catalog for adults, children, and teenagers
- Detailed course pages with curriculum, benefits, and FAQ
- CT preparation programs
- News and announcements
- Vacancy listings
- IT STEP branches information
- Application forms with Bitrix24 CRM integration
- Responsive design for desktop, tablet, and mobile
- Runtime error handling and fallback UI
- Unit and component testing

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19.2.7 |
| Language | TypeScript |
| Build Tool | Vite 8 |
| Routing | React Router 7 |
| Styling | SCSS Modules |
| Animations | Framer Motion |
| Carousel | Swiper |
| Icons | Lucide React |
| Testing | Jest 30, Testing Library, jsdom |
| TypeScript Testing | ts-jest |
| Linting | oxlint |

---

## Architecture

The project follows the **Feature-Sliced Design (FSD)** architecture.

```text
src/
├── app/           # Application initialization, providers and global styles
├── pages/         # Application pages
├── widgets/       # Complex composite UI blocks
├── features/      # User interactions and application features
├── entities/      # Business entities and related UI
└── shared/        # Reusable UI, hooks, utilities and configuration
```

### Dependency Direction

```text
app
 ↓
pages
 ↓
widgets
 ↓
features
 ↓
entities
 ↓
shared
```

Each layer can depend only on layers below it.

The project uses the `@/` alias for imports from the `src/` directory.

---

## Project Structure

```text
src/
├── app/
│   ├── providers/     # Router, Error Boundary and application providers
│   └── styles/        # Global styles and design tokens
│
├── pages/             # Page-level compositions
│
├── widgets/           # Header, Footer, Hero and other UI blocks
│
├── features/          # Application form and user interactions
│
├── entities/
│   ├── course/        # Course data, models and UI
│   ├── news/          # News data, models and UI
│   └── vacancy/       # Vacancy data, models and UI
│
├── shared/
│   ├── config/        # Application configuration
│   ├── hooks/         # Reusable hooks
│   ├── lib/           # Utilities and helpers
│   └── ui/            # Reusable UI components
│
└── test/              # Shared testing utilities
```

---

## Requirements

- Node.js 20+
- npm 10+

Node.js LTS is recommended.

---

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application runs on:

```text
http://localhost:5173
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and create production build |
| `npm run preview` | Preview production build |
| `npm test` | Run Jest tests |
| `npm run test:coverage` | Run tests with coverage |

---

## Routing

The application uses **React Router 7.18** with **Hash Routing**.

| Route | Description |
|---|---|
| `#/` | Home |
| `#/it-education` | Education catalog |
| `#/courses/:slug` | Course details |
| `#/ct-prep` | CT preparation |
| `#/news` | News |
| `#/news/:slug` | News details |
| `#/vacancies` | Vacancies |
| `#/vacancies/:slug` | Vacancy details |
| `#/it-step-rb` | IT STEP in Belarus |
| `#/*` | Not Found |

Hash Routing allows the SPA to be deployed to static hosting without additional server-side route rewriting.

---

## Bitrix24 Integration

Application forms are implemented in:

```text
src/features/application-form/ui/ApplicationForm.tsx
```

The application sends lead data to Bitrix24 using the `crm.lead.add` REST API method.

The submitted data may include:

- Name
- Phone number
- Comment
- Current page URL
- Selected course or section

The Bitrix24 webhook is provided through environment configuration.

Network and API errors are handled through inline UI feedback instead of browser alerts.

---

## Error Handling

The application provides several levels of error handling:

- **404 handling** through a catch-all route
- **React Error Boundary** for runtime errors
- **Fallback UI** for unexpected application errors
- **Inline form errors** for failed API requests
- **Network error handling** for unsuccessful requests

Relevant locations:

```text
src/app/providers/ErrorBoundary.tsx
src/shared/ui/ErrorFallback/
src/pages/not-found/
```

---

## Testing

The project uses:

- Jest 30
- Testing Library
- jsdom
- ts-jest

Test files follow the naming convention:

```text
*.test.ts
*.test.tsx
```

Tests are located close to the functionality they cover.

Shared test utilities are located in:

```text
src/test/
```

### Coverage

The configured global coverage threshold is **75%** for:

- Branches
- Functions
- Lines
- Statements

Run coverage with:

```bash
npm run test:coverage
```

---

## Styling

The project uses **SCSS Modules** for component-level styling.

Global styles:

```text
src/app/styles/global.scss
```

Design tokens and shared SCSS utilities:

```text
src/app/styles/_variables.scss
```

Component styles follow the convention:

```text
Component.tsx
Component.module.scss
```

Responsive breakpoints:

| Breakpoint | Width |
|---|---:|
| `lg` | ≤ 1024px |
| `md` | ≤ 768px |
| `sm` | ≤ 480px |

---

## Content

Course, news, and vacancy data is stored in TypeScript modules.

### Courses

```text
src/entities/course/model/courses.ts
src/entities/course/model/children-programs.ts
```

### News

```text
src/entities/news/model/news.ts
```

### Vacancies

```text
src/entities/vacancy/model/vacancies.ts
```

### Configuration

```text
src/shared/config/
```

The configuration layer contains application-level data such as contacts, routes, and external service configuration.

---

## Deployment

Create a production build:

```bash
npm run build
```

The production files are generated in:

```text
dist/
```

The `dist/` directory can be deployed to a static hosting provider or web server.

Because the application uses Hash Routing, additional server-side route rewriting is not required.

---

## Development Guidelines

When adding new functionality:

1. Follow the existing FSD architecture.
2. Keep business entities inside `entities`.
3. Keep user interactions and application scenarios inside `features`.
4. Keep reusable components and utilities inside `shared`.
5. Avoid placing business logic directly inside page components.
6. Reuse existing components and utilities where possible.
7. Add tests for new functionality.
8. Keep sensitive configuration outside the source code.

---