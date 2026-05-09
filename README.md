# Task Management Application

> A modern, responsive task management application built with React, TypeScript, and Vite.

## 📋 Overview

Task Management Application is a web application designed to help users manage their daily tasks with ease. It provides comprehensive features to create, edit, delete, and track task status with an intuitive and responsive user interface.

### ✨ Key Features

- 🔐 **Authentication System** - User login and registration with secure data storage
- ✅ **Task Management** - Create, edit, delete, and mark tasks as completed
- 🎯 **Task Priority** - Set task priorities (Low, Medium, High, Urgent)
- 🎨 **Responsive UI** - Modern design with Tailwind CSS and Shadcn UI
- 📱 **Mobile Friendly** - Full support for various screen sizes
- 🔄 **Real-time Updates** - Real-time data synchronization using React Query
- 💾 **Local Storage** - Local data storage for data persistence
- 🎯 **Smart Filtering** - Filter and search tasks based on various criteria

---

## 🚀 Quick Start

### Prerequisites

Make sure you have installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Included with Node.js
- **Git** - [Download](https://git-scm.com/)

### Installation

1. **Clone Repository**

```bash
git clone <repository-url>
cd test-react
```

2. **Install Dependencies**

```bash
npm install
# or if using yarn
yarn install
```

### Running the Application

#### Development Mode

Run the application in development mode with hot reload:

```bash
npm run dev
```

The application will run at `http://localhost:5173` by default.

#### Production Build

Create an optimized production build:

```bash
npm run build
```

Output will be saved in the `dist/` folder.

#### Preview Production Build

Preview the production build:

```bash
npm run preview
```

#### Linting

Check code quality with ESLint:

```bash
npm run lint
```

---

## 📁 Folder Structure

```
test-react/
├── public/                          # Static assets
│
├── src/
│   ├── components/                  # Reusable React components
│   │   ├── auth/                    # Authentication components
│   │   │   ├── SignIn.tsx           # Login form
│   │   │   └── SignUp.tsx           # Registration form
│   │   ├── dashboard/               # Dashboard components
│   │   │   └── Navbar.tsx           # Navigation bar
│   │   ├── task/                    # Task-related components
│   │   │   ├── AddNewTask.tsx       # Create new task form
│   │   │   ├── CompletedBadge.tsx   # Task completion badge
│   │   │   ├── PriorityBadge.tsx    # Task priority badge
│   │   │   └── TaskItem.tsx         # Individual task item
│   │   └── ui/                      # Shadcn UI components
│   │       ├── button.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── input.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       └── tooltip.tsx
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── use-mobile.ts            # Mobile detection hook
│   │   ├── auth/                    # Authentication hooks
│   │   │   ├── useLogin.ts
│   │   │   ├── useLogout.ts
│   │   │   └── useProfile.ts
│   │   └── task/                    # Task management hooks
│   │       ├── useAddTodo.ts
│   │       ├── useDeleteTodo.ts
│   │       ├── useTodos.ts
│   │       └── useUpdateTodo.ts
│   │
│   ├── pages/                       # Page components
│   │   ├── AuthPage.tsx             # Login/Register page
│   │   ├── DashboardPage.tsx        # Main dashboard
│   │   └── NotFoundPage.tsx         # 404 page
│   │
│   ├── layouts/                     # Layout components
│   │   └── DashboardLayout.tsx      # Main layout wrapper
│   │
│   ├── routes/                      # Routing configuration
│   │   └── index.tsx                # Route definitions
│   │
│   ├── providers/                   # Context providers
│   │   ├── PrivateGuard.tsx         # Protected route wrapper
│   │   ├── PublicGuard.tsx          # Public route wrapper
│   │   └── ReactQueryClient.tsx     # React Query provider
│   │
│   ├── stores/                      # Zustand stores
│   │   ├── authStore.ts             # Authentication state management
│   │   └── taskFilterStore.ts       # Task filter state
│   │
│   ├── services/                    # API services
│   │   └── mock.ts                  # Mock API setup
│   │
│   ├── lib/                         # Utility libraries
│   │   ├── axios.ts                 # Axios instance configuration
│   │   └── utils.ts                 # Common utilities
│   │
│   ├── utils/                       # Helper functions
│   │   ├── auth.ts                  # Authentication utilities
│   │   ├── priority.ts              # Priority utilities
│   │   └── todo.ts                  # Todo utilities
│   │
│   ├── types/                       # TypeScript type definitions
│   │   ├── todo.ts                  # Todo type definitions
│   │   └── user.ts                  # User type definitions
│   │
│   ├── data/                        # Static data
│   │   └── task_default.ts          # Default task data
│   │
│   ├── App.tsx                      # Main App component
│   ├── main.tsx                     # Application entry point
│   └── index.css                    # Global styles
│
├── components.json                  # Shadcn UI configuration
├── eslint.config.js                 # ESLint rules
├── package.json                     # Project dependencies
├── tsconfig.json                    # TypeScript configuration
├── tsconfig.app.json                # App TypeScript configuration
├── tsconfig.node.json               # Node TypeScript configuration
├── vite.config.ts                   # Vite configuration
└── README.md                        # This file
```

---

## 🛠️ Tech Stack

| Layer                  | Technology   | Version |
| ---------------------- | ------------ | ------- |
| **Frontend Framework** | React        | 19.2.4  |
| **Language**           | TypeScript   | ~6.0.2  |
| **Build Tool**         | Vite         | 8.0.4   |
| **State Management**   | Zustand      | 5.0.13  |
| **Data Fetching**      | React Query  | 5.100.9 |
| **Routing**            | React Router | 7.14.1  |
| **HTTP Client**        | Axios        | 1.16.0  |
| **Styling**            | Tailwind CSS | 4.2.2   |
| **UI Components**      | Shadcn UI    | -       |
| **Icons**              | Lucide React | 1.14.0  |
| **Notifications**      | Sonner       | 2.0.7   |
| **Linting**            | ESLint       | 9.39.4  |

### Development Stack

- **React Compiler** - Enabled for performance optimization
- **Babel** - Code transformation
- **TypeScript Compiler** - Type checking

---

## 🔐 Authentication

### Login Flow

1. User enters credentials (email & password)
2. Data is validated through mock API
3. Token is stored in Zustand store and localStorage
4. Application redirects to dashboard

### Guards

- **PublicGuard** - Only for non-authenticated users
- **PrivateGuard** - Only for authenticated users

---

## 📊 State Management

### Zustand Stores

#### `authStore.ts`

- Manages authentication state
- Stores user profile
- Handles login/logout operations

#### `taskFilterStore.ts`

- Manages task list filters
- State for sorting and searching

---

## 🔄 Data Flow

```
API Call → React Query → Component → Zustand Store → UI Update
```

### Key Libraries

- **React Query** - Server state management with caching and synchronization
- **Zustand** - Client state management (simple and efficient)
- **Axios** - HTTP requests with interceptor support

---

## 📝 Project Assumptions & Challenges

### ✅ Assumptions

1. **User Authentication**
   - Users must log in first
   - Token is stored in localStorage for session persistence

2. **Data Storage**
   - Application uses localStorage as persistent storage
   - Task data is stored in JSON format

3. **API Integration**
   - Mock API is used for development and testing
   - API can be easily integrated with real backend

4. **Browser Support**
   - Application supports modern browsers (Chrome, Firefox, Safari, Edge)
   - Full mobile browser support

5. **Internet Connection**
   - Application works in offline mode (data from localStorage)
   - Automatic synchronization when online

### 🎯 Challenges & Solutions

| Challenge             | Description                       | Solution                                     |
| --------------------- | --------------------------------- | -------------------------------------------- |
| **Type Safety**       | Ensure type safety throughout app | TypeScript strict mode enabled               |
| **Performance**       | Unnecessary re-renders            | React Compiler + React Query caching         |
| **State Management**  | Increasing state complexity       | Zustand for simplicity + React Query         |
| **Mock API**          | Testing without real backend      | axios-mock-adapter for intercepting requests |
| **Responsive Design** | Multi-device support              | Tailwind CSS breakpoints + mobile hook       |
| **User Session**      | Maintain session across refresh   | localStorage + state rehydration             |
| **Error Handling**    | Handle various error scenarios    | Error boundary + Sonner toast notifications  |
| **Code Quality**      | Maintain code standards           | ESLint + TypeScript checking                 |

## 📖 Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn UI Components](https://ui.shadcn.com/)
- [React Query Docs](https://tanstack.com/query/latest)
- [Zustand Documentation](https://github.com/pmndrs/zustand)

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👥 Contributing

Contributions are always welcome. For major changes, please open an issue first to discuss what you would like to change.

### Steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
