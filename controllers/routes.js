var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
  res.send('yo, connectd to server');
})
module.exports = router;
