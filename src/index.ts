import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';

let app = express();
app.use(cors());
app.use(bodyParser.json())
const port = parseInt(process.env.PORT as string);

app.get('/', function (_, res) {
  res.send(200)
}) 

app.get('/server/time', function (_, res) {
  const currentTime = Date.now();
  res.send(currentTime.toString())
})

app.get('/hello/:name', function (req, res) {
  let name = req.params.name;
  res.send(`Hello ${name}`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })