const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const chatbot = require("./chatbot");
const disease = require("./disease");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/chat", chatbot);
app.post("/disease", disease);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});