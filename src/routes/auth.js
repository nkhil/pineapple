const express = require('express');
const { checkAuth } = require('../controllers/auth');

const router = express.Router();

router.get('/', function(req, res, next) {
  const isAuthorised = checkAuth();
  if (isAuthorised) {
    next();
  } else {
    res.status(403).json({ message: 'Unauthorised' });
  }
});

module.exports = router;
