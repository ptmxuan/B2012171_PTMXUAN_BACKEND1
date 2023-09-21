const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");

const app = express();

// app.use(cors());
app.use("/api/contact", contactsRouter);
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Welcome to contact book application."})
});

module.exports = app;