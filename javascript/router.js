const Express = require('express');
const routers = Express();

routers.get('/', function(req, res){
    res.send(__dirname +'../index.html');
});

routers.get('/sobre', function(req, res){
    res.send('4FUTURE');
  })

  routers.get('/dd/:nome', function(req, res ){
      res.send (req.params);


  })


routers.listen(8080, function(){
  console.log('Connection true');
});
