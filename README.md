# 🌐 My_Portfolio

A responsive, modern **developer portfolio** styled like a **mobile interface**, featuring animated screens, apps-style layout, and real-time backend support. Built using **React.js**, **Node.js**, **MongoDB**, and **Vite**.

> 🚀 **Live Portfolio Frontend**: [Visit Now](https://risshhubh.github.io/My_Portfolio/)  
> 🌐 **Backend API Hosted on Render**: [https://my-portfolio-backend.onrender.com](https://my-portfolio-a19u.onrender.com) *

---

## 🛠️ Tech Stack

- **Frontend**: React.js, TailwindCSS, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (local or Atlas)
- **Deployment**: GitHub Pages (frontend), Render (backend)
- **APIs**: OpenAI, custom routes

---

## 🚧 Features Implemented

- ✅ Fully Responsive Mobile UI with app-like interactions  
- ✅ Slide-based navigation using `react-swipeable`  
- ✅ Home, Widgets, Resume, Certificates, Contact screens  
- ✅ Dark/Light Theme toggle across the app  
- ✅ Animated App Icons with overlay windows  
- ✅ Backend connection with MongoDB (via Render)  
- ✅ Real-time contact form (optional)  
- ✅ Skills, Social Links, Certificates with external verification  
- ✅ Deployed frontend using GitHub Pages  
- ✅ Deployed backend using Render with API routes

---

## 🔗 Live Deployment

| Component | URL |
|----------|-----|
| 🌐 **Frontend (GitHub Pages)** | [`https://risshhubh.github.io/My_Portfolio/`](https://risshhubh.github.io/My_Portfolio/) |
| 🛠️ **Backend (Render)**        | [https://my-portfolio-a19u.onrender.com) 
|

---

## ⚙️ Local Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/risshhubh/My_Portfolio.git
cd My_Portfolio
2. Setup Backend
bash
Copy
Edit
cd server
npm install
Create .env file in /server:

env
Copy
Edit
PORT=5001
MONGODB_URI=mongodb://localhost:27017/portfolio
Start backend:

bash
Copy
Edit
npm start
3. Setup Frontend
bash
Copy
Edit
cd ../client
npm install
npm run dev
To build for production:

bash
Copy
Edit
npm run build
To preview built version:

bash
Copy
Edit
npm run preview
🧠 Notes
Make sure backend API on Render is correctly CORS-configured for requests from GitHub Pages.

If build errors mention missing files like index-BFLHYT3g.js, clean the dist folder and remove references in index.html.

Use relative paths (e.g., ./src/main.jsx) for portable Vite builds.

👤 Author
Rishabh Srivastava
📍 Noida, India
📞 +91 9219234185
📧 rishabhsrivastava921@gmail.com
🌐 GitHub

📄 License
MIT License © 2025 Rishabh Srivastava
