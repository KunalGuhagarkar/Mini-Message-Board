const express = require("express");
const app = express();
const router = express.Router();
const path = require("node:path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const staticAssets = path.join(__dirname, "public");
app.use(express.static(staticAssets));
app.use(express.urlencoded({ extended: true }));

const messages = [
  {
    text: "Hi, there!",
    user: "Amando",
    added: new Date(),
  },

  {
    text: "Hello, world!",
    user: "Charles",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});

app.get("/messagedetails/:id", (req, res) => {
  res.render("messagedetail", { messages: messages[req.params.id] });
});

router.post("/new", (req, res) => {
  const authorName = req.body.authorName;
  const messageText = req.body.messageText;
  messages.push({ text: messageText, user: authorName, added: new Date() });
  res.redirect("/");
});

app.use(router);

app.listen(3000, () => {
  console.log("Server Running on Localhost:3000");
});
