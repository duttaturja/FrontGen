# 🧠 FrontGen Django Integration Guide

This guide will walk you through setting up a **minimal Django backend** to work seamlessly with your FrontGen application.

The files in this directory provide a complete, pre-configured **Django REST Framework (DRF)** project that's ready to connect to FrontGen.

---

## 🎯 Frontend Expectation

The FrontGen frontend sends POST requests to the following endpoints:

```
/api/auth/register
/api/auth/login
```

The backend should return a JSON response in this format upon success:

```json
{
  "access": "...",
  "refresh": "...",
  "user": { "id": "...", "name": "...", "email": "..." }
}
```

> **Note:** DRF SimpleJWT provides both `access` and `refresh` tokens, which together serve as your authentication tokens.

---

## ⚙️ Step 1: Set Up Your Python Environment

1. **Create a Backend Directory**
   Make a new folder for your backend, separate from your frontend project (e.g., `frontgen-django-backend`).

2. **Copy Starter Files**
   Copy all starter files from the `docs/Django` folder (if provided) into your new backend directory.

3. **Create a Virtual Environment**
   This isolates your dependencies.

   ```bash
   # On macOS/Linux
   python3 -m venv venv
   source venv/bin/activate

   # On Windows
   python -m venv venv
   .\venv\Scripts\activate
   ```

4. **Install Dependencies**
   Install all required packages listed in `requirements.txt`.

   ```bash
   pip install -r requirements.txt
   ```

---

## 🗄️ Step 2: Configure Your Database

By default, the starter uses **SQLite3**, which requires no configuration.

If you want to use a production-ready database (like **PostgreSQL**):

1. **Install the driver:**

   ```bash
   pip install psycopg2-binary
   ```
2. **Update your database settings:**
   Edit the `DATABASES` variable in `backend/settings.py` to match your PostgreSQL credentials.

---

## 🚀 Step 3: Run the Backend Server

1. **Run Migrations**
   This creates all required database tables, including the custom user model.

   ```bash
   python manage.py migrate
   ```

2. **Run the Server**

   ```bash
   python manage.py runserver
   ```

Your Django backend will now be running at **[http://localhost:8000](http://localhost:8000)**.

---

## 🔗 Step 4: Connect Your FrontGen Frontend

Now, configure your FrontGen app to point to your Django backend.

1. **Open your FrontGen project**
   Go to the root of your frontend project.

2. **Edit `.env` file**
   Update the backend API URL:

   ```env
   # Frontend .env
   VITE_API_BASE_URL=http://localhost:8000/api

   # EmailJS keys
   VITE_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
   VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
   VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
   ```

3. **Restart Frontend Dev Server**
   Stop your running Vite server (Ctrl + C) and restart it:

   ```bash
   npm run dev
   ```

---

## ✅ You're Done!

Your **FrontGen** app is now fully connected to a **Django backend**.

The **Sign Up** and **Sign In** pages will:

* Make real API calls to your Django endpoints.
* Store users in your database.
* Use **JWT authentication** via DRF SimpleJWT.

You’ve successfully integrated **FrontGen with Django** — a scalable and secure backend setup ready for production!
