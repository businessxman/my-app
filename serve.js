const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport')
require("dotenv").config({ path: './config.env' });
const app = express();

const user = require('./routes/api/user');
const crypto = require('./routes/api/crypto');

app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extends: true }));

// mongoose
const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// Passport middleware
app.use(passport.initialize());

// passport config
require('./config/passport')(passport);

// router
app.use('/api/user', user);
app.use('/api/crypto', crypto);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
