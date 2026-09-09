# React User Portal

A beginner-friendly React application with Bootstrap UI, authentication flow, navigation, protected routes, and forms.

## Features
- Login and registration
- Form validation
- localStorage-based demo authentication
- Protected routes
- Responsive Bootstrap navbar
- Dashboard
- Profile page
- Contact form
- About page
- 404 fallback page

## Tech Stack
- React
- Vite
- JavaScript
- React Router DOM
- Bootstrap
- ESLint

## Project Structure

```text
react-user-portal/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Profile.jsx
│   │   ├── Contact.jsx
│   │   └── About.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## Installation

```bash
npm create vite@latest react-user-portal
cd react-user-portal
npm install
npm install react-router-dom bootstrap
npm run dev
```

Select **React → JavaScript** when creating the Vite project.

## Bootstrap Setup

In `src/main.jsx`:

```jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
```

## Application Flow

```text
Register
   ↓
Login
   ↓
Dashboard (Protected)
 ├── Profile (Protected)
 ├── Contact (Protected)
 └── About
   ↓
Logout
   ↓
Login
```

## Authentication Flow

1. User registers.
2. User information is stored in browser localStorage.
3. User logs in with the registered email and password.
4. `isLoggedIn` is stored in localStorage.
5. ProtectedRoute checks login status.
6. Unauthorized users are redirected to `/login`.
7. Logout removes stored session data.

## Routes

| Route | Page | Protected |
|---|---|---|
| `/` | Redirects to Login | No |
| `/login` | Login | No |
| `/register` | Register | No |
| `/dashboard` | Dashboard | Yes |
| `/profile` | Profile | Yes |
| `/contact` | Contact | Yes |
| `/about` | About | No |

## Important Note

This project uses localStorage only for learning and demonstration. Do not store real passwords in localStorage in a production application. A production application should use a secure backend, password hashing, and secure authentication tokens or sessions.

## Useful Commands

```bash
npm run dev
npm run build
npm run preview
npm run lint
```
