# Login Page UI - Task 3

A modern and responsive login/signup page with user authentication functionality. Features sign up, sign in, forgot password, and user profile display with data persistence using localStorage.

## Features

- **Sign Up:** Create a new account with name, date of birth, email, and password
- **Sign In:** Login with email and password validation
- **Forgot Password:** Update password for existing accounts
- **User Profile:** Display user details after successful login
- **Logout:** Clear session and return to login screen
- **Form Validation:** Client-side validation for all inputs
- **Smooth Animations:** Animated transitions between sign-in and sign-up views
- **Responsive Design:** Works across different screen sizes

## Tech Stack

- **Frontend:** Vanilla JavaScript (ES6+)
- **Build Tool:** Vite
- **Styling:** CSS
- **Storage:** localStorage for user data persistence
- **Fonts:** Google Fonts (DM Sans, DM Serif Display)
- **Icons:** Google Material Symbols Outlined

## Project Structure

```
LoginUI/
├── index.html
├── package.json
└── src/
    ├── main.js
    ├── style.css
    └── assets/
```

## Getting Started

### Prerequisites

- Node.js installed
- Bun or npm package manager

### Installation

```bash
cd LoginUI
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

1. Open the app in your browser
2. **Sign Up:** Fill in all required fields (First Name, Last Name, DOB, Email, Password) and click Sign Up
3. **Sign In:** Enter your email and password to login
4. **Forgot Password:** Click "Forgot Password?" to update your password
5. **Logout:** Click the Logout button to end your session

## Author

**Om Upadhyay** - Intern at Synent Technology

## Task Information

- **Company:** Synent Technology
- **Task:** Task 3 - Login Page UI
- **Level:** Beginner
