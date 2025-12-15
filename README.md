# Ablespace Frontend

This is the **frontend** for the **Ablespace** project, built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. It connects to the Ablespace backend to manage authentication, tasks, and real-time notifications.

---

## 🛠 Tech Stack

- **React** + **TypeScript**
- **Vite** as the build tool
- **Tailwind CSS** for styling
- **React Hook Form** + **Zod** for form validation
- **Axios** for API requests
- **React Query** for server state management
- **Socket.IO Client** for real-time updates

---

## ⚡ Features

- User registration and login
- Task management (create, update, delete, filter)
- Real-time task updates via Socket.IO
- Notifications
- Protected routes with authentication
- Responsive UI using Tailwind CSS

---

## 📁 Project Structure

<pre>
frontend/
├── public/
│   └── logo.svg
├── src/
│   ├── api/                    # API layer
│   │   ├── auth.api.ts
│   │   ├── task.api.ts
│   │   └── user.api.ts
│   │
│   ├── app/                    # App-level setup
│   │   ├── router.tsx
│   │   ├── queryClient.ts
│   │   └── providers.tsx
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Skeleton.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── notifications/
│   │   │   └── NotificationBell.tsx
│   │   └── tasks/
│   │       ├── TaskCard.tsx
│   │       ├── TaskForm.tsx
│   │       ├── TaskFilters.tsx
│   │       └── TaskList.tsx
│   │
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useTasks.ts
│   │   ├── useSocket.ts
│   │   └── useNotifications.ts
│   │
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── Login.tsx
│   │   │   └── Register.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Tasks.tsx
│   │   └── Profile.tsx
│   │
│   ├── schemas/               # Zod schemas
│   │   ├── auth.schema.ts
│   │   └── task.schema.ts
│   │
│   ├── types/
│   │   ├── task.types.ts
│   │   └── user.types.ts
│   │
│   ├── utils/
│   │   ├── axios.ts
│   │   └── socket.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
</pre>





---

## 🚀 Getting Started

### 1. Clone the repository
```
1.git clone https://github.com/<your-username>/ablespace-frontend.git
cd ablespace-frontend

2. Install dependencies


npm install
3. Create a .env file
Create a .env file in the root (if required):

env

VITE_API_URL=http://localhost:3000
Make sure this matches your backend URL.

4. Run the development server

npm run dev
Open http://localhost:5173 in your browser.

🔑 Available Scripts
Command	Description
npm run dev	Run the development server
npm run build	Build the project for production
npm run preview	Preview the production build

🤝 Contributing
Fork the repository

Create your feature branch


git checkout -b feature/my-feature
Commit your changes


git commit -m "Add some feature"
Push to your branch


git push origin feature/my-feature
Open a Pull Request



