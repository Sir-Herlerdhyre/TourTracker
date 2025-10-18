# 🗺️ WorldWise – React Travel Tracker

**WorldWise** is a modern React web app that allows users to log, view, and organize the cities and countries they’ve visited across the world 🌍.  
It features authentication, protected routes, dynamic routing, and real-time data handling — making it a perfect showcase of your advanced React skills.

---

## 🚀 Project Overview

The app helps travelers track places they’ve visited or plan to visit.  
Each user can:
- View a world map with visited locations
- Add cities with notes
- View country summaries
- Log in and manage their data securely  

It combines **React Router v6**, **Context API**, **Protected Routes**, and **Lazy Loading** for optimized performance and scalability.

---

## ✨ Key Features

✅ **Authentication System** – using a fakeAuthContext provider  
✅ **Protected Routes** – only logged-in users can access the main dashboard  
✅ **Dynamic Routing** – city and country pages are dynamically generated  
✅ **Data Management with Context API** – global state for cities and authentication  
✅ **Lazy Loading** – all major pages are loaded on demand for better performance  
✅ **Persistent State** – stored and retrieved efficiently through React context  
✅ **Responsive UI** – works smoothly on all screen sizes  
✅ **Custom Error Handling** – `PageNotFound` route for invalid URLs  
✅ **Full Suspense Integration** – with `SpinnerFullPage` fallback  

---

## 🧠 Learning Highlights

This project demonstrates:
- Advanced **React Router v6** usage (nested routes, `<Navigate />`, `:params`)  
- **Lazy Loading with `React.lazy()` + `Suspense`** for performance optimization  
- **Global State Management** using **React Context**  
- **Custom Hooks and Providers** for modular design  
- **Conditional Rendering** and route protection  
- **Error boundaries** and fallback UIs  

---

## 🛠️ Tech Stack

- ⚛️ **React.js (Hooks + Router v6)**  
- 🗂️ **Context API** for state management  
- 🌐 **React Router DOM** for navigation  
- ⏳ **React Suspense** for lazy loading  
- 💅 **CSS Modules / Custom Styles**  
- 🧭 **JavaScript (ES6+)**

---

## ⚙️ Project Setup & Installation

To run this project locally:

```bash
# 1️⃣ Clone this repository
git clone https://github.com/yourusername/worldwise-travel-tracker.git

# 2️⃣ Navigate into the project folder
cd worldwise-travel-tracker

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm start
````

App will run on **[http://localhost:3000/](http://localhost:3000/)** 🚀


## 🔐 Authentication Flow

* User logs in using credentials managed by `fakeAuthContext`
* Once authenticated, the user is redirected to `/app`
* All routes inside `/app` (like `/cities`, `/countries`, `/form`) are **protected**
* If a non-authenticated user tries to access `/app`, they are redirected to `/login`

---

## ⚡ Routing Overview

| Route             | Description                |
| ----------------- | -------------------------- |
| `/`               | Home Page                  |
| `/product`        | Product Info Page          |
| `/pricing`        | Pricing Details            |
| `/login`          | User Login                 |
| `/app`            | Main Dashboard (Protected) |
| `/app/cities`     | List of Visited Cities     |
| `/app/cities/:id` | Individual City Details    |
| `/app/countries`  | List of Countries          |
| `/app/form`       | Add a New City             |
| `*`               | Page Not Found             |

---

## 🧩 Future Enhancements

* 🔑 Replace fakeAuth with real JWT authentication
* 🌎 Integrate with a map library (like Leaflet or Mapbox)
* 💾 Connect to Firebase or Supabase for persistent storage
* 📱 Add mobile-friendly navigation drawer
* 🎨 Improve UI with Tailwind CSS or Material UI

---

## 🙌 Author

**Sir Herlerdhyre**
Frontend Developer | React Enthusiast | Continuous Learner


> *"Mapping memories, one city at a time."* 🌍

---

## 📜 License

This project is released under the **MIT License**.

```

