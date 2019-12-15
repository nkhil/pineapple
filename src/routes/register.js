const express = require('express');
const { createUser } = require('../firebase');

const router = express.Router();

router.post('/', async function(req, res, next) {
  try {
    const user = await createUser(req.body);
    res.status(200).json({ userId: user.uid });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('ERROR=>', error);
  }
});

module.exports = router;
