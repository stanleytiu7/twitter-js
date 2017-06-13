const express = require( 'express' );
const app = express(); // creates an instance of an express application
//const router = express.Router();

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});

app.use((req, res, next) => {
  const user = req.query.user;
  console.log('user',user, 'at ip',req.ip);
  //console.log(router.route);
  next();
});

app.get('/', (req, res) => {
  console.log('GET /')
  res.send('Hello world!');});

app.get('/game', (req, res) => {
  console.log('GET /game')
  res.redirect('https://denisual.github.io/game-of-life.1706/');});
