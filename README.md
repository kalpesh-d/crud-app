# CRUD App with Next.js and TypeScript

This project is a modern, CRUD (Create, Read, Update, Delete) application built with Next.js, TypeScript, and Tailwind CSS. It demonstrates best practices in React development, including custom hooks, component composition, and state management.

## Features

- Create, read, update, and delete posts
- Dark mode support
- API integration with axios

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Axios](https://axios-http.com/) - Promise-based HTTP client

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/kalpesh-d/crud-app.git
   cd crud-app
   ```

2. Install dependencies:

   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `app/`: Next.js app directory
  - `components/`: React components
  - `hooks/`: Custom React hooks
  - `types/`: TypeScript type definitions
  - `globals.css`: Global styles
  - `layout.tsx`: Root layout component
  - `page.tsx`: Home page component
- `public/`: Static assets

## API Integration

This project uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as a mock API for demonstration purposes.

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in the `tailwind.config.ts` file:
