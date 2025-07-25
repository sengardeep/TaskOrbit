# TaskOrbit - Project Management Platform

A modern, full-featured project management platform for teams and individuals.

---

## Features

- Authentication (Google Sign-In, Email, Password)
- Create & Manage Multiple Workspaces
- Projects & Epics Management
- Tasks (CRUD, Status, Priority, Assignee)
- Roles & Permissions (Owner, Admin, Member)
- Invite Members to Workspaces
- Filters & Search (Status, Priority, AssignedTo)
- Analytics Dashboard
- Pagination & Load More
- Cookie Session Management
- Logout & Session Termination
- Seeding for Test Data
- Mongoose Transactions for Robust Data Integrity
- Built with MERN Stack (Node.js, MongoDB, React, TypeScript)

---

## Tech Stack

- **Frontend:** React, TypeScript, Vite, TailwindCSS, Zustand, TanStack Query, Zod
- **UI:** Shadcn UI, Lucide React
- **Backend:** Node.js, Express, TypeScript, Passport.js, Zod
- **Database:** MongoDB, Mongoose
- **Other:** Axios, Cookie Session, dotenv

---

## Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/TaskOrbit.git
cd TaskOrbit
```

### 2. Set up environment variables

#### Backend (`backend/.env`):
Create a `.env` file in the `backend` directory with the following variables:
```env
NODE_ENV=development
PORT=5000
BASE_PATH=/api
MONGO_URI=mongodb://localhost:27017/taskorbit
SESSION_SECRET=your_session_secret
SESSION_EXPIRES_IN=86400000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback
FRONTEND_ORIGIN=http://localhost:5173
FRONTEND_GOOGLE_CALLBACK_URL=http://localhost:5173/auth/google/callback
```

#### Frontend (`client/.env`):
Create a `.env` file in the `client` directory with the following variable:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### 3. Install dependencies

#### Backend:
```bash
cd backend
npm install
```

#### Frontend:
```bash
cd ../client
npm install
```

### 4. Seed the database (optional, for test data)
```bash
cd ../backend
npm run seed
```

### 5. Run the applications

#### Start the backend:
```bash
cd backend
npm run dev
```

#### Start the frontend:
```bash
cd ../client
npm run dev
```

- The frontend will be available at [http://localhost:5173](http://localhost:5173)
- The backend will be running at [http://localhost:5000/api](http://localhost:5000/api)

---

## License

MIT

