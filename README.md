Here’s a **proper GitHub-ready README** (no broken formatting, no nested code blocks issues). Just copy-paste this:

---

# 📩 Mini Message Board

A simple and elegant message board built with **Node.js**, **Express**, and **EJS**.
This project demonstrates core backend concepts like routing, form handling, and server-side rendering.

---

## 🚀 Features

* View all messages
* Add a new message
* View individual message details
* Clean UI with a single CSS file
* Lightweight and fast (no database required)

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* EJS (Template Engine)
* HTML & CSS

---

## 📁 Project Structure

```
mini-message-board/
│
├── public/
│   └── style.css
│
├── views/
│   ├── index.ejs
│   ├── form.ejs
│   └── messagedetail.ejs
│
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```
git clone https://github.com/your-username/mini-message-board.git
cd mini-message-board
```

### 2. Install dependencies

```
npm install
```

### 3. Run the server

```
node app.js
```

### 4. Open in browser

[http://localhost:3000](http://localhost:3000)

---

## 📌 Routes

| Route                 | Method | Description                |
| --------------------- | ------ | -------------------------- |
| `/`                   | GET    | Display all messages       |
| `/new`                | GET    | Show form to add a message |
| `/new`                | POST   | Add a new message          |
| `/messagedetails/:id` | GET    | View message details       |

---

## 💡 How It Works

* Messages are stored in an in-memory array
* Form submissions add new messages to the array
* EJS templates render dynamic data
* Express handles routing and request processing

---

## ⚠️ Limitations

* Data is not persistent (resets on server restart)
* No input validation
* No authentication system

---

## 🔮 Future Improvements

* Add database (MongoDB / PostgreSQL)
* Edit and delete messages (full CRUD)
* User authentication
* Responsive UI
* Validation and error handling

---

## 📚 What You’ll Learn

* Express routing and middleware
* Handling form data (POST requests)
* Server-side rendering with EJS
* Route parameters (`:id`)
* Basic full-stack flow

---

## 👤 Author

Kunal

---

## 📄 License

This project is open-source and free to use for learning purposes.
