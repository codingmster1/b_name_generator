const express = require ('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;
var bandName = "";



app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));



function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"] + req.body["color"] + req.body["food"];
  next();
}



app.use(bandNameGenerator);

app.get('/', (req, res) => {
  app.use(express.static(path.join(__dirname, 'public')));
  const filePath = path.resolve(__dirname, 'index.html');
  res.sendFile(filePath);
  })


  app.post("/submit", (req, res) => {
    res.send(`
      <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="styles.css">
  <title>Band Name Generator</title>
</head>

<body>
  <div class="container">
</div>
<img class="gif" src="https://media4.giphy.com/media/1xyf0AgjMbvqYkNRRs/giphy.gif">
</body>

</html>
      
      <h1>Your band name is:</h1><h2>${bandName}✌️</h2>
      <div class="button-container">
      <button class="back-button"onclick="window.location.href='/'">Go Back</button>
      </div>`
    );
  });
  


app.listen(4000, () => {
  console.log(`Server is running on port ${PORT}`);
});