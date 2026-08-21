# IT ШАГ — Vitebsk Website

Website for the **IT STEP** training center in Vitebsk, Belarus.  
The project is a static React SPA with course catalogs, news, vacancies, CT prep programs, and lead capture forms integrated with Bitrix24.

---

## About the Website 

**IT STEP Vitebsk** is the official web presence of a local branch of IT STEP Academy — a computer education provider operating in Belarus since 2013.

The site helps prospective students and parents:

- explore **IT courses for adults**, **children & teens**, and **seasonal programs**;
- read detailed **course pages** with curriculum, benefits, and FAQ;
- prepare for **Centralized Testing (CT)** with subject-specific program info;
- browse **news & announcements** (open lessons, promotions, events);
- view **job openings** at the center;
- learn about **IT STEP branches across Belarus**;
- submit **application forms** that create leads in Bitrix24 CRM.

The UI is in **Russian**, optimized for desktop and mobile, with a sticky top contact bar, glass-style header, and content-focused layout without heavy scroll animations.

---

## О проекте (для разработчиков)

Одностраничное приложение (SPA) на React без backend-сервера. Контент (курсы, новости, вакансии) хранится в TypeScript-модулях в `src/entities/`. Сборка — статические файлы в `dist/`, пригодные для деплоя на любой static hosting.

### Стек

| Категория | Технологии |
|-----------|------------|
| UI | React 19, TypeScript |
| Routing | React Router 7 (`createHashRouter`) |
| Сборка | Vite 8 |
| Стили | SCSS Modules, CSS variables в `_variables.scss` |
| Анимации | Framer Motion (drawer, FAQ, scroll-to-top) |
| Карусели | Swiper |
| Иконки | Lucide React |
| Тесты | Jest 30, Testing Library, jsdom |
| Линтер | oxlint |

### Архитектура (Feature-Sliced Design)

```
src/
├── app/           # Точка входа, роутер, глобальные провайдеры, стили
├── pages/         # Страницы (композиция widgets + entities)
├── widgets/       # Крупные блоки UI (Header, Footer, HeroSection, …)
├── features/      # Фичи (ApplicationForm, MobileDrawer)
├── entities/      # Бизнес-сущности (course, news, vacancy) + UI-карточки
├── shared/        # Переиспользуемые UI, config, lib, hooks
└── test/          # Хелперы для тестов (renderWithRouter, mocks)
```

**Правило импортов:** слой может импортировать только из слоёв ниже (`pages` → `widgets` → `features` → `entities` → `shared`).

Алиас путей: `@/` → `src/` (настроен в Vite и TypeScript).

---

## Быстрый старт

### Требования

- Node.js 20+ (рекомендуется LTS)
- npm 10+

### Установка и запуск

```bash
npm install
npm run dev
```

Приложение откроется на `http://localhost:5173` (порт Vite по умолчанию).

### Сборка и превью

```bash
npm run build    # tsc + vite build → dist/
npm run preview  # локальный просмотр production-сборки
```

### Тесты и линтер

```bash
npm test              # все тесты
npm run test:coverage # с отчётом покрытия 
npm run lint          # oxlint
```

---

## Маршруты

Роутер использует **Hash Router** (`#/…`), что упрощает деплой на static hosting без rewrite-правил.

| URL hash | Страница |
|----------|----------|
| `#/` | Главная |
| `#/it-education` | Каталог IT-обучения (вкладки: дети / взрослые / сезонные) |
| `#/courses/:slug` | Детальная страница курса |
| `#/ct-prep` | Подготовка к ЦТ |
| `#/news` | Список новостей |
| `#/news/:slug` | Страница новости |
| `#/vacancies` | Вакансии |
| `#/vacancies/:slug` | Детальная вакансия |
| `#/it-step-rb` | IT STEP в Республике Беларусь |
| `#/*` | 404 (NotFoundPage) |

Константы маршрутов: `src/shared/config/routes.ts`  
Определение роутера: `src/app/providers/router.tsx`

---

## Контент и конфигурация

| Файл | Назначение |
|------|------------|
| `src/shared/config/contacts.ts` | Телефоны, адрес, email, соцсети |
| `src/shared/config/routes.ts` | Пути и пункты навигации |
| `src/shared/config/diary.ts` | URL электронного дневника MyStat |
| `src/shared/config/hero.ts` | ID hero-контейнера для scroll/layout |
| `src/entities/course/model/courses.ts` | Курсы для взрослых + хелперы (`getPopularCourses`, …) |
| `src/entities/course/model/children-programs.ts` | Детские и сезонные программы |
| `src/entities/news/model/news.ts` | Новости |
| `src/entities/vacancy/model/vacancies.ts` | Вакансии |

### Добавление курса

1. Добавить объект `Course` в `courses.ts` или `children-programs.ts` (поле `slug` — уникальный).
2. Страница откроется автоматически по `#/courses/{slug}`.
3. Для отображения в «Детских направлениях» на главной — курс должен быть в `getChildrenCourses()` (category: `'children'`).

### Добавление новости / вакансии

Аналогично — массивы в `news.ts` / `vacancies.ts`, slug используется в URL.

---

## Форма заявки (Bitrix24)

Компонент: `src/features/application-form/ui/ApplicationForm.tsx`  
URL webhook: `src/shared/config/env.ts` → `getBitrixWebhookUrl()`

При отправке выполняется `POST` на Bitrix24 REST API (`crm.lead.add`). В теле передаются имя, телефон, комментарий, URL страницы и название курса/раздела.

**Важно для production:**

- CORS и доступность API зависят от настроек Bitrix24;
- при ошибке сети пользователь видит inline-сообщение (`role="alert"`), форма не использует `alert()`.

---

## Стили

- Глобальные стили: `src/app/styles/global.scss`
- Design tokens: `src/app/styles/_variables.scss` (цвета, радиусы, breakpoints, mixins)
- Компонентные стили: `*.module.scss` рядом с компонентом
- Импорт variables в SCSS: `@use '@/app/styles/variables' as *;`
- Mixins: `glass`, `glass-scrollbar`, `respond-to(md|lg|sm)`

Breakpoints:

- `lg`: ≤ 1024px  
- `md`: ≤ 768px  
- `sm`: ≤ 480px  

---

## Обработка ошибок

- **404:** `src/pages/not-found` — catch-all маршрут `*`
- **Error Boundary:** `src/app/providers/ErrorBoundary.tsx` оборачивает `<Outlet />` в Layout
- **Fallback UI:** `src/shared/ui/ErrorFallback`
- Несуществующий slug курса/новости/вакансии — редирект на список (не 404)

---

## Тестирование

- Тесты лежат рядом с кодом: `*.test.ts`, `*.test.tsx`
- `renderWithRouter` — `src/test/renderWithRouter.tsx` для компонентов с роутингом
- Swiper и IntersectionObserver замоканы в `jest.setup.ts`
- SCSS импортируются через `identity-obj-proxy`

---

## Деплой

1. `npm run build`
2. Загрузить содержимое `dist/` на static host (nginx, GitHub Pages, S3, и т.д.)
3. Hash routing не требует server-side fallback для маршрутов
4. Убедиться, что `base` в `vite.config.ts` соответствует пути на сервере (сейчас `'/'`)

---

## Структура Layout

```
TopBar          — контакты (адрес, телефон)
Header          — логотип, навигация, mobile drawer
<main>          — контент страницы (ErrorBoundary)
Footer          — навигация, контакты, соцсети
ScrollToTopButton
```

Sticky-шапка: `src/widgets/layout/ui/Layout.module.scss` (`.siteHeader`).

---

## Полезные заметки

- **Язык интерфейса:** русский; тексты правятся в компонентах и data-файлах entities.
- **Изображения курсов/новостей:** часть URL ведёт на внешние CDN (Unsplash, itstep.by) — при офлайн-разработке нужен интернет.
- **framer-motion:** используется точечно (mobile drawer, FAQ, кнопка «наверх»); scroll/page enter-анимации отключены по дизайну.

---

