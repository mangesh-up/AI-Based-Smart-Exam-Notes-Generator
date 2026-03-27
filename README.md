# ExamNotes AI 🚀

**ExamNotes AI** is an intelligent study assistant that transforms messy lecture notes, textbook snippets, or raw thoughts into structured, exam-ready study materials. Built with a modern tech stack (MERN) and powered by AI, it helps students save hours of manual formatting while ensuring they hit the key points for their exams.

## ✨ Key Features

- **🚀 Instant Generation**: Convert study topics into detailed, structured notes in seconds.
- **📄 Export to PDF**: Download your generated notes as professional PDF documents for offline studying.
- **💳 Credit System**: Managed with Stripe for seamless top-ups; pay for only what you generate.
- **🕒 Study History**: Keep track of all your previously generated notes in one centralized dashboard.
- **🔐 Secure Sync**: Reliable authentication and real-time state management.
- **📊 Visual Aids**: Integrated with Mermaid.io for generating diagrams and charts within your notes.

## 🛠️ Tech Stack

- **Frontend**: React.js, Redux Toolkit, Tailwind CSS, Vite.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB.
- **Authentication**: Firebase / Custom Auth-Hooks.
- **Payments**: Stripe Integration.
- **Animations**: Framer Motion.

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your machine.
- MongoDB (Local or Atlas).
- Firebase project setup.
- Stripe account (for credit system).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mangesh-up/AI-Based-Smart-Exam-Notes-Generator.git
   cd AI-Based-Smart-Exam-Notes-Generator
   ```

2. **Backend Setup**:
   ```bash
   cd server
   npm install
   # Create a .env file with your MONGO_URI, JWT_SECRET, STRIPE_SECRET_KEY, etc.
   npm run dev
   ```

3. **Frontend Setup**:
   ```bash
   cd client
   npm install
   # Create a .env file with your VITE_FIREBASE_API_KEY, VITE_API_BASE_URL, etc.
   npm run mangesh
   ```

## 📐 Project Structure

```text
├── client                # React frontend (Vite)
│   ├── src/components    # Reusable UI elements
│   ├── src/pages         # Main view (Notes, History, Pricing)
│   └── src/redux         # State management
└── server                # Node.js backend
    ├── controllers       # Business logic
    ├── routes            # API endpoints
    └── models            # Database schemas
```

---

Made with ❤️ by [Mangesh](https://github.com/mangesh-up)
