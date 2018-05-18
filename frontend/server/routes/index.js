var express = require('express');
var router = express.Router();

function findJSPath(opt) {
  return process.env.NODE_ENV == 'production' ? `/bundle/${opt}.bundle.js` : `/static/${opt}.bundle.js`;
}

/* GET home page. */
router.get('*', function(req, res, next) {
  res.render('index', { jsPath: findJSPath('user'), title: 'DRM' });
});

module.exports = router;
