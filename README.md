# React E-commerce Store

**[Click the link to see DEMO](https://oleksii-bidiak.github.io/phone-catalog/)**

**[Here](https://www.figma.com/design/T5ttF21UnT6RRmCQQaZc6L/Phone-catalog-(V2)-Original?node-id=0-1&node-type=canvas) & [here](https://www.figma.com/design/BUusqCIMAWALqfBahnyIiH/Phone-catalog-(V2)-Original-Dark?node-id=0-1&node-type=canvas) you can find the design**

## Description
This project is a modern e-commerce application built using React, with state management powered by Redux Toolkit and type safety provided by TypeScript. The project follows the Feature-Sliced Design (FSD) methodology, ensuring scalability and maintainability.

## Main Features
- Fully responsive design
- Asynchronous data and page loading
- LocalStorage state persistence
- Interactive product galleries
- Optimized components for enhanced user experience

## Key Features
- Dark and light theme switcher.
- Lazy loading of pages (each page is split into chunks using `React.lazy`).
- Custom loaders for large elements (like pages) and skeletons for improved user experience.
- **React Router DOM** for managing routing.
- **Swiper** and **Swiper-thumb** for interactive product galleries.
- Category-based product sorting — products are fetched by category through dynamic parameters.
- Product detail page — product details are fetched based on the `itemId` passed as a URL parameter.
- Adaptive pagination component — reusable pagination component that adapts based on the number of products and pages.
- Filtering — filters are saved in search parameters.
- Favorites and cart functionality — favorite products and cart items are stored in LocalStorage with custom events tracking additions and removals.
- Icon fonts, grid, and flexbox are used to create a responsive and adaptive interface.

## Technologies
- React
- TypeScript
- Redux Toolkit
- SCSS
- React Router DOM
- Swiper

## Key Parts of the Project Structure
```bash
src/
  ├── app/                  # Global settings, styles, providers (Store, Theme, ErrorBoundary)
  ├── entities/             # Core entities (products, categories)
  ├── features/             # Functional blocks
  ├── pages/                # Lazy-loaded pages
  ├── shared/               # Shared resources (UI components, constants, hooks, utils, styles etc.)
  └── index.tsx             # Application entry point
```

## Installation and Setup
1. Fork and clone the repository.
2. Run `npm install` in the terminal to install dependencies.
3. Start the project locally by running `npm start`.
