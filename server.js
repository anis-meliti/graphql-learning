const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req, res, next) => res.send("hello world"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, err => {
  err ? console.error(err) : console.log("server running on port", PORT);
});
