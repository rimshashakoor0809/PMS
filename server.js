const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE_LOCAL;
mongoose.connect(DB, function (err, DB) {
  if (err) console.log('Error: ' + err);
  else {
    console.log('DATABASE CONNECTION SUCCESSFUL😃');
  }
})

const port = process.env.PORT;
app.listen(port, () => {
  console.log('Server Activated: Application has started💖')
})