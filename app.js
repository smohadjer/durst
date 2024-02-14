const express = require('express');
const router = require('./routes/router.js');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;
console.log(port);

const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function (req, res) {
//   res.send('Home')
// })

app.use('/api', router);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
