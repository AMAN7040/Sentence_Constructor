# 🧠 SenConstruct

**SenConstruct** is an interactive sentence construction quiz tool designed for frontend internship evaluation. Users are presented with incomplete sentences and must fill in the blanks using selectable word options. The quiz is timed, scored, and provides detailed feedback on performance.

This project is a monorepo that includes:

- **Frontend**: A TypeScript React app powered by Vite.
- **Backend**: A mock REST API powered by **JSON Server**.

The application is optimized for performance, styled using **Tailwind CSS**, and built with modern development practices in mind.

---

## Motivation

This project was built to simulate real-world frontend problem-solving in a time-bound and UX-driven environment. The goal was to design a tool that is engaging, responsive, and scalable, while following modern best practices.

## Why This Project?

It bridges the gap between traditional static quizzes and real-time interactive assessments. The application emphasizes user experience, performance, and developer ergonomics.

## What Problem Does It Solve?

It offers an intuitive platform to assess sentence construction skills with a real-time challenge. The feedback and scoring systems make it suitable for both learners and evaluators.

## What Did I Learn?

- TypeScript integration with React using Vite
- State and timer management in React
- Dynamic word selection logic
- API integration with JSON Server
- Tailwind CSS utility-first styling
- Monorepo structure and workspace tooling

---

### 📁 Project Structure

```plaintext
root/
  ├── backend/                # Backend folder with JSON Server
  ├── frontend/               # Frontend React app built with Vite and TypeScript
  ├── package.json            # Root package for managing workspaces
  ├── package-lock.json       # Dependency lockfile
  └── README.md               # This README fil

---

#### ⚙️ Tech Stack

| Layer       | Technology                         |
|-------------|------------------------------------|
| Frontend    | React, Vite, TypeScript            |
| Styling     | Tailwind CSS                       |
| Backend     | JSON Server                        |
| Monorepo    | npm Workspaces                     |
| Tooling     | concurrently, ESLint               |

---
 
### 📦 Installation

Install all project dependencies in sequence:

```bash
# Step 1: Install root and workspace dependencies
npm install

# Step 2: Navigate to backend and install its dependencies
cd backend
npm install
cd ..

# Step 3: Navigate to frontend and install its dependencies
cd frontend
npm install
cd ..



🔄 Start Development Server
#Run the following command from the root of the project:
# From root directory
npm run dev

#This will concurrently:

## 🚀 Launch the frontend at: http://localhost:5173
## 🔧 Launch the backend (JSON Server) at: http://localhost:5001

---

# 🧠 Features
⏳ 30-second timer for each question to add time-based challenge.

🎯 Scoring system with tracking of correct answers and results.

🧩 Word selection & de-selection system to fill in sentence blanks.

📊 Detailed result screen with feedback and corrections.

⚡ Fast builds and hot module replacement (HMR) using Vite.

🎨 Responsive design with Tailwind CSS for utility-first styling.

✅ Fully typed with TypeScript for better development experience.

####BACKEND
-- Deployed backend on https://render.com/ 
-- Leveraged Render to get the api endpoint for the data.


