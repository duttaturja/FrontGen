🧠 **FrontGen FastAPI Integration Guide**

This guide will walk you through setting up a minimal **FastAPI backend** to work with your **FrontGen** application.

The files in this directory provide a complete, pre-configured FastAPI server that's ready to connect to FrontGen.

---

### ⚙️ Frontend Expectation

The **FrontGen** frontend is pre-configured to make `POST` requests to the following endpoints:

* `/api/auth/register`
* `/api/auth/login`

It also expects the backend to return the following JSON object upon success:

```json
{
  "token": "...",
  "user": {
    "id": "...",
    "name": "...",
    "email": "..."
  }
}
```

> Note: The `token` field should contain a valid **JWT access_token**.

---

### 🪄 Step 1: Set Up Your Python Environment

#### 1. Create a Backend Directory

Create a new folder outside of your frontend folder, for example:

```
frontgen-fastapi-backend
```

#### 2. Copy Starter Files

Copy all the starter files from this `docs/FastAPI` folder into your new backend directory.

#### 3. Create a Virtual Environment

Keep dependencies isolated with a virtual environment.

```bash
# macOS/Linux
python3 -m venv venv
source venv/bin/activate

# Windows
python -m venv venv
.\venv\Scripts\activate
```

#### 4. Install Dependencies

Install the required packages listed in the `requirements.txt` file.

```bash
pip install -r requirements.txt
```

---

### 🗄️ Step 2: Configure Your Database

The starter code uses **SQLite**, which is simple and file-based. On the first run, it will automatically create a `database.db` file.

If you wish to use **PostgreSQL** for production:

* Install the driver:

  ```bash
  pip install "psycopg[binary]"
  ```
* Update the `SQLALCHEMY_DATABASE_URL` variable in `main.py` with your PostgreSQL connection string.

---

### 🚀 Step 3: Run the Backend Server

Run the backend server using **Uvicorn**:

```bash
uvicorn main:app --reload
```

Once started:

* The server runs at: [http://localhost:8000](http://localhost:8000)
* Automatic API documentation is available at: [http://localhost:8000/docs](http://localhost:8000/docs)

---

### 🔗 Step 4: Connect Your FrontGen Frontend

To connect your frontend to the new backend:

1. Go to your **FrontGen frontend project**.
2. Open the `.env` file at the root.
3. Update the `VITE_API_BASE_URL` to point to your FastAPI server.

Example `.env` configuration:

```env
# Backend server URL
VITE_API_BASE_URL=http://localhost:8000/api

# EmailJS keys
VITE_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
```

> ⚠️ Restart your frontend dev server (`npm run dev`) after editing `.env` to apply the changes.

---

✅ **Done!** Your **FrontGen** app is now fully connected to a **FastAPI backend**. The *Sign Up* and *Sign In* pages will make real API calls, create users in your database, and handle authentication using JWT tokens.
