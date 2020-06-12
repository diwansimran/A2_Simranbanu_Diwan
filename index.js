const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + '/findadobe/build/'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/findadobe/build/index.html'));
})
console.log(__dirname)
//server port
app.listen(process.env.PORT || 3000);