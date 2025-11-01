# 🧠 FrontGen MERN Integration Guide (Without Code)

This guide will walk you through the **concepts and steps** required to build a MERN (MongoDB, Express.js, Node.js) backend that connects perfectly with your FrontGen application.

Instead of providing code snippets, this guide will explain **what you need to do and why**, empowering you to build the backend yourself.

---

## 🎯 The Goal

To replace the mock API calls in `LoginPage.tsx` and `SignUpPage.tsx` with real API endpoints.

### Frontend Expectation

The FrontGen frontend makes POST requests to these endpoints:

```
/api/auth/login
/api/auth/register
```

The backend should return the following JSON upon success:

```json
{
  "token": "...",
  "user": { "id": "...", "name": "...", "email": "..." }
}
```

---

## 🏗️ Step 1: Set Up Your Backend Project

1. **Create a Directory:** Make a folder for your backend (e.g., `frontgen-backend`).
2. **Initialize Node.js:**

   ```bash
   npm init -y
   ```
3. **Install Core Dependencies:**

   * `express` — Web framework.
   * `mongoose` — MongoDB connection and models.
   * `dotenv` — Manage environment variables.
4. **Create Server File:** Add a main entry file (e.g., `server.js` or `index.js`).

---

## ⚙️ Step 2: Configure Environment & Database

1. **Create `.env` File:** Store configuration securely.
2. **Get MongoDB URI:** Create a free MongoDB Atlas cluster and get your connection string.
3. **Add to `.env`:**

   ```env
   MONGO_URI=your-mongodb-uri
   ```
4. **Connect in Server:** Use Mongoose to connect to the database. Log success or failure messages.

---

## 🌐 Step 3: Set Up Express Server & CORS

1. **Initialize Express:** Import and create an Express app.
2. **Enable JSON Parsing:** Add `app.use(express.json())`.
3. **Solve the CORS Problem:**

   * Install `cors` from npm.
   * Allow requests from your frontend (`http://localhost:5173`).
4. **Start Server:** Listen on port `4000` and log when it starts.

---

## 👤 Step 4: Create the User Model

1. **Install bcryptjs:** For password hashing.
2. **Define Schema:**

   * Fields: `name`, `email`, `password`.
   * Email should be unique and required.
3. **Password Hashing:** Use a pre-save hook to hash the password before saving.
4. **Export Model:** Create and export `User` model using Mongoose.

---

## 🔐 Step 5: Build Authentication Routes

Install `jsonwebtoken` and add a `JWT_SECRET` to your `.env`.

### Create Router

Use `express.Router()` and prefix routes with `/api`.

### **1. POST /api/auth/register**

* Get `name`, `email`, `password` from `req.body`.
* Check if user already exists.
* Create and save new user.
* Generate JWT containing user ID.
* Return JSON response:

  ```json
  {
    "token": "jwt_token_here",
    "user": { "id": "...", "name": "...", "email": "..." }
  }
  ```

### **2. POST /api/auth/login**

* Get `email`, `password` from `req.body`.
* Find user by email.
* Use a custom method (e.g., `comparePassword`) to check password with `bcryptjs.compare()`.
* If valid, generate JWT.
* Return the same JSON structure as above.

---

## 🔗 Step 6: Connect FrontGen

1. **Run Backend:** Start the server (e.g., `node server.js`).
2. **Update Frontend `.env`:**

   ```env
   VITE_API_BASE_URL=http://localhost:4000/api
   ```
3. **Restart Frontend:** Stop and restart the Vite dev server.

---

## ✅ You’re Done!

Your FrontGen app now communicates with a real MERN backend. The **Sign Up** and **Sign In** pages will:

* Create users in MongoDB.
* Handle authentication with real JWTs.
* Maintain session state across reloads.

You’ve successfully connected FrontGen with a custom-built MERN backend — all without copying a single line of code!
