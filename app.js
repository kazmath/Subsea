const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'))


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/destinos", (req, res) => {
  res.sendFile(__dirname + "/destinos.html");
});

app.get("/galeria", (req, res) => {
  res.sendFile(__dirname + "/galeria.html");
});

app.get("/contato", (req, res) => {
  res.sendFile(__dirname + "/contato.html");
});

app.listen(port, () => {
  console.log(`Node.js app listening on port ${port}`);
});
