const express = require('express');
const { authenticate } = require('../firebase/auth');

const router = express.Router();

router.post('/', async function(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await authenticate(email, password);
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(403).json({ msg: 'Not authenticated' });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('ERROR=>', error);
  }
});

module.exports = router;
