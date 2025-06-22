# My-website

A personal portfolio website built with **ReactJS**, featuring a custom **webpack** and **Babel** setup (no Create React App).  
It showcases my professional experience, skills, education, blogs, and open source projects.

---

## ✨ Features

-   **Modern React** (Hooks & Functional Components)
-   **Custom Webpack** configuration for development & production
-   **SCSS** styling with modular structure
-   **Responsive layout** & animated transitions
-   **Dynamic content** loaded from a bootstrap JS config
-   Sections for **About**, **Works** (Web Apps, Blogs, NPM Modules, Certifications), and **Contact**
-   Navigation with **React Router**
-   Linting with **ESLint** and **Stylelint**
-   Automated **CI** with GitHub Actions

---

## 🚀 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) v18.18.0 or higher
-   [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

```sh
npm install
```

### Development

Runs the app in development mode at [http://localhost:9009](http://localhost:9009):

```sh
npm start
```

### Production Build

Create a production build of the app:

```sh
npm run build
```

### Linting

Run the linter:

```sh
npm run lint
```

---

## 📁 Project Structure

```
.
├── public/                 # Static files (optional, e.g. favicon, robots.txt)
├── src/
│   ├── assets/             # Images, fonts, and static assets (e.g. bootstrap.js)
│   ├── components/         # Reusable React components (e.g. ErrorBoundary, NavBar)
│   ├── pages/              # Page-level components (Home, About, Works, Contact, etc.)
│   ├── styles/             # Global SCSS, variables, mixins (e.g. stylekit-core.scss, app.scss)
│   ├── utils/              # Utility/helper functions
│   ├── hooks/              # Custom React hooks
│   └── app.js             # Main App component
├── index.js                # App entry point
├── webpack.*.js            # Webpack configs
├── babel.config.js         # Babel config
├── .eslintrc.js            # ESLint config
├── .stylelintrc.js         # Stylelint config
├── package.json
└── README.md
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

-   [Koidala Veera Venkata Satya Sai](https://satyakoidala.netlify.app/)
