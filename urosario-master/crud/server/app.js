require('dotenv').config({path:'./.env'})

const express = require('express');
const cors = require('cors');
const db = require('./db/connection');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(require('./routes/products'));

app.use(function (err, _req, res) {
  console.error(err.stack);
  res.status(500).send('error in the app!');
});

db.connectToServer(function (err) {
  if (err) {
    console.log('Error in db connection!!!');
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
