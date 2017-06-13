const express = require( 'express' );
const nun = require('nunjucks');
const app = express(); // creates an instance of an express application

nun.configure('views');   
//nunjucks.render('index.html', {title: 'An example', people: {}});


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
  var rendered = nun.render('index.html', {title: 'An example',
                            people: [ {name: "Gendalf"},
                                      {name:"Frodo"},
                                      {name:"Hermione"} ]});
  res.send(rendered);                                      
  });

app.get('/game', (req, res) => {
  console.log('GET /game')
  res.redirect('https://denisual.github.io/game-of-life.1706/');});
