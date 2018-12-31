var express = require('express');
var app = express();
var router = express.Router();

var path = __dirname;

const PORT = 8080;
const HOST = '0.0.0.0';

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/',function(req,res){
  res.sendFile(path + 'index.html');
});

router.get('/posts',function(req,res){
  res.sendFile(path + '/posts/index.html');
});

app.use(express.static(path));
app.use('/posts', express.static('/posts/articles'));
app.use('/', router);

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
