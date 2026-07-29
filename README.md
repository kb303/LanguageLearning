# LanguageLearning

A full-stack Korean language learning app with a Node/Express/MongoDB backend and a Vite/React frontend.

## Prerequisites

- Node.js 18+ installed
- npm installed
- MongoDB running locally, or a MongoDB connection string available

## Project Structure

- `Backend/` - Express API, MongoDB models, and seed data
- `Frontend/` - React app built with Vite

## Install

Install dependencies separately for each app:

```bash
cd Backend
npm install
```

```bash
cd ../Frontend
npm install
```

## Environment

The backend uses MongoDB. By default it connects to:

```bash
mongodb://127.0.0.1/myFirstDatabase
```

If you want to use a different database, set `DB_URI` before starting the backend.

Example:

```bash
set DB_URI=mongodb://127.0.0.1/myFirstDatabase
```

On PowerShell:

```powershell
$env:DB_URI="mongodb://127.0.0.1/myFirstDatabase"
```

## Run the Backend

From the `Backend/` folder:

```bash
npm run dev
```

The backend runs on `http://localhost:3000`.

## Run the Frontend

In a second terminal, from the `Frontend/` folder:

```bash
npm run dev
```

Vite will start the frontend, usually on `http://localhost:5173`.

## How It Works

- The frontend sends API requests to the backend on port `3000` during development.
- The backend connects to MongoDB and preloads seed data when the database is empty.
- The app uses login/register modals, vocabulary flashcards, and word lists saved per user.

## Useful Commands

Backend:

```bash
npm run dev
npm start
```

Frontend:

```bash
npm run dev
npm run build
npm run lint
```

## Notes

- If the backend does not start, make sure MongoDB is running and the connection string is correct.
- If the frontend cannot reach the API, confirm the backend is running on port `3000`.
