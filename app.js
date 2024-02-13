import express from 'express';
import { router } from './routes/router.js';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Home')
})

app.use('/api', router);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
