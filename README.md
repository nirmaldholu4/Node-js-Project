# 🎬 Movie CRUD API (Node.js + Express + MongoDB)

A simple REST API built with **Node.js**, **Express** and **MongoDB (Mongoose)** that performs complete **CRUD operations** (Create, Read, Update, Delete) on movie data.

---

## 📸 Project Screenshots

> Screenshots `screenshots/` folder ma muko ane niche na path badlo.

| Add Movie | 
|-----------|----------------|
| ![Add Movie](./screenshots/add-movie.png) |

| Update Movie |
|------------------|--------------|
| ![Update Movie](./screenshots/update-movie.png) |

| Delete Movie |
|-----------------------|--------------|
| ![Delete Movie](./screenshots/delete-movie.png) |

| MongoDB Data |
|--------------|
| ![MongoDB](./screenshots/mongodb-data.png) |

---

## 🎥 Project Demo Video

> Video YouTube / Google Drive par upload kari ne link niche muko.

[![Watch Demo](./screenshots/video-thumbnail.png)](https://your-video-link-here)

👉 **Demo Video:** [Click here to watch](https://your-video-link-here)

---

## ✨ Features

- Add a new movie
- Get all movies
- Get a single movie
- Update a movie by ID
- Delete a movie by ID
- JSON and URL-encoded request body support

## 🛠️ Tech Stack

| Technology | Use |
|------------|-----|
| Node.js | Runtime environment |
| Express.js (v5) | Backend framework |
| MongoDB | Database |
| Mongoose (v9) | MongoDB ODM |
| Nodemon | Auto-restart in development |

---

## 📁 Project Structure

```
node-js-project/
├── screenshots/        # Project images
├── server.js           # Main server file (routes + DB + schema)
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/try/download/community) running locally on port `27017`

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# 2. Go to project folder
cd your-repo-name

# 3. Install dependencies
npm install

# 4. Start the server
npm start

# OR run in development mode (auto-restart)
npm run dev
```

Server will run on: **http://localhost:3000**

Database: `mongodb://127.0.0.1:27017/tempData`

---

## 🗄️ Movie Schema

```js
{
  title:    String,
  genre:    String,
  producer: String
}
```

---

## 🔗 API Endpoints

| Method | Endpoint        | Description          | Body                                              |
|--------|-----------------|----------------------|---------------------------------------------------|
| GET    | `/`             | Home route           | –                                                 |
| POST   | `/AddMovies`    | Add a new movie      | `{ "title", "genre", "producer" }`                |
| GET    | `/GetAllMovies` | Get all movies       | –                                                 |
| GET    | `/GetMovie`     | Get one movie        | Any field, e.g. `{ "title": "Inception" }`        |
| PUT    | `/UpdateMovie`  | Update a movie       | `{ "id": "<movie_id>", "title": "New Title" }`    |
| DELETE | `/DeleteMovie`  | Delete a movie       | `{ "id": "<movie_id>" }`                          |

---

## 📌 API Examples

### ➕ Add Movie — `POST /AddMovies`

**Request**
```json
{
  "title": "Inception",
  "genre": "Sci-Fi",
  "producer": "Christopher Nolan"
}
```

**Response**
```json
{
  "msg": "movie added",
  "data": {
    "_id": "665f1c...",
    "title": "Inception",
    "genre": "Sci-Fi",
    "producer": "Christopher Nolan",
    "__v": 0
  }
}
```

### 📄 Get All Movies — `GET /GetAllMovies`

**Response**
```json
{
  "msg": "movie Find",
  "data": [ { "_id": "665f1c...", "title": "Inception", "genre": "Sci-Fi", "producer": "Christopher Nolan" } ]
}
```

### 🔍 Get Single Movie — `GET /GetMovie`

**Request**
```json
{ "title": "Inception" }
```

**Response**
```json
{
  "msg": "movie Find",
  "data": { "_id": "665f1c...", "title": "Inception", "genre": "Sci-Fi", "producer": "Christopher Nolan" }
}
```

If movie is not found:
```json
{ "msg": "movie is not found" }
```

### ✏️ Update Movie — `PUT /UpdateMovie`

**Request**
```json
{
  "id": "665f1c...",
  "genre": "Thriller"
}
```

**Response**
```json
{ "msg": "movie update", "data": { ... } }
```

### 🗑️ Delete Movie — `DELETE /DeleteMovie`

**Request**
```json
{ "id": "665f1c..." }
```

**Response**
```json
{ "msg": "movie deleted", "data": { ... } }
```

---

## 🧪 Testing the API

You can test all the endpoints using:

- [Postman](https://www.postman.com/)
- [Thunder Client](https://www.thunderclient.com/) (VS Code extension)
- cURL

---

## 🚀 Future Improvements

- Use route params (`/movie/:id`) instead of request body
- Add input validation
- Add error handling with try/catch
- Use environment variables (`.env`) for DB URL and port
- Add authentication (JWT)

---

## 👨‍💻 Author

**Nirmal Dholu**
Frontend Developer | Rajkot, Gujarat

- GitHub: [your-github-link](https://github.com/nirmaldholu4)
- LinkedIn: [your-linkedin-link](https://www.linkedin.com/in/dholu-nirmal/)

---
⭐ 
