var express = require('express');
var router = express.Router();

/* POST results. */
router.post('/', function(req, res, next) {
  var timeout = Math.random() * 5000;
  //return a result X number of seconds later
  setTimeout(function () {
    console.log(timeout + ' milliseconds');
    //send timeout as a string otherwise it thinks it's a status
    timeout = timeout / 1000;
    res.send(timeout + '');
  }, timeout);
});



module.exports = router;
