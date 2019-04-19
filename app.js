const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname;

const port = process.env.PORT || 8080;

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

app.listen(port, function () {
  console.log(`Example app listening on ${port}!`)
})
