# 📱 My Portfolio – Mobile-First Developer Showcase

> A stunning, responsive developer portfolio designed as an interactive mobile interface with swipeable screens, app-style navigation, and real-time backend integration.

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🚀 Live Demo

<div align="center">

| 🌐 Platform | 🔗 URL |
|------------|--------|
| **Frontend** | [https://my-portfolio-risshhubhs-projects.vercel.app/](https://my-portfolio-rho-six-75.vercel.app/) |
| **Backend API** | [my-portfolio-a19u.onrender.com](https://my-portfolio-a19u.onrender.com) |

</div>

---

## ✨ Key Features

### 🎨 User Experience
- **📱 Mobile-First Design** – Authentic smartphone interface with status bar and navigation
- **👆 Swipe Navigation** – Smooth screen transitions using `react-swipeable`
- **🌓 Dark/Light Themes** – System-aware theme with persistent toggle
- **🎭 Animated Interactions** – Micro-animations and app launch effects
- **♿ Accessibility** – Keyboard navigation and screen reader support

### 🏗️ Architecture
- **🔄 RESTful API** – Express backend with MongoDB integration
- **📊 Real-Time Forms** – Live contact form with validation
- **🎯 Modular Components** – Reusable React components with clean architecture
- **🚀 Optimized Build** – Vite for lightning-fast HMR and production builds
- **🌐 CDN Deployment** – GitHub Pages for frontend, Render for backend

### 📄 Content Sections
- **🏠 Home** – Hero introduction with social links
- **🧩 Widgets** – Quick-access skill cards and statistics
- **📝 Resume** – Interactive experience timeline
- **🏆 Certificates** – Verified credentials with external links
- **📬 Contact** – Live message submission with backend integration

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 18** | UI framework with hooks |
| **Vite** | Build tool & dev server |
| **TailwindCSS** | Utility-first styling |
| **React Swipeable** | Touch gesture handling |
| **Framer Motion** | Advanced animations |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | ODM for MongoDB |
| **CORS** | Cross-origin requests |

### Deployment
| Platform | Service |
|---------|---------|
| **GitHub Pages** | Frontend hosting |
| **Render** | Backend API hosting |
| **MongoDB Atlas** | Cloud database |

---

## 🎯 Project Structure

```
My_Portfolio/
├── client/                    # Frontend React application
│   ├── public/
│   │   ├── assets/           # Images, icons, files
│   │   └── index.html
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Home.jsx
│   │   │   ├── Widgets.jsx
│   │   │   ├── Resume.jsx
│   │   │   ├── Certificates.jsx
│   │   │   └── Contact.jsx
│   │   ├── context/          # Global state management
│   │   ├── hooks/            # Custom React hooks
│   │   ├── utils/            # Helper functions
│   │   ├── App.jsx           # Main app component
│   │   └── main.jsx          # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── server/                    # Backend Node.js application
│   ├── models/               # MongoDB schemas
│   │   ├── User.js
│   │   └── Contact.js
│   ├── routes/               # API endpoints
│   │   ├── auth.js
│   │   └── contact.js
│   ├── middleware/           # Express middleware
│   ├── config/              # Configuration files
│   │   └── db.js
│   ├── .env                 # Environment variables
│   ├── server.js            # Express server
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local) or **MongoDB Atlas** account
- **Git**

### Installation

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/risshhubh/My_Portfolio.git
cd My_Portfolio
```

#### 2️⃣ Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create environment file
touch .env
```

Add the following to `.env`:

```env
# Server Configuration
PORT=5001
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/portfolio
# Or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio

# Security (optional)
JWT_SECRET=your_jwt_secret_here
API_KEY=your_api_key_here

# CORS Origins
ALLOWED_ORIGINS=http://localhost:5173,https://risshhubh.github.io
```

Start the backend server:

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

Backend will run at `http://localhost:5001`

#### 3️⃣ Frontend Setup

```bash
# Navigate to client directory
cd ../client

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run at `http://localhost:5173`

---

## 🏗️ Building for Production

### Frontend Build

```bash
cd client

# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

The build output will be in `client/dist/`

### Deployment

#### GitHub Pages (Frontend)

```bash
# Build with base path for GitHub Pages
npm run build -- --base=/My_Portfolio/

# Deploy to gh-pages branch
npm run deploy
```

#### Render (Backend)

1. Push code to GitHub
2. Connect repository to [Render](https://render.com)
3. Configure environment variables in Render dashboard
4. Set build command: `npm install`
5. Set start command: `npm start`

---

## 🔧 Configuration

### API Endpoint Configuration

Update `client/src/config.js`:

```javascript
const config = {
  API_URL: import.meta.env.PROD 
    ? 'https://my-portfolio-a19u.onrender.com'
    : 'http://localhost:5001',
};

export default config;
```

### CORS Configuration

Update `server/server.js`:

```javascript
const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://risshhubh.github.io'
  ],
  credentials: true,
};

app.use(cors(corsOptions));
```

---

## 🧪 Testing

```bash
# Run frontend tests
cd client
npm test

# Run backend tests
cd server
npm test

# Check code coverage
npm run test:coverage
```

---

## 📱 Features Showcase

### Mobile Interface Design
- Authentic iOS/Android status bar
- Swipeable screen navigation
- App-style icon grid
- Smooth page transitions
- Pull-to-refresh (optional)

### Theme System
```javascript
// Automatic theme detection
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Manual toggle with persistence
localStorage.setItem('theme', 'dark');
```

### Contact Form Integration
- Real-time validation
- Backend message storage
- Email notifications (optional)
- Rate limiting protection

---

## 🐛 Troubleshooting

### Build Errors

**Issue**: Missing files like `index-BFLHYT3g.js`

**Solution**:
```bash
cd client
rm -rf dist node_modules
npm install
npm run build
```

### CORS Issues

**Issue**: API requests blocked by browser

**Solution**: Ensure backend CORS allows your frontend origin:
```javascript
app.use(cors({
  origin: 'https://risshhubh.github.io',
  credentials: true
}));
```

### MongoDB Connection

**Issue**: Cannot connect to database

**Solution**: Check connection string format:
```env
# Local
MONGODB_URI=mongodb://127.0.0.1:27017/portfolio

# Atlas
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>.mongodb.net/<dbname>
```

---

## 🗺️ Roadmap

- [ ] **Progressive Web App (PWA)** – Offline support and installation
- [ ] **Blog Section** – Markdown-based blog with CMS
- [ ] **Analytics Dashboard** – Visitor statistics and insights
- [ ] **Multi-language Support** – i18n integration
- [ ] **Chat Widget** – Real-time messaging with Socket.io
- [ ] **Easter Eggs** – Hidden interactive elements
- [ ] **Performance Optimization** – Code splitting and lazy loading
- [ ] **Automated Testing** – E2E tests with Playwright

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Rishabh Srivastava

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 👨‍💻 Author

<div align="center">

### Rishabh Srivastava

**Full-Stack Developer | React Enthusiast | Open Source Contributor**

[![GitHub](https://img.shields.io/badge/GitHub-risshhubh-181717?style=for-the-badge&logo=github)](https://github.com/risshhubh)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/rishabh-srivastava)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:rishabhsrivastava921@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://risshhubh.github.io/My_Portfolio/)

📍 Noida, Uttar Pradesh, India  
📞 +91 9219234185

</div>

---

## 🙏 Acknowledgments

- **React Team** – For the amazing framework
- **Vite** – For blazing fast builds
- **Tailwind CSS** – For utility-first styling
- **MongoDB** – For flexible data storage
- **Render & GitHub** – For free hosting services

---

## 📊 Stats

![GitHub Stars](https://img.shields.io/github/stars/risshhubh/My_Portfolio?style=social)
![GitHub Forks](https://img.shields.io/github/forks/risshhubh/My_Portfolio?style=social)
![GitHub Issues](https://img.shields.io/github/issues/risshhubh/My_Portfolio)
![GitHub Last Commit](https://img.shields.io/github/last-commit/risshhubh/My_Portfolio)

---

<div align="center">

**⭐ If you found this helpful, please star the repository!**

[View Demo](https://risshhubh.github.io/My_Portfolio/) · [Report Bug](https://github.com/risshhubh/My_Portfolio/issues) · [Request Feature](https://github.com/risshhubh/My_Portfolio/issues)

Made with ❤️ by Rishabh Srivastava

</div>


